# BRAND — Haki Productions

## Essence

**Street, punk, cultured.** A curated armor of creativity. Haki makes brands impossible to ignore.

- **Tagline:** *Where conquerors are made.*
- **Promise:** one crew, five fronts. Human-made. You keep the vision.
- **Tone:** direct, raw, confident. Short sentences. No corporate fluff.
- **Rule:** never present AI as the author of creative work. Haki's promise is human hands.

## Palette

The site is built on near-black ink and neutral press paper, with one hot-pink accent.
OKLCH is the normative color space; hex values are the sRGB fallbacks.

| Token | OKLCH | Hex fallback | Use |
|---|---|---|---|
| Ink | `oklch(0.145 0.004 95)` | `#0d0d0c` | Body text, dark sections, footer, nav CTA |
| Soft black | `oklch(0.19 0.005 95)` | `#171715` | Image grounds and cards inside dark sections |
| Press paper | `oklch(0.965 0.003 95)` | `#f6f6f3` | Default page ground |
| Pulp | `oklch(0.93 0.006 95)` | `#ecece8` | Secondary paper for alternating sections |
| Hot pink | `oklch(0.68 0.255 355)` | `#ff2d8d` | Primary accent, CTAs, focus, selection |
| Pressed pink | `oklch(0.53 0.22 355)` | `#c4125f` | Small pink text on paper |
| Ash | `oklch(0.48 0.008 92)` | `#6d6961` | Secondary text on paper |
| Warm grey | `oklch(0.73 0.008 92)` | `#aaa59a` | Secondary text on ink |

Rules:

- Pink covers no more than roughly 10% of any view. One primary pink action per screen.
- On pink, text is ink. Never grey.
- Borders are ink or paper at 16% and 34% alpha. No colored borders except the pink focus ring.
- Warm reds and acid greens belong to individual Soul Terror artwork, not to the Haki interface.

## Typography

- **Display:** `Anton` — uppercase, tight tracking, poster scale.
- **Accent:** `Instrument Serif` italic — one emphasis word inside a display headline.
- **Body:** `Instrument Sans` — reading copy, 17px base, 62–68ch measure.
- **Labels:** `Space Mono` — uppercase metadata, buttons, tags, rails. 11px functional floor; 12px sentence-case for notes.

Display and section sizes are fluid per view, tuned with `clamp()`. The small end is fixed:
11px labels, 12px notes, 14.5px small body, 17px body. Do not introduce a new size when an
existing role fits.

## Logo usage

- **Site mark:** `site/assets/img/haki-mark-pink.png` — pink creature mark, used in the header,
  footer, favicon, and link hub. 512px source is enough for every web use.
- **White mark:** `haki-mark-white.png` — for dark or photographic grounds where pink is not appropriate.
- **Wordmark:** set in Anton as `HAKI / PRODUCTIONS` in the header; the white wordmark files are
  source assets for other applications, not required by the site.
- **Clear space:** at least the height of the "H" around the mark.
- **Don't:** stretch, recolor outside the palette, place the mark on a busy light image, or add effects.

**Important:** `haki-lockup-pink.png` is an Armamenta Pugnatoria / Soul Terror lockup, not a Haki
Productions lockup. Do not use it as the Haki logo. `soul-terror-wordmark.png` and the
`work-soul-terror-*` files are Soul Terror assets.

## Layout

- Full-bleed sections, generous negative space, oversized type.
- Full-height first screens (`100svh`): metadata rail at the top, headline anchored low.
- Thin 1px rules, editorial grids, index numbers (`01`, `02`).
- Monospace micro-labels for section headers and metadata rails.
- Flat surfaces: no drop shadows, glassmorphism, gradient blobs, or rounded 16px cards.
- One authored entrance per page. No scroll-triggered fades, staggered reveals, or parallax.
- Photography sits in clipped rectangles with a 2px hover scale; no captions on marketing images.
  Magazine captions are editorial furniture and are the deliberate exception.

## Copy bank

- "We make your brand impossible to ignore."
- "One crew, five fronts."
- "Content that cuts through the noise."
- "The lifestyle is with the body."
- "Artists forged to last."
- "Words with a pulse."
- "Chaos, captured live."
- "You keep the vision. We handle the details."
- "Ready to conquer your market?"

## What not to do

- No generic agency stock language ("we leverage synergies").
- No AI-generated imagery presented as Haki work.
- No five-division wall of text on the home page. Lead with the five priced offers.
- No hidden prices. "From €X" qualifies leads and saves calls.
- Never describe FRNTHASIA or VANDALACTISM as Haki-owned. They are independent friends of the business.
- Never describe Dynamic Fight Gear as shipped. It is in development.
