# Screenshot shot list

Every file below already exists in this folder as a generated placeholder (dark
gradient card with a "Screenshot placeholder — ..." label) so the site renders
correctly today. To swap in a real screenshot, **replace the file with the same
filename and same aspect ratio** — no HTML/CSS changes needed.

| Filename | Used in | Exact pixel size | What it should show |
|---|---|---|---|
| `hero-dashboard.webp` | Hero, right-hand visual | 1280×800 (16:10) | Full client portal dashboard: calls, leads, revenue pipeline widgets visible at once. This is the first image a visitor sees — make it your best, most legible screenshot. |
| `portal-revenue-pipeline.webp` | Portal section, card 1 | 900×620 (~3:2) | The revenue pipeline card: list of leads with valuations and a running pipeline total in euros. |
| `portal-voice-agent-sentiment.webp` | Portal section, card 2 | 900×620 (~3:2) | A voice-agent/call detail view showing sentiment analysis and call outcome tag. |
| `portal-calls-list.webp` | Portal section, card 3 | 900×620 (~3:2) | The calls list view with automatic AI-generated summaries per row. |
| `portal-hours-saved.webp` | Portal section, card 4 | 900×620 (~3:2) | Hours-saved / labor-cost-saved stat cards. |
| `industry-real-estate-lead-card.webp` | Industries → Real Estate (flagship) | 760×480 (~19:12) | A single lead card for a real-estate listing: property, valuation, booked viewing. |

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
