import { iconMarkup } from './icons.mjs';

/**
 * "Anchor" — the support assistant docked in the corner of every page.
 *
 * Rendered on every page but ships `hidden`: assets/js/chat.js reveals it once it has
 * wired everything up, so with JS disabled or blocked there is no dead button in the
 * corner. The launcher also steps aside while the consent wizard is up (see input.css) —
 * both are bottom-anchored and the consent decision comes first.
 *
 * Copy that only the client script needs (suggestions, error strings) travels in a JSON
 * island rather than a dozen data-* attributes, so the two languages stay readable in
 * content/{en,gr}.mjs instead of being spelled out in markup.
 */
export function renderChatWidget(t, lang) {
  const a = t.assistant;
  const demoHref = t.hero.ctaPrimaryHref;

  // The island is parsed with JSON.parse, so only `<` needs neutralising to guarantee the
  // block can never terminate the script element early.
  const config = JSON.stringify({
    endpoint: a.endpoint,
    lang,
    greeting: a.greeting,
    suggestions: a.suggestions,
    typing: a.typing,
    errors: a.errors,
    name: a.name,
    demoHref,
    demoCta: a.demoCta,
  }).replace(/</g, '\\u003c');

  return `<div id="chat-widget" class="chat-widget" hidden>
    <script type="application/json" id="chat-config">${config}</script>

    <button
      type="button"
      id="chat-launcher"
      class="chat-launcher btn-interactive"
      aria-expanded="false"
      aria-controls="chat-panel"
      aria-label="${a.openLabel}"
    >
      <span class="chat-launcher-icon">${iconMarkup('bot', 'w-5 h-5')}</span>
      <span class="chat-launcher-label">${a.launcher}</span>
    </button>

    <div
      id="chat-panel"
      class="chat-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="chat-panel-title"
      tabindex="-1"
      hidden
    >
      <span class="chat-panel-edge" aria-hidden="true"></span>

      <!-- Cloned by chat.js for every assistant turn, so the icon set stays in one place
           instead of being re-inlined as an SVG string inside the client script. -->
      <template id="chat-avatar-template"><span class="chat-msg-avatar">${iconMarkup('bot', 'w-3.5 h-3.5')}</span></template>

      <header class="chat-header">
        <span class="chat-avatar">${iconMarkup('bot', 'w-5 h-5 text-white')}</span>
        <div class="min-w-0">
          <h2 id="chat-panel-title" class="chat-title font-display font-bold text-white">${a.name}</h2>
          <p class="chat-status">${a.subtitle} · ${a.status}</p>
        </div>
        <div class="chat-header-actions">
          <button type="button" data-chat-reset class="chat-icon-btn btn-interactive btn-no-fill" aria-label="${a.reset}" title="${a.reset}">
            ${iconMarkup('close', 'w-4 h-4 rotate-45')}
          </button>
          <button type="button" data-chat-close class="chat-icon-btn btn-interactive btn-no-fill" aria-label="${a.closeLabel}">
            ${iconMarkup('chevronDown', 'w-4 h-4')}
          </button>
        </div>
      </header>

      <!--
        role="log" + aria-live="polite" so a screen reader announces each finished reply
        without stealing focus from the composer the visitor is still typing in.
      -->
      <div id="chat-log" class="chat-log" role="log" aria-live="polite" aria-label="${a.transcriptLabel}"></div>

      <form id="chat-form" class="chat-composer" novalidate>
        <label for="chat-input" class="sr-only">${a.inputLabel}</label>
        <textarea
          id="chat-input"
          name="message"
          rows="1"
          maxlength="1500"
          class="chat-input"
          placeholder="${a.placeholder}"
          autocomplete="off"
        ></textarea>
        <button type="submit" class="chat-send btn-interactive" aria-label="${a.send}" disabled>
          ${iconMarkup('arrowRight', 'w-4 h-4')}
        </button>
      </form>

      <p class="chat-disclosure">
        ${a.disclosure}
        <a href="/${lang}/ai-policy/" class="link-hover text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary">${t.footer.legalLinks.aiPolicy}</a>
      </p>
    </div>
  </div>`;
}
