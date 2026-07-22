# Screenshot shot list

| Filename | Used in | Exact pixel size | Status |
|---|---|---|---|
| `hero-dashboard.webp` | Hero, right-hand visual | 1280×800 (16:10) | **Real** — "AI Operations Overview" dashboard |
| `portal-revenue-pipeline.webp` | Portal section, card 1 | 900×620 (~3:2) | **Real** — Leads/CRM table (valuations + pipeline) |
| `portal-voice-agent-sentiment.webp` | Portal section, card 2 | 900×620 (~3:2) | **Real** — Voice Agent Performance (sentiment) |
| `portal-calls-list.webp` | Portal section, card 3 | 900×620 (~3:2) | **Real** — Calls list (status/sentiment/duration) |
| `portal-hours-saved.webp` | Portal section, card 4 | 900×620 (~3:2) | **Real, imperfect fit** — used the "Live Activity" feed screenshot here since no dedicated hours/cost-saved screen was supplied; it reads as "live proof" but doesn't show the hours/€ numbers this card's copy promises. Swap for a dedicated hours-saved screen if you have one. |
| `industry-real-estate-lead-card.webp` | Industries → Real Estate (flagship) | 760×480 (~19:12) | Still a **generated placeholder** — none of the 5 supplied screenshots were a single-lead card view. Replace when you have one. |

To swap any file, **replace it with the same filename and same aspect ratio** —
no HTML/CSS changes needed.

## Notes for capture

- Capture at 2x/retina resolution then downscale to the sizes above for crisp
  rendering on high-DPI screens (e.g. shoot at 2560×1600 for the hero, then resize).
- Keep real customer data out of screenshots, or blur/replace names, phone numbers
  and emails with realistic placeholders before dropping the file in here.
- Placeholders are `.webp` (much smaller than PNG for gradient-heavy art, which is
  why real screenshots should stay WebP or JPEG too — avoid PNG for photographic
  screenshots, it roughly 10-15x's the file size for no visual benefit here).
  Keep the same filename/extension used above, or update the `file:` field in
  `content/en.mjs` / `content/gr.mjs` (and the one hardcoded path in
  `templates/sections.mjs` for the hero + real-estate images) if you switch formats.
- The OG/social preview images (`assets/img/og/og-image-en.png` and
  `og-image-gr.png`, 1200×630) were generated from the brand palette + the hero
  tagline. Swap them for a version that includes a real portal screenshot once
  you have one, if you want — same filenames, same folder.
