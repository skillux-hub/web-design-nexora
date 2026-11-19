---
name: web-design-nexora
description: Build web-design agency, digital consultancy, and software-services websites. Includes an English blue-and-mint design, service tabs, concept portfolios, industry solutions, and local project briefs with bundled resources.
---

# Nexora Agency Website

## About

Nexora is a self-contained English digital-agency website skill for web design firms, software consultancies, and product studios. It ships a complete static starter—HTML, CSS, JS, local SVG illustration, and photographs—so generation does not depend on an external template, CDN, or another skill.

The design pairs deep indigo hero fields with mint service panels, dark photographic industry blocks, and airy paper surfaces. Visitors switch keyboard-ready service tabs, filter concept portfolio previews, browse industry solutions, and prepare an unsent project brief that downloads locally.

## What you can do

- Generate a ready-to-open English agency site from the bundled starter
- Present a two-state illustrated hero, four strengths, and mint service tabs with a vertical rail
- Showcase six filterable concept project previews with native detail dialogs
- Highlight photographic industry panels, sector labels, and editorial excerpts
- Capture unsent project briefs (name, email, brief text) as local downloads only
- Preserve carousel, scroll reveals, and mobile navigation with full / auto / off motion modes

## Who it's for

- Digital agencies and software consultancies that need a polished English brochure site
- Product studios presenting concept work, services, and industry audiences
- Designers and agencies packaging an agency landing page without a build step
- Teams that want local assets and honest “brief draft” behavior—not fake delivery claims

## How to use it

Install the pack into your agent skills folder, then start a new Agent session. Invoke by naming the skill or describing a digital agency scenario, for example:

- `/web-design-nexora` help me generate a digital agency website
- Use `web-design-nexora` to build an English software-services website; brand it Signal & Form
- Follow the skill's default prompt: `Use $web-design-nexora to build a website for my digital agency.`

Include the brand name and primary CTA when you can. The agent should follow this skill's Generate / Adapt steps and use the bundled starter.

## Generate

Run from any directory:

```bash
python <skill-dir>/scripts/create_site.py <new-output-dir> --brand "Nexora" --motion full
```

The output must be new or empty. Open its `index.html` directly or serve the folder with a local static server. Python is needed only for generation; the site has no runtime packages or network requests.

## Adapt

- Read [design-spec.md](references/design-spec.md) for composition and responsive contracts, and [effects.md](references/effects.md) before changing interactions. Locked palette tokens live in [tokens.css](tokens.css); keep `styles.css` aligned when recoloring.
- Edit the generated HTML for copy, navigation, concept projects, industry cards and article excerpts. Edit `app.js` for slide and service-panel text. Keep descriptions, accessibility labels and dynamic states in English unless requested otherwise.
- The generator replaces the brand token configured in [site-config.json](references/site-config.json). It HTML-escapes supplied brand text.
- Preserve the large blue illustrated hero, mint service panel with a vertical tab rail, six project previews, dark photographic industry panels and airy white sections. Keep the original self-contained SVG and local photos or replace them with suitable local assets.
- Project previews are concepts, not claimed client engagements. The sector grid describes audiences and does not assert customer relationships. Add only verified business credentials.
- The contact form creates an unsent downloadable brief. Do not imply delivery or payment processing without a real integration.
- Keep the agency's own header and footer. Do not add marketplace preview controls, purchase/trial banners, platform branding, unrelated promotions or tracking scripts.

## Verify

Check the generated site at 1440, 768 and 390px. Exercise carousel controls, motion modes, keyboard service tabs, filters, dialogs, mobile navigation and form validation. Check that all media remain local and load from the output folder. This motion demonstration defaults to `full`. Motion `auto` follows system preferences; `full` explicitly enables movement; `off` disables it. Preserve visible content in all modes.
