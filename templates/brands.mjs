// Hand-authored brand marks for the integrations strip, on the same 24x24 grid as
// icons.mjs. These are multi-colour (fill-based) rather than the stroke icons, so they
// keep each product recognisable at ~32px inside the drifting stack band.
//
// Keys are the slugified product name (see `brandLogo` below), so content/*.mjs can keep
// listing the stack as plain strings and stay translatable.

const svg = (inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">${inner}</svg>`;

export const brands = {
  airtable: svg(
    '<path fill="#FFBF00" d="M10.98 2.19 1.7 6.03c-.52.21-.51.95.01 1.15l9.32 3.7c.63.25 1.32.25 1.95 0l9.32-3.7c.52-.2.53-.94.01-1.15l-9.28-3.84a3.87 3.87 0 0 0-2.05 0Z"/>' +
      '<path fill="#26B5F8" d="M11.4 12.72v9.2c0 .45-.45.75-.86.59l-9.28-3.6a.62.62 0 0 1-.4-.58V9.13c0-.45.45-.75.86-.59l9.28 3.6c.24.1.4.32.4.58Z"/>' +
      '<path fill="#ED3049" d="m22.55 9.08-8.9 3.45a.62.62 0 0 0-.4.58v8.8c0 .45.45.75.86.59l8.9-3.46a.62.62 0 0 0 .4-.58V9.67c0-.45-.45-.75-.86-.59Z"/>'
  ),

  googlesheets: svg(
    '<path fill="#0F9D58" d="M13.5 2H7a1.75 1.75 0 0 0-1.75 1.75v16.5c0 .97.78 1.75 1.75 1.75h10a1.75 1.75 0 0 0 1.75-1.75V7.25L13.5 2Z"/>' +
      '<path fill="#fff" fill-opacity=".35" d="M13.5 2l5.25 5.25H13.5V2Z"/>' +
      '<path fill="#fff" d="M8.25 11.4h7.5v7.2h-7.5z"/>' +
      '<path stroke="#0F9D58" stroke-width="1.05" d="M8.25 13.8h7.5M8.25 16.2h7.5M12 11.4v7.2"/>'
  ),

  googlecalendar: svg(
    '<path fill="#fff" d="M6 6h12v12H6z"/>' +
      '<path fill="#4285F4" d="M6 4h6v2H6v6H4V6a2 2 0 0 1 2-2Z"/>' +
      '<path fill="#EA4335" d="M12 4h6a2 2 0 0 1 2 2v6h-2V6h-6V4Z"/>' +
      '<path fill="#FBBC04" d="M20 12v6a2 2 0 0 1-2 2h-6v-2h6v-6h2Z"/>' +
      '<path fill="#34A853" d="M4 12h2v6h6v2H6a2 2 0 0 1-2-2v-6Z"/>' +
      '<text x="12" y="15.9" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="8.2" font-weight="700" fill="#4285F4">31</text>'
  ),

  calcom: svg(
    '<rect width="24" height="24" rx="5.4" fill="#fff"/>' +
      '<path fill="#0B0B0F" d="M12.45 7.1a4.9 4.9 0 1 0 3.62 8.2l-1.78-1.4a2.65 2.65 0 1 1 0-3.8l1.78-1.4a4.88 4.88 0 0 0-3.62-1.6Z"/>'
  ),

  outlook: svg(
    '<path fill="#0A2767" d="M22.4 6.2 13.4 4l-1.7 8.6 1.7 8.4 9-2.2a.9.9 0 0 0 .6-.85V7.05a.9.9 0 0 0-.6-.85Z"/>' +
      '<path fill="#28A8EA" d="M23 7.4v9.2l-9.6 3.4V4.5L23 7.4Z"/>' +
      '<rect x="1" y="4.4" width="12.6" height="15.2" rx="1.7" fill="#0F6CBD"/>' +
      '<path fill="#fff" d="M7.3 7.9c-2.2 0-3.7 1.7-3.7 4.1s1.5 4.1 3.7 4.1S11 14.4 11 12s-1.5-4.1-3.7-4.1Zm0 6.4c-1.1 0-1.9-.95-1.9-2.3s.8-2.3 1.9-2.3 1.9.95 1.9 2.3-.8 2.3-1.9 2.3Z"/>'
  ),

  hubspot: svg(
    '<circle cx="16.5" cy="15.1" r="5.15" fill="none" stroke="#FF7A59" stroke-width="2.4"/>' +
      '<circle cx="18.9" cy="4.6" r="2.2" fill="#FF7A59"/>' +
      '<circle cx="4.6" cy="7.3" r="1.9" fill="#FF7A59"/>' +
      '<path stroke="#FF7A59" stroke-width="1.7" stroke-linecap="round" d="M18.9 6.9v3.5M6.3 8.5l5.5 4.1"/>'
  ),
};

// 'Google Sheets' -> 'googlesheets', 'Cal.com' -> 'calcom'. Anything without a mark
// falls back to a neutral dot so an unknown stack entry still renders.
export const brandKey = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

export const brandLogo = (name, className = 'h-8 w-8') => {
  const mark =
    brands[brandKey(name)] ||
    svg('<circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.75"/>');
  return mark.replace('<svg ', `<svg class="${className}" `);
};
