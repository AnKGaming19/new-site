# Graph Report - .  (2026-08-09)

## Corpus Check
- 36 files · ~314,524 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 210 nodes · 374 edges · 18 communities
- Extraction: 92% EXTRACTED · 7% INFERRED · 1% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.84)
- Token cost: 186,713 input · 0 output

## Community Hubs (Navigation)
- Static Site Build Pipeline
- Page Section Templates
- Client Portal Screen Mockups
- NPM Package Manifest
- Media Assets And Setup Docs
- Brand Identity And OG Cards
- Book Demo API Handler
- Hero Dashboard ROI Proof
- Local Dev Server
- Vercel Deployment Config
- English Legal Content
- Greek Legal Content
- Demo Booking Form Template
- Legal Page Renderer

## God Nodes (most connected - your core abstractions)
1. `iconMarkup()` - 21 edges
2. `renderMain()` - 14 edges
3. `buildRootPage()` - 13 edges
4. `buildHomePage()` - 12 edges
5. `urlPathByLangFactory()` - 9 edges
6. `buildLegalPage()` - 9 edges
7. `buildComingSoonPage()` - 9 edges
8. `buildBookDemoPage()` - 9 edges
9. `handler()` - 8 edges
10. `renderHead()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `pageOpen()` --calls--> `renderCookieConsent()`  [EXTRACTED]
  build.mjs → templates/cookie-consent.mjs
- `buildLegalPage()` --calls--> `renderLegalPage()`  [EXTRACTED]
  build.mjs → templates/legal.mjs
- `buildComingSoonPage()` --calls--> `renderComingSoon()`  [EXTRACTED]
  build.mjs → templates/sections.mjs
- `buildBookDemoPage()` --calls--> `renderBookDemo()`  [EXTRACTED]
  build.mjs → templates/demo.mjs
- `Screenshot Shot List` --conceptually_related_to--> `AI Studio App (new-site)`  [INFERRED]
  media/SHOTLIST.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Hero image referenced from bilingual content and templates** — media_shotlist_hero_dashboard_webp, media_shotlist_content_en_mjs, media_shotlist_content_gr_mjs, media_shotlist_templates_sections_mjs, media_shotlist_same_filename_swap_convention [EXTRACTED 1.00]
- **Screenshot capture and asset policy set** — media_shotlist_retina_capture_downscale, media_shotlist_customer_data_redaction, media_shotlist_webp_format_policy, media_shotlist_same_filename_swap_convention [EXTRACTED 1.00]
- **Local development setup flow** — readme_nodejs_prerequisite, readme_local_run_workflow, readme_gemini_api_key, readme_env_local, readme_ai_studio_app [EXTRACTED 1.00]
- **Bilingual OG social card pair sharing layout, logo mark and gradient system** — assets_img_og_og_image_en, assets_img_og_og_image_gr, assets_img_og_og_image_en_anchor_logo_mark, assets_img_og_og_image_en_teal_violet_gradient_system, assets_img_og_og_image_gr_bilingual_og_strategy [INFERRED 0.90]
- **Dashboard components together demonstrate the live ROI portal claim** — assets_img_og_chatgpt_image_aug_4_2026_04_30_12_pm_lead_pipeline_dashboard, assets_img_og_chatgpt_image_aug_4_2026_04_30_12_pm_roi_kpi_metrics, assets_img_og_chatgpt_image_aug_4_2026_04_30_12_pm_lead_sources_breakdown, assets_img_og_og_image_en_value_prop [INFERRED 0.80]
- **AIAnchor Client Portal Screen Suite (Dashboard, Voice Agents, Calls, Leads, Activity)** — assets_img_placeholders_chatgpt_image_jul_22_2026_04_53_18_pm_ai_operations_overview_dashboard, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_33_pm_3_voice_agent_performance_screen, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_34_pm_4_calls_screen, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_6_leads_crm_screen, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_5_live_activity_screen [INFERRED 0.95]
- **Voice Call to Lead Conversion Funnel (agent handles call, event logged, lead booked, value reported)** — assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_33_pm_3_ai_receptionist_roles, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_34_pm_4_call_log_table, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_5_event_feed_timeline, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_6_lead_pipeline_status_model, assets_img_placeholders_chatgpt_image_jul_22_2026_04_53_18_pm_roi_metrics [INFERRED 0.85]
- **Shared Demo Dataset Persona Set (Olivia Bennett, Daniel Carter, Sophia Reed, Ethan Brooks, Maya Collins)** — assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_33_pm_3_voice_agent_performance_screen, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_34_pm_4_call_log_table, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_5_northstar_realty_demo_scenario, assets_img_placeholders_chatgpt_image_jul_22_2026_04_52_35_pm_6_leads_crm_screen, assets_img_placeholders_chatgpt_image_jul_22_2026_04_53_18_pm_recent_opportunities_table [EXTRACTED 1.00]
- **Dashboard Hero Composition: Banner, KPI Row, Data Table** — media_hero_dashboard_ai_operations_overview, media_hero_dashboard_kpi_metric_cards, media_hero_dashboard_recent_opportunities_table, media_hero_dashboard_system_status_indicator [EXTRACTED 1.00]
- **ROI Proof Narrative for Marketing Hero** — media_hero_dashboard, media_hero_dashboard_roi_proof_metrics, media_hero_dashboard_realty_demo_data, media_hero_dashboard_credibility_rationale [INFERRED 0.85]

## Communities (18 total, 0 thin omitted)

### Community 0 - "Static Site Build Pipeline"
Cohesion: 0.15
Nodes (30): ASSET_VERSION, bookDemoPath(), buildBookDemoPage(), buildComingSoonPage(), buildHomePage(), buildLegalPage(), buildRootPage(), buildSitemap() (+22 more)

### Community 1 - "Page Section Templates"
Cohesion: 0.13
Nodes (25): renderMain(), brandKey(), brandLogo(), brands, svg(), renderCookieConsent(), iconMarkup(), icons (+17 more)

### Community 2 - "Client Portal Screen Mockups"
Cohesion: 0.12
Nodes (23): AI Receptionist Agent Roles (Inbound, Lead Qualification, Viewing Coordinator), Dark Neon Portal Design Language (near-black surfaces, cyan CTA, green status accents), Voice Agent Status Card Pattern, Voice Agent Performance Screen (AIAnchor Client Portal), Workspace Sidebar Navigation (Dashboard, Automation Analytics, Voice Agents, Calls, Leads, Activity), Call Log Table with Filters (agent, outcome, time range), Calls Screen (AIAnchor Client Portal), KPI Stat Tile Row (Total Calls, Completed, Issues, Avg Duration, Sentiment) (+15 more)

### Community 3 - "NPM Package Manifest"
Cohesion: 0.10
Nodes (20): autoprefixer, http-server, description, devDependencies, autoprefixer, http-server, postcss, tailwindcss (+12 more)

### Community 4 - "Media Assets And Setup Docs"
Cohesion: 0.17
Nodes (16): content/en.mjs (English content, file: fields), content/gr.mjs (Greek content, file: fields), Customer Data Redaction in Screenshots, Dropped Portal and Industries Sections, hero-dashboard.webp (AI Operations Overview, 1280x800), OG/Social Preview Images (og-image-en.png, og-image-gr.png, 1200x630), 2x Retina Capture then Downscale, Same-Filename Asset Swap Convention (+8 more)

### Community 5 - "Brand Identity And OG Cards"
Cohesion: 0.18
Nodes (15): Dark Navy Cinematic Product-Shot Aesthetic, AI Anchor CRM Dashboard Hero Visual (ChatGPT-generated), Lead Pipeline Dashboard UI Mockup, Lead Sources Donut Breakdown (Website, LinkedIn, Referrals, Events, Other), ROI KPI Metric Tiles (Total Pipeline, Open Deals, Win Rate, Avg Deal Size), AIANCHOR Serif Wordmark (dark cinematic variant), Open Graph Social Card - English, AI ANCHOR Anchor Logo Mark (cyan-violet gradient) (+7 more)

### Community 6 - "Book Demo API Handler"
Cohesion: 0.31
Nodes (12): clean(), confirmationEmail(), COPY, escapeHtml(), handler(), isEmail(), MAX, normalizeWebsite() (+4 more)

### Community 7 - "Hero Dashboard ROI Proof"
Cohesion: 0.25
Nodes (11): Hero Dashboard Screenshot, AI Operations Overview Dashboard, AI Receptionist Workflow Source, Client Portal Demo Workspace, Show Measurable Business Impact to Build Hero Credibility, Dark Navy / Teal Accent Design Language, KPI Metric Card Row, Northstar Realty Demo Lead Data (+3 more)

### Community 8 - "Local Dev Server"
Cohesion: 0.29
Nodes (6): decorate(), __dirname, DIST, envFile, handleApi(), MIME

### Community 9 - "Vercel Deployment Config"
Cohesion: 0.29
Nodes (6): buildCommand, headers, outputDirectory, redirects, rewrites, trailingSlash

### Community 10 - "English Legal Content"
Cohesion: 0.60
Nodes (3): legalEn, legalMetaEn, SUBPROCESSORS_TABLE

### Community 11 - "Greek Legal Content"
Cohesion: 0.60
Nodes (3): legalGr, legalMetaGr, SUBPROCESSORS_TABLE

### Community 13 - "Demo Booking Form Template"
Cohesion: 0.83
Nodes (3): optionalTag(), renderBookDemo(), textField()

### Community 14 - "Legal Page Renderer"
Cohesion: 0.83
Nodes (3): renderLegalPage(), renderSection(), renderTable()

## Ambiguous Edges - Review These
- `AIANCHOR Serif Wordmark (dark cinematic variant)` → `AI ANCHOR Anchor Logo Mark (cyan-violet gradient)`  [AMBIGUOUS]
  assets/img/og/ChatGPT Image Aug 4, 2026, 04_30_12 PM.png · relation: semantically_similar_to
- `Dark Navy Cinematic Product-Shot Aesthetic` → `Teal-to-Violet Gradient Grid Brand System`  [AMBIGUOUS]
  assets/img/og/ChatGPT Image Aug 4, 2026, 04_30_12 PM.png · relation: conceptually_related_to
- `Call Sentiment Badge (positive / neutral)` → `Lead Pipeline Status Model (New, Qualified, Follow-up, Booked)`  [AMBIGUOUS]
  assets/img/placeholders/ChatGPT Image Jul 22, 2026, 04_52_35 PM (6).png · relation: semantically_similar_to
- `Dark Navy / Teal Accent Design Language` → `All Systems Operational Status Pill`  [AMBIGUOUS]
  media/hero-dashboard.webp · relation: conceptually_related_to

## Knowledge Gaps
- **41 isolated node(s):** `MAX`, `COPY`, `__dirname`, `DIST`, `ASSET_VERSION` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `AIANCHOR Serif Wordmark (dark cinematic variant)` and `AI ANCHOR Anchor Logo Mark (cyan-violet gradient)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Dark Navy Cinematic Product-Shot Aesthetic` and `Teal-to-Violet Gradient Grid Brand System`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Call Sentiment Badge (positive / neutral)` and `Lead Pipeline Status Model (New, Qualified, Follow-up, Booked)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Dark Navy / Teal Accent Design Language` and `All Systems Operational Status Pill`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `iconMarkup()` connect `Page Section Templates` to `Static Site Build Pipeline`, `Demo Booking Form Template`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `MAX`, `COPY`, `__dirname` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Static Site Build Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.14793741109530584 - nodes in this community are weakly interconnected._