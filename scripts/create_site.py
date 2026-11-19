#!/usr/bin/env python3
"""Copy a skill's bundled starter into a new standalone website directory."""
import argparse
import html
import json
from pathlib import Path
import re
import shutil


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('output', type=Path)
    parser.add_argument('--brand', help='Override the default display name')
    parser.add_argument('--motion', choices=('full', 'auto', 'off'), default='full',
                        help='Motion mode (default: full); auto follows system preferences')
    args = parser.parse_args()
    skill = Path(__file__).resolve().parent.parent
    starter = skill / 'assets' / 'starter'
    config_path = skill / 'references' / 'site-config.json'
    config = json.loads(config_path.read_text(encoding='utf-8')) if config_path.exists() else {}
    if not (starter / 'index.html').is_file():
        parser.error('The skill must include assets/starter/index.html')
    target = args.output.resolve()
    if target == skill or skill in target.parents or target in skill.parents:
        parser.error('Choose an output directory outside the skill')
    if target.exists() and (not target.is_dir() or any(target.iterdir())):
        parser.error('Output is not empty; existing content was preserved')
    brand = args.brand if args.brand is not None else config.get('default_brand')
    if brand is not None and not brand.strip():
        parser.error('Brand cannot be blank')
    token = config.get('brand_token')
    if args.brand is not None and not token:
        parser.error('Configure brand_token before accepting --brand')
    markup = (starter / 'index.html').read_text(encoding='utf-8')
    if args.motion and not re.search(r'\bdata-motion-mode=[\x22\x27]', markup):
        parser.error('This starter does not declare a supported motion-mode attribute')
    for item in starter.rglob('*'):
        if item.is_symlink():
            parser.error('Resolve starter symlinks into local files before generating')
    shutil.copytree(starter, target, dirs_exist_ok=True)
    if brand is not None and token:
        markup = markup.replace(html.escape(token, quote=True), html.escape(brand.strip(), quote=True))
    if args.motion:
        markup = re.sub(r'\bdata-motion-mode=([\x22\x27]).*?\1', f'data-motion-mode="{args.motion}"', markup, count=1)
        markup = re.sub(r'\bdata-motion=([\x22\x27]).*?\1', f'data-motion="{"full" if args.motion == "full" else "off"}"', markup, count=1)
    (target / 'index.html').write_text(markup, encoding='utf-8')
    print(f'Created: {target / "index.html"}')


if __name__ == '__main__':
    main()
