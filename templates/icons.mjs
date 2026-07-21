// Minimal hand-authored stroke icons (Feather-style paths) — zero icon-font / JS library dependency.
const wrap = (inner, extra = '') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ${extra}>${inner}</svg>`;

export const icons = {
  anchor: wrap('<circle cx="12" cy="5" r="2"/><path d="M12 7v13M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M9 9l3-2 3 2"/>'),
  phone: wrap('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  calendar: wrap('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  users: wrap('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
  chart: wrap('<path d="M3 3v18h18"/><path d="M18.5 8.5l-5 5-4-4-4.5 4.5"/>'),
  workflow: wrap('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14M6.5 10v4a3 3 0 0 0 3 3H14"/>'),
  book: wrap('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
  activity: wrap('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
  shield: wrap('<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>'),
  menu: wrap('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  close: wrap('<path d="M18 6 6 18M6 6l12 12"/>'),
  chevronDown: wrap('<path d="m6 9 6 6 6-6"/>'),
  check: wrap('<path d="M20 6 9 17l-5-5"/>'),
  minus: wrap('<path d="M5 12h14"/>'),
  mail: wrap('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
  building: wrap('<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M9 9h1M9 13h1M14 9h1M14 13h1"/>'),
  stethoscope: wrap('<path d="M4.8 2.3A.3.3 0 1 0 5 3a.3.3 0 0 0-.2-.7M8 3v3a4 4 0 0 0 8 0V3M8 15a6 6 0 1 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>'),
  wrench: wrap('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 0 0 3 3l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.6-.7-.7-2.6z"/>'),
  utensils: wrap('<path d="M3 2v7c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V2M5 12v10M15 2v20M20 2c-2 2-3 4-3 7s1 5 3 5"/>'),
  instagram: wrap('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'),
  linkedin: wrap('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
};

export const iconMarkup = (name, className = 'w-6 h-6') =>
  (icons[name] || icons.activity).replace('<svg ', `<svg class="${className}" `);
