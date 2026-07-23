import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import en from './content/en.mjs';
import gr from './content/gr.mjs';
import { SITE_URL, APP_URL, LANGS, LEGAL_SLUGS, legalPath } from './templates/config.mjs';
import { renderHead, renderNav, renderFooter, rootRedirectScript, htmlDocument } from './templates/layout.mjs';
import {
  renderHero,
  renderHowItWorks,
  renderServices,
  renderProcess,
  renderVoiceAgentFull,
  renderFeatures,
  renderPricing,
  renderComparison,
  renderFaq,
  renderAbout,
  renderContact,
  renderComingSoon,
} from './templates/sections.mjs';
import { renderLegalPage } from './templates/legal.mjs';
import { organizationSchema, softwareApplicationSchema, faqPageSchema, jsonLdScripts } from './templates/schema.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

const content = { en, gr };

const comingSoonPath = (lang) => `/${lang}/coming-soon/`;

function urlPathByLangFactory(kind, slug) {
  if (kind === 'home') return (lang) => `/${lang}/`;
  if (kind === 'coming-soon') return (lang) => comingSoonPath(lang);
  return (lang) => legalPath(lang, slug);
}

function writeFile(relPath, contents) {
  const full = path.join(DIST, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, contents, 'utf8');
}

function copyRecursive(src, destRel, { skipMarkdown = false } = {}) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, path.join(DIST, destRel), {
    recursive: true,
    filter: (s) => !(skipMarkdown && s.toLowerCase().endsWith('.md')),
  });
}

// Section order (narrative arc): broad positioning -> gaps/solutions -> how we
// build -> voice systems -> capability detail -> pricing -> comparison -> faq
// -> about -> contact (doubles as the final CTA).
function renderMain(t, lang) {
  return `<main id="main">
    ${renderHero(t, lang)}
    ${renderHowItWorks(t)}
    ${renderServices(t)}
    ${renderProcess(t)}
    ${renderVoiceAgentFull(t)}
    ${renderFeatures(t)}
    ${renderPricing(t)}
    ${renderComparison(t)}
    ${renderFaq(t)}
    ${renderAbout(t)}
    ${renderContact(t)}
  </main>`;
}

function buildHomePage(lang) {
  const t = content[lang];
  const other = lang === 'en' ? 'gr' : 'en';
  const jsonLd = jsonLdScripts([organizationSchema(t, lang), softwareApplicationSchema(t, lang), faqPageSchema(t)]);
  const head = renderHead({
    title: t.meta.home.title,
    description: t.meta.home.description,
    canonical: `/${lang}/`,
    urlPathByLang: urlPathByLangFactory('home'),
    ogImage: `/assets/img/og/og-image-${lang}.png`,
    locale: t.locale,
    jsonLd,
  });
  const body = `<a href="#main" class="skip-link">${t.skipLink}</a>
  ${renderNav(t, lang, APP_URL, urlPathByLangFactory('home')(other))}
  ${renderMain(t, lang)}
  ${renderFooter(t, lang)}
  <script src="/assets/js/main.js" defer></script>`;
  return htmlDocument({ htmlLang: t.htmlLang, dir: t.dir, head, body });
}

function buildLegalPage(lang, slug) {
  const t = content[lang];
  const d = t.legal[slug];
  const other = lang === 'en' ? 'gr' : 'en';
  const head = renderHead({
    title: t.meta[slug].title,
    description: t.meta[slug].description,
    canonical: legalPath(lang, slug),
    urlPathByLang: urlPathByLangFactory('legal', slug),
    ogImage: `/assets/img/og/og-image-${lang}.png`,
    locale: t.locale,
    jsonLd: '',
  });
  const body = `<a href="#main" class="skip-link">${t.skipLink}</a>
  ${renderNav(t, lang, APP_URL, urlPathByLangFactory('legal', slug)(other))}
  ${renderLegalPage(t, slug)}
  ${renderFooter(t, lang)}
  <script src="/assets/js/main.js" defer></script>`;
  return htmlDocument({ htmlLang: t.htmlLang, dir: t.dir, head, body });
}

function buildComingSoonPage(lang) {
  const t = content[lang];
  const other = lang === 'en' ? 'gr' : 'en';
  const head = renderHead({
    title: t.meta.comingSoon.title,
    description: t.meta.comingSoon.description,
    canonical: comingSoonPath(lang),
    urlPathByLang: urlPathByLangFactory('coming-soon'),
    ogImage: `/assets/img/og/og-image-${lang}.png`,
    locale: t.locale,
    jsonLd: '',
    // Transient utility page (a signup placeholder), so keep it out of the index while it stands in.
    robots: 'noindex, follow',
  });
  const body = `<a href="#main" class="skip-link">${t.skipLink}</a>
  ${renderNav(t, lang, APP_URL, urlPathByLangFactory('coming-soon')(other))}
  ${renderComingSoon(t, lang)}
  ${renderFooter(t, lang)}
  <script src="/assets/js/main.js" defer></script>`;
  return htmlDocument({ htmlLang: t.htmlLang, dir: t.dir, head, body });
}

function buildRootPage() {
  // "/" serves the GR homepage as real, crawlable content (GR is the fallback language),
  // canonical points to /gr/ to avoid duplicate-content issues, and a tiny blocking script
  // redirects English-browser visitors to /en/ before paint.
  const t = content.gr;
  const jsonLd = jsonLdScripts([organizationSchema(t, 'gr'), softwareApplicationSchema(t, 'gr'), faqPageSchema(t)]);
  const head = renderHead({
    title: t.meta.home.title,
    description: t.meta.home.description,
    canonical: `/gr/`,
    urlPathByLang: urlPathByLangFactory('home'),
    ogImage: `/assets/img/og/og-image-gr.png`,
    locale: t.locale,
    jsonLd,
    extraHead: rootRedirectScript(),
  });
  const body = `<a href="#main" class="skip-link">${t.skipLink}</a>
  ${renderNav(t, 'gr', APP_URL, urlPathByLangFactory('home')('en'))}
  ${renderMain(t, 'gr')}
  ${renderFooter(t, 'gr')}
  <script src="/assets/js/main.js" defer></script>`;
  return htmlDocument({ htmlLang: t.htmlLang, dir: t.dir, head, body });
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /admin
Disallow: /client
Disallow: /auth
Disallow: /reset-password

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function buildSitemap() {
  const urls = [`${SITE_URL}/`];
  for (const lang of LANGS) {
    urls.push(`${SITE_URL}/${lang}/`);
    for (const slug of LEGAL_SLUGS) urls.push(`${SITE_URL}${legalPath(lang, slug)}`);
  }
  const entries = urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

// --- Run ---
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

writeFile('index.html', buildRootPage());
for (const lang of LANGS) {
  writeFile(`${lang}/index.html`, buildHomePage(lang));
  writeFile(`${lang}/coming-soon/index.html`, buildComingSoonPage(lang));
  for (const slug of LEGAL_SLUGS) {
    writeFile(`${lang}/${slug}/index.html`, buildLegalPage(lang, slug));
  }
}
writeFile('robots.txt', buildRobotsTxt());
writeFile('sitemap.xml', buildSitemap());

copyRecursive(path.join(__dirname, 'assets', 'img'), 'assets/img');
copyRecursive(path.join(__dirname, 'assets', 'js'), 'assets/js');
copyRecursive(path.join(__dirname, 'media'), 'media', { skipMarkdown: true });
fs.copyFileSync(path.join(__dirname, 'favicon.ico'), path.join(DIST, 'favicon.ico'));

console.log('Site generated into /dist (CSS still needs `npm run build:css`).');
