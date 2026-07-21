import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import en from './content/en.mjs';
import gr from './content/gr.mjs';
import { SITE_URL, APP_URL, LANGS, LEGAL_SLUGS, legalPath } from './templates/config.mjs';
import { renderHead, renderNav, renderFooter, rootRedirectScript, htmlDocument } from './templates/layout.mjs';
import {
  renderHero,
  renderSocialProof,
  renderHowItWorks,
  renderPortal,
  renderFeatures,
  renderIndustries,
  renderPricing,
  renderComparison,
  renderFaq,
  renderFinalCta,
} from './templates/sections.mjs';
import { renderLegalPage } from './templates/legal.mjs';
import { organizationSchema, softwareApplicationSchema, faqPageSchema, jsonLdScripts } from './templates/schema.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

const content = { en, gr };

function urlPathByLangFactory(kind, slug) {
  return (lang) => (kind === 'home' ? `/${lang}/` : legalPath(lang, slug));
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

function buildHomePage(lang) {
  const t = content[lang];
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
  ${renderNav(t, lang, APP_URL)}
  <main id="main">
    ${renderHero(t, lang)}
    ${renderSocialProof(t)}
    ${renderHowItWorks(t)}
    ${renderPortal(t)}
    ${renderFeatures(t)}
    ${renderIndustries(t)}
    ${renderPricing(t)}
    ${renderComparison(t)}
    ${renderFaq(t)}
    ${renderFinalCta(t, lang)}
  </main>
  ${renderFooter(t, lang)}
  <script src="/assets/js/main.js" defer></script>`;
  return htmlDocument({ htmlLang: t.htmlLang, dir: t.dir, head, body });
}

function buildLegalPage(lang, slug) {
  const t = content[lang];
  const d = t.legal[slug];
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
  ${renderNav(t, lang, APP_URL)}
  ${renderLegalPage(t, slug)}
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
  ${renderNav(t, 'gr', APP_URL)}
  <main id="main">
    ${renderHero(t, 'gr')}
    ${renderSocialProof(t)}
    ${renderHowItWorks(t)}
    ${renderPortal(t)}
    ${renderFeatures(t)}
    ${renderIndustries(t)}
    ${renderPricing(t)}
    ${renderComparison(t)}
    ${renderFaq(t)}
    ${renderFinalCta(t, 'gr')}
  </main>
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
