import { iconMarkup } from './icons.mjs';

// Wave/curve section divider, ported verbatim (path + viewBox) from the original
// Hero/Process/About components on main — fill/position are the only params that vary.
const WAVE_PATH =
  'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z';

// The SVG is shifted 2px past the section edge (and clipped): SVG height rounding at
// fractional viewport widths (ultrawide, browser zoom) could otherwise leave a sub-pixel
// strip of the section background between the wave fill and the next section - the
// visible "seam band". The 2px bleed guarantees fill and neighbour background always meet.
function waveDivider({ position, fill }) {
  const shift = position === 'bottom' ? ' rotate-180 translate-y-[2px]' : ' -translate-y-[2px]';
  // Class names must appear as complete literals ('bottom-0' / 'top-0'), never built by
  // interpolation - Tailwind's content scanner can only see literal strings, and a purged
  // .bottom-0 left every bottom wave floating above the section edge (the visible gap).
  const posClass = position === 'bottom' ? 'bottom-0' : 'top-0';
  return `<div class="pointer-events-none absolute ${posClass} left-0 z-20 w-full overflow-hidden leading-none" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="block h-[60px] w-full md:h-[100px]${shift}">
              <path d="${WAVE_PATH}" fill="${fill}" />
            </svg>
          </div>`;
}

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

// Small mic-orb + equalizer accent, ported from VoiceAgent.tsx, CSS-only (no JS needed).
function micOrbAccent() {
  return `<div class="relative flex h-11 w-11 shrink-0 items-center justify-center">
            <span class="mic-orb-ring absolute inset-0 rounded-full border border-primary/40"></span>
            <div class="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30">
              <div class="flex h-4 items-end gap-0.5">
                <span class="eq-bar w-0.5 rounded-full bg-white" style="height:8px"></span>
                <span class="eq-bar w-0.5 rounded-full bg-white" style="height:14px"></span>
                <span class="eq-bar w-0.5 rounded-full bg-white" style="height:20px"></span>
                <span class="eq-bar w-0.5 rounded-full bg-white" style="height:14px"></span>
                <span class="eq-bar w-0.5 rounded-full bg-white" style="height:8px"></span>
              </div>
            </div>
          </div>`;
}

// Hero visual: the original design's DOM-built dashboard mockup (Hero.tsx on main),
// ported to static HTML. Labels inside it are design furniture (mono, EN) as on main.
function heroMockup() {
  return `<div class="tilt-card relative h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 shadow-2xl backdrop-blur-xl">
    <div class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent"></div>
    <div class="flex h-8 items-center gap-2 rounded-t-xl border-b border-white/5 bg-black/20 px-4">
      <span class="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20"></span>
      <span class="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20"></span>
      <span class="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20"></span>
      <span class="ml-auto font-mono text-[10px] text-gray-400">SYS_OPTIMIZED</span>
    </div>
    <div class="relative flex h-[calc(100%-2rem)] flex-col justify-between gap-6 p-8">
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
      <div class="flex gap-6">
        <div class="flex-1 rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
          <div class="mb-2 font-mono text-xs text-gray-300">AVG RESPONSE TIME</div>
          <div class="font-display text-3xl font-bold text-white">0.4s</div>
          <div class="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-800">
            <div class="h-full w-[95%] bg-primary shadow-[0_0_10px_#00f0ff]"></div>
          </div>
        </div>
        <div class="flex-1 rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
          <div class="mb-2 font-mono text-xs text-gray-300">LEAD CONVERSION</div>
          <div class="font-display text-3xl font-bold text-white">+42%</div>
          <div class="mt-4 flex gap-1">
            ${[1, 2, 3, 4, 5, 6, 7].map((i) => `<span class="h-4 flex-1 rounded-sm ${i > 5 ? 'bg-gray-800' : 'bg-secondary'}"></span>`).join('')}
          </div>
        </div>
      </div>
      <div class="relative h-[300px] overflow-hidden rounded-lg border border-white/5 bg-black/40 p-4">
        <div class="absolute left-4 top-4 font-mono text-xs text-primary">Workflow_Automation.json</div>
        <div class="hero-float-a absolute left-10 top-1/3 flex items-center gap-3 rounded-lg border border-white/20 bg-dark-800 p-3 shadow-lg">
          <span class="rounded-md bg-blue-500/20 p-2 text-blue-400">${iconMarkup('cpu', 'w-3.5 h-3.5')}</span>
          <span class="text-xs text-gray-300">CRM Sync</span>
        </div>
        <div class="hero-float-b absolute right-10 top-1/2 flex items-center gap-3 rounded-lg border border-white/20 bg-dark-800 p-3 shadow-lg">
          <span class="rounded-md bg-green-500/20 p-2 text-green-400">${iconMarkup('activity', 'w-3.5 h-3.5')}</span>
          <span class="text-xs text-gray-300">Revenue Analytics</span>
        </div>
        <svg class="hero-motion-svg pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M 140 120 C 250 120, 250 180, 360 180" stroke="rgba(0,240,255,0.3)" stroke-width="2" fill="none" stroke-dasharray="5,5" />
          <circle r="4" fill="#00f0ff">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 140 120 C 250 120, 250 180, 360 180" />
          </circle>
        </svg>
      </div>
    </div>
  </div>`;
}

export function renderHero(t, lang) {
  const h = t.hero;
  return `<section class="relative overflow-hidden bg-hero-glow pt-36 pb-20 md:pt-44 md:pb-28">
    <div class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"></div>
    <canvas class="particle-bg absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>
    <div class="relative mx-auto grid max-w-8xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
      <div class="max-w-3xl">
        <p class="hero-load inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-xs uppercase text-primary backdrop-blur-sm" style="animation-delay:0ms"><span class="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00f0ff]"></span>${h.eyebrow} // V.2.0</p>
        <h1 class="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          <span class="hero-line" style="animation-delay:100ms">${h.headlineLine1}</span><br /><span class="hero-line bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent" style="animation-delay:190ms">${h.headlineLine2}</span><br /><span class="hero-line gradient-text relative" style="animation-delay:280ms">${h.headlineLine3}<svg class="absolute bottom-1 left-0 h-3 w-full text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" /></svg></span>
        </h1>
        <p class="hero-load mt-8 max-w-lg border-l-2 border-primary/30 pl-6 text-xl leading-relaxed text-gray-300" style="animation-delay:240ms">${h.subhead}</p>
        <div class="hero-load mt-10 flex flex-col gap-5 sm:flex-row" style="animation-delay:360ms">
          <a href="${h.ctaPrimaryHref}" class="group flex skew-x-[-10deg] items-center justify-center gap-3 bg-white px-8 py-4 text-lg font-bold text-black transition-colors duration-300 hover:bg-primary active:scale-[0.98]">
            <span class="flex skew-x-[10deg] items-center gap-2">${h.ctaPrimary} ${iconMarkup('arrowRight', 'w-5 h-5 transition-transform group-hover:translate-x-1')}</span>
          </a>
          <a href="${h.ctaSecondaryHref}" class="flex skew-x-[-10deg] items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-[0.98]">
            <span class="skew-x-[10deg]">${h.ctaSecondary}</span>
          </a>
        </div>
      </div>
      <div class="hero-visual-load relative hidden h-[620px] lg:block" data-tilt>
        <div class="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-2xl"></div>
        ${heroMockup()}
      </div>
    </div>
    ${waveDivider({ position: 'bottom', fill: '#0a0a12' })}
  </section>`;
}

export function renderServices(t) {
  const s = t.services;
  // Per-card icon pairs, matching the original Services.tsx data (problem icon / solution icon).
  const problemIcons = ['phone', 'clock', 'search'];
  const solutionIcons = ['bot', 'zap', 'chart'];
  const card = (item, idx) => `<div class="reveal reveal-frame group relative transition-transform duration-500 ease-out lg:hover:scale-[1.02]">
    <div class="grid items-stretch gap-0 lg:grid-cols-12 lg:gap-8">
      <div class="svc-problem relative overflow-hidden rounded-t-2xl border border-red-500/20 bg-dark-800 p-8 transition-all duration-500 group-hover:border-red-500/60 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] lg:col-span-5 lg:rounded-l-2xl lg:rounded-tr-none">
        <div class="absolute left-0 top-0 z-10 h-full w-1 bg-red-500/50"></div>
        <div class="relative z-10 mb-8 flex items-start justify-between">
          <div class="flex items-center gap-3">
            <span class="rounded-lg border border-red-500/20 bg-red-500/10 p-2 text-red-500">${iconMarkup(problemIcons[idx] || 'shield', 'w-5 h-5')}</span>
            <span class="font-mono text-xs uppercase tracking-widest text-red-400">${item.problemTag}</span>
          </div>
          ${iconMarkup('alertTriangle', 'w-5 h-5 text-red-500/40 animate-pulse')}
        </div>
        <h3 class="relative z-10 mb-4 font-display text-2xl font-bold text-white">${item.problemTitle}</h3>
        <p class="relative z-10 mb-6 border-l-2 border-red-500/20 pl-4 text-sm leading-relaxed text-gray-300">"${item.problem}"</p>
        <div class="relative z-10 inline-flex items-center gap-2 font-mono text-xs text-red-400/70">${iconMarkup('shield', 'w-3 h-3')} ${item.impact}</div>
      </div>

      <div class="relative flex items-center justify-center py-4 lg:col-span-1 lg:flex-col lg:py-0">
        <div class="absolute inset-0 flex items-center justify-center lg:flex-col">
          <div class="h-[2px] w-full bg-gradient-to-r from-red-500/50 via-gray-700 to-primary/50 lg:h-full lg:w-[2px] lg:bg-gradient-to-b"></div>
        </div>
        <div class="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          ${iconMarkup('arrowRight', 'w-4 h-4 text-white rotate-90 lg:rotate-0')}
        </div>
      </div>

      <div class="svc-solution relative overflow-hidden rounded-b-2xl border border-primary/20 bg-gradient-to-br from-gray-900 to-black p-1 shadow-2xl transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] lg:col-span-6 lg:rounded-r-2xl lg:rounded-bl-none">
        <div class="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative z-10 flex h-full flex-col justify-between rounded-xl bg-dark-900/80 p-8 backdrop-blur-sm">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary shadow-[0_0_10px_rgba(0,240,255,0.15)]">${iconMarkup(solutionIcons[idx] || 'workflow', 'w-5 h-5')}</span>
              <span class="font-mono text-xs uppercase tracking-widest text-primary">SOLUTION</span>
            </div>
            <span class="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
          </div>
          <div class="mb-8">
            <h4 class="mb-3 text-xl font-bold text-white">${item.solutionTitle}</h4>
            <p class="text-lg font-light leading-relaxed text-gray-100">${item.solution}</p>
          </div>
          <div class="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <span class="mt-0.5 shrink-0 text-green-400">${iconMarkup('check', 'w-5 h-5')}</span>
            <div>
              <span class="mb-1 block text-xs font-bold uppercase tracking-wider text-green-400">OUTCOME</span>
              <p class="text-sm font-medium text-white">${item.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return `<section id="services" class="relative py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"></div>
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]"></div>
    <div class="relative mx-auto max-w-8xl px-6">
      <div class="reveal mx-auto mb-20 max-w-4xl text-center">
        <span class="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase text-primary">${s.eyebrow}</span>
        <h2 class="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">${s.heading}</h2>
        <p class="mx-auto max-w-3xl text-lg text-gray-300">${s.subhead}</p>
      </div>
      <div class="reveal-stagger space-y-12">
        ${s.items.map(card).join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderProcess(t) {
  const p = t.process;
  // Per-step accents from the original Process.tsx: blue -> purple -> primary.
  const stepColors = [
    { text: 'text-blue-400', bg: 'bg-blue-500', icon: 'search' },
    { text: 'text-purple-400', bg: 'bg-purple-500', icon: 'rocket' },
    { text: 'text-primary', bg: 'bg-primary', icon: 'trendingUp' },
  ];
  return `<section id="process" class="relative overflow-hidden bg-dark-800 py-24 md:py-32" data-connector-section>
    <canvas class="particle-bg absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>
    <div class="relative mx-auto max-w-8xl px-6">
      <div class="reveal mx-auto mb-20 max-w-3xl text-center">
        <h2 class="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">${p.heading}</h2>
        <p class="mb-4 text-2xl text-white">${p.lead}</p>
        <p class="mx-auto max-w-2xl text-lg text-gray-300">${p.subhead}</p>
      </div>

      <div class="relative">
        <div class="connector-track absolute left-0 right-0 top-8 hidden h-[2px] md:block"></div>
        <div class="connector-fill absolute left-0 top-8 hidden h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-primary md:block" data-connector-fill></div>
        <div class="reveal-stagger relative grid gap-12 md:grid-cols-3">
          ${p.steps
            .map(
              (s, i) => `<div class="reveal group relative pt-8">
            <div class="step-badge absolute left-1/2 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-700 bg-dark-900 transition-colors group-hover:border-white/20">
              <span class="flex h-12 w-12 items-center justify-center rounded-full ${stepColors[i].bg} text-xl font-bold text-black shadow-[0_0_20px_rgba(0,0,0,0.5)]">${s.n}</span>
            </div>
            <div class="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-dark-700/60 p-8 transition-colors hover:bg-dark-700">
              <div class="absolute right-0 top-0 p-4 opacity-10">${iconMarkup(stepColors[i].icon, 'w-[100px] h-[100px]')}</div>
              <div class="relative z-10 mt-6 text-center">
                <h3 class="mb-4 font-display text-2xl font-bold text-white">${s.title}</h3>
                <p class="mb-8 leading-relaxed text-gray-300">${s.desc}</p>
                <div class="space-y-3 text-left">
                  <div class="rounded-lg border border-white/5 bg-black/20 p-4">
                    <div class="mb-1 text-xs font-bold uppercase tracking-wider ${stepColors[i].text}">Deliverables</div>
                    <p class="text-sm text-gray-200">${s.deliverables}</p>
                  </div>
                  <div class="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 p-4">
                    <div class="text-xs font-bold uppercase tracking-wider ${stepColors[i].text}">Timeline</div>
                    <div class="font-mono text-sm text-white">${s.timeline}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            )
            .join('\n          ')}
        </div>
      </div>

      <div class="reveal mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-primary/20 p-8 text-center backdrop-blur-sm">
        <p class="text-xl text-gray-200">${p.bannerHtml}</p>
        <a href="#contact" class="btn-interactive mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-dark-900 hover:bg-primary">${p.cta}</a>
      </div>
    </div>
    ${waveDivider({ position: 'top', fill: '#050507' })}
    ${waveDivider({ position: 'bottom', fill: '#050507' })}
  </section>`;
}

export function renderVoiceAgentFull(t) {
  const v = t.voiceSystems;
  return `<section id="voice-agent" class="relative overflow-hidden py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true" style="background:radial-gradient(640px 420px at 50% 42%, rgba(0,240,255,0.05), transparent 70%), radial-gradient(520px 380px at 82% 12%, rgba(112,0,255,0.06), transparent 70%)"></div>
    <div class="relative mx-auto max-w-8xl px-6">
      <div class="reveal text-center">
        <span class="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-primary">${v.eyebrow}</span>
        <h2 class="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${v.heading}</h2>
        <p class="mx-auto mt-4 max-w-3xl text-lg text-gray-400">${v.subhead}</p>
      </div>

      <div class="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_280px_1fr]">
        <div class="space-y-5">
          ${[v.features[0], v.features[2]]
            .map(
              (f, i) => `<div class="reveal reveal-from-left rounded-2xl border border-white/5 bg-white/[0.03] p-5" style="transition-delay:${200 + i * 100}ms">
            <h3 class="font-display text-xl font-semibold text-white">${f.title}</h3>
            <p class="mt-1 text-gray-400">${f.desc}</p>
          </div>`
            )
            .join('\n          ')}
        </div>

        <div class="reveal voice-orb relative mx-auto h-64 w-64">
          <div class="mic-orb-ring absolute inset-0 rounded-full border-2 border-primary/40"></div>
          <div class="orb-glow absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
            <div class="flex h-full w-full flex-col items-center justify-center rounded-full bg-dark-900">
              ${iconMarkup('phone', 'w-10 h-10 text-white mb-3')}
              <div class="flex h-6 items-end gap-1">
                <span class="eq-bar w-1 rounded-full bg-primary" style="height:8px"></span>
                <span class="eq-bar w-1 rounded-full bg-primary" style="height:14px"></span>
                <span class="eq-bar w-1 rounded-full bg-primary" style="height:20px"></span>
                <span class="eq-bar w-1 rounded-full bg-primary" style="height:14px"></span>
                <span class="eq-bar w-1 rounded-full bg-primary" style="height:8px"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          ${[v.features[1], v.features[3]]
            .map(
              (f, i) => `<div class="reveal reveal-from-right rounded-2xl border border-white/5 bg-white/[0.03] p-5" style="transition-delay:${200 + i * 100}ms">
            <h3 class="font-display text-xl font-semibold text-white">${f.title}</h3>
            <p class="mt-1 text-gray-400">${f.desc}</p>
          </div>`
            )
            .join('\n          ')}
        </div>
      </div>

      <div class="reveal mt-14 rounded-2xl border border-white/10 bg-dark-800/40 p-6 md:p-8">
        <p class="mb-6 text-center text-gray-400">${v.stackHeading}</p>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          ${v.stack
            .map(
              (name) => `<div class="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark-900/60 px-3 py-4 transition-transform hover:-translate-y-1">
            <span class="text-sm text-gray-300">${name}</span>
          </div>`
            )
            .join('\n          ')}
        </div>
        <div class="mt-8 text-center">
          <span class="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">${iconMarkup('activity', 'w-4 h-4')} ${v.statusLine}</span>
        </div>
      </div>
    </div>
  </section>`;
}

export function renderAbout(t) {
  const a = t.about;
  let lead = a.lead;
  (a.leadBoldWords || []).forEach((w) => {
    lead = lead.replace(w, `<strong class="font-semibold text-white">${w}</strong>`);
  });
  return `<section id="about" class="relative overflow-hidden py-24 md:py-32">
    <canvas class="particle-bg absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>
    <div class="relative mx-auto max-w-5xl px-6">
      <div class="reveal mb-16 text-center">
        <h2 class="mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text font-display text-4xl font-bold text-transparent sm:text-6xl">${a.heading}</h2>
        <p class="mb-8 text-xl font-light leading-relaxed text-gray-300 md:text-2xl">${lead}</p>
        <p class="mx-auto max-w-2xl text-lg text-gray-400">${a.tagline}</p>
      </div>

      <div class="grid items-center gap-8 md:grid-cols-2">
        <div class="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-dark-700 to-dark-900 p-10">
          <h3 class="mb-6 flex items-center gap-2 text-xl font-bold text-primary"><span class="h-[2px] w-8 bg-primary"></span> ${a.missionLabel}</h3>
          <p class="font-display text-2xl font-bold leading-tight text-white md:text-3xl">${a.mission}</p>
        </div>

        <div class="reveal flex flex-col gap-6">
          ${a.stats
            .map(
              (s) => `<div class="flex items-center gap-6 rounded-2xl border border-white/5 bg-dark-800/60 p-8">
            <div class="shrink-0 font-display text-4xl font-bold text-white">${s.stat}</div>
            <div class="text-sm text-gray-300">${s.desc}</div>
          </div>`
            )
            .join('\n          ')}
          <div class="flex items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-blue-600/10 p-8 text-center">
            <span class="font-medium text-primary">${a.statCallout}</span>
          </div>
        </div>
      </div>
    </div>
    ${waveDivider({ position: 'bottom', fill: '#0a0a12' })}
  </section>`;
}

export function renderContact(t) {
  const c = t.contact;
  const f = c.form;
  return `<section id="contact" class="-mt-px bg-dark-800 py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="reveal mb-14 rounded-3xl border border-white/10 bg-gradient-to-br from-dark-700 to-dark-900 p-8 shadow-[0_0_40px_rgba(0,240,255,0.1)] md:p-10">
        <h2 class="mb-4 max-w-4xl font-display text-3xl font-bold sm:text-5xl">${c.panelHeading}</h2>
        <p class="mb-7 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">${c.panelSubhead}</p>
        <a href="#contact-form" class="btn-interactive inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-dark-900 hover:bg-gray-100">${c.panelCta} ${iconMarkup('chevronDown', 'w-4 h-4 -rotate-90')}</a>
      </div>

      <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div class="reveal">
          <h3 class="mb-4 font-display text-2xl font-semibold sm:text-3xl">${c.formIntroHeading}</h3>
          <p class="mb-8 text-base leading-relaxed text-gray-300 md:text-lg">${c.formIntroSubhead}</p>

          <div class="space-y-4">
            <a href="mailto:${t.footer.contactEmail}" class="btn-interactive group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-primary/40 hover:bg-primary/5">
              <div class="rounded-xl bg-primary/10 p-3.5 text-primary transition-transform group-hover:scale-105">${iconMarkup('mail', 'w-6 h-6')}</div>
              <div>
                <h4 class="mb-1 font-semibold text-white">${c.emailCard.title}</h4>
                <p class="text-gray-300 transition-colors group-hover:text-white">${c.emailCard.value}</p>
              </div>
            </a>
            <div class="grid gap-4 sm:grid-cols-2">
              <a href="${t.footer.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-interactive group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-primary/40 hover:bg-primary/5">
                <div class="rounded-lg bg-[#0077b5]/10 p-2.5 text-[#0077b5] transition-transform group-hover:scale-105">${iconMarkup('linkedin', 'w-5 h-5')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-white">${c.linkedinCard.title}</h4>
                  <p class="text-xs text-gray-300 transition-colors group-hover:text-white">${c.linkedinCard.desc}</p>
                </div>
              </a>
              <a href="${t.footer.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn-interactive group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-primary/40 hover:bg-primary/5">
                <div class="rounded-lg bg-[#E1306C]/10 p-2.5 text-[#E1306C] transition-transform group-hover:scale-105">${iconMarkup('instagram', 'w-5 h-5')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-white">${c.instagramCard.title}</h4>
                  <p class="text-xs text-gray-300 transition-colors group-hover:text-white">${c.instagramCard.desc}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div id="contact-form" class="reveal rounded-3xl border border-white/10 bg-dark-900/75 p-7 backdrop-blur-sm md:p-8">
          <form data-contact-form action="${f.endpoint}" method="POST" data-submit-label="${f.submit}" data-submitting-label="${f.submitting}">
            <div class="mb-5 grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-300">${f.firstName}</label>
                <input name="firstName" required type="text" aria-label="${f.firstName}" class="w-full rounded-lg border border-white/10 bg-dark-900 p-3 text-white form-field outline-none focus:border-primary" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-300">${f.lastName}</label>
                <input name="lastName" required type="text" aria-label="${f.lastName}" class="w-full rounded-lg border border-white/10 bg-dark-900 p-3 text-white form-field outline-none focus:border-primary" />
              </div>
            </div>
            <div class="mb-5">
              <label class="mb-2 block text-sm font-medium text-gray-300">${f.email}</label>
              <input name="email" required type="email" aria-label="${f.email}" class="w-full rounded-lg border border-white/10 bg-dark-900 p-3 text-white form-field outline-none focus:border-primary" />
            </div>
            <div class="mb-5">
              <label class="mb-2 block text-sm font-medium text-gray-300">${f.interest}</label>
              <select name="interest" aria-label="${f.interest}" class="w-full appearance-none rounded-lg border border-white/10 bg-dark-900 p-3 text-white form-field outline-none focus:border-primary">
                ${f.interestOptions.map((o) => `<option>${o}</option>`).join('')}
              </select>
            </div>
            <div class="mb-7">
              <label class="mb-2 block text-sm font-medium text-gray-300">${f.message}</label>
              <textarea name="message" required rows="4" aria-label="${f.message}" class="w-full rounded-lg border border-white/10 bg-dark-900 p-3 text-white form-field outline-none focus:border-primary"></textarea>
            </div>
            <button type="submit" data-submit-btn class="btn-interactive flex w-full items-center justify-center gap-2 rounded-lg bg-white py-4 font-bold text-dark-900 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70">
              <svg data-submit-spinner class="spin-loader hidden h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" opacity="0.25" /><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
              <span data-submit-label-el>${f.submit}</span>
            </button>
            <p data-form-error class="mt-4 hidden text-center text-sm text-red-400">${f.errorMessage}</p>
          </form>
          <div data-form-success class="hidden min-h-[400px] flex-col items-center justify-center text-center">
            <div class="success-pop mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">${iconMarkup('check', 'w-10 h-10 text-green-500')}</div>
            <h3 class="mb-2 text-2xl font-bold text-white">${f.successTitle}</h3>
            <p class="text-gray-300">${f.successBody}</p>
            <button type="button" data-send-another class="link-hover mt-8 text-sm font-medium text-primary hover:text-white">${f.sendAnother}</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function renderSocialProof(t) {
  const s = t.socialProof;
  return `<section class="-mt-px bg-dark-800 py-16">
    <div class="mx-auto max-w-8xl px-6">
      <p class="reveal text-center font-display text-2xl font-semibold text-white">${s.heading}</p>
      <p class="reveal mt-2 text-center text-gray-400">${s.sub}</p>
      <div class="reveal-stagger mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        ${s.testimonials
          .map(
            (q) => `<figure class="reveal border-l-2 border-primary/40 pl-6">
          <blockquote class="leading-relaxed text-gray-300">“${q.quote}”</blockquote>
          <figcaption class="mt-4 flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 text-sm font-semibold text-white">${q.name.charAt(0)}</span>
            <span class="text-sm">
              <span class="block font-medium text-white">${q.name}</span>
              <span class="block text-gray-400">${q.role}, ${q.company}</span>
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
  return `<section id="how-it-works" class="-mt-px bg-dark-800 py-24 md:py-32" data-connector-section>
    <div class="mx-auto max-w-8xl px-6">
      <div class="reveal max-w-2xl">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${h.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${h.subhead}</p>
      </div>
      <div class="relative mt-16">
        <div class="connector-track absolute left-0 right-0 top-8 hidden h-[2px] md:block"></div>
        <div class="connector-fill absolute left-0 top-8 hidden h-[2px] w-full md:block" data-connector-fill></div>
        <div class="reveal-stagger relative grid gap-10 md:grid-cols-3">
          ${h.steps
            .map(
              (s) => `<div class="reveal relative rounded-2xl border border-white/10 bg-dark-800/40 p-8">
          <span class="font-display text-5xl font-bold text-white/10">${s.n}</span>
          <h3 class="mt-4 text-xl font-semibold text-white">${s.title}</h3>
          <p class="mt-3 text-gray-400">${s.desc}</p>
        </div>`
            )
            .join('\n          ')}
        </div>
      </div>
    </div>
  </section>`;
}

export function renderFeatures(t) {
  const f = t.features;
  return `<section id="features" class="py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="reveal max-w-2xl">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${f.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${f.subhead}</p>
      </div>
      <!-- Asymmetric bento: featured lead tile (2 cols) + 7 tiles = 9 cells = 3 exact rows at lg;
           the last tile spans 2 at sm so the 2-col layout stays gapless too. -->
      <div class="reveal-stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${f.items
          .map((i, idx) => {
            const isFeatured = idx === 0;
            const isLast = idx === f.items.length - 1;
            const span = isFeatured ? ' sm:col-span-2' : isLast ? ' sm:col-span-2 lg:col-span-1' : '';
            return `<div class="reveal rounded-2xl border border-white/5 bg-white/[0.03] transition-colors hover:bg-white/[0.06] ${isFeatured ? 'p-8' : 'p-6'}${span}">
          ${
            i.icon === 'phone'
              ? micOrbAccent()
              : `<div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-primary/20 to-secondary/20 text-primary">${iconMarkup(i.icon, 'w-5 h-5')}</div>`
          }
          <h3 class="mt-4 ${isFeatured ? 'font-display text-2xl font-bold' : 'font-semibold'} text-white">${i.title}</h3>
          <p class="mt-2 ${isFeatured ? 'max-w-xl text-base' : 'text-sm'} text-gray-400">${i.desc}</p>
        </div>`;
          })
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

export function renderPricing(t) {
  const p = t.pricing;
  const tierCard = (tier) => `<div class="reveal card-lift ${tier.mostPopular ? 'card-featured border-primary/60 bg-gradient-to-b from-primary/10 to-dark-800/60' : 'border-white/10 bg-dark-800/40'} relative flex flex-col rounded-2xl border p-8">
          ${tier.mostPopular ? `<span class="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-dark-900">${p.mostPopular}</span>` : ''}
          <h3 class="text-lg font-semibold text-white">${tier.name}</h3>
          <p class="mt-1 text-sm text-gray-400">${tier.tagline}</p>
          <p class="mt-6">
            <span class="price-monthly"><span class="font-display text-4xl font-bold text-white">€${tier.priceMonthly}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></span>
            <span class="price-annual hidden"><span class="font-display text-4xl font-bold text-white">€${tier.priceAnnual}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></span>
          </p>
          <ul class="mt-6 flex-1 space-y-3 text-sm text-gray-300">
            ${tier.features.map((f) => `<li class="flex gap-2"><span class="mt-0.5 text-primary">${iconMarkup('check', 'w-4 h-4')}</span><span>${f}</span></li>`).join('\n            ')}
          </ul>
          <p class="mt-6 text-xs text-gray-400">${p.overageLabel}: ${tier.overage}</p>
          <a href="/${t.lang}/coming-soon/" class="btn-interactive mt-6 block rounded-full ${tier.mostPopular ? 'bg-white text-dark-900 hover:bg-gray-100' : 'border border-white/15 text-white hover:border-primary/50'} px-5 py-3 text-center font-semibold">${p.ctaTier}</a>
        </div>`;

  const scaleCard = `<div class="reveal card-lift flex flex-col rounded-2xl border border-white/10 bg-dark-800/40 p-8">
          <h3 class="text-lg font-semibold text-white">${p.scale.name}</h3>
          <p class="mt-1 text-sm text-gray-400">${p.scale.tagline}</p>
          <p class="mt-6"><span class="font-display text-4xl font-bold text-white">${p.scale.priceFrom}</span><span class="text-gray-400">${p.perMonth} ${p.vatSuffix}</span></p>
          <ul class="mt-6 flex-1 space-y-3 text-sm text-gray-300">
            ${p.scale.features.map((f) => `<li class="flex gap-2"><span class="mt-0.5 text-primary">${iconMarkup('check', 'w-4 h-4')}</span><span>${f}</span></li>`).join('\n            ')}
          </ul>
          <a href="mailto:${t.footer.contactEmail}?subject=Scale%20plan" class="btn-interactive mt-6 block rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-white hover:border-primary/50">${p.ctaScale}</a>
        </div>`;

  return `<section id="pricing" class="relative overflow-hidden py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true" style="background:radial-gradient(720px 480px at 38% 55%, rgba(0,240,255,0.04), transparent 70%)"></div>
    <div class="relative mx-auto max-w-8xl px-6">
      <div class="reveal max-w-2xl">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${p.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${p.subhead}</p>
      </div>

      <div class="reveal mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-dark-800/60 p-1" id="pricing-toggle" role="group">
        <button type="button" data-pricing-period="monthly" class="pricing-toggle-btn rounded-full px-5 py-2 text-sm font-medium text-dark-900 bg-primary" aria-pressed="true">${p.toggle.monthly}</button>
        <button type="button" data-pricing-period="annual" class="pricing-toggle-btn rounded-full px-5 py-2 text-sm font-medium text-gray-300" aria-pressed="false">${p.toggle.annual} <span class="text-primary">${p.toggle.save}</span></button>
      </div>

      <div class="reveal-stagger mt-10 grid gap-6 lg:grid-cols-4">
        ${p.tiers.map(tierCard).join('\n        ')}
        ${scaleCard}
      </div>

      <p class="mt-8 text-sm text-gray-400">${p.setupNote}</p>

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
  return `<section class="border-y border-white/5 bg-dark-800 py-24 md:py-32">
    <div class="mx-auto max-w-8xl px-6">
      <div class="reveal max-w-2xl">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${c.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${c.subhead}</p>
      </div>
      <div class="reveal scrollbar-hide mt-12 overflow-x-auto rounded-2xl border border-white/10">
        <table class="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr class="border-b border-white/10 bg-dark-900/60">
              <th scope="col" class="p-5 text-sm font-medium text-gray-400">${c.cols.feature}</th>
              <th scope="col" class="p-5 text-sm font-semibold text-primary">${c.cols.aianchor}</th>
              <th scope="col" class="p-5 text-sm font-medium text-gray-400">${c.cols.human}</th>
              <th scope="col" class="p-5 text-sm font-medium text-gray-400">${c.cols.basic}</th>
            </tr>
          </thead>
          <tbody>
            ${c.rows
              .map(
                (r, idx) => `<tr class="comparison-row ${idx % 2 ? 'bg-dark-900/30' : ''} border-b border-white/5 last:border-0">
              <th scope="row" class="p-5 text-sm font-normal text-gray-300">${r.label}</th>
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

// Standalone "coming soon" page shown by the pricing "Get started" CTAs until the
// client portal launches. Same visual language as the hero; CSS-only entrance.
export function renderComingSoon(t, lang) {
  const c = t.comingSoon;
  return `<main id="main" class="coming-soon-main relative flex flex-col items-center justify-center overflow-hidden bg-hero-glow px-6 pb-24 pt-32 text-center">
    <div class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
    <canvas class="particle-bg absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true"></canvas>
    <div class="relative flex w-full max-w-2xl flex-col items-center">
      <p class="hero-load inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-xs uppercase text-primary backdrop-blur-sm" style="animation-delay:0ms"><span class="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00f0ff]"></span>${c.badge}</p>
      <h1 class="hero-load mt-10 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl" style="animation-delay:120ms"><span class="gradient-text">${c.heading}</span></h1>
      <p class="hero-load mt-10 max-w-lg text-xl leading-relaxed text-gray-300" style="animation-delay:240ms">${c.body}</p>
      <div class="hero-load mt-14 flex flex-col justify-center gap-5 sm:flex-row" style="animation-delay:360ms">
        <a href="/${lang}/#contact" class="group flex skew-x-[-10deg] items-center justify-center gap-3 bg-white px-8 py-4 text-lg font-bold text-black transition-colors duration-300 hover:bg-primary active:scale-[0.98]">
          <span class="flex skew-x-[10deg] items-center gap-2">${c.ctaPrimary} ${iconMarkup('arrowRight', 'w-5 h-5 transition-transform group-hover:translate-x-1')}</span>
        </a>
        <a href="/${lang}/#pricing" class="flex skew-x-[-10deg] items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-[0.98]">
          <span class="skew-x-[10deg]">${c.ctaSecondary}</span>
        </a>
      </div>
    </div>
  </main>`;
}

export function renderFaq(t) {
  const f = t.faq;
  return `<section id="faq" class="py-24 md:py-32">
    <div class="mx-auto max-w-4xl px-6">
      <div class="reveal max-w-2xl">
        <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">${f.heading}</h2>
        <p class="mt-4 text-lg text-gray-400">${f.subhead}</p>
      </div>
      <div class="reveal-stagger mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-dark-800/40">
        ${f.items
          .map(
            (item) => `<details class="reveal faq-item">
          <summary class="faq-question flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left">
            <span class="font-medium text-white">${item.q}</span>
            <span class="faq-chevron shrink-0 text-gray-400">${iconMarkup('chevronDown', 'w-5 h-5')}</span>
          </summary>
          <div class="faq-answer px-6 pb-6 text-gray-400">${item.a}</div>
        </details>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

