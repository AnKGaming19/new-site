import { legalEn, legalMetaEn } from './legal-en.mjs';

export default {
  lang: 'en',
  htmlLang: 'en',
  locale: 'en_US',
  dir: 'ltr',

  meta: {
    home: {
      title: 'AIAnchor | AI Tailored Solutions & Infrastructures for Business Automation',
      description: 'AIAnchor builds custom CRM apps, web apps, automation workflows and AI voice systems that automate what slows your business down and scale what drives revenue — with a live portal that proves it.',
    },
    ...legalMetaEn,
  },

  skipLink: 'Skip to content',

  nav: {
    services: 'Services',
    process: 'Process',
    voiceAgent: 'Voice Systems',
    pricing: 'Pricing',
    faq: 'FAQ',
    about: 'About',
    clientLogin: 'Client Login',
    cta: 'Book a Strategy Call',
    // Accessible label for the compact lang-switch pill (visible text is just "GR"/"EN"):
    langSwitchLabel: 'Ελληνικά',
  },

  hero: {
    eyebrow: 'AI Tailored Infrastructures',
    headlineLine1: 'Intelligent',
    headlineLine2: 'Ecosystems',
    headlineLine3: 'Built to Scale',
    subhead: 'AIAnchor builds consulting-grade AI infrastructures, custom CRM apps, and web apps designed around your exact workflows. We eliminate slow responses, repetitive work, and lost opportunities.',
    ctaPrimary: 'Get Your Plan',
    ctaPrimaryHref: '#contact',
    ctaSecondary: 'Explore Solutions',
    ctaSecondaryHref: '#services',
    visualAlt: 'AIAnchor client portal dashboard — a real example of the systems we build, showing live call volume, revenue pipeline value and hours saved',
  },

  services: {
    eyebrow: 'Business Gaps & Solutions',
    heading: 'Find the gaps. Build the system.',
    subhead: 'We turn missed leads, manual work, and scattered data into custom CRM apps, web apps, and software systems that make your business easier to run.',
    items: [
      {
        problemTag: 'Business Gap 01',
        problemTitle: 'Missed Leads',
        problem: 'Calls, messages, and inquiries get lost when your team is busy, offline, or switching between tools.',
        impact: 'IMPACT: Lost revenue and slower response times',
        solutionTitle: 'Lead Capture System',
        solution: 'We build systems that capture new leads instantly, qualify them, and route them to the right place before opportunities go cold.',
        result: 'Every lead captured, organized, and ready for follow-up.',
        icon: 'phone',
        solutionIcon: 'workflow',
      },
      {
        problemTag: 'Business Gap 02',
        problemTitle: 'Too Much Manual Work',
        problem: 'Your team spends time on repetitive admin tasks, follow-ups, updates, and handovers that could be automated.',
        impact: 'IMPACT: Less time for sales, service, and growth',
        solutionTitle: 'Automation Workflows',
        solution: 'We connect your tools and automate repetitive processes across forms, calendars, CRMs, email, and internal systems.',
        result: 'Less manual work, fewer mistakes, and faster daily operations.',
        icon: 'activity',
        solutionIcon: 'shield',
      },
      {
        problemTag: 'Business Gap 03',
        problemTitle: 'Scattered Business Data',
        problem: 'Important information is spread across spreadsheets, inboxes, notes, apps, and disconnected platforms.',
        impact: 'IMPACT: Poor visibility and slower decisions',
        solutionTitle: 'Dashboards & Reporting',
        solution: 'We build dashboards that bring your key numbers, workflows, leads, clients, and performance into one clear view.',
        result: 'Clear visibility into what is happening and what needs attention.',
        icon: 'book',
        solutionIcon: 'chart',
      },
    ],
  },

  process: {
    heading: 'Our Process',
    lead: 'From idea to working system. Clear, practical, and built around your business.',
    subhead: 'We keep every project focused on the right features, smooth delivery, and a system your team can actually use.',
    steps: [
      {
        n: '1',
        title: 'Map',
        desc: 'We understand your workflow, tools, users, bottlenecks, and the system your business needs.',
        deliverables: 'Workflow map, feature scope, system roadmap.',
        timeline: '2–3 days',
      },
      {
        n: '2',
        title: 'Build',
        desc: 'We design and develop the first version of your CRM, dashboard, portal, automation, or custom web app.',
        deliverables: 'Core system, clean interface, database, integrations.',
        timeline: '7–14 days',
      },
      {
        n: '3',
        title: 'Launch & Improve',
        desc: 'We test, launch, support, and improve the system based on real business use and feedback.',
        deliverables: 'Launch support, fixes, improvements, ongoing updates.',
        timeline: 'Ongoing',
      },
    ],
    bannerHtml: 'Average first version: <strong>14 days</strong>. Built around your workflow, not generic templates.',
    cta: 'Book a Strategy Call',
  },

  voiceSystems: {
    eyebrow: 'AI-Powered',
    heading: 'AI Voice Systems',
    subhead: 'Intelligent voice automation that handles calls, answers questions, and drives real business outcomes — one capability inside the systems we build.',
    features: [
      { title: 'Instant Call Pickup', desc: 'Answers missed calls instantly and captures opportunities.' },
      { title: 'Smart Discovery', desc: 'Asks the right questions and understands client needs.' },
      { title: 'Appointment Booking', desc: 'Books appointments directly on your calendar automatically.' },
      { title: 'CRM Sync & Follow-Up', desc: 'Syncs leads and triggers follow-ups so nothing falls through.' },
    ],
    stackHeading: 'Works with your stack',
    stack: ['Airtable', 'Google Sheets', 'Google Calendar', 'Cal.com', 'Outlook', 'HubSpot'],
    statusLine: 'Never miss a lead. 24/7 availability. Instant qualification.',
  },

  about: {
    heading: 'Who We Are',
    lead: 'AIAnchor is a custom software development studio that builds web apps, CRMs, dashboards, client portals, and AI-enhanced systems for modern service businesses.',
    leadBoldWords: ['web apps', 'CRMs', 'dashboards', 'client portals', 'AI-enhanced systems'],
    tagline: 'Software development first. Automation second. AI when it creates real business value.',
    missionLabel: 'Our Mission',
    mission: 'To build the systems modern businesses actually need, so they can manage leads, clients, bookings, workflows, and operations in one place.',
    stats: [
      { stat: '30-50%', desc: 'Less time spent on manual admin after replacing disconnected tools with one system.' },
      { stat: '2-4 Weeks', desc: 'Typical time to launch a focused pilot or first production-ready system.' },
    ],
    statCallout: 'Measurable ROI as the system replaces repetitive work.',
  },

  contact: {
    panelHeading: 'Ready to build a system that moves your business forward?',
    panelSubhead: 'Book a free strategy call and let’s talk about the right solution for your business.',
    panelCta: 'Book a Strategy Call',
    formIntroHeading: 'Let’s plan the right build for your workflow.',
    formIntroSubhead: 'Tell us what you need. We’ll help you shape a practical system your team can actually use.',
    emailCard: { title: 'Email Us', value: 'info@aianchor.online' },
    linkedinCard: { title: 'LinkedIn', desc: 'See our updates' },
    instagramCard: { title: 'Instagram', desc: 'Behind the work' },
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      interest: 'Interest',
      interestOptions: [
        'Custom Web App',
        'CRM / Business System',
        'Dashboard / Analytics',
        'Client Portal',
        'Automation / Integrations',
        'AI-Enhanced System',
        'Other',
      ],
      message: 'Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent!',
      successBody: 'We’ve received your inquiry and will be in touch shortly.',
      sendAnother: 'Send another message',
      errorMessage: 'Something went wrong. Please try again later.',
      // FLAG: this is the original site's Formspree form ID — confirm it's still
      // wired to the right inbox in your Formspree dashboard, or replace it with
      // a new form's endpoint (https://formspree.io/f/YOUR_ID).
      endpoint: 'https://formspree.io/f/xnnzezlo',
    },
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

  features: {
    heading: 'Inside the AI voice & portal layer',
    subhead: 'One part of what we build — a full front-desk layer that answers, qualifies, books and proves it.',
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
        a: 'Yes. Callers are informed at the start of the call that they are speaking with an AI system and that the call is recorded. We sign a Data Processing Agreement (DPA) with business customers; see our DPA, AI Disclosure and Trust &amp; Security pages in the footer for full detail.',
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

  footer: {
    tagline: 'Tailored AI systems and infrastructure — CRM apps, web apps, automation and AI voice systems — with the ROI to prove it.',
    columns: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
    },
    productLinks: { services: 'Services', process: 'Process', voiceAgent: 'Voice Systems', pricing: 'Pricing', faq: 'FAQ' },
    companyLinks: { about: 'About', contact: 'Contact', clientLogin: 'Client Login' },
    legalLinks: {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      dpa: 'Data Processing (DPA)',
      cookies: 'Cookie Policy',
      aiPolicy: 'AI Disclosure',
      trust: 'Trust & Security',
    },
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

  legal: legalEn,
};
