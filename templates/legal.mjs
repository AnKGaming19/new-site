export function renderLegalPage(t, page) {
  const l = t.legal;
  const d = l[page];
  return `<main id="main" class="pt-32 pb-24">
    <div class="mx-auto max-w-3xl px-6">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">${d.title}</h1>
      <p class="mt-2 text-sm text-gray-400">${l.lastUpdated}</p>
      <p class="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary">${l.placeholderNotice}</p>
      <p class="mt-8 text-gray-300">${d.intro}</p>
      <div class="mt-10 space-y-8">
        ${d.sections
          .map(
            (s) => `<div>
          <h2 class="text-xl font-semibold text-white">${s.h}</h2>
          <p class="mt-2 text-gray-400">${s.p}</p>
        </div>`
          )
          .join('\n        ')}
      </div>
    </div>
  </main>`;
}
