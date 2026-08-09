import { iconMarkup } from './icons.mjs';

// Standalone "Book a free demo" page (/{lang}/book-demo/).
//
// Same visual language as the hero (glow + grid + particles), split into a
// left-hand pitch column and the form card on the right. The form posts JSON to
// /api/book-demo, which is what sends the Resend confirmation; markup hooks
// (data-contact-form / data-form-success / data-submit-*) are the same ones
// main.js already drives for the homepage contact form.

const labelClass = 'mb-2 block text-sm font-medium text-gray-300';
const fieldClass =
  'form-field w-full rounded-lg border border-white/10 bg-dark-900 p-3 text-white outline-none placeholder:text-gray-500 focus:border-primary';

function optionalTag(text) {
  return `<span class="ml-1.5 font-normal text-gray-500">(${text})</span>`;
}

function textField({ name, label, type = 'text', required = false, placeholder = '', autocomplete = '', optionalText = '', hint = '' }) {
  return `<div>
              <label for="demo-${name}" class="${labelClass}">${label}${optionalText ? optionalTag(optionalText) : ''}</label>
              <input
                id="demo-${name}"
                name="${name}"
                type="${type}"
                ${required ? 'required' : ''}
                ${placeholder ? `placeholder="${placeholder}"` : ''}
                ${autocomplete ? `autocomplete="${autocomplete}"` : ''}
                class="${fieldClass}"
              />
              ${hint ? `<p class="mt-1.5 text-xs text-gray-500">${hint}</p>` : ''}
            </div>`;
}

export function renderBookDemo(t, lang) {
  const d = t.bookDemo;
  const f = d.form;

  const bullet = (b, i) => `<div class="reveal flex gap-4" style="transition-delay:${120 + i * 90}ms">
            <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-secondary/10 text-primary">${iconMarkup(b.icon, 'w-5 h-5')}</span>
            <div>
              <h2 class="font-semibold text-white">${b.title}</h2>
              <p class="mt-1 text-sm leading-relaxed text-gray-400">${b.desc}</p>
            </div>
          </div>`;

  return `<main id="main" class="relative overflow-hidden bg-hero-glow pb-24 pt-32 md:pb-32 md:pt-40">
    <div class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"></div>
    <canvas class="particle-bg absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>

    <!-- Plain lg:grid-cols-2 rather than an arbitrary grid template: Tailwind's
         content scanner drops arbitrary values containing a comma (minmax(0,540px)),
         which silently purges the column rule. The form card caps its own width instead. -->
    <div class="relative mx-auto grid max-w-8xl gap-14 px-6 lg:grid-cols-2 lg:items-start lg:gap-16">
      <div class="lg:sticky lg:top-32">
        <h1 class="hero-load font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl" style="animation-delay:120ms">
          <span class="gradient-text">${d.heading}</span>
        </h1>
        <p class="hero-load mt-6 max-w-xl border-l-2 border-primary/30 pl-6 text-lg leading-relaxed text-gray-300" style="animation-delay:240ms">${d.subhead}</p>

        ${d.trialNote ? `<p class="reveal mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-green-400/25 bg-green-400/5 p-5 text-sm leading-relaxed text-gray-300">
          <span class="mt-0.5 shrink-0 text-green-400">${iconMarkup('check', 'w-5 h-5')}</span>
          <span>${d.trialNote}</span>
        </p>` : ''}

        <div class="reveal-stagger mt-12 max-w-xl space-y-7">
          ${d.bullets.map(bullet).join('\n          ')}
        </div>

        <div class="reveal mt-12 max-w-xl rounded-2xl border border-white/10 bg-dark-800/50 p-6 backdrop-blur-sm">
          <h2 class="flex items-center gap-2 text-sm font-semibold text-primary">
            <span class="h-[2px] w-6 bg-primary"></span>${d.reassureTitle}
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-400">${d.reassureBody}</p>
        </div>

        <a href="/${lang}/" class="link-hover mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary">
          ${iconMarkup('arrowRight', 'w-4 h-4 rotate-180')} ${d.backLink}
        </a>
      </div>

      <div id="demo-form" data-form-wrapper class="rounded-3xl border border-white/10 bg-dark-900/80 p-7 shadow-[0_0_50px_rgba(0,240,255,0.08)] backdrop-blur-sm md:p-8 lg:ml-auto lg:w-full lg:max-w-xl">
        <h2 class="font-display text-2xl font-semibold text-white">${f.heading}</h2>
        <p class="mb-7 mt-2 text-sm text-gray-400">${f.subheading}</p>

        <form
          data-contact-form
          data-encoding="json"
          action="${f.endpoint}"
          method="POST"
          data-submit-label="${f.submit}"
          data-submitting-label="${f.submitting}"
          novalidate="false"
        >
          <input type="hidden" name="lang" value="${lang}" />
          <input type="hidden" name="pagePath" value="/${lang}/book-demo/" />
          <!-- Honeypot: hidden from people, irresistible to bots. A filled value makes
               /api/book-demo drop the submission silently. -->
          <div aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">
            <label for="demo-companyUrl">Company URL</label>
            <input id="demo-companyUrl" name="companyUrl" type="text" tabindex="-1" autocomplete="off" />
          </div>

          <div class="mb-5 grid gap-5 md:grid-cols-2">
            ${textField({ name: 'firstName', label: f.firstName, required: true, autocomplete: 'given-name' })}
            ${textField({ name: 'lastName', label: f.lastName, required: true, autocomplete: 'family-name' })}
          </div>
          <div class="mb-5">
            ${textField({ name: 'email', label: f.email, type: 'email', required: true, autocomplete: 'email' })}
          </div>
          <div class="mb-5 grid gap-5 md:grid-cols-2">
            ${textField({ name: 'phone', label: f.phone, type: 'tel', autocomplete: 'tel', optionalText: f.phoneOptional })}
            ${textField({ name: 'company', label: f.company, autocomplete: 'organization', optionalText: f.companyOptional })}
          </div>
          <div class="mb-5">
            <!-- type="text", not "url": people type "acme.gr" without a scheme and the
                 browser's url validation would reject it. /api/book-demo adds https://. -->
            ${textField({
              name: 'website',
              label: f.website,
              autocomplete: 'url',
              placeholder: f.websitePlaceholder,
              optionalText: f.websiteOptional,
              hint: f.websiteHint,
            })}
          </div>
          <div class="mb-5">
            <label for="demo-interest" class="${labelClass}">${f.interest}</label>
            <select id="demo-interest" name="interest" class="${fieldClass} appearance-none">
              ${f.interestOptions.map((o) => `<option>${o}</option>`).join('\n              ')}
            </select>
          </div>
          <div class="mb-6">
            <label for="demo-message" class="${labelClass}">${f.message}</label>
            <textarea id="demo-message" name="message" required rows="4" placeholder="${f.messagePlaceholder}" class="${fieldClass}"></textarea>
          </div>

          <button type="submit" data-submit-btn class="btn-interactive flex w-full items-center justify-center gap-2 rounded-lg bg-white py-4 font-bold text-dark-900 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70">
            <svg data-submit-spinner class="spin-loader hidden h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" opacity="0.25" /><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
            <span data-submit-label-el>${f.submit}</span>
          </button>
          <p class="mt-4 text-center text-xs leading-relaxed text-gray-500">
            ${f.privacyNote} <a href="/${lang}/privacy/" class="link-hover text-gray-400 underline underline-offset-2 hover:text-primary">${f.privacyLink}</a>
          </p>
          <p data-form-error class="mt-4 hidden text-center text-sm text-red-400">${f.errorMessage}</p>
        </form>

        <div data-form-success class="hidden min-h-[420px] flex-col items-center justify-center text-center">
          <div class="success-pop mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">${iconMarkup('check', 'w-10 h-10 text-green-500')}</div>
          <h2 class="mb-3 font-display text-2xl font-bold text-white">${f.successTitle}</h2>
          <p class="max-w-sm leading-relaxed text-gray-300">${f.successBody}</p>
          <button type="button" data-send-another class="link-hover mt-8 text-sm font-medium text-primary hover:text-white">${f.sendAnother}</button>
        </div>
      </div>
    </div>
  </main>`;
}
