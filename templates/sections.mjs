import { iconMarkup } from './icons.mjs';

const industryIcon = { 'real-estate': 'building', clinics: 'stethoscope', services: 'wrench', hospitality: 'utensils' };

function shotImg({ file, alt, width, height, className = '', eager = false }) {
  return `<img
            src="/media/${file}"
            alt="${alt}"
            width="${width}"
            height="${height}"
            ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'}
            decoding="async"
            class="${className}"
          />`;
}

export function renderHero(t, lang) {
  const h = t.hero;
  return `<section class="relative overflow-hidden bg-hero-glow pt-36 pb-20 md:pt-44 md:pb-28">
    <div class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"></div>
    <div class="relative mx-auto grid max-w-8xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-primary">${h.eyebrow}</p>
        <h1 class="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          ${h.headline}<br /><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${h.headlineLine2}</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg text-gray-300">${h.subhead}</p>
        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a href="${h.ctaPrimaryHref}" class="rounded-full bg-primary px-7 py-3.5 font-semibold text-dark-900 shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-transform hover:scale-105"><!-- ${h.ctaPrimaryFlag} -->${h.ctaPrimary}</a>
          <a href="/${lang}/#pricing" class="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-primary/50 hover:bg-primary/10">${h.ctaSecondary}</a>
        </div>
        <p class="mt-5 text-sm text-gray-500">${h.trustLine}</p>
      </div>
      <div class="relative">
        <div class="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-2xl"></div>
        <div class="relative rounded-2xl border border-white/10 bg-dark-800/60 p-2 shadow-2xl backdrop-blur">
          ${shotImg({ file: 'hero-dashboard.png', alt: h.visualAlt, width: 1280, height: 800, className: 'w-full rounded-xl', eager: true })}
        </div>
      </div>
    </div>
  </section>`;
}

export function renderSocialProof(t) {
  const s = t.socialProof;
  return `<section class="border-y border-white/5 bg-dark-800/40 py-16">
    <div class="mx-auto max-w-8xl px-6">
      <p class="text-center text-sm font-medium uppercase tracking-widest text-gray-500">${s.heading}</p>
      <p class="mt-2 text-center text-gray-400">${s.sub}</p>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        ${s.testimonials
          .map(
            (q) => `<figure class="rounded-2xl border border-white/10 bg-dark-900/60 p-6">
          <blockquote class="text-gray-300">“${q.quote}”</blockquote>
          <figcaption class="mt-4 flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 text-sm font-semibold text-white">${q.name.charAt(0)}</span>
            <span class="text-sm">
              <span class="block font-medium text-white">${q.name}</span>
              <span class="block text-gray-500">${q.role}, ${q.company}</span>
            </span>
          </figcaption>
        </figure>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderHowItWorks(t) {
  const h = t.howItWorks;
  return `<section id="how-it-works" class="py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${h.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${h.subhead}</p>
      </div>
      <div class="mt-16 grid gap-10 md:grid-cols-3">
        ${h.steps
          .map(
            (s) => `<div class="relative rounded-2xl border border-white/10 bg-dark-800/40 p-8">
          <span class="text-5xl font-bold text-white/10">${s.n}</span>
          <h3 class="mt-4 text-xl font-semibold text-white">${s.title}</h3>
          <p class="mt-3 text-gray-400">${s.desc}</p>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderPortal(t) {
  const p = t.portal;
  const shots = p.shots;
  return `<section id="portal" class="border-y border-white/5 bg-dark-800/40 py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-widest text-primary">${p.eyebrow}</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">${p.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${p.subhead}</p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-dark-900/60 p-3">
          ${shotImg({ file: shots.revenue.file, alt: shots.revenue.alt, width: 900, height: 620, className: 'w-full rounded-xl' })}
          <p class="px-3 py-3 text-sm text-gray-500">${shots.revenue.label}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-dark-900/60 p-3">
          ${shotImg({ file: shots.voice.file, alt: shots.voice.alt, width: 900, height: 620, className: 'w-full rounded-xl' })}
          <p class="px-3 py-3 text-sm text-gray-500">${shots.voice.label}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-dark-900/60 p-3">
          ${shotImg({ file: shots.calls.file, alt: shots.calls.alt, width: 900, height: 620, className: 'w-full rounded-xl' })}
          <p class="px-3 py-3 text-sm text-gray-500">${shots.calls.label}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-dark-900/60 p-3">
          ${shotImg({ file: shots.hours.file, alt: shots.hours.alt, width: 900, height: 620, className: 'w-full rounded-xl' })}
          <p class="px-3 py-3 text-sm text-gray-500">${shots.hours.label}</p>
        </div>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-3">
        ${p.bullets
          .map(
            (b) => `<div>
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">${iconMarkup('check', 'w-5 h-5')}</div>
          <h3 class="mt-4 text-lg font-semibold text-white">${b.title}</h3>
          <p class="mt-2 text-gray-400">${b.desc}</p>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderFeatures(t) {
  const f = t.features;
  return `<section id="features" class="py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${f.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${f.subhead}</p>
      </div>
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${f.items
          .map(
            (i) => `<div class="rounded-2xl border border-white/10 bg-dark-800/40 p-6 transition-colors hover:border-primary/30">
          <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-primary/20 to-secondary/20 text-primary">${iconMarkup(i.icon, 'w-5 h-5')}</div>
          <h3 class="mt-4 font-semibold text-white">${i.title}</h3>
          <p class="mt-2 text-sm text-gray-400">${i.desc}</p>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderIndustries(t) {
  const ind = t.industries;
  return `<section id="industries" class="border-y border-white/5 bg-dark-800/40 py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${ind.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${ind.subhead}</p>
      </div>
      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        ${ind.items
          .map((i) =>
            i.flagship
              ? `<div class="lg:row-span-2 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-8">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">${iconMarkup(industryIcon[i.key], 'w-6 h-6')}</div>
          <span class="mt-4 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">Flagship</span>
          <h3 class="mt-3 text-2xl font-semibold text-white">${i.title}</h3>
          <p class="mt-3 text-gray-300">${i.line}</p>
          ${i.detail ? `<p class="mt-4 text-sm text-gray-400">${i.detail}</p>` : ''}
          <div class="mt-6 rounded-xl border border-white/10 bg-dark-900/60 p-2">
            ${shotImg({ file: 'industry-real-estate-lead-card.png', alt: 'Lead card for a real estate listing showing valuation and viewing booking', width: 760, height: 480, className: 'w-full rounded-lg' })}
          </div>
        </div>`
              : `<div class="rounded-2xl border border-white/10 bg-dark-900/60 p-8">
          <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-primary">${iconMarkup(industryIcon[i.key], 'w-5 h-5')}</div>
          <h3 class="mt-4 text-xl font-semibold text-white">${i.title}</h3>
          <p class="mt-2 text-gray-400">${i.line}</p>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderPricing(t) {
  const p = t.pricing;
  const tierCard = (tier) => `<div class="relative flex flex-col rounded-2xl border ${tier.mostPopular ? 'border-primary/60 bg-gradient-to-b from-primary/10 to-dark-800/60' : 'border-white/10 bg-dark-800/40'} p-8">
          ${tier.mostPopular ? `<span class="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-dark-900">${p.mostPopular}</span>` : ''}
          <h3 class="text-lg font-semibold text-white">${tier.name}</h3>
          <p class="mt-1 text-sm text-gray-400">${tier.tagline}</p>
          <p class="mt-6">
            <span class="price-monthly"><span class="text-4xl font-bold text-white">€${tier.priceMonthly}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></span>
            <span class="price-annual hidden"><span class="text-4xl font-bold text-white">€${tier.priceAnnual}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></span>
          </p>
          <ul class="mt-6 flex-1 space-y-3 text-sm text-gray-300">
            ${tier.features.map((f) => `<li class="flex gap-2"><span class="mt-0.5 text-primary">${iconMarkup('check', 'w-4 h-4')}</span><span>${f}</span></li>`).join('\n            ')}
          </ul>
          <p class="mt-6 text-xs text-gray-500">${p.overageLabel}: ${tier.overage}</p>
          <a href="/${t.lang}/#pricing" class="mt-6 block rounded-full ${tier.mostPopular ? 'bg-primary text-dark-900' : 'border border-white/15 text-white hover:border-primary/50'} px-5 py-3 text-center font-semibold transition-colors">${p.ctaTier}</a>
        </div>`;

  const scaleCard = `<div class="flex flex-col rounded-2xl border border-white/10 bg-dark-800/40 p-8">
          <h3 class="text-lg font-semibold text-white">${p.scale.name}</h3>
          <p class="mt-1 text-sm text-gray-400">${p.scale.tagline}</p>
          <p class="mt-6"><span class="text-4xl font-bold text-white">${p.scale.priceFrom}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></p>
          <ul class="mt-6 flex-1 space-y-3 text-sm text-gray-300">
            ${p.scale.features.map((f) => `<li class="flex gap-2"><span class="mt-0.5 text-primary">${iconMarkup('check', 'w-4 h-4')}</span><span>${f}</span></li>`).join('\n            ')}
          </ul>
          <a href="mailto:${t.footer.contactEmail}?subject=Scale%20plan" class="mt-6 block rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-white transition-colors hover:border-primary/50">${p.ctaScale}</a>
        </div>`;

  return `<section id="pricing" class="py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${p.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${p.subhead}</p>
      </div>

      <div class="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-dark-800/60 p-1" id="pricing-toggle" role="group">
        <button type="button" data-pricing-period="monthly" class="pricing-toggle-btn rounded-full px-5 py-2 text-sm font-medium text-dark-900 bg-primary" aria-pressed="true">${p.toggle.monthly}</button>
        <button type="button" data-pricing-period="annual" class="pricing-toggle-btn rounded-full px-5 py-2 text-sm font-medium text-gray-300" aria-pressed="false">${p.toggle.annual} <span class="text-primary">${p.toggle.save}</span></button>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-4">
        ${p.tiers.map(tierCard).join('\n        ')}
        ${scaleCard}
      </div>

      <p class="mt-8 text-sm text-gray-500">${p.setupNote}</p>

      <details class="mt-4 rounded-xl border border-white/10 bg-dark-800/40 p-5">
        <summary class="cursor-pointer font-medium text-white">${p.overageToggle}</summary>
        <p class="mt-3 text-sm text-gray-400">${p.overageNote}</p>
        <ul class="mt-3 space-y-1 text-sm text-gray-400">
          ${p.tiers.map((tier) => `<li>${tier.name}: ${tier.overage}</li>`).join('\n          ')}
        </ul>
      </details>
    </div>
  </section>`;
}

export function renderComparison(t) {
  const c = t.comparison;
  const cell = (v) => {
    if (v === true) return `<span class="inline-flex text-primary">${iconMarkup('check', 'w-5 h-5')}</span>`;
    if (v === false) return `<span class="inline-flex text-gray-600">${iconMarkup('minus', 'w-5 h-5')}</span>`;
    return `<span class="text-sm text-gray-300">${v}</span>`;
  };
  return `<section class="border-y border-white/5 bg-dark-800/40 py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${c.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${c.subhead}</p>
      </div>
      <div class="mt-12 overflow-x-auto rounded-2xl border border-white/10">
        <table class="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr class="border-b border-white/10 bg-dark-900/60">
              <th class="p-5 text-sm font-medium text-gray-400">${c.cols.feature}</th>
              <th class="p-5 text-sm font-semibold text-primary">${c.cols.aianchor}</th>
              <th class="p-5 text-sm font-medium text-gray-400">${c.cols.human}</th>
              <th class="p-5 text-sm font-medium text-gray-400">${c.cols.basic}</th>
            </tr>
          </thead>
          <tbody>
            ${c.rows
              .map(
                (r, idx) => `<tr class="${idx % 2 ? 'bg-dark-900/30' : ''} border-b border-white/5 last:border-0">
              <td class="p-5 text-sm text-gray-300">${r.label}</td>
              <td class="p-5">${cell(r.aianchor)}</td>
              <td class="p-5">${cell(r.human)}</td>
              <td class="p-5">${cell(r.basic)}</td>
            </tr>`
              )
              .join('\n            ')}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

export function renderFaq(t) {
  const f = t.faq;
  return `<section id="faq" class="py-24 md:py-32">
    <div class="mx-auto max-w-4xl px-6">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${f.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${f.subhead}</p>
      </div>
      <div class="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-dark-800/40">
        ${f.items
          .map(
            (item, idx) => `<div class="faq-item">
          <button type="button" class="faq-question flex w-full items-center justify-between gap-4 p-6 text-left" aria-expanded="false" aria-controls="faq-answer-${idx}">
            <span class="font-medium text-white">${item.q}</span>
            <span class="faq-chevron shrink-0 text-gray-400 transition-transform">${iconMarkup('chevronDown', 'w-5 h-5')}</span>
          </button>
          <div id="faq-answer-${idx}" class="faq-answer hidden px-6 pb-6 text-gray-400">${item.a}</div>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderFinalCta(t, lang) {
  const c = t.finalCta;
  return `<section id="contact" class="relative overflow-hidden py-24 md:py-32">
    <div class="absolute inset-0 bg-hero-glow"></div>
    <div class="relative mx-auto max-w-3xl px-6 text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${c.heading}</h2>
      <p class="mt-4 text-lg text-gray-400">${c.subhead}</p>
      <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a href="${t.hero.ctaPrimaryHref}" class="rounded-full bg-primary px-7 py-3.5 font-semibold text-dark-900 shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-transform hover:scale-105">${c.ctaPrimary}</a>
        <a href="/${lang}/#pricing" class="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-primary/50 hover:bg-primary/10">${c.ctaSecondary}</a>
      </div>
    </div>
  </section>`;
}
