import { legalEn, legalMetaEn } from './legal-en.mjs';

export default {
  lang: 'en',
  htmlLang: 'en',
  locale: 'en_US',
  dir: 'ltr',

  meta: {
    home: {
      title: 'AiAnchor — AI consulting, voice agents & automations',
      description: 'AI consulting that starts with your numbers, then voice agents, chatbots, lead qualification and onboarding automations we run for you — all proven live in AiAnchor’s Command Hub.',
    },
    ...legalMetaEn,
    comingSoon: {
      title: 'Coming Soon | AiAnchor',
      description: 'Self-serve signup is almost ready. Until then, book a free demo and we will set everything up for you.',
    },
    bookDemo: {
      title: 'Book a free demo | AiAnchor',
      description: 'Tell us what is slipping through and we will run the AI agent live on a real call flow for your business, then walk you through AiAnchor’s Command Hub. No commitment, no card.',
    },
  },

  comingSoon: {
    heading: 'Coming soon',
    body: 'Self-serve signup isn’t live yet. We’re still finishing AiAnchor’s Command Hub, the platform you log into. Until then, book a free demo and we’ll set your agents and automations up for you.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Back to plans',
  },

  // Standalone /en/book-demo/ page. Every "book a demo" CTA on the site points here;
  // the form posts to /api/book-demo, which sends the Resend confirmation.
  bookDemo: {
    heading: 'Book your free demo',
    subhead:
      'Tell us what’s slipping through — missed calls, unanswered chats, slow follow-ups, onboarding done by hand. We’ll run the agent live on a real call flow for your business and show you where AI actually pays.',
    bullets: [
      {
        icon: 'phone',
        title: 'You hear a real call',
        desc: 'Not a slide deck. The agent answers, qualifies and books in Greek or English, on a flow built around your business.',
      },
      {
        icon: 'workflow',
        title: 'You see the automations',
        desc: 'Chatbot capture, lead qualification, client onboarding and follow-up sequences, running end to end on your workflow.',
      },
      {
        icon: 'chart',
        title: 'You see the numbers',
        desc: 'We walk you through AiAnchor’s Command Hub: calls answered, leads qualified, bookings made and what they’re worth.',
      },
      {
        icon: 'clock',
        title: '30 minutes, and that’s it',
        desc: 'No card, no commitment. If it isn’t a fit we’ll tell you straight and you’ve lost half an hour.',
      },
    ],
    reassureTitle: 'What happens next',
    reassureBody:
      'You’ll get a confirmation email straight away. One of us reads every request personally and comes back to you within one business day to fix a time.',
    backLink: 'Back to the site',
    form: {
      heading: 'Tell us what you need',
      subheading: 'The more you give us, the more tailored the demo call is.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Work email',
      phone: 'Phone',
      phoneOptional: 'optional',
      company: 'Company',
      companyOptional: 'optional',
      website: 'Website',
      websiteOptional: 'optional',
      websitePlaceholder: 'yourcompany.gr',
      websiteHint: 'Helps us prep the agent with your real services before the call.',
      interest: 'What do you need most?',
      interestOptions: [
        'AI consulting / AI audit',
        'AI voice agents',
        'Chatbot (website or WhatsApp)',
        'Lead qualification',
        'Client onboarding automation',
        'Follow-up & CRM automation',
        'Command Hub / ROI reporting',
        'Custom build (CRM, internal tool or web app)',
        'Other',
      ],
      message: 'What’s slipping through right now?',
      messagePlaceholder:
        'e.g. we miss 20–30 calls a week after 6pm, nobody answers the website chat, and onboarding a new client takes us three emails.',
      privacyNote: 'We use these details only to arrange your demo.',
      privacyLink: 'Privacy Policy',
      submit: 'Request my free demo',
      submitting: 'Sending...',
      successTitle: 'Request received!',
      successBody:
        'Our team has received your free demo request. A confirmation is on its way to your inbox and we’ll contact you shortly to fix a time.',
      sendAnother: 'Send another request',
      errorMessage: 'Something went wrong. Please try again, or email us at info@aianchor.online.',
      endpoint: '/api/book-demo/',
    },
  },

  skipLink: 'Skip to content',

  nav: {
    services: 'Services',
    // Labels the #consulting section (audit -> roadmap -> deploy) as "Process" in the nav.
    consulting: 'Process',
    voiceAgent: 'Voice & Automations',
    commandHub: 'Command Hub',
    pricing: 'Pricing',
    faq: 'FAQ',
    about: 'About',
    clientLogin: 'Client Login',
    cta: 'Book a demo',
    // Accessible label for the compact lang-switch pill (visible text is just "GR"/"EN"):
    langSwitchLabel: 'Ελληνικά',
  },

  hero: {
    headlineLine1: 'Anchor every lead.',
    headlineLine2: '',
    headlineLine3: 'Prove what it’s worth.',
    subhead: 'AI consulting that finds where AI actually pays in your business — then the voice agents, chatbots, lead qualification and onboarding automations we run for you, with every result proven live in AiAnchor’s Command Hub.',
    ctaPrimary: 'Book a free demo',
    ctaPrimaryHref: '/en/book-demo/',
    ctaSecondary: 'See pricing',
    ctaSecondaryHref: '#pricing',
    visualAlt: 'AiAnchor’s Command Hub, the live dashboard clients log into, showing call volume, revenue pipeline value and hours saved',
  },

  services: {
    heading: 'Find the gaps. We run the fix.',
    subhead: 'Missed calls, unanswered chats, qualification and onboarding done by hand, numbers scattered across five tools. We advise on what to fix first, then run it for you — and you watch it happen in AiAnchor’s Command Hub.',
    items: [
      {
        problemTag: 'Business Gap 01',
        problemTitle: 'Missed Leads',
        problem: 'Calls, chats, messages and web forms get lost when your team is busy, offline, or switching between tools.',
        impact: 'IMPACT: Lost revenue and slower response times',
        solutionTitle: 'Voice Agents & Chatbots',
        solution: 'A voice agent answers every call, 24/7, in Greek and English, while chatbots handle your website and WhatsApp. They ask your qualifying questions, book the appointment and get the lead to the right person before it goes cold.',
        result: 'Every call and chat answered, qualified and visible in the Command Hub the moment it lands.',
        icon: 'phone',
        solutionIcon: 'workflow',
      },
      {
        problemTag: 'Business Gap 02',
        problemTitle: 'Too Much Manual Work',
        problem: 'Qualifying leads, chasing follow-ups, onboarding new clients and updating records eats your team’s day, one copy-paste at a time.',
        impact: 'IMPACT: Less time for sales, service, and growth',
        solutionTitle: 'Qualification & Onboarding Automations',
        solution: 'Lead qualification scores and routes every enquiry. Client onboarding collects details, sends the paperwork and books the kickoff on its own. Missed-call text-backs, follow-up sequences and reminders run across your CRM and calendar.',
        result: 'Less manual work, fewer dropped balls, and every action logged in the Command Hub.',
        icon: 'activity',
        solutionIcon: 'shield',
      },
      {
        problemTag: 'Business Gap 03',
        problemTitle: 'No Idea What AI Is Worth',
        problem: 'You keep hearing what AI could do, but nobody shows you where it pays in your business or what it actually returned.',
        impact: 'IMPACT: Guesswork instead of decisions',
        solutionTitle: 'Consulting + AiAnchor’s Command Hub',
        solution: 'We audit your lead flow, price every gap and hand you a ranked roadmap. Then every call answered, lead qualified and euro of pipeline lands in AiAnchor’s Command Hub as it happens — no spreadsheets to reconcile, no reporting to chase.',
        result: 'A clear plan up front, and one live view of what it’s returning.',
        icon: 'book',
        solutionIcon: 'chart',
      },
    ],
  },

  // AI consulting — the front half of the business. Same step-card layout the bespoke-build
  // section used to occupy; `focus` renders as the pill row under the steps.
  consulting: {
    heading: 'Start with consulting, not software.',
    lead: 'Before anything gets built, we work out where AI actually pays in your business — and where it doesn’t.',
    subhead: 'A short engagement that ends with a ranked roadmap, a business case in euros, and the first agents and automations live. Same team, same Command Hub.',
    steps: [
      {
        n: '1',
        title: 'Audit',
        desc: 'We map how leads reach you and what happens next: missed calls, unanswered chats, qualification by gut feel, onboarding done by hand, follow-ups nobody runs.',
        deliverables: 'Lead-flow audit, leak report, the cost of every gap.',
        timeline: '2–3 days',
      },
      {
        n: '2',
        title: 'Roadmap',
        desc: 'We rank every opportunity by revenue impact against effort, then agree exactly which voice agents, chatbots and automations get built first — and what each one has to return.',
        deliverables: 'Prioritised AI roadmap, business case, success metrics.',
        timeline: '2–3 days',
      },
      {
        n: '3',
        title: 'Deploy & optimise',
        desc: 'We build and launch what we agreed, wire it into your CRM and calendar, train your team on it, then keep tuning it against what the Command Hub reports.',
        deliverables: 'Live agents & automations, team training, monthly optimisation.',
        timeline: '7–14 days, then ongoing',
      },
    ],
    focusLabel: 'What we consult on',
    focus: [
      'AI voice agents',
      'Chatbots (site & WhatsApp)',
      'Lead qualification',
      'Client onboarding',
      'CRM & follow-up automation',
      'Command Hub reporting',
    ],
    // Secondary capability, deliberately understated: it's available when the roadmap calls
    // for it, but the AI work above is what we lead with.
    alsoNote: 'If the roadmap needs something built to sit behind it — a custom CRM, an internal tool, a website or a web app — we build those too, quoted separately.',
    bannerHtml: 'Most roadmaps land in <strong>under a week</strong>, and the first system is live inside two. Built on your numbers, not a generic template.',
    cta: 'Book a demo',
  },

  voiceSystems: {
    heading: 'AI voice agents & automations',
    subhead: 'The two engines we run for you: agents that answer, qualify and book across phone and chat, and automations that carry every lead through qualification, onboarding and follow-up inside your CRM. Everything reports into the Command Hub.',
    voiceLabel: 'Voice agents',
    features: [
      { title: 'Instant call pickup', desc: 'Answers every call in Greek or English, day or night, so no opportunity ever reaches voicemail.' },
      { title: 'Smart discovery & booking', desc: 'Asks your qualifying questions, works out what the caller actually wants and books straight into your calendar.' },
      { title: 'Warm handover to your team', desc: 'Calls that need a person reach the right person, with the context already written up and the lead already logged.' },
      { title: 'Spam screened out', desc: 'Robocalls and time-wasters get filtered before they waste your agent’s minutes, or your team’s attention.' },
    ],
    autoLabel: 'Automations',
    autoHeading: 'Automations that pick up where the conversation ends',
    autoSubhead: 'Chatbots, qualification, onboarding and follow-up — built around your workflow and running without anyone on your team remembering to start them.',
    automations: [
      { icon: 'bot', title: 'Chatbots on site & WhatsApp', desc: 'A grounded chatbot answers from your services, pricing and policies, captures the lead and hands off to a human when it should.' },
      { icon: 'users', title: 'Lead qualification system', desc: 'Every enquiry is scored against your own criteria — budget, service, timeline, location — then routed to the right person or dropped politely.' },
      { icon: 'rocket', title: 'Client onboarding', desc: 'New client says yes and the automation takes over: details collected, documents sent, kickoff booked, CRM and team updated.' },
      { icon: 'zap', title: 'Missed-call text-back', desc: 'A call that slips through gets an instant text back with a booking link, so the lead is recovered before it calls a competitor.' },
      { icon: 'workflow', title: 'Follow-up sequences', desc: 'Multi-step follow-ups, reminders and review requests run on their own schedule until the lead replies or closes.' },
      { icon: 'calendar', title: 'CRM sync & reminders', desc: 'Every lead lands in the CRM you already use with the next step scheduled, so nothing sits in an inbox waiting to be noticed.' },
    ],
    stackHeading: 'Works with your stack',
    stack: ['Airtable', 'Google Sheets', 'Google Calendar', 'Cal.com', 'Outlook', 'HubSpot'],
  },

  about: {
    heading: 'Who We Are',
    lead: 'AiAnchor is an AI consultancy that also runs what it recommends: voice agents, chatbots, lead qualification and onboarding automations, all proven live in AiAnchor’s Command Hub.',
    leadBoldWords: ['an AI consultancy that also runs what it recommends', 'AiAnchor’s Command Hub'],
    tagline: 'We don’t hand you a strategy deck and wish you luck, and we don’t hand you a tool either. We find where AI pays, we build it, we run it, and we show you what it earned.',
    missionLabel: 'Our Mission',
    mission: 'To make AI a decision service businesses can justify in euros, not a leap of faith.',
    stats: [
      { stat: '24/7', desc: 'Calls and chats answered, leads qualified, clients onboarded and appointments booked, including nights, weekends and holidays.' },
      { stat: 'Live', desc: 'Every call, chat, lead, booking and euro of pipeline visible in the Command Hub the moment it happens.' },
    ],
    statCallout: 'The ROI is on screen, not in a slide deck.',
  },

  contact: {
    panelHeading: 'Ready to find out where AI actually pays in your business?',
    panelSubhead: 'Book a free demo. You’ll hear the agent handle a real call for your business, see the automations running and see what AiAnchor’s Command Hub reports back.',
    panelCta: 'Book a demo',
    formIntroHeading: 'Tell us what’s slipping through.',
    formIntroSubhead: 'Missed calls, unanswered chats, qualification by gut feel, onboarding by email. Tell us where it hurts and we’ll show you the fix running.',
    emailCard: { title: 'Email Us', value: 'info@aianchor.online' },
    linkedinCard: { title: 'LinkedIn', desc: 'See our updates' },
    instagramCard: { title: 'Instagram', desc: 'Behind the work' },
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      interest: 'Interest',
      interestOptions: [
        'AI consulting / AI audit',
        'AI voice agents',
        'Chatbot (website or WhatsApp)',
        'Lead qualification',
        'Client onboarding automation',
        'Follow-up & CRM automation',
        'Command Hub / ROI reporting',
        'Custom build (CRM, internal tool or web app)',
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
    subhead: 'From AI audit to proven return, in three steps.',
    steps: [
      {
        n: '01',
        title: 'We audit your lead flow and agree the plan',
        desc: 'Consulting first. We map where leads come from and where they die, price each gap, and rank which agents, chatbots and automations get built first.',
      },
      {
        n: '02',
        title: 'We build and run the agents & automations',
        desc: 'Done for you. Voice agents and chatbots answer in Greek and English, qualification scores and routes every lead, and onboarding, text-backs and follow-up sequences run inside your CRM.',
      },
      {
        n: '03',
        title: 'You watch results and ROI live in AiAnchor’s Command Hub',
        desc: 'The Command Hub is the platform you log into. Every call, chat, lead and booking lands there the moment it happens, with the numbers to prove what it’s worth.',
      },
    ],
  },

  features: {
    heading: 'AiAnchor’s Command Hub',
    subhead: 'One platform you log into, where every agent and automation we run reports in real numbers: calls and chats answered, leads qualified, clients onboarded, bookings made and what they’re worth.',
    items: [
      { icon: 'phone', title: 'AI voice agents (GR + EN)', desc: 'Natural, on-brand phone conversations in Greek and English, around the clock, with summaries and sentiment on every call.' },
      { icon: 'bot', title: 'Chatbots on site & WhatsApp', desc: 'Web chat and WhatsApp answered from your own services and pricing, capturing the lead in the same pipeline as your calls.' },
      { icon: 'users', title: 'Lead qualification & routing', desc: 'Every enquiry scored against your criteria and routed to the right person, so your team only touches the ones worth touching.' },
      { icon: 'calendar', title: 'Real bookings into your calendar', desc: 'Appointments land directly in the calendar you already use. No double-booking, no back-and-forth.' },
      { icon: 'workflow', title: 'Onboarding & follow-up automations', desc: 'Client onboarding, missed-call text-backs, follow-up sequences and review requests, built around how you actually work.' },
      { icon: 'chart', title: 'Revenue pipeline valuation', desc: 'Leads are valued against your real listings or services, so the roadmap you agreed can be checked against euros.' },
      { icon: 'activity', title: 'Live analytics & call recordings', desc: 'Full visibility into every conversation and automation run, with recordings available on request.' },
      { icon: 'book', title: 'Knowledge-base-grounded agents', desc: 'Your agents know your listings, services and policies. They don’t improvise.' },
    ],
  },

  pricing: {
    heading: 'Simple pricing, real ROI',
    subhead: 'Every plan is done-for-you service: the AI audit that scopes it, the agents and automations we set up and run, and the minutes. AiAnchor’s Command Hub is included at every tier so you can see what it returns. Prices are before VAT, and annual billing saves you roughly 20%.',
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
        tagline: 'For solo operators. We answer your calls and log every lead.',
        featureGroups: [
          {
            label: 'Voice agents',
            items: [
              '1 AI voice agent (template wizard)',
              '150 minutes / month',
              '1 phone number',
              'Call summaries & sentiment',
            ],
          },
          {
            label: 'Automations & Command Hub',
            items: [
              'Onboarding audit call',
              'Command Hub (starter dashboard)',
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
        tagline: 'We answer, qualify, book and follow up across phone and chat, with the full revenue pipeline in view.',
        featureGroups: [
          {
            label: 'Voice agents & chat',
            items: [
              '2 AI voice agents',
              '400 minutes / month',
              'Website chatbot',
              'Booking integration',
            ],
          },
          {
            label: 'Automations & Command Hub',
            items: [
              'AI audit & roadmap session',
              'Lead qualification & routing',
              'CRM with auto-created & valued leads',
              'Command Hub (revenue pipeline dashboard)',
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
        tagline: 'We run your whole front desk in multiple languages, with client onboarding, custom automations and the full ROI suite.',
        featureGroups: [
          {
            label: 'Voice agents & chat',
            items: [
              '5 AI voice agents',
              '1,000 minutes / month',
              'Website + WhatsApp chatbots',
              'Multilingual support',
            ],
          },
          {
            label: 'Automations & Command Hub',
            items: [
              'Client onboarding automation',
              'Up to 6 custom automations (text-back, follow-up sequences, review requests)',
              'Command Hub (full ROI suite)',
            ],
          },
        ],
        extras: [
          'Quarterly AI consulting review',
          'Priority support',
          'Guided onboarding',
        ],
        overage: '€0.35 / min',
      },
    ],
    scale: {
      name: 'Scale',
      priceFrom: 'from €1,200',
      tagline: 'Multi-location operations with a dedicated AI consultant on the account.',
      features: [
        'Multi-location support',
        'Unlimited automations',
        'Dedicated AI consultant',
        'Monthly roadmap reviews',
        'Custom integrations with your stack',
        'Custom builds on request (quoted separately)',
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
      { label: 'Handles website chat & WhatsApp too', aianchor: true, human: false, basic: false },
      { label: 'Qualifies and routes every lead to your criteria', aianchor: true, human: false, basic: false },
      { label: 'Analyzes every call (summary, sentiment)', aianchor: true, human: false, basic: false },
      { label: 'Automates client onboarding', aianchor: true, human: false, basic: false },
      { label: 'Custom automations (follow-ups, text-back)', aianchor: true, human: false, basic: false },
      { label: 'Live ROI dashboard in AiAnchor’s Command Hub', aianchor: true, human: false, basic: false },
      { label: 'AI consulting: audit, roadmap & ongoing optimisation', aianchor: true, human: false, basic: false },
      { label: 'Connects your existing tools (CRM, calendar, chat)', aianchor: true, human: false, basic: false },
      { label: 'Monthly cost', aianchor: '€99–549+', human: '€800–1,500', basic: '€150–400' },
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    subhead: 'Everything you were going to email us about anyway.',
    items: [
      {
        q: 'Can I hire you for the consulting on its own?',
        a: 'Yes. The audit and roadmap stand alone: you get the lead-flow audit, the priced list of gaps and a ranked plan of what to automate first, and you are free to build it with whoever you like. Most clients ask us to run it because we already have the agents, chatbots and automations built.',
      },
      {
        q: 'What exactly does the AI audit look at?',
        a: 'Where your leads come from, what happens to each one, and where they die: calls that go unanswered, website and WhatsApp chats nobody replies to, qualification done on gut feel, onboarding handled by email, follow-ups that depend on someone remembering. Every gap gets a euro figure attached so the roadmap is ranked by money, not by novelty.',
      },
      {
        q: 'What does the AI actually sound like on the phone?',
        a: 'Natural and conversational, nothing like a robotic IVR menu. It uses a modern voice model, handles interruptions and follow-up questions, and stays on-brand. You can hear a live sample on a demo call.',
      },
      {
        q: 'Can it use my own business phone number?',
        a: 'Yes. We can port your existing number or forward calls to your AI agent’s number, so callers never notice a change on their end.',
      },
      {
        q: 'What happens if it doesn’t know the answer to something?',
        a: 'It says so, offers to take a message or book a callback, and can escalate to someone on your team when a call needs a person. It won’t invent an answer that isn’t in your knowledge base.',
      },
      {
        q: 'What languages does it support?',
        a: 'Greek and English as standard, and it can switch language mid-call. Pro plans add more.',
      },
      {
        q: 'Can you put a chatbot on my website and WhatsApp as well?',
        a: 'Yes, and it runs off the same knowledge base as the voice agent, so the answers match. It captures the lead, qualifies it, books appointments and hands off to a person when the conversation needs one. Website chat is included from Growth; WhatsApp is included on Pro.',
      },
      {
        q: 'What does a lead qualification system actually do?',
        a: 'It scores every enquiry against criteria you set — service needed, budget, timeline, location, whatever matters in your business — then routes it: the good ones straight to the right person with the context attached, the rest get a polite answer instead of your team’s time. Every score and decision is visible in the Command Hub.',
      },
      {
        q: 'Can you automate client onboarding too?',
        a: 'Yes. Once a client says yes, the automation collects the details you need, sends the documents or forms, books the kickoff, creates the record in your CRM and notifies the team — without anyone chasing a checklist. It is included on Pro and above, and we scope it around your existing steps rather than replacing them.',
      },
      {
        q: 'Can I listen to the calls it takes?',
        a: 'Yes. Every call gets an automatic summary and sentiment tag in AiAnchor’s Command Hub, and full recordings are available on request, subject to the retention settings on your account.',
      },
      {
        q: 'Is this GDPR-compliant? Are calls recorded and disclosed?',
        a: 'Yes. Callers are informed at the start of the call that they are speaking with an AI system and that the call is recorded. We sign a Data Processing Agreement (DPA) with business customers; see our DPA, AI Disclosure and Trust &amp; Security pages in the footer for full detail.',
      },
      {
        q: 'How does pricing and overage actually work?',
        a: 'Each plan includes a set number of minutes per month. If you go over, extra minutes are billed at your plan’s overage rate, shown in the pricing table. No surprise cutoffs and no forced upgrade.',
      },
      {
        q: 'Is there a trial?',
        a: 'There’s no self-serve free trial right now. Book a free demo instead: we’ll run the agent live on a real call flow for your business, so you hear exactly what you’d be paying for before you commit.',
      },
      {
        q: 'How long does setup take?',
        a: 'The audit and roadmap usually take under a week. Most Starter and Growth setups then go live within a few business days once we have your services, pricing and calendar details. Pro and Scale onboarding is guided and scoped with you directly.',
      },
      {
        q: 'Do you build custom systems, websites or web apps as well?',
        a: 'Yes, when the roadmap calls for it — a custom CRM, an internal tool, a website or a web app to sit behind the agents and automations. It is not what we lead with: the AI consulting, agents, chatbots and automations are the core service, and custom builds are scoped and quoted separately once we know what the AI work actually needs.',
      },
      {
        q: 'How is this different from a regular phone menu (IVR)?',
        a: 'An IVR makes callers press buttons and follow a script. AiAnchor has a real conversation, understands what the caller wants, answers from your knowledge base and books the appointment. No menus, no dead ends.',
      },
    ],
  },

  // First-visit consent wizard (templates/cookie-consent.mjs). Non-essential categories
  // start off and stay off until the visitor turns them on — "Reject" is one click, same
  // as "Accept", which is what the ePrivacy rules actually require.
  cookieConsent: {
    ariaLabel: 'Cookie consent',
    intro: {
      eyebrow: 'Your privacy',
      heading: 'We keep this site cookie-light',
      body: 'Only what the site needs to work is on by default. Anything that measures or markets stays off until you switch it on.',
      policyLink: 'Read the Cookie Policy',
      acceptAll: 'Accept all',
      rejectAll: 'Reject non-essential',
      customize: 'Customise',
    },
    prefs: {
      heading: 'Choose what you allow',
      body: 'You can change this any time from “Cookie Settings” in the footer.',
      back: 'Back',
      save: 'Save preferences',
      acceptAll: 'Accept all',
      alwaysOn: 'Always on',
      categories: [
        {
          id: 'necessary',
          title: 'Strictly necessary',
          desc: 'Remembers your language and this consent choice. The site cannot work properly without it.',
          locked: true,
        },
        {
          id: 'analytics',
          title: 'Analytics',
          desc: 'Anonymous page and traffic statistics, so we can see which parts of the site actually help.',
        },
        {
          id: 'marketing',
          title: 'Marketing',
          desc: 'Lets us measure our campaigns and show you relevant AiAnchor content on other platforms.',
        },
      ],
    },
  },

  footer: {
    tagline: 'AI consulting, voice agents, chatbots and automations for lead qualification, client onboarding and follow-up. Every euro of value is proven live in AiAnchor’s Command Hub.',
    columns: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
    },
    productLinks: { services: 'Services', consulting: 'Process', voiceAgent: 'Voice & Automations', commandHub: 'Command Hub', pricing: 'Pricing', faq: 'FAQ' },
    companyLinks: { about: 'About', contact: 'Contact', clientLogin: 'Client Login' },
    legalLinks: {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      dpa: 'Data Processing (DPA)',
      cookies: 'Cookie Policy',
      aiPolicy: 'AI Disclosure',
      trust: 'Trust & Security',
      cookieSettings: 'Cookie Settings',
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
