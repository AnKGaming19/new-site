export const SITE_URL = 'https://aianchor.online';

// FLAG: the client/admin portal is planned to live on a separate subdomain.
// Update this constant once the real portal subdomain is confirmed/deployed.
export const APP_URL = 'https://app.aianchor.online';

export const LANGS = ['en', 'gr'];
export const DEFAULT_LANG = 'gr'; // fallback language for "/"

// 'gdpr' was replaced by the full 'dpa' page; a redirect in vercel.json keeps old links alive.
export const LEGAL_SLUGS = ['terms', 'privacy', 'dpa', 'cookies', 'ai-policy', 'trust'];

export const langPath = (lang, sub = '') => `/${lang}/${sub ? sub + '/' : ''}`;

export const legalPath = (lang, slug) => `/${lang}/${slug}/`;
