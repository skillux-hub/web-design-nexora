# Web Design Nexora — an AI design skill for coding agents

Build a complete website for a web-design agency, digital consultancy, or software-services firm: an English blue-and-mint design with service tabs, filterable concept portfolios, industry solutions, and a local project-brief flow.

This is a [Skillux](https://skillux.dev) design skill for AI coding agents such as Claude Code, Cursor, and Codex. It is free on Skillux: [skillux.dev/skills/web-design-nexora](https://skillux.dev/skills/web-design-nexora).

## What it does

Nexora is a self-contained static starter — HTML, CSS, JS, local SVG illustration, and photographs — so generation does not depend on an external template, a CDN, or another skill. Python is needed only for generation; the generated site has no runtime packages and makes no network requests.

- Two-state illustrated hero, four strengths, and mint service tabs with a vertical rail
- Six filterable concept project previews with native detail dialogs
- Photographic industry panels with sector labels and editorial excerpts
- Project brief form that downloads the brief **locally, unsent** — no fake delivery claims
- Carousel, scroll reveals, and mobile navigation with `full` / `auto` / `off` motion modes

## Who it's for

- Digital agencies and software consultancies that need a polished English brochure site
- Product studios presenting concept work, services, and industry audiences
- Designers packaging an agency landing page without a build step

## Install

```bash
npx skills add https://github.com/skillux-hub/web-design-nexora --skill web-design-nexora
```

Or clone this repository into your agent's skills folder, keeping the directory structure intact.

## Use

Ask your agent for a digital agency website, for example:

```text
Use $web-design-nexora to build a website for my digital agency.
```

Generate a site directly with the bundled script:

```bash
python <skill-dir>/scripts/create_site.py <new-output-dir> --brand "Nexora" --motion full
```

The output directory must be new or empty. Open its `index.html` directly or serve the folder with a local static server.

## What's included

| Path | Contents |
|---|---|
| `SKILL.md` | The skill definition your agent follows (generate / adapt / verify workflow) |
| `scripts/create_site.py` | Generator that copies the starter to a new directory and applies brand + motion settings |
| `references/design-spec.md` | Composition and responsive contracts |
| `references/effects.md` | Interaction and motion behavior to preserve |
| `references/site-config.json` | Brand token configuration used by the generator |
| `tokens.css` | Locked palette tokens |
| `assets/starter/` | The complete starter site (HTML, CSS, JS, SVG, photographs) |

> Note: this repository contains the skill definition, generator, references, and starter source. Binary media files are included in this repository — the repo is the complete free pack.

## Adapting it

Read `references/design-spec.md` for composition and responsive contracts, and `references/effects.md` before changing interactions. Project previews are concepts, not claimed client engagements — add only verified business credentials. Keep descriptions, accessibility labels, and dynamic states in English unless requested otherwise.

## More

- Product page (free): https://skillux.dev/skills/web-design-nexora
- Topic: frontend design skills — https://skillux.dev/frontend-design-skills
- More AI design skills for Claude Code, Cursor & Codex: https://skillux.dev
- Featured on Product Hunt: https://www.producthunt.com/products/skillux
