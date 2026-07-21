import { SITE_URL } from './config.mjs';

export function organizationSchema(content, lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIAnchor',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/og/og-image-${lang}.png`,
    email: content.footer.contactEmail,
    sameAs: Object.values(content.footer.socials),
    areaServed: { '@type': 'Country', name: 'Greece' },
  };
}

export function softwareApplicationSchema(content, lang) {
  const offers = [
    ...content.pricing.tiers.map((t) => ({
      '@type': 'Offer',
      name: t.name,
      price: String(t.priceMonthly),
      priceCurrency: 'EUR',
      description: t.tagline,
      url: `${SITE_URL}/${lang}/#pricing`,
    })),
    {
      '@type': 'Offer',
      name: content.pricing.scale.name,
      priceCurrency: 'EUR',
      description: content.pricing.scale.tagline,
      url: `${SITE_URL}/${lang}/#pricing`,
    },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AIAnchor',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${SITE_URL}/${lang}/`,
    description: content.meta.home.description,
    offers,
  };
}

export function faqPageSchema(content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function jsonLdScripts(schemas) {
  return schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n    ');
}
