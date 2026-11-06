# Minimal portfolio rebuild — 6 November 2026

Production build and ESLint pass. Playwright checked 1440px, 1280px, 390px and 320px layouts without horizontal overflow or browser errors. All three projects render with JavaScript disabled. Patchwork has no public repository link.

The original pixel penguin supports click/Enter to hop, pointer dragging, arrow-key movement, and Home to reset. Position is bounded beside the name. Arrival animation ends after 3.6 seconds; interaction animations end after 480ms. Reduced-motion disables animations. Click, drag, keyboard movement/reset, and reduced motion were exercised in Chromium.

A fresh visual review inspected all four sizes. Its one required fix was the muted text contrast; the final muted token is #727269 on #faf9f6.

Content reflects previously inspected repositories and user statements: ML study is distinguished from expertise; internship is past tense with no invented dates; private Patchwork remains private. No performance numbers or skill ratings are claimed.
