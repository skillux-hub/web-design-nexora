# Effects and controls

All behavior is implemented in `assets/starter/app.js` and `styles.css` without dependencies.

- Hero: two slides change every 6500ms when motion is enabled. Background color transitions over 700ms; copy enters with a 450ms horizontal/opacity animation. The device illustration floats 13px over a six-second cycle. Previous/next and dot buttons also work with motion disabled.
- Pause: the Pause control stops automatic slide changes and freezes the floating illustration. Hover, keyboard focus within the hero and a hidden browser tab suspend its timer independently. Play in a static mode explicitly changes the mode to full; the visible Animation selector updates to match. Hover/focus pause still applies.
- Modes: this motion demonstration defaults to full. The root `data-motion-mode` is auto, full or off. Auto reads and responds to prefers-reduced-motion. The footer selector updates the mode for the current session. No operating-system settings are changed. Motion-off removes CSS animations and transitions and stops automatic slides.
- Service tabs: clicking or arrow/Home/End navigation changes title and description. The text enters over 450ms. Selection is exposed with aria-selected and roving tabindex; there is no automatic service switching.
- Entry/re-entry: IntersectionObserver at 10% visibility adds a 650ms, 22px upward entrance; a 0–195ms stagger is assigned. Leaving the viewport resets it. Content is visible without JavaScript and in reduced motion.
- Projects: a 350ms dark overlay and plus sign appear on hover or keyboard focus; image scales to 1.07 over 600ms. Filters use hidden, preserving stable card order. The result count announces changes. Clicking opens a local detail modal.
- Industries: hover/focus changes the dark overlay to green over 400ms, raises the title and reveals description and link. On tablet/mobile, all copy is visible without hover. Image scales to 1.08 over 600ms.
- Articles: photo scales to 1.05 over 500ms; clicking opens an excerpt dialog.
- Dialog: native modal focus containment, Escape, close button and outside click; close restores opener focus. The project action closes the modal and moves to the brief form.
- Header: scroll toggles fixed white styling. The mobile menu maintains aria-expanded and closes on section navigation or Escape.
- Brief: browser validation precedes Blob creation. Repeated preparation revokes the previous object URL. Nothing is posted to a server.

The source SVG has no embedded script or network reference. Failed images do not affect control initialization or hide the copy.
