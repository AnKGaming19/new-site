import { iconMarkup } from './icons.mjs';

/**
 * First-visit cookie consent wizard.
 *
 * Rendered on every page but ships `hidden`: main.js only reveals it when there is no
 * stored decision. That ordering matters twice over — returning visitors never see a
 * flash of the banner, and with JS disabled nothing is shown because nothing can be set.
 *
 * Two steps in one card (intro -> per-category preferences) so the common path stays a
 * single click while "Customise" still leads somewhere real, as GDPR/ePrivacy expect:
 * reject must be as easy as accept, and non-essential categories start off.
 *
 * It sits immediately after the skip link in the document so keyboard users reach it
 * first; `position: fixed` keeps the visual placement at the bottom of the viewport.
 */
export function renderCookieConsent(t, lang) {
  const c = t.cookieConsent;
  const policyHref = `/${lang}/cookies/`;

  const categoryRow = (cat) => `<div class="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-dark-900/60 p-4">
            <div class="min-w-0">
              <h4 class="text-sm font-semibold text-white">${cat.title}</h4>
              <p class="mt-1 text-xs leading-relaxed text-gray-400">${cat.desc}</p>
            </div>
            ${
              cat.locked
                ? `<span class="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-primary">${c.prefs.alwaysOn}</span>`
                : `<button type="button" role="switch" aria-checked="false" data-cookie-toggle="${cat.id}" class="cookie-switch shrink-0" aria-label="${cat.title}">
              <span class="cookie-switch-thumb"></span>
            </button>`
            }
          </div>`;

  return `<div id="cookie-consent" class="cookie-consent fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6" hidden>
    <div class="cookie-consent-scrim" aria-hidden="true"></div>
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      aria-label="${c.ariaLabel}"
      tabindex="-1"
      class="cookie-consent-card relative mx-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-dark-800/95 p-6 backdrop-blur-xl sm:p-7"
    >
      <span class="cookie-consent-edge" aria-hidden="true"></span>

      <!-- Step 1: the ask -->
      <div class="cookie-step" data-cookie-step="1">
        <div class="flex items-start gap-4">
          <span class="hidden shrink-0 rounded-xl bg-gradient-to-tr from-primary to-secondary p-2.5 sm:block">
            ${iconMarkup('shield', 'w-5 h-5 text-white')}
          </span>
          <div class="min-w-0">
            <p class="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">${c.intro.eyebrow}</p>
            <h2 id="cookie-consent-title" class="mt-1.5 font-display text-lg font-bold text-white">${c.intro.heading}</h2>
            <p id="cookie-consent-desc" class="mt-2 text-sm leading-relaxed text-gray-400">
              ${c.intro.body}
              <a href="${policyHref}" class="link-hover font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">${c.intro.policyLink}</a>
            </p>
          </div>
        </div>

        <div class="cookie-actions mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div class="cookie-dots hidden items-center gap-1.5 sm:flex" aria-hidden="true">
            <span class="cookie-dot is-active"></span>
            <span class="cookie-dot"></span>
          </div>
          <div class="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <button type="button" data-cookie-customize class="btn-interactive btn-no-fill rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-primary/50 hover:text-white">${c.intro.customize}</button>
            <button type="button" data-cookie-reject class="btn-interactive btn-no-fill rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-primary/50 hover:text-white">${c.intro.rejectAll}</button>
            <button type="button" data-cookie-accept class="btn-interactive rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-dark-900 hover:bg-gray-100">${c.intro.acceptAll}</button>
          </div>
        </div>
      </div>

      <!-- Step 2: per-category preferences -->
      <div class="cookie-step" data-cookie-step="2" hidden>
        <div class="flex items-start gap-4">
          <button type="button" data-cookie-back class="btn-interactive btn-no-fill mt-0.5 shrink-0 rounded-lg border border-white/10 p-2 text-gray-300 hover:border-primary/50 hover:text-white" aria-label="${c.prefs.back}">
            ${iconMarkup('arrowRight', 'w-4 h-4 -scale-x-100')}
          </button>
          <div class="min-w-0">
            <h3 class="font-display text-lg font-bold text-white">${c.prefs.heading}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-gray-400">${c.prefs.body}</p>
          </div>
        </div>

        <div class="mt-5 space-y-2.5">
          ${c.prefs.categories.map(categoryRow).join('\n          ')}
        </div>

        <div class="cookie-actions mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div class="cookie-dots hidden items-center gap-1.5 sm:flex" aria-hidden="true">
            <span class="cookie-dot"></span>
            <span class="cookie-dot is-active"></span>
          </div>
          <div class="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <button type="button" data-cookie-save class="btn-interactive btn-no-fill rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-primary/50 hover:text-white">${c.prefs.save}</button>
            <button type="button" data-cookie-accept class="btn-interactive rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-dark-900 hover:bg-gray-100">${c.prefs.acceptAll}</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
