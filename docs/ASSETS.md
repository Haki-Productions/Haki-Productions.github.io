# ASSETS — where everything lives

## Brand files in the project

| File | Source |
|---|---|
| `brand/deck/Haki-Productions-Services-Pitch-Deck-v2.pdf` | `C:\Users\dngin\Desktop\HAKI PROD\Haki Productions Services Pitch Deck\... native file v2.pdf` |
| `site/assets/img/haki-mark-pink.png` | `C:\Users\dngin\Desktop\HAKI PROD\LOGO PINK.png` — resized to 512px for web |
| `site/assets/img/haki-mark-white.png` | `C:\Users\dngin\Desktop\HAKI PROD\WHITE LOGO.png` |
| `site/assets/img/haki-wordmark-white.png` | `C:\Users\dngin\Desktop\HAKI PROD\Haki Productions WHITE LOGO.png` |
| `site/assets/img/haki-wordmark-white-alt.png` | `C:\Users\dngin\Desktop\HAKI PROD\Haki Productions WORD LOGO.png` |
| `site/assets/img/haki-lockup-pink.png` | Extracted from deck page 16 — **Armamenta Pugnatoria / Soul Terror lockup, not a Haki lockup** |
| `site/assets/img/soul-terror-wordmark.png` | Extracted from deck page 16 — Soul Terror asset |
| `site/assets/img/og-haki.jpg` | Generated social share image, 1200×630 |

The site header uses the pink mark plus an Anton wordmark set in HTML. The white mark and
wordmark files are source assets for other applications.

## Fonts — `site/assets/fonts/`

Eighteen WOFF2 files, latin and latin-ext subsets, self-hosted so the site makes no Google
Fonts request:

- Anton 400
- Instrument Sans 400, 500, 600, 700
- Instrument Serif 400 normal and italic
- Space Mono 400, 700

All four families are licensed under the SIL Open Font License 1.1; the license text is in
`site/assets/fonts/OFL.txt`. The `@font-face` blocks live at the top of `styles.css`.

## Magazine imagery — `site/assets/img/magazine/`

Fourteen WebP files used by the magazine page, work page, home hero, and about page:

- `st24-01.webp` … `st24-10.webp` — Soul Terror 2024 lookbook / GATEKEEPERS MAG Issue 01.
- `st-street-01.webp` … `st-street-04.webp` — Soul Terror night campaign.

All are capped at 1600px on the long edge and re-encoded for the web. Originals are backed up at
`C:\Users\dngin\AppData\Local\Temp\opencode\shots\pre-img-opt\`.

## Work imagery — `site/assets/img/work/`

| File | Use |
|---|---|
| `soul-terror-chaos.jpg`, `soul-terror-crew.jpg`, `soul-terror-duo.jpg`, `soul-terror-group.jpg`, `soul-terror-studio.jpg`, `soul-terror-tote.jpg`, `soul-terror-tunnel.jpg` | Soul Terror case study, magazine spreads |
| `dynamic-front-red.webp`, `dynamic-back-pink.webp`, `dynamic-front-green.webp` | Dynamic Fight Gear — in development |
| `sltr-logo.webp` | SLTR Radio case study |
| `be-the-one.webp`, `x-soul-logo.webp` | Soul Terror graphic work |
| `dynamic-sleeve-red.png` | Source artwork, not currently referenced |

The `.webp` garment files were converted from PNG to keep transparency at a fraction of the size.

## Other images in `site/assets/img/`

These are older source files and are not referenced by the current pages:

- `work-compleye.png` (5.9 MB)
- `work-haki-gothic.png`, `work-rashguard.png`
- `work-soul-terror-black.png`, `work-soul-terror-gear.png`
- `soul-terror-cream.jpg`, `soul-terror-red.jpg`, `soul-terror-street.jpg`

Keep them for future case studies or delete them once the work selection is final. Do not ship a
5.9 MB PNG to a page.

## Still in the source folders (not copied)

- `C:\Users\dngin\Desktop\HAKI PROD\SOUL TERROR COLLECTION\` — TOPS, BOTTOMS, MISCELANIAOUS, techpack files.
- `C:\Users\dngin\Desktop\HAKI PROD\IMAGE SET 1\`, `image set 2\`, `Pinterest\` — moodboard/reference images.
  **Do not present as client work.**
- `C:\Users\dngin\Desktop\HAKI PROD\Hoodie V2 mockup FANTASY.af` — Affinity source.
- `C:\Users\dngin\Desktop\HAKI PROD\himalaya press kit.af`, `media kits.af` — Affinity press kit sources.
- Logo source files: `HAKI PROD LOGO.af`, `HAKI PROD SVG.svg`, `Haki Productions.svg`, etc.

## Still needed

1. **Real client case studies** — names, images, and written permission.
2. **FRNTHASIA work images** — art, prints, and visual-world building, with permission.
3. **VANDALACTISM posters/stickers** — with permission.
4. **Event coverage stills** — Cage Co / SOULNADO / Sol et Terra if usable and cleared.
5. **Team photos** — Haki crew, with consent.
6. **Testimonials** — one-line quotes with permission.
7. **Client logos** — only if approved.
8. **Final favicon / app icons** — the pink mark is a temporary but functional favicon.

## Image rules for the site

- Serve WebP for photography; keep JPEG fallbacks only where a tool requires them.
- Cap the long edge at 1600px; 1200px is enough for cards.
- Use `loading="lazy"` below the fold and `fetchpriority="high"` for the one hero image.
- Compress to under ~300 KB where possible. Check the actual file, not the export preset.
- Do not use Pinterest/moodboard images as Haki work.
- **Ownership labels:** Soul Terror and GATEKEEPERS MAG are Haki-owned. Dynamic Fight Gear is in
  development. FRNTHASIA and VANDALACTISM are independent friends of the business, not Haki work.
- The magazine's numbered image captions are deliberate editorial furniture; marketing pages do not
  carry descriptive image captions.
