# TRENDS — observed, not implemented

Observed winning web trends for a street/punk/cultured creative agency site.
**Do not implement until the user says so (target: second week of January).**
This file is a holding pen only. Nothing here is live.

## Status
- Observed: yes
- Implemented: no
- Gate: user approval (target window: Jan 12–16)

## Candidates (observed, ranked)

1. **Kinetic / variable-font typography** — headline weight shifts on scroll/hover.
   Fits the vibe: yes (poster energy). Risk: performance, CLS. Needs testing at 390px.
2. **Scroll-driven animations (CSS scroll-timeline)** — progress-linked reveals instead of
   IntersectionObserver. Fits: yes (street editorial). Risk: Safari support still partial;
   keep IO fallback.
3. **View Transitions API** — cross-page morphs between work cards and case pages.
   Fits: yes (cinematic). Risk: only Chromium + recent Safari; needs no-JS fallback.
4. **Container queries** — card layouts that respond to their own width, not viewport.
   Fits: yes (robust). Risk: low. Good candidate for toolbox grid.
5. **Subtle grain/noise overlays** — already have a noise token; deepen it.
   Fits: yes (print feel). Risk: paint cost on mobile.
6. **Dark/light auto theme via prefers-color-scheme** — currently dark-by-default ink.
   Fits: maybe. Brand is ink-first; light mode may dilute. Decide with user.
7. **Cursor-driven micro-interactions** — magnetic buttons, parallax on hero media.
   Fits: street/punk yes, but can feel gimmicky. Keep subtle, respect reduced-motion.
8. **Larger tap targets + thumb-zone CTAs on mobile** — already 44px; consider sticky
   bottom CTA bar on case pages.

## Not a fit (observed, rejected for now)
- Glassmorphism, gradient blobs, rounded 16px cards (off-brand).
- Auto-playing video heroes (data cost, accessibility).
- Infinite scroll galleries (SEO, back-button pain).

## Next check
Re-evaluate this list in the second week of January. Implement only what the user
approves. Keep everything behind `prefers-reduced-motion`.
