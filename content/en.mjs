export default {
  lang: 'en',
  htmlLang: 'en',
  locale: 'en_US',
  dir: 'ltr',

  meta: {
    home: {
      title: 'AIAnchor | AI Receptionists & Business Automation with a Live ROI Portal',
      description: 'AI voice receptionists that answer every call in Greek & English, book real appointments, and feed a client portal that shows leads, bookings and revenue live. Book a free demo.',
    },
    terms: {
      title: 'Terms of Service | AIAnchor',
      description: 'Terms of Service for AIAnchor AI receptionist and business automation services.',
    },
    privacy: {
      title: 'Privacy Policy | AIAnchor',
      description: 'How AIAnchor collects, uses and protects your data and your callers’ data.',
    },
    gdpr: {
      title: 'GDPR & Data Protection | AIAnchor',
      description: 'AIAnchor’s GDPR compliance, call recording disclosure, and Data Processing Agreement information.',
    },
    cookies: {
      title: 'Cookie Policy | AIAnchor',
      description: 'How AIAnchor uses cookies on aianchor.online.',
    },
  },

  skipLink: 'Skip to content',

  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    industries: 'Industries',
    pricing: 'Pricing',
    faq: 'FAQ',
    clientLogin: 'Client Login',
    cta: 'Start free',
    langSwitchLabel: 'Ελληνικά',
  },

  hero: {
    eyebrow: 'AI receptionists + business automation',
    headline: 'Never miss a call.',
    headlineLine2: 'Never guess your ROI.',
    subhead: 'AIAnchor builds AI receptionists and business automations for you — backed by a client portal that shows every lead, booking and euro of revenue pipeline live, so you never have to take our word for it.',
    ctaPrimary: 'Book a free demo',
    ctaPrimaryHref: 'mailto:info@aianchor.online?subject=Free%20demo%20request',
    ctaPrimaryFlag: 'FLAG: swap for real booking link (Calendly/Cal.com) when ready',
    ctaSecondary: 'See pricing',
    trustLine: 'No contracts on Starter · Cancel anytime · Set up in days, not months',
    visualAlt: 'AIAnchor client portal dashboard showing live call volume, revenue pipeline value and hours saved',
  },

  socialProof: {
    heading: 'Trusted by businesses across Greece',
    sub: 'Real estate agencies, clinics and service businesses run their front desk on AIAnchor.',
    testimonials: [
      { quote: 'PLACEHOLDER — drop in a real client quote here.', name: 'Client name', role: 'Owner', company: 'Company name' },
      { quote: 'PLACEHOLDER — drop in a real client quote here.', name: 'Client name', role: 'Manager', company: 'Company name' },
      { quote: 'PLACEHOLDER — drop in a real client quote here.', name: 'Client name', role: 'Director', company: 'Company name' },
    ],
  },

  howItWorks: {
    heading: 'How it works',
    subhead: 'From first call to closed deal, in three steps.',
    steps: [
      {
        n: '01',
        title: 'We build your AI agents & automations',
        desc: 'Or you spin one up yourself with our template wizard in minutes. Either way, your agent is trained on your services, pricing, availability and policies before it ever picks up.',
      },
      {
        n: '02',
        title: 'They answer calls, book appointments, capture leads — 24/7',
        desc: 'In Greek and English, day or night. No hold music, no voicemail, no missed opportunity. Every caller gets a real conversation and a real next step.',
      },
      {
        n: '03',
        title: 'You watch results and ROI live in your portal',
        desc: 'Every call, lead and booking lands in your dashboard the moment it happens — with the numbers to prove what it’s worth.',
      },
    ],
  },

  portal: {
    eyebrow: 'The AIAnchor Portal',
    heading: 'Your clients don’t trust promises. Show them numbers.',
    subhead: 'This is what makes AIAnchor different from an answering service: every call, every lead and every saved hour is measured and shown back to you in plain numbers — not a vague “it’s working great.”',
    bullets: [
      {
        title: 'Every call analyzed',
        desc: 'Automatic summary, sentiment and outcome for every single call — searchable, not buried in a spreadsheet.',
      },
      {
        title: 'Leads auto-created and valued',
        desc: 'Leads are created automatically and priced against your own listings or services, so your pipeline shows real euros, not guesses.',
      },
      {
        title: 'Hours and labor cost saved',
        desc: 'Computed from actual call durations and your team’s hourly cost — a real ROI number you can put in front of a client or your own board.',
      },
    ],
    shots: {
      revenue: { file: 'portal-revenue-pipeline.png', alt: 'Revenue pipeline dashboard card showing lead value and pipeline total in euros', label: 'Revenue pipeline' },
      voice: { file: 'portal-voice-agent-sentiment.png', alt: 'Voice agent card showing a live call with sentiment analysis and outcome tag', label: 'Voice agent + sentiment' },
      calls: { file: 'portal-calls-list.png', alt: 'Calls list with automatic AI-generated summaries for each call', label: 'Calls with summaries' },
      hours: { file: 'portal-hours-saved.png', alt: 'Hours saved and labor cost saved cards computed from real call durations', label: 'Hours & cost saved' },
    },
  },

  features: {
    heading: 'Everything your front desk needs, none of the payroll',
    subhead: 'One platform to answer, qualify, book and prove it.',
    items: [
      { icon: 'phone', title: 'AI voice receptionists (GR + EN)', desc: 'Natural, on-brand phone conversations in Greek and English, around the clock.' },
      { icon: 'calendar', title: 'Real bookings into your calendar', desc: 'Appointments land directly in the calendar you already use — no double-booking, no back-and-forth.' },
      { icon: 'users', title: 'Auto lead capture & CRM', desc: 'Every caller becomes a structured lead automatically, ready to work.' },
      { icon: 'chart', title: 'Revenue pipeline valuation', desc: 'Leads are valued against your real listings or services, not a flat estimate.' },
      { icon: 'workflow', title: 'Custom automations', desc: 'Missed-call text-back, follow-up sequences, review requests — built around how you actually work.' },
      { icon: 'book', title: 'Knowledge-base-grounded agents', desc: 'Your agent actually knows your listings, services and policies — it doesn’t improvise.' },
      { icon: 'activity', title: 'Live analytics & call recordings', desc: 'Full visibility into every conversation, with recordings available on request.' },
      { icon: 'shield', title: 'Spam filtering', desc: 'Robocalls and spam get filtered out before they waste your agent’s time — or yours.' },
    ],
  },

  industries: {
    heading: 'Built around how your industry actually books business',
    subhead: 'Templates trained for your vertical, not a generic script.',
    items: [
      {
        key: 'real-estate',
        flagship: true,
        title: 'Real Estate',
        line: 'Agents that know every listing and book viewings while you’re on-site with another client.',
        detail: 'Your AI agent answers with your active listings loaded in — price, availability, features — and books qualified viewings straight into your calendar, so no lead goes cold waiting for a callback.',
      },
      {
        key: 'clinics',
        title: 'Clinics',
        line: 'Patients get appointment slots instantly, day or night, without tying up front-desk staff.',
        detail: null,
      },
      {
        key: 'services',
        title: 'Service Businesses',
        line: 'Quotes, callouts and bookings handled the moment the phone rings, not when someone gets back to the office.',
        detail: null,
      },
      {
        key: 'hospitality',
        title: 'Restaurants & Hospitality',
        line: 'Reservations and questions answered instantly, even at your busiest hour.',
        detail: null,
      },
    ],
  },

  pricing: {
    heading: 'Simple pricing, real ROI',
    subhead: 'Prices shown are before VAT. Switch to annual for roughly 20% off.',
    toggle: { monthly: 'Monthly', annual: 'Annual', save: 'Save ~20%' },
    vatSuffix: '+ VAT',
    perMonth: '/mo',
    mostPopular: 'Most popular',
    ctaTier: 'Get started',
    ctaScale: 'Talk to us',
    overageLabel: 'Overage rate',
    overageToggle: 'Overage rates',
    tiers: [
      {
        name: 'Starter',
        priceMonthly: 99,
        priceAnnual: 79,
        tagline: 'For solo operators dipping a toe in.',
        features: [
          '1 AI agent (template wizard)',
          '150 minutes / month',
          '1 phone number',
          'Call summaries & sentiment',
          'Basic dashboard',
          'Knowledge base up to 20 entries',
        ],
        overage: '€0.60 / min',
      },
      {
        name: 'Growth',
        priceMonthly: 249,
        priceAnnual: 199,
        mostPopular: true,
        tagline: 'For teams ready to see the pipeline, not just the calls.',
        features: [
          '2 AI agents',
          '400 minutes / month',
          'CRM with auto-created & valued leads',
          'Revenue pipeline dashboard',
          'Listings / PDF import',
          'Booking integration',
          '2 automation templates',
        ],
        overage: '€0.45 / min',
      },
      {
        name: 'Pro',
        priceMonthly: 549,
        priceAnnual: 449,
        tagline: 'For businesses running the whole front desk on AI.',
        features: [
          '5 AI agents',
          '1,000 minutes / month',
          'Full ROI suite',
          'Up to 6 custom automations',
          'Multilingual support',
          'Priority support',
          'Guided onboarding',
        ],
        overage: '€0.35 / min',
      },
    ],
    scale: {
      name: 'Scale',
      priceFrom: 'from €1,200',
      tagline: 'Multi-location and custom-integration businesses.',
      features: [
        'Multi-location support',
        'Unlimited automations',
        'Dedicated account manager',
        'Custom integrations',
      ],
    },
    setupNote: 'Setup fee of €250–500 applies on Growth and above (waived on annual plans).',
    overageNote: 'Overage minutes are billed at the rate shown for your plan once your monthly allowance is used.',
  },

  comparison: {
    heading: 'AIAnchor vs. the alternatives',
    subhead: 'See what you’re actually comparing before you decide.',
    cols: { feature: '', aianchor: 'AIAnchor', human: 'Human receptionist', basic: 'Basic AI answering service' },
    rows: [
      { label: 'Available 24/7', aianchor: true, human: false, basic: true },
      { label: 'Books real appointments', aianchor: true, human: true, basic: false },
      { label: 'Knows your listings / services', aianchor: true, human: true, basic: false },
      { label: 'Analyzes every call (summary, sentiment)', aianchor: true, human: false, basic: false },
      { label: 'Creates & values leads automatically', aianchor: true, human: false, basic: false },
      { label: 'Shows a live ROI dashboard', aianchor: true, human: false, basic: false },
      { label: 'Custom automations (follow-ups, text-back)', aianchor: true, human: false, basic: false },
      { label: 'Monthly cost', aianchor: '€99–549+', human: '€800–1,500', basic: '€150–400' },
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    subhead: 'Everything you were going to email us about anyway.',
    items: [
      {
        q: 'What does the AI actually sound like on the phone?',
        a: 'Natural and conversational — not a robotic IVR menu. It uses a modern voice model, handles interruptions and follow-up questions, and stays on-brand for your business. You can hear a live sample on a demo call.',
      },
      {
        q: 'Can it use my own business phone number?',
        a: 'Yes. We can port your existing number or forward calls to your AI agent’s number, so callers never notice a change on their end.',
      },
      {
        q: 'What happens if it doesn’t know the answer to something?',
        a: 'It says so honestly, offers to take a message or book a callback, and can escalate to a human on your team when a call needs a person. It never invents an answer it doesn’t have grounded in your knowledge base.',
      },
      {
        q: 'What languages does it support?',
        a: 'Greek and English out of the box, with the ability to detect and switch language mid-call. Pro plans support additional languages.',
      },
      {
        q: 'Can I listen to the calls it takes?',
        a: 'Yes — every call gets an automatic summary and sentiment tag in your portal, and full recordings are available on request, subject to the retention settings on your account.',
      },
      {
        q: 'Is this GDPR-compliant? Are calls recorded and disclosed?',
        a: 'Yes. Callers are informed that the call may be recorded and handled by an AI system at the start of the call. All data is stored within the EU, and we provide a Data Processing Agreement (DPA) to business customers on request. See our GDPR page for full detail.',
      },
      {
        q: 'How does pricing and overage actually work?',
        a: 'Each plan includes a set number of minutes per month. If you go over, extra minutes are billed at your plan’s overage rate (shown in the pricing table) — no surprise cutoffs, no forced upgrade.',
      },
      {
        q: 'Is there a trial?',
        a: 'You can book a free demo to hear the agent live on a real call flow for your business before you commit to a plan.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most Starter and Growth setups go live within a few business days once we have your services, pricing and calendar details. Pro and Scale onboarding is guided and scoped with you directly.',
      },
      {
        q: 'How is this different from a regular phone menu (IVR)?',
        a: 'An IVR makes callers press buttons and follow a script. AIAnchor has a real conversation, understands intent, answers questions from your actual knowledge base, and books appointments — no menus, no dead ends.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop losing calls to voicemail.',
    subhead: 'Book a free demo and hear your AI receptionist live before you decide on anything.',
    ctaPrimary: 'Book a free demo',
    ctaSecondary: 'See pricing',
  },

  footer: {
    tagline: 'AI receptionists and business automation, with the ROI to prove it.',
    columns: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
    },
    productLinks: { features: 'Features', pricing: 'Pricing', industries: 'Industries', faq: 'FAQ' },
    companyLinks: { contact: 'Contact', clientLogin: 'Client Login' },
    legalLinks: { terms: 'Terms of Service', privacy: 'Privacy Policy', gdpr: 'GDPR & DPA', cookies: 'Cookie Policy' },
    companyDetails: {
      heading: 'AIAnchor',
      lines: [
        'PLACEHOLDER — Registered company name',
        'ΓΕΜΗ (GEMI): PLACEHOLDER',
        'ΑΦΜ (VAT No.): PLACEHOLDER',
        'Registered address: PLACEHOLDER, Greece',
      ],
    },
    contactEmail: 'info@aianchor.online',
    socials: { instagram: 'https://www.instagram.com/aianchor_/', linkedin: 'https://linkedin.com/company/aianchor' },
    copyright: (year) => `© ${year} AIAnchor. All rights reserved.`,
  },

  legal: {
    lastUpdated: 'Last updated: 20 July 2026',
    placeholderNotice: 'PLACEHOLDER — replace with lawyer-reviewed text before this page goes live for real customers.',
    terms: {
      title: 'Terms of Service',
      intro: 'These Terms of Service (“Terms”) govern your use of AIAnchor’s AI receptionist and business automation services (the “Services”). This is placeholder text and does not constitute legal advice or a binding agreement until reviewed and approved by qualified counsel.',
      sections: [
        { h: '1. Acceptance of Terms', p: 'By accessing or using the Services, you agree to be bound by these Terms. PLACEHOLDER — confirm acceptance mechanism (click-through, signed order form, etc.) with counsel.' },
        { h: '2. Description of Services', p: 'AIAnchor provides AI-powered voice receptionist agents, lead capture, business automation workflows and a reporting portal, as further described in your order form or plan. PLACEHOLDER — add SLA and uptime commitments if any.' },
        { h: '3. Fees & Billing', p: 'Fees are billed monthly or annually per the plan selected at signup, plus VAT and any applicable overage charges. PLACEHOLDER — add refund policy, late payment terms, and price-change notice period.' },
        { h: '4. Customer Responsibilities', p: 'You are responsible for the accuracy of the information (services, pricing, policies) provided to train your AI agent. PLACEHOLDER — add acceptable use restrictions.' },
        { h: '5. Termination', p: 'Either party may terminate as described in your plan terms. PLACEHOLDER — define notice period and data export/deletion process on termination.' },
        { h: '6. Limitation of Liability', p: 'PLACEHOLDER — standard limitation-of-liability clause to be drafted by counsel.' },
        { h: '7. Governing Law', p: 'PLACEHOLDER — specify governing law and jurisdiction (expected: Greece).' },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'This Privacy Policy explains what data AIAnchor collects — from you as a customer, and from callers who interact with your AI agent — and how it is used. This is placeholder text pending legal review.',
      sections: [
        { h: '1. What We Collect', p: 'Account and billing information you provide, and call data (audio, transcripts, summaries, metadata) generated when your AI agent handles a call. PLACEHOLDER — itemize full data categories with counsel.' },
        { h: '2. How We Use It', p: 'To provide the Services, generate your portal analytics (call summaries, sentiment, lead valuation), and improve agent performance. PLACEHOLDER — confirm any use for model training and opt-out options.' },
        { h: '3. Data Storage & Location', p: 'Data is stored on infrastructure located within the European Union. PLACEHOLDER — name specific sub-processors and hosting regions.' },
        { h: '4. Data Retention', p: 'PLACEHOLDER — define retention periods for call recordings, transcripts and lead data, and how customers can request deletion.' },
        { h: '5. Your Rights', p: 'Under GDPR you have the right to access, rectify, delete and port your data. See our GDPR page for details. PLACEHOLDER — add contact process for data subject requests.' },
      ],
    },
    gdpr: {
      title: 'GDPR & Data Protection',
      intro: 'AIAnchor processes call data on behalf of its business customers. Here is a plain-language summary of how we handle that responsibly — full legal terms are pending counsel review.',
      sections: [
        { h: 'Caller disclosure', p: 'Every caller is informed at the start of the call that the conversation may be recorded and is being handled by an AI system, consistent with applicable law. PLACEHOLDER — confirm exact disclosure script per jurisdiction.' },
        { h: 'Data location', p: 'All customer and call data is stored on servers located within the EU. PLACEHOLDER — confirm specific hosting provider and region for your compliance documentation.' },
        { h: 'Data Processing Agreement (DPA)', p: 'A DPA is available on request for business customers who need one for their own compliance obligations. Contact us to request a copy. PLACEHOLDER — attach DPA template once finalized by counsel.' },
        { h: 'Data subject requests', p: 'Callers or customers who wish to access, correct or delete their data can contact us at the email below. PLACEHOLDER — define internal SLA for responding to requests.' },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro: 'This page explains how aianchor.online uses cookies. This is placeholder text pending legal review.',
      sections: [
        { h: 'Essential cookies', p: 'Used for basic site functionality (e.g. remembering your language preference). PLACEHOLDER — list exact cookies once analytics/marketing tools are finalized.' },
        { h: 'Analytics cookies', p: 'PLACEHOLDER — name analytics provider (if any) once selected, and add a consent banner if non-essential cookies are used.' },
        { h: 'Managing cookies', p: 'You can control or delete cookies through your browser settings at any time.' },
      ],
    },
  },
};
