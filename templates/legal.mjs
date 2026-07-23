// Long-form legal page renderer.
// Typography follows the long-form rules from the installed UI skills: readable
// measure (max-w-3xl ~ 75ch), 1.6+ line-height on body, anchored headings with
// scroll offset for the fixed nav, and a ToC on long pages. Everything is plain
// HTML anchors, so it works identically with JS disabled.
//
// Section shape (all body keys optional):
//   { id, h, ps: [string], list: [string], table: { head: [string], rows: [[string]] } }

function renderTable(table) {
  return `<div class="scrollbar-hide mt-4 overflow-x-auto rounded-xl border border-white/10">
    <table class="w-full min-w-[560px] border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-white/10 bg-dark-900/60">
          ${table.head.map((h) => `<th scope="col" class="p-4 font-medium text-gray-300">${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${table.rows
          .map(
            (row) => `<tr class="border-b border-white/5 align-top last:border-0">
          ${row.map((cell) => `<td class="p-4 text-gray-400">${cell}</td>`).join('')}
        </tr>`
          )
          .join('\n        ')}
      </tbody>
    </table>
  </div>`;
}

function renderSection(s) {
  const parts = [];
  if (s.ps) parts.push(s.ps.map((p) => `<p class="mt-3 leading-relaxed text-gray-400">${p}</p>`).join('\n'));
  if (s.list)
    parts.push(
      `<ul class="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-400">${s.list.map((li) => `<li>${li}</li>`).join('\n')}</ul>`
    );
  if (s.table) parts.push(renderTable(s.table));
  return `<section id="${s.id}" class="scroll-mt-28">
      <h2 class="text-xl font-semibold text-white">${s.h}</h2>
      ${parts.join('\n      ')}
    </section>`;
}

export function renderLegalPage(t, page) {
  const l = t.legal;
  const d = l[page];
  const toc =
    d.sections.length > 4
      ? `<nav class="mt-8 rounded-2xl border border-white/10 bg-dark-800/60 p-5" aria-label="${l.tocLabel}">
        <p class="text-sm font-semibold text-white">${l.tocLabel}</p>
        <ol class="mt-3 space-y-1.5 text-sm">
          ${d.sections
            .map((s) => `<li><a href="#${s.id}" class="link-hover text-gray-400 hover:text-primary">${s.h}</a></li>`)
            .join('\n          ')}
        </ol>
      </nav>`
      : '';
  return `<main id="main" class="pt-32 pb-24">
    <div class="mx-auto max-w-3xl px-6">
      <h1 class="text-3xl font-bold text-white sm:text-4xl" style="text-wrap:balance">${d.title}</h1>
      <p class="mt-3 text-sm text-gray-400">${d.updated || l.lastUpdated}</p>
      <div class="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm leading-relaxed text-amber-300" role="note">
        ${l.draftNotice}
      </div>
      <p class="mt-8 text-lg leading-relaxed text-gray-300">${d.intro}</p>
      ${toc}
      <div class="mt-12 space-y-10">
        ${d.sections.map(renderSection).join('\n        ')}
      </div>
    </div>
  </main>`;
}
