Mobile Sidebar, Compact Sidebar, Download Buttons, and PWA

Overview
- Implemented a mobile "Lainnya" (hamburger) button in the bottom navigation that opens a right-side overlay sidebar listing site navigation links.
- Added a compact desktop sidebar (icons-only) that expands small panels when icons are clicked.
- Replaced Play Store and App Store download buttons in footer with provided images.
- Added CSS and JavaScript to handle toggling, keyboard/overlay close, and route navigation.

Files changed
- src/app.js
  - Replaced bottom-nav (mobile) markup to include hamburger button
  - Added mobile sidebar HTML markup and JS initialization (initMobileSidebar)
  - Added compact desktop sidebar JS (initCompactSidebar)
  - Replaced footer download links with images
  - Ensured sidebar links set window.location.hash for routing and close the sidebar

- src/style.css
  - Added styles for .mobile-sidebar, overlay, panel, .compact-sidebar, .cs-icon, .cs-panel

Instructions for use
- Mobile: tap "Lainnya" (hamburger) in bottom nav to open sidebar. Tap link to navigate or tap outside to close.
- Desktop: compact sidebar shows icons; click an icon to expand a small panel with label/search. Click outside to close.

Notes & next steps
- Accessibility: add focus trap inside mobile sidebar for keyboard users.
- Improve animations: add transitions for panel slide-in/out and aria-expanded attributes.
- PWA: service worker and manifest should be registered next (requires build changes and HTTPS for production).

How to test
1. Build: npm run build
2. Start dev server: npm start
3. Open on mobile viewport or mobile emulator to test bottom nav hamburger
4. Open on desktop viewport to test compact sidebar functionality

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>