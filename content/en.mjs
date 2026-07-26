import { legalEn, legalMetaEn } from './legal-en.mjs';

export default {
  lang: 'en',
  htmlLang: 'en',
  locale: 'en_US',
  dir: 'ltr',

  meta: {
    home: {
      title: 'AiAnchor — AI growth systems for service businesses',
      description: 'We answer your calls, capture and qualify your leads, and automate your follow-ups — with every euro of value proven live in AiAnchor’s Command Hub.',
    },
    ...legalMetaEn,
    comingSoon: {
      title: 'Coming Soon | AiAnchor',
      description: 'Self-serve signup is almost ready. Until then, book a free demo and we will set everything up for you.',
    },
  },

  comingSoon: {
    badge: 'Command Hub',
    heading: 'Coming soon',
    body: 'Self-serve signup isn’t live just yet — we’re putting the finishing touches on AiAnchor’s Command Hub, the platform you log into. Until then, book a free demo and we’ll set your AI agent up and running for you, hands-on.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Back to plans',
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
    cta: 'Book a demo',
    // Accessible label for the compact lang-switch pill (visible text is just "GR"/"EN"):
    langSwitchLabel: 'Ελληνικά',
  },

  hero: {
    eyebrow: 'AI Growth Systems',
    headlineLine1: 'We Answer.',
    headlineLine2: 'We Book.',
    headlineLine3: 'You Grow.',
    subhead: 'AI-powered growth systems for service businesses. We answer your calls, capture and qualify your leads, and automate your follow-ups — and you see every euro of value live in AiAnchor’s Command Hub.',
    ctaPrimary: 'Book a demo',
    ctaPrimaryHref: '#contact',
    ctaSecondary: 'See how we prove it',
    ctaSecondaryHref: '#features',
    visualAlt: 'AiAnchor’s Command Hub — the live dashboard clients log into, showing call volume, revenue pipeline value and hours saved in real time',
  },

  services: {
    eyebrow: 'Business Gaps & Solutions',
    heading: 'Find the gaps. We run the fix.',
    subhead: 'Missed leads, manual follow-ups and scattered numbers are work we take off your team — and every fix shows up in AiAnchor’s Command Hub in real numbers.',
    items: [
      {
        problemTag: 'Business Gap 01',
        problemTitle: 'Missed Leads',
        problem: 'Calls, messages, and inquiries get lost when your team is busy, offline, or switching between tools.',
        impact: 'IMPACT: Lost revenue and slower response times',
        solutionTitle: 'We Answer & Qualify',
        solution: 'We answer every call and inquiry for you — 24/7, in Greek and English — ask the qualifying questions, book the appointment, and route the lead to the right person before it goes cold.',
        result: 'Every lead answered, qualified and visible in Command Hub the moment it lands.',
        icon: 'phone',
        solutionIcon: 'workflow',
      },
      {
        problemTag: 'Business Gap 02',
        problemTitle: 'Too Much Manual Work',
        problem: 'Your team spends time on repetitive admin tasks, follow-ups, updates, and handovers that could be automated.',
        impact: 'IMPACT: Less time for sales, service, and growth',
        solutionTitle: 'We Run the Follow-Ups',
        solution: 'Missed-call text-backs, follow-up sequences, reminders and review requests run for you across your calendar, CRM, email and internal tools — no one on your team has to remember.',
        result: 'Less manual work, fewer mistakes, and every action logged in Command Hub.',
        icon: 'activity',
        solutionIcon: 'shield',
      },
      {
        problemTag: 'Business Gap 03',
        problemTitle: 'Scattered Business Data',
        problem: 'Important information is spread across spreadsheets, inboxes, notes, apps, and disconnected platforms.',
        impact: 'IMPACT: Poor visibility and slower decisions',
        solutionTitle: 'We Prove It in Command Hub',
        solution: 'Every call we answer, lead we qualify, booking we make and euro of pipeline lands in AiAnchor’s Command Hub as it happens — no spreadsheets to reconcile, no reporting to chase.',
        result: 'One live view of what we’re doing and exactly what it’s worth.',
        icon: 'book',
        solutionIcon: 'chart',
      },
    ],
  },

  process: {
    heading: 'Need something bespoke? We build it too.',
    lead: 'Most businesses go live on a standard plan in days. When your operation needs custom integrations or a system built from scratch, that’s the Scale path — and this is how it runs.',
    subhead: 'Same team, same Command Hub proof layer — with the build scoped, delivered and supported around your workflow.',
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
        desc: 'We design and develop the first version of your bespoke system — custom integrations, CRM, internal tools or web app — wired into Command Hub.',
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
    cta: 'Book a demo',
  },

  voiceSystems: {
    eyebrow: 'AI-Powered',
    heading: 'AI Voice Systems',
    subhead: 'The voice layer we run for you: it picks up, answers questions, qualifies the caller and books the appointment — and every conversation is scored and logged in Command Hub.',
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
    lead: 'AiAnchor runs your calls, leads, bookings and follow-ups — and proves the value live through AiAnchor’s Command Hub.',
    leadBoldWords: ['calls, leads, bookings and follow-ups', 'AiAnchor’s Command Hub'],
    tagline: 'We don’t hand you a tool and wish you luck. We run the front desk and the busywork, and we show you what it earned.',
    missionLabel: 'Our Mission',
    mission: 'To give service businesses a front desk that never misses — and live proof of exactly what it’s worth.',
    stats: [
      { stat: '24/7', desc: 'Calls answered, leads qualified and appointments booked — nights, weekends and holidays included.' },
      { stat: 'Live', desc: 'Every call, lead, booking and euro of pipeline visible in Command Hub the moment it happens.' },
    ],
    statCallout: 'The ROI is on screen, not in a slide deck.',
  },

  contact: {
    panelHeading: 'Ready to stop missing calls, leads and bookings?',
    panelSubhead: 'Book a free demo — hear the agent handle a real call for your business, and see what Command Hub reports back.',
    panelCta: 'Book a demo',
    formIntroHeading: 'Tell us what’s slipping through.',
    formIntroSubhead: 'Missed calls, slow follow-ups, no visibility on what any of it is worth — tell us where it hurts and we’ll show you the fix running.',
    emailCard: { title: 'Email Us', value: 'info@aianchor.online' },
    linkedinCard: { title: 'LinkedIn', desc: 'See our updates' },
    instagramCard: { title: 'Instagram', desc: 'Behind the work' },
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      interest: 'Interest',
      interestOptions: [
        'AI call answering',
        'Lead capture & qualification',
        'Appointment booking',
        'Follow-up automation',
        'Command Hub / ROI reporting',
        'Bespoke build (Scale)',
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
    sub: 'Real estate agencies, clinics and service businesses run their front desk on AiAnchor.',
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
        title: 'We set up and run your AI agents & automations',
        desc: 'Done for you — your agent is trained on your services, pricing, availability and policies before it ever picks up, and we keep tuning it once it’s live.',
      },
      {
        n: '02',
        title: 'They answer calls, book appointments, capture leads — 24/7',
        desc: 'In Greek and English, day or night. No hold music, no voicemail, no missed opportunity. Every caller gets a real conversation and a real next step.',
      },
      {
        n: '03',
        title: 'You watch results and ROI live in AiAnchor’s Command Hub',
        desc: 'Command Hub is the platform you log into — every call, lead and booking lands there the moment it happens, with the numbers to prove what it’s worth.',
      },
    ],
  },

  features: {
    heading: 'How we prove it: AiAnchor’s Command Hub',
    subhead: 'Every service we run for you shows up here in real numbers — the calls answered, the leads qualified, the bookings made and what they’re worth.',
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
    subhead: 'Every plan is done-for-you service — the agents we set up and run, the minutes, the automations — with AiAnchor’s Command Hub included at every tier to prove what it returns. Prices shown are before VAT; switch to annual for roughly 20% off.',
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
        tagline: 'We answer your calls and log every lead — for solo operators.',
        featureGroups: [
          {
            label: 'Voice',
            items: [
              '1 AI agent (template wizard)',
              '150 minutes / month',
              '1 phone number',
              'Call summaries & sentiment',
            ],
          },
          {
            label: 'Automations & CRM',
            items: [
              'Command Hub — starter dashboard',
              'Knowledge base up to 20 entries',
            ],
          },
        ],
        overage: '€0.60 / min',
      },
      {
        name: 'Growth',
        priceMonthly: 249,
        priceAnnual: 199,
        mostPopular: true,
        tagline: 'We answer, qualify, book and follow up — with the full revenue pipeline in view.',
        featureGroups: [
          {
            label: 'Voice',
            items: [
              '2 AI agents',
              '400 minutes / month',
              'Booking integration',
            ],
          },
          {
            label: 'Automations & CRM',
            items: [
              'CRM with auto-created & valued leads',
              'Command Hub — revenue pipeline dashboard',
              'Listings / PDF import',
              '2 automation templates (missed-call text-back, follow-up sequences)',
            ],
          },
        ],
        overage: '€0.45 / min',
      },
      {
        name: 'Pro',
        priceMonthly: 549,
        priceAnnual: 449,
        tagline: 'We run your whole front desk — multilingual, with custom automations and the full ROI suite.',
        featureGroups: [
          {
            label: 'Voice',
            items: [
              '5 AI agents',
              '1,000 minutes / month',
              'Multilingual support',
            ],
          },
          {
            label: 'Automations & CRM',
            items: [
              'Command Hub — full ROI suite',
              'Up to 6 custom automations (text-back, follow-up sequences, review requests)',
            ],
          },
        ],
        extras: [
          'Priority support',
          'Guided onboarding',
        ],
        overage: '€0.35 / min',
      },
    ],
    scale: {
      name: 'Scale',
      priceFrom: 'from €1,200',
      tagline: 'Multi-location operations — and bespoke builds when you need something custom.',
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
    heading: 'AiAnchor vs. the alternatives',
    subhead: 'See what you’re actually comparing before you decide.',
    cols: { feature: '', aianchor: 'AiAnchor', human: 'Human receptionist', basic: 'Basic AI answering service' },
    rows: [
      { label: 'Available 24/7', aianchor: true, human: false, basic: true },
      { label: 'Books real appointments', aianchor: true, human: true, basic: false },
      { label: 'Knows your listings / services', aianchor: true, human: true, basic: false },
      { label: 'Analyzes every call (summary, sentiment)', aianchor: true, human: false, basic: false },
      { label: 'Creates & values leads automatically', aianchor: true, human: false, basic: false },
      { label: 'Live ROI dashboard in Command Hub', aianchor: true, human: false, basic: false },
      { label: 'Custom automations (follow-ups, text-back)', aianchor: true, human: false, basic: false },
      { label: 'Automates repetitive admin work', aianchor: true, human: false, basic: false },
      { label: 'Connects your existing tools (calendar, CRM, email)', aianchor: true, human: false, basic: false },
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
        a: 'Yes — every call gets an automatic summary and sentiment tag in Command Hub, and full recordings are available on request, subject to the retention settings on your account.',
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
        a: 'There’s no self-serve free trial right now. Instead, book a free demo — we’ll run the agent live on a real call flow for your business so you hear exactly what you’d be paying for before you commit to a plan.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most Starter and Growth setups go live within a few business days once we have your services, pricing and calendar details. Pro and Scale onboarding is guided and scoped with you directly.',
      },
      {
        q: 'How is this different from a regular phone menu (IVR)?',
        a: 'An IVR makes callers press buttons and follow a script. AiAnchor has a real conversation, understands intent, answers questions from your actual knowledge base, and books appointments — no menus, no dead ends.',
      },
    ],
  },

  footer: {
    tagline: 'We answer your calls, qualify your leads and automate your follow-ups — with every euro of value proven live in AiAnchor’s Command Hub.',
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
      heading: 'AiAnchor',
      // Registration details hidden until confirmed. Repopulate this array to show them again.
      lines: [],
    },
    contactEmail: 'info@aianchor.online',
    socials: { instagram: 'https://www.instagram.com/aianchor_/', linkedin: 'https://linkedin.com/company/aianchor' },
    copyright: (year) => `© ${year} AiAnchor. All rights reserved.`,
  },

  legal: legalEn,
};
