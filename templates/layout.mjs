import { SITE_URL, LANGS } from './config.mjs';
import { iconMarkup } from './icons.mjs';

function hreflangTags(urlPathByLang, rootIsGr) {
  const tags = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${l === 'gr' ? 'el' : l}" href="${SITE_URL}${urlPathByLang(l)}" />`
  );
  tags.push(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}${urlPathByLang(rootIsGr ? 'gr' : 'gr')}" />`);
  return tags.join('\n    ');
}

export function renderHead({ title, description, canonical, urlPathByLang, ogImage, locale, jsonLd, extraHead = '' }) {
  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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

    <!-- Ported brand typefaces (Inter + Space Grotesk). Preconnect + swap to keep first paint unblocked. -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" /></noscript>

    <link rel="stylesheet" href="/assets/css/styles.css" />

    <!-- Search console verification: uncomment and paste real value when available -->
    <!-- <meta name="google-site-verification" content="REPLACE_ME" /> -->
    ${jsonLd}
    ${extraHead}`;
}

export function renderNav(content, lang, appUrl) {
  const other = lang === 'en' ? 'gr' : 'en';
  const home = `/${lang}/`;
  return `<header class="site-nav fixed top-0 inset-x-0 z-50">
    <nav class="mx-auto flex max-w-8xl items-center justify-between px-6" aria-label="Primary">
      <a href="${home}" class="flex items-center gap-2 group">
        <span class="rounded-lg bg-gradient-to-tr from-primary to-secondary p-2 transition-shadow group-hover:shadow-[0_0_20px_rgba(0,240,255,0.45)]">
          ${iconMarkup('anchor', 'w-5 h-5 text-white')}
        </span>
        <span class="font-display font-bold tracking-wider text-white">AI <span class="text-primary">ANCHOR</span></span>
      </a>

      <button id="nav-toggle" type="button" class="md:hidden p-2 text-white relative z-50" aria-expanded="false" aria-controls="mobile-menu">
        <span class="sr-only">Menu</span>
        ${iconMarkup('menu', 'w-6 h-6 nav-open-icon')}
        ${iconMarkup('close', 'w-6 h-6 nav-close-icon hidden')}
      </button>

      <div class="hidden md:flex items-center gap-8 text-sm">
        <a href="${home}#features" class="text-gray-300 hover:text-white transition-colors">${content.nav.features}</a>
        <a href="${home}#how-it-works" class="text-gray-300 hover:text-white transition-colors">${content.nav.howItWorks}</a>
        <a href="${home}#industries" class="text-gray-300 hover:text-white transition-colors">${content.nav.industries}</a>
        <a href="${home}#pricing" class="text-gray-300 hover:text-white transition-colors">${content.nav.pricing}</a>
        <a href="${home}#faq" class="text-gray-300 hover:text-white transition-colors">${content.nav.faq}</a>
        <a href="/${other}/" class="text-gray-400 hover:text-white transition-colors" hreflang="${other === 'en' ? 'en' : 'el'}">${content.nav.langSwitchLabel}</a>
        <a href="${appUrl}/auth" class="text-gray-300 hover:text-white transition-colors">${content.nav.clientLogin}</a>
        <a href="${home}#pricing" class="rounded-full bg-primary px-5 py-2 font-semibold text-dark-900 transition-transform hover:scale-105">${content.nav.cta}</a>
      </div>
    </nav>

    <div id="mobile-menu" class="mobile-menu flex flex-col gap-1 fixed inset-0 z-40 bg-dark-900 px-8 pt-28 pb-10 md:hidden" aria-hidden="true">
      <a href="${home}#features" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.features}</a>
      <a href="${home}#how-it-works" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.howItWorks}</a>
      <a href="${home}#industries" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.industries}</a>
      <a href="${home}#pricing" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.pricing}</a>
      <a href="${home}#faq" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.faq}</a>
      <a href="/${other}/" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-400">${content.nav.langSwitchLabel}</a>
      <a href="${appUrl}/auth" class="mobile-menu-link border-b border-white/5 py-4 text-2xl font-display font-medium text-gray-300">${content.nav.clientLogin}</a>
      <a href="${home}#pricing" class="mobile-menu-link mt-6 block rounded-full bg-primary px-5 py-4 text-center text-lg font-semibold text-dark-900">${content.nav.cta}</a>
    </div>
  </header>`;
}

export function renderFooter(content, lang) {
  const f = content.footer;
  const year = 2026;
  return `<footer class="border-t border-white/10 bg-dark-800">
    <div class="mx-auto max-w-8xl px-6 py-16 grid gap-12 md:grid-cols-4">
      <div class="md:col-span-1">
        <div class="flex items-center gap-2">
          <span class="rounded-lg bg-gradient-to-tr from-primary to-secondary p-2">${iconMarkup('anchor', 'w-5 h-5 text-white')}</span>
          <span class="font-display font-bold tracking-wider text-white">AI <span class="text-primary">ANCHOR</span></span>
        </div>
        <p class="mt-4 text-sm text-gray-400">${f.tagline}</p>
        <div class="mt-5 flex gap-4 text-gray-400">
          <a href="${f.socials.instagram}" aria-label="Instagram" class="hover:text-primary transition-colors">${iconMarkup('instagram', 'w-5 h-5')}</a>
          <a href="${f.socials.linkedin}" aria-label="LinkedIn" class="hover:text-primary transition-colors">${iconMarkup('linkedin', 'w-5 h-5')}</a>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white">${f.columns.product}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="/${lang}/#features" class="hover:text-white">${f.productLinks.features}</a></li>
          <li><a href="/${lang}/#pricing" class="hover:text-white">${f.productLinks.pricing}</a></li>
          <li><a href="/${lang}/#industries" class="hover:text-white">${f.productLinks.industries}</a></li>
          <li><a href="/${lang}/#faq" class="hover:text-white">${f.productLinks.faq}</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white">${f.columns.company}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="mailto:${f.contactEmail}" class="hover:text-white">${f.companyLinks.contact}</a></li>
          <li><a href="https://app.aianchor.online/auth" class="hover:text-white">${f.companyLinks.clientLogin}</a></li>
        </ul>
        <div class="mt-6 space-y-1 text-xs text-gray-400">
          ${f.companyDetails.lines.map((l) => `<p>${l}</p>`).join('\n          ')}
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white">${f.columns.legal}</h3>
        <ul class="mt-4 space-y-3 text-sm text-gray-400">
          <li><a href="/${lang}/terms/" class="hover:text-white">${f.legalLinks.terms}</a></li>
          <li><a href="/${lang}/privacy/" class="hover:text-white">${f.legalLinks.privacy}</a></li>
          <li><a href="/${lang}/gdpr/" class="hover:text-white">${f.legalLinks.gdpr}</a></li>
          <li><a href="/${lang}/cookies/" class="hover:text-white">${f.legalLinks.cookies}</a></li>
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
