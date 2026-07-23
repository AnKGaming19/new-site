import { SITE_URL, LANGS } from './config.mjs';
import { iconMarkup } from './icons.mjs';

function hreflangTags(urlPathByLang, rootIsGr) {
  const tags = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${l === 'gr' ? 'el' : l}" href="${SITE_URL}${urlPathByLang(l)}" />`
  );
  tags.push(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}${urlPathByLang(rootIsGr ? 'gr' : 'gr')}" />`);
  return tags.join('\n    ');
}

export function renderHead({ title, description, canonical, urlPathByLang, ogImage, locale, jsonLd, extraHead = '', robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }) {
  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${SITE_URL}${canonical}" />
    ${hreflangTags(urlPathByLang, true)}

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${SITE_URL}${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="AIAnchor" />
    <meta property="og:locale" content="${locale}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${SITE_URL}${ogImage}" />

    <meta name="theme-color" content="#050507" />
    <link rel="icon" href="/favicon.ico" sizes="any" />

    <!-- Brand typefaces: DM Sans body + Space Grotesk display (ui-ux-pro-max pairing for AI/SaaS). Preconnect + swap keeps first paint unblocked. -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" /></noscript>

    <link rel="stylesheet" href="/assets/css/styles.css" />

    <!-- Search console verification: uncomment and paste real value when available -->
    <!-- <meta name="google-site-verification" content="REPLACE_ME" /> -->
    ${jsonLd}
    ${extraHead}`;
}

export function renderNav(content, lang, appUrl, otherLangHref) {
  const other = lang === 'en' ? 'gr' : 'en';
  const home = `/${lang}/`;
  const otherHref = otherLangHref || `/${other}/`;
  const otherHreflang = other === 'en' ? 'en' : 'el';
  // Compact pill showing the OTHER language's code — small enough to sit beside the CTA
  // without competing with it. data-lang-switch lets main.js append the current #hash
  // (when present) so switching languages preserves the section you're on.
  const langSwitch = (extraClass) =>
    `<a href="${otherHref}" data-lang-switch class="lang-switch btn-interactive shrink-0 rounded-full border border-white/15 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-gray-300 hover:border-primary/50 hover:text-primary ${extraClass}" hreflang="${otherHreflang}" aria-label="${content.nav.langSwitchLabel}">${other.toUpperCase()}</a>`;
  return `<header class="site-nav fixed top-0 inset-x-0 z-50">
    <nav class="mx-auto flex max-w-8xl items-center justify-between px-6" aria-label="Primary">
      <a href="${home}" class="flex items-center gap-2 group">
        <span class="rounded-lg bg-gradient-to-tr from-primary to-secondary p-2 transition-shadow group-hover:shadow-[0_0_20px_rgba(0,240,255,0.45)]">
          ${iconMarkup('anchor', 'w-5 h-5 text-white')}
        </span>
        <span class="font-display font-bold tracking-wider text-white">AI <span class="text-primary">ANCHOR</span></span>
      </a>

      <div class="flex items-center gap-3 xl:hidden">
        ${langSwitch('')}
        <button id="nav-toggle" type="button" class="p-2 text-white relative z-50" aria-expanded="false" aria-controls="mobile-menu">
          <span class="sr-only">Menu</span>
          ${iconMarkup('menu', 'w-6 h-6 nav-open-icon')}
          ${iconMarkup('close', 'w-6 h-6 nav-close-icon hidden')}
        </button>
      </div>

      <div class="hidden xl:flex items-center gap-4 text-[13px] whitespace-nowrap">
        <a href="${home}#services" class="nav-link text-gray-300 hover:text-white">${content.nav.services}</a>
        <a href="${home}#process" class="nav-link text-gray-300 hover:text-white">${content.nav.process}</a>
        <a href="${home}#voice-agent" class="nav-link text-gray-300 hover:text-white">${content.nav.voiceAgent}</a>
        <a href="${home}#pricing" class="nav-link text-gray-300 hover:text-white">${content.nav.pricing}</a>
        <a href="${home}#faq" class="nav-link text-gray-300 hover:text-white">${content.nav.faq}</a>
        <a href="${home}#about" class="nav-link text-gray-300 hover:text-white">${content.nav.about}</a>
        ${langSwitch('')}
        <a href="${home}#contact" class="btn-interactive rounded-full bg-primary px-4 py-2 font-semibold text-dark-900">${content.nav.cta}</a>
      </div>
    </nav>

    <div id="mobile-menu" class="mobile-menu flex flex-col gap-1 fixed inset-0 z-40 bg-dark-900 px-8 pt-28 pb-10 xl:hidden" aria-hidden="true">
      <a href="${home}#services" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.services}</a>
      <a href="${home}#process" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.process}</a>
      <a href="${home}#voice-agent" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.voiceAgent}</a>
      <a href="${home}#pricing" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.pricing}</a>
      <a href="${home}#faq" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.faq}</a>
      <a href="${home}#about" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.about}</a>
      <a href="${home}#contact" class="mobile-menu-link mt-6 block rounded-full bg-primary px-5 py-4 text-center text-lg font-semibold text-dark-900">${content.nav.cta}</a>
    </div>
  </header>`;
}

export function renderFooter(content, lang) {
  const f = content.footer;
  const year = 2026;
  return `<footer class="border-t border-white/10 bg-dark-800">
    <div class="reveal-stagger mx-auto max-w-8xl px-6 py-16 grid gap-12 md:grid-cols-4">
      <div class="reveal md:col-span-1">
        <div class="flex items-center gap-2">
          <span class="rounded-lg bg-gradient-to-tr from-primary to-secondary p-2">${iconMarkup('anchor', 'w-5 h-5 text-white')}</span>
          <span class="font-display font-bold tracking-wider text-white">AI <span class="text-primary">ANCHOR</span></span>
        </div>
        <p class="mt-4 text-sm text-gray-400">${f.tagline}</p>
        <div class="mt-5 flex gap-4 text-gray-400">
          <a href="${f.socials.instagram}" aria-label="Instagram" class="link-hover hover:text-primary">${iconMarkup('instagram', 'w-5 h-5')}</a>
          <a href="${f.socials.linkedin}" aria-label="LinkedIn" class="link-hover hover:text-primary">${iconMarkup('linkedin', 'w-5 h-5')}</a>
        </div>
      </div>

      <div class="reveal">
        <h3 class="text-sm font-semibold text-white">${f.columns.product}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="/${lang}/#services" class="link-hover hover:text-white">${f.productLinks.services}</a></li>
          <li><a href="/${lang}/#process" class="link-hover hover:text-white">${f.productLinks.process}</a></li>
          <li><a href="/${lang}/#voice-agent" class="link-hover hover:text-white">${f.productLinks.voiceAgent}</a></li>
          <li><a href="/${lang}/#pricing" class="link-hover hover:text-white">${f.productLinks.pricing}</a></li>
          <li><a href="/${lang}/#faq" class="link-hover hover:text-white">${f.productLinks.faq}</a></li>
        </ul>
      </div>

      <div class="reveal">
        <h3 class="text-sm font-semibold text-white">${f.columns.company}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="/${lang}/#about" class="link-hover hover:text-white">${f.companyLinks.about}</a></li>
          <li><a href="/${lang}/#contact" class="link-hover hover:text-white">${f.companyLinks.contact}</a></li>
        </ul>
        <div class="mt-6 space-y-1 text-xs text-gray-400">
          ${f.companyDetails.lines.map((l) => `<p>${l}</p>`).join('\n          ')}
        </div>
      </div>

      <div class="reveal">
        <h3 class="text-sm font-semibold text-white">${f.columns.legal}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="/${lang}/terms/" class="link-hover hover:text-white">${f.legalLinks.terms}</a></li>
          <li><a href="/${lang}/privacy/" class="link-hover hover:text-white">${f.legalLinks.privacy}</a></li>
          <li><a href="/${lang}/dpa/" class="link-hover hover:text-white">${f.legalLinks.dpa}</a></li>
          <li><a href="/${lang}/cookies/" class="link-hover hover:text-white">${f.legalLinks.cookies}</a></li>
          <li><a href="/${lang}/ai-policy/" class="link-hover hover:text-white">${f.legalLinks.aiPolicy}</a></li>
          <li><a href="/${lang}/trust/" class="link-hover hover:text-white">${f.legalLinks.trust}</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/5 py-6 text-center text-xs text-gray-400">${f.copyright(year)}</div>
  </footer>`;
}

export function rootRedirectScript() {
  return `<script>
    (function () {
      try {
        var stored = localStorage.getItem('aianchor-lang');
        var lang = stored || (navigator.language || '').toLowerCase();
        if (lang.indexOf('en') === 0) {
          location.replace('/en/');
        }
      } catch (e) {}
    })();
  </script>`;
}

export function htmlDocument({ htmlLang, dir, head, body }) {
  return `<!doctype html>
<html lang="${htmlLang}" dir="${dir}" class="scroll-smooth">
  <head>
    ${head}
  </head>
  <body class="bg-dark-900 font-sans text-white antialiased selection:bg-primary selection:text-dark-900">
    ${body}
  </body>
</html>
`;
}
