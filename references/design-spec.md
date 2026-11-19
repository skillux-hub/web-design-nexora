# Design specification

## Composition

`assets/starter/index.html` provides: agency header; two-state illustrated hero; four strengths; service tab rail and mint panel; six concept portfolio previews; four photographic industry panels; eight sector labels; three editorial excerpts; project brief form; agency footer. The hero illustration is `media/platform.svg`. Photos are bundled in `media/`.

The desktop frame uses 1180px content width (1240px navigation and hero) with 32px minimum side margins. Sections use 80px vertical padding. At 800px the gutters become 20px and section padding 60px; at 540px section padding becomes 48px. The hero is 610px high on desktop, with copy on the left and a connected-device illustration on the right. Mobile stacks these and accommodates the full English headline.

## Tokens

`styles.css`: mint #21cd97, dark green #087f61, ink #212b36, muted #647078, paper #f5f8f6, primary hero #292094, alternate hero #174fc6, industry background #0d1c44. Arial/Helvetica/system sans-serif require no font download. Desktop hero title 54px, section titles 32px, body 16px; mobile hero title 35px and section titles 25px.

The header changes from transparent light text to a white fixed bar after 50px of scrolling. Mobile menu starts below the 74px header. Service rail is 280px beside the main panel on desktop and a two-column tab grid on phones. Project cards are three columns, two below 800px, one below 540px. Industries become two columns below 800px. Articles stack below 540px.

## Components and content

- `[data-service]`: four tabs, each matched by index to the `services` array in `app.js`. One shared labelled tabpanel; keyboard arrows, Home and End move selection and focus.
- `[data-project]`: concept preview with a mini navigation, color field and photo, heading, category. `data-category` must match a filter value. Dialog content uses the card's DOM.
- `[data-detail]`: title and `data-description` populate the detail dialog using textContent.
- `#inquiry`: native validation for name, email and a project brief of at least ten characters. A local text-file download is created on valid submission.
- Navigation uses real section anchors; detail controls use native buttons and a native modal dialog with Escape support and restored focus.

Do not use the concept preview grid as evidence of client work. Replace concepts with authorized real project material when available. Keep honest form operation text.
