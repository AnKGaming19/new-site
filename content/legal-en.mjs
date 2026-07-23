// English legal pages. DRAFT status: every page carries a visible draft banner
// (legal.draftNotice) until counsel signs off. Strings marked "PLACEHOLDER:"
// are facts that must be confirmed from the company/app before review.

const CONTACT_EMAIL = 'info@aianchor.online';
const PRIVACY_EMAIL = 'info@aianchor.online'; // PLACEHOLDER: dedicated privacy@/dpo@ address if created

// Shared subprocessor table (privacy, DPA and trust pages all reference it).
const SUBPROCESSORS_TABLE = {
  head: ['Provider', 'Purpose', 'Location / transfer basis', 'Terms'],
  rows: [
    [
      'Retell AI, Inc.',
      'Voice agent runtime: call handling, recording, transcription, post-call analysis',
      'USA (AWS). EU Standard Contractual Clauses via its DPA. SOC 2 Type I &amp; II.',
      '<a class="link-hover text-primary hover:text-white" href="https://click-agreements.retellai.com" target="_blank" rel="noopener noreferrer">DPA (self-serve signing)</a>',
    ],
    [
      'Supabase, Inc.',
      'Client portal database, authentication and storage (calls, transcripts, leads, ROI data)',
      'PLACEHOLDER: project region (EU region available, e.g. Frankfurt eu-central-1). SCCs via its DPA. SOC 2 Type II.',
      '<a class="link-hover text-primary hover:text-white" href="https://supabase.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>',
    ],
    [
      'Anthropic, PBC',
      'Call summary and analysis via the Claude API',
      'USA. SCCs via its DPA. API inputs/outputs are not used to train Anthropic models under its commercial terms.',
      '<a class="link-hover text-primary hover:text-white" href="https://www.anthropic.com/legal/commercial-terms" target="_blank" rel="noopener noreferrer">Commercial terms &amp; DPA</a>',
    ],
    [
      'n8n GmbH',
      'Workflow automation connecting calls, CRM and notifications',
      'PLACEHOLDER: only a subprocessor if n8n Cloud is used; self-hosted n8n runs on our own infrastructure. Germany (cloud).',
      '<a class="link-hover text-primary hover:text-white" href="https://n8n.io/legal/data-processing-agreement/" target="_blank" rel="noopener noreferrer">DPA</a>',
    ],
    [
      'Vercel, Inc.',
      'Hosting of this website',
      'USA/global edge network. SCCs via its DPA.',
      '<a class="link-hover text-primary hover:text-white" href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>',
    ],
    [
      'Formspree, Inc.',
      'Contact form processing on this website',
      'USA. SCCs via its DPA.',
      '<a class="link-hover text-primary hover:text-white" href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy terms</a>',
    ],
  ],
};

export const legalMetaEn = {
  terms: {
    title: 'Terms of Service | AIAnchor',
    description: 'Terms of Service for AIAnchor AI voice agents, automations and client portal: plans, billing, acceptable use, liability and governing law.',
  },
  privacy: {
    title: 'Privacy Policy | AIAnchor',
    description: 'How AIAnchor collects and protects data from website visitors, client accounts and callers, including subprocessors, transfers and your GDPR rights.',
  },
  dpa: {
    title: 'Data Processing Agreement (DPA) | AIAnchor',
    description: 'AIAnchor’s processor terms under Art. 28 GDPR: scope, security measures, subprocessors, breach notification, audits and international transfers.',
  },
  cookies: {
    title: 'Cookie Policy | AIAnchor',
    description: 'aianchor.online sets no cookies. What we store locally, third-party requests, and how to manage them.',
  },
  'ai-policy': {
    title: 'AI Disclosure Policy | AIAnchor',
    description: 'How AIAnchor voice agents disclose that callers are talking to an AI (EU AI Act Article 50), human escalation, model data practices and limitations.',
  },
  trust: {
    title: 'Trust & Security | AIAnchor',
    description: 'AIAnchor’s security posture in plain language: tenant isolation, encryption, access control, webhooks, logging, subprocessors and vulnerability reporting.',
  },
};

export const legalEn = {
  lastUpdated: 'Last updated: 24 July 2026',
  tocLabel: 'On this page',
  draftNotice:
    'DRAFT — pending legal review. This page is a working draft prepared for review by qualified counsel. It is not final and does not constitute legal advice.',

  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: 24 July 2026',
    intro:
      'This policy explains what personal data AIAnchor collects, why, and what rights you have. It covers three groups: visitors to this website, people who hold a client account, and callers who speak with an AI voice agent we operate for one of our clients.',
    sections: [
      {
        id: 'controller',
        h: '1. Who we are',
        ps: [
          'AIAnchor (PLACEHOLDER: registered company name, ΓΕΜΗ no., ΑΦΜ/VAT no., registered address, Greece) builds AI voice agents, workflow automations and custom CRM/web systems for businesses. You can reach us about anything in this policy at <a class="link-hover text-primary hover:text-white" href="mailto:' +
            PRIVACY_EMAIL +
            '">' +
            PRIVACY_EMAIL +
            '</a>.',
        ],
      },
      {
        id: 'roles',
        h: '2. Our two roles: controller and processor',
        ps: [
          'For this website and for client accounts (signup, billing, portal logins), AIAnchor is the <strong class="text-gray-200">controller</strong>: we decide why and how that data is processed.',
          'For calls handled by an AI voice agent, our client (the business whose phone line the agent answers) is the controller of its callers’ data, and AIAnchor is a <strong class="text-gray-200">processor</strong> acting on the client’s documented instructions under our <a class="link-hover text-primary hover:text-white" href="/en/dpa/">Data Processing Agreement</a>. Callers who want to exercise rights over call data should contact the business they called; we assist that business in responding.',
        ],
      },
      {
        id: 'data-visitors',
        h: '3. Data we collect from website visitors',
        list: [
          '<strong class="text-gray-200">Contact form:</strong> name, email address, interest and message text, processed by Formspree and delivered to our inbox.',
          '<strong class="text-gray-200">Technical logs:</strong> our hosting provider (Vercel) processes IP addresses and request metadata to serve and secure the site.',
          '<strong class="text-gray-200">Language preference:</strong> stored in your browser’s localStorage. It never leaves your device. This site sets no cookies; see the <a class="link-hover text-primary hover:text-white" href="/en/cookies/">Cookie Policy</a>.',
          '<strong class="text-gray-200">Fonts:</strong> web fonts load from Google Fonts, which means your browser sends your IP address to Google when fetching them.',
        ],
      },
      {
        id: 'data-clients',
        h: '4. Data we collect from client accounts',
        list: [
          'Account data: name, work email, company details, portal credentials (passwords are stored hashed by Supabase Auth).',
          'Billing data: plan, invoices, VAT number. PLACEHOLDER: name the payment processor (e.g. Stripe) and what card data it holds; we do not store card numbers ourselves.',
          'Configuration data you provide to set up your agent: business information, service lists, pricing, calendars, escalation contacts.',
          'Usage data in the portal: calls handled, minutes used, leads, ROI metrics.',
        ],
      },
      {
        id: 'data-callers',
        h: '5. Caller data (processed on behalf of our clients)',
        ps: [
          'When an AI agent answers a call for a client, the following is processed: call audio (recording), a text transcript, an AI-generated summary and analysis (e.g. intent, sentiment, lead details), the caller’s phone number, and call metadata (time, duration, outcome). Callers are told at the start of the call that they are speaking with an AI assistant and that the call is recorded; see the <a class="link-hover text-primary hover:text-white" href="/en/ai-policy/">AI Disclosure Policy</a>.',
          'This data is processed strictly to deliver the service to the client that controls it: answering the call, booking appointments, capturing leads, and producing the client’s portal analytics. We do not use caller data for our own marketing and we do not sell it.',
        ],
      },
      {
        id: 'purposes',
        h: '6. Purposes and legal bases',
        table: {
          head: ['Processing', 'Purpose', 'Legal basis (GDPR)'],
          rows: [
            ['Contact form', 'Responding to your enquiry', 'Art. 6(1)(b) pre-contractual steps, or 6(1)(f) legitimate interest'],
            ['Client accounts &amp; billing', 'Providing and invoicing the service', 'Art. 6(1)(b) contract; 6(1)(c) legal obligations (tax/accounting)'],
            ['Caller data', 'Operating the client’s voice agent', 'Processed on the client’s behalf; the client determines the basis (typically Art. 6(1)(b) or 6(1)(f), with recording consent/notice per Greek law)'],
            ['Site technical logs', 'Security and delivery of the website', 'Art. 6(1)(f) legitimate interest'],
          ],
        },
      },
      {
        id: 'retention',
        h: '7. How long we keep data',
        list: [
          'Call recordings and transcripts: PLACEHOLDER: confirm the configured Retell retention window (configurable from 1 day to 2 years per agent) and the portal retention policy.',
          'Client account and portal data: for the duration of the contract, then deleted or returned per the DPA. PLACEHOLDER: confirm the post-termination deletion window (e.g. 30 days).',
          'Contact form enquiries: PLACEHOLDER: confirm (suggested: 12 months, then deleted).',
          'Invoices and tax records: as required by Greek tax law (currently at least 5 years).',
        ],
      },
      {
        id: 'subprocessors',
        h: '8. Subprocessors and service providers',
        ps: ['We use a small set of vetted providers. Each is bound by a data processing agreement including EU Standard Contractual Clauses where data leaves the EEA.'],
        table: SUBPROCESSORS_TABLE,
      },
      {
        id: 'transfers',
        h: '9. International transfers',
        ps: [
          'Some providers above process data in the United States. Where that happens, transfers rely on EU Standard Contractual Clauses (and the EU–US Data Privacy Framework where the provider is certified). Where an EU region is available (e.g. Supabase Frankfurt), we select it. PLACEHOLDER: confirm the actual deployed regions for each system.',
        ],
      },
      {
        id: 'rights',
        h: '10. Your rights',
        ps: [
          'Under Articles 15–22 GDPR you can request access to your data, a copy for portability, correction, deletion, restriction of processing, and you can object to processing based on legitimate interest. Where processing relies on consent, you can withdraw it at any time.',
          'To exercise a right, email <a class="link-hover text-primary hover:text-white" href="mailto:' +
            PRIVACY_EMAIL +
            '">' +
            PRIVACY_EMAIL +
            '</a> with the subject “Data request”. We will verify your identity and respond within one month (extendable by two months for complex requests, in which case we tell you). If your request concerns a call you made to one of our clients, we will refer it to that client and assist them in answering it.',
        ],
      },
      {
        id: 'authority',
        h: '11. Complaints: the Greek supervisory authority',
        ps: [
          'If you believe we have mishandled your data, you can lodge a complaint with the Hellenic Data Protection Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα), Kifissias Ave. 1-3, 115 23 Athens, <a class="link-hover text-primary hover:text-white" href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>. We would appreciate the chance to resolve the issue directly first.',
        ],
      },
      {
        id: 'changes',
        h: '12. Changes to this policy',
        ps: [
          'We will post updates on this page and revise the “Last updated” date. For material changes affecting client accounts, we notify clients by email in advance.',
        ],
      },
    ],
  },

  cookies: {
    title: 'Cookie Policy',
    updated: 'Last updated: 24 July 2026',
    intro:
      'Short version: this website sets no cookies. No analytics, no advertising trackers, no consent banner needed. Here is exactly what does happen in your browser.',
    sections: [
      {
        id: 'no-cookies',
        h: '1. No cookies are set',
        ps: [
          'We audited the code of aianchor.online: neither our pages nor our scripts set any cookies, first-party or third-party. There are no analytics tools (such as Google Analytics), no advertising pixels and no session cookies on the marketing site.',
        ],
      },
      {
        id: 'local-storage',
        h: '2. What we store locally instead',
        ps: [
          'One value, <code class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gray-300">aianchor-lang</code>, is saved in your browser’s localStorage when you switch language, so “/” can send you to your preferred language next time. It contains only “en” or “gr”, never leaves your device, is not a cookie, and is not used for tracking. You can delete it any time via your browser’s site-data settings.',
        ],
      },
      {
        id: 'third-party',
        h: '3. Third-party requests that are not cookies',
        list: [
          'Web fonts load from Google Fonts (fonts.googleapis.com / fonts.gstatic.com). Your browser sends your IP address to Google to fetch the font files. Google states these requests set no cookies.',
          'Submitting the contact form sends your entries to Formspree, which processes them to deliver the message to us.',
        ],
      },
      {
        id: 'portal',
        h: '4. The client portal is separate',
        ps: [
          'The client portal at app.aianchor.online requires login and uses strictly necessary authentication storage (Supabase Auth session tokens). Those are essential for the service and are covered by the portal’s own notices. PLACEHOLDER: confirm exact portal auth storage (cookie vs localStorage) and document it here or in the portal.',
        ],
      },
      {
        id: 'future',
        h: '5. If this ever changes',
        ps: [
          'If we ever add analytics or any non-essential cookies, we will update this page first and add a consent banner that asks before anything is set, as Greek ePrivacy law (Law 3471/2006) and HDPA guidance require.',
        ],
      },
      {
        id: 'manage',
        h: '6. Managing site data',
        ps: [
          'You can clear localStorage and block cookies entirely through your browser settings. The site works fully without any stored data; you would simply pick your language again on each visit.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: 24 July 2026',
    intro:
      'These Terms govern the services AIAnchor provides to business clients: AI voice agents, workflow automations, custom CRM/web systems and the client portal. By signing an order form or subscribing to a plan, you accept them.',
    sections: [
      {
        id: 'parties',
        h: '1. Parties and acceptance',
        ps: [
          'The agreement is between AIAnchor (PLACEHOLDER: registered company name, ΓΕΜΗ, ΑΦΜ, registered address, Greece) and the business identified on the order form or account (“Client”). The services are offered to businesses, not consumers. These Terms, the order form, and the <a class="link-hover text-primary hover:text-white" href="/en/dpa/">Data Processing Agreement</a> together form the agreement.',
        ],
      },
      {
        id: 'services',
        h: '2. The services',
        ps: [
          'AIAnchor provides: (a) AI voice agents that answer the Client’s inbound calls, book appointments and capture leads; (b) automation workflows; (c) custom CRM and web systems where agreed; and (d) a client portal showing calls, transcripts, recordings, leads and ROI metrics. Scope per plan is described at <a class="link-hover text-primary hover:text-white" href="/en/#pricing">Pricing</a> and in the order form.',
        ],
      },
      {
        id: 'plans',
        h: '3. Plans, minutes and overage',
        ps: ['Published monthly plans (all prices exclude VAT):'],
        table: {
          head: ['Plan', 'Price / month', 'Notes'],
          rows: [
            ['Starter', '€99 + VAT', 'Included minutes per the pricing table; per-minute overage beyond them'],
            ['Growth', '€249 + VAT', 'Included minutes + overage; one-time setup fee applies'],
            ['Pro', '€549 + VAT', 'Included minutes + overage; one-time setup fee applies'],
            ['Scale', 'from €1,200 + VAT', 'Custom scope; one-time setup fee applies'],
          ],
        },
        list: [
          'Included minutes reset monthly and do not roll over.',
          'Overage minutes are billed at the per-minute rate shown for your plan in the pricing table, in the next invoice. Service is not cut off for going over.',
          'Annual prepayment carries a discount of approximately 20% as published on the pricing page.',
          'A one-time setup fee applies to Growth and higher plans, stated on the order form.',
        ],
      },
      {
        id: 'billing',
        h: '4. Billing, payment and price changes',
        list: [
          'Fees are billed in advance (monthly or annually) plus VAT where applicable. PLACEHOLDER: payment methods and processor.',
          'Late payments: we may suspend the service after written notice and a reasonable cure period. PLACEHOLDER: statutory late-payment interest reference.',
          'Price changes take effect at the next renewal, with at least 30 days’ written notice.',
          'Fees are non-refundable except where these Terms or mandatory law say otherwise. PLACEHOLDER: confirm refund policy.',
        ],
      },
      {
        id: 'cancellation',
        h: '5. Term and cancellation',
        ps: [
          'Monthly plans renew each month and can be cancelled effective at the end of the current billing period with written notice (email suffices). Annual plans renew yearly unless cancelled at least 30 days before renewal. PLACEHOLDER: confirm notice periods with counsel.',
        ],
      },
      {
        id: 'client-duties',
        h: '6. Client responsibilities (including data protection duties)',
        list: [
          'Provide accurate business information for the agent (services, prices, policies, calendars) and keep it current; the agent answers based on what you give it.',
          'You remain the data controller for your callers. You must have a lawful basis for the processing, inform your callers about the AI agent and call recording (we provide the in-call disclosure script and a notice template), and reflect the agent in your own privacy notice.',
          'Do not instruct the agent to collect special-category data (e.g. health data) unless expressly agreed in writing with an appropriate lawful basis.',
          'Sign the DPA where required for your compliance, and forward caller data-subject requests to us promptly where you need our assistance.',
        ],
      },
      {
        id: 'acceptable-use',
        h: '7. Acceptable use',
        ps: ['The services may not be used for:'],
        list: [
          'Unsolicited outbound calling, telemarketing, robocalls or cold outreach. Our agents answer inbound calls; automated advertising calls without prior express consent are prohibited by Article 11 of Greek Law 3471/2006 and equivalent laws elsewhere.',
          'Illegal, fraudulent or deceptive activity, including impersonating a human when the law requires AI disclosure, or disabling the AI disclosure.',
          'Harassment, discrimination, or collecting data about minors.',
          'Any use that violates telephony, consumer-protection or data-protection law in the jurisdictions where the Client operates. Clients operating outside Greece/the EU (e.g. UK, US, UAE) are responsible for local requirements, including US two-party-consent recording rules; we apply the strictest common disclosure by default.',
        ],
      },
      {
        id: 'availability',
        h: '8. Availability and support',
        ps: [
          'We target high availability but the service depends on third-party infrastructure (telephony, cloud providers) and is provided without a guaranteed uptime SLA unless one is agreed in the order form. Planned maintenance is announced in advance where feasible. PLACEHOLDER: support hours and response targets per plan.',
        ],
      },
      {
        id: 'ip',
        h: '9. Intellectual property',
        ps: [
          'AIAnchor retains all rights in its platform, agents, workflows and know-how. The Client retains all rights in its business data, caller data and content. Custom deliverables (e.g. bespoke CRM code) are licensed or assigned as stated in the order form. PLACEHOLDER: default position on custom-build IP.',
        ],
      },
      {
        id: 'warranty',
        h: '10. Disclaimers',
        ps: [
          'AI systems make mistakes. The agent may occasionally mishear, misstate or fail to complete a booking. The Client is responsible for reviewing critical information and keeping a human escalation path available. The services are provided “as is” to the extent permitted by law; we do not warrant uninterrupted or error-free operation.',
        ],
      },
      {
        id: 'liability',
        h: '11. Limitation of liability',
        ps: [
          'To the extent permitted by law, neither party is liable for indirect or consequential damages (lost profits, lost business), and each party’s total liability under the agreement is capped at the fees paid by the Client in the 12 months before the event giving rise to the claim. Nothing limits liability for wilful misconduct, gross negligence, or anything that cannot be limited under Greek law. PLACEHOLDER: counsel to confirm cap and carve-outs.',
        ],
      },
      {
        id: 'termination',
        h: '12. Termination and data return',
        ps: [
          'Either party may terminate for material breach not cured within 30 days of written notice. On termination, the Client can export its portal data (calls, transcripts, leads) before the account closes; after PLACEHOLDER: confirm window (e.g. 30 days) we delete Client and caller data per the DPA, except what we must keep by law.',
        ],
      },
      {
        id: 'law',
        h: '13. Governing law and jurisdiction',
        ps: [
          'The agreement is governed by Greek law. Exclusive jurisdiction lies with the courts of PLACEHOLDER: city (expected: Athens), Greece. Mandatory local rules that apply to the Client’s own use of the services in other jurisdictions are the Client’s responsibility under section 7.',
        ],
      },
      {
        id: 'contact-terms',
        h: '14. Contact',
        ps: [
          'Questions about these Terms: <a class="link-hover text-primary hover:text-white" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>.',
        ],
      },
    ],
  },

  dpa: {
    title: 'Data Processing Agreement (DPA)',
    updated: 'Last updated: 24 July 2026',
    intro:
      'This DPA forms part of the service agreement between AIAnchor (“Processor”) and the Client (“Controller”) and governs our processing of personal data, in particular caller data, on the Client’s behalf under Article 28 GDPR. A countersigned copy is available on request at info@aianchor.online.',
    sections: [
      {
        id: 'scope',
        h: '1. Scope and roles',
        ps: [
          'The Client is the controller of personal data processed through its voice agent, automations and portal workspace. AIAnchor processes that data only as processor, on the Client’s documented instructions, for the purposes in section 2. AIAnchor is separately a controller for its own account and billing data, covered by the <a class="link-hover text-primary hover:text-white" href="/en/privacy/">Privacy Policy</a>.',
        ],
      },
      {
        id: 'processing-details',
        h: '2. Subject matter, duration, nature and purpose',
        table: {
          head: ['Item', 'Description'],
          rows: [
            ['Subject matter', 'Operation of AI voice agents, automations and the client portal for the Client'],
            ['Duration', 'The term of the service agreement, plus the deletion window in section 9'],
            ['Nature', 'Recording, transcription, AI analysis, storage, structuring, transmission, deletion'],
            ['Purpose', 'Answering the Client’s inbound calls, appointment booking, lead capture, reporting'],
          ],
        },
      },
      {
        id: 'data-categories',
        h: '3. Categories of data subjects and personal data',
        list: [
          'Data subjects: the Client’s callers (third parties), and the Client’s staff who use the portal or appear in call flows.',
          'Personal data: call audio recordings, transcripts, AI-generated summaries and sentiment/lead analysis, caller phone numbers, names and contact details shared during calls, appointment details, portal user accounts.',
          'Special categories: not intended. The Client must not configure flows that solicit special-category data without a separate written agreement (see Terms, section 6).',
        ],
      },
      {
        id: 'instructions',
        h: '4. Processing on instructions',
        ps: [
          'We process personal data only on the Client’s documented instructions (the agreement, the agent configuration, and written directions), unless EU or Member State law requires otherwise, in which case we inform the Client before processing unless the law prohibits it. We inform the Client if an instruction, in our opinion, infringes data protection law.',
        ],
      },
      {
        id: 'confidentiality-security',
        h: '5. Confidentiality and security (Art. 32)',
        list: [
          'Personnel authorised to process the data are bound by confidentiality obligations.',
          'Encryption in transit (TLS) for all systems; encryption at rest on our database and storage providers.',
          'Tenant isolation in the portal: each Client’s workspace is segregated (Supabase row-level security). PLACEHOLDER: confirm RLS is enforced on all tables.',
          'Role-based access on least-privilege; access to production data restricted to authorised personnel. PLACEHOLDER: confirm MFA on admin accounts.',
          'Webhook payloads between systems are signature-verified. PLACEHOLDER: confirm implementation status.',
          'Logging of administrative access and processing activity. PLACEHOLDER: confirm audit-log coverage.',
        ],
      },
      {
        id: 'subprocessors-dpa',
        h: '6. Subprocessors',
        ps: [
          'The Client grants general authorisation to the subprocessors below. We will give at least 30 days’ notice before adding or replacing a subprocessor (email or portal notice); the Client may object on reasonable data-protection grounds, in which case the parties will seek a solution and the Client may terminate the affected service if none is found. Each subprocessor is bound by data-protection terms no less protective than this DPA.',
        ],
        table: SUBPROCESSORS_TABLE,
      },
      {
        id: 'assistance',
        h: '7. Assistance with data subject rights',
        ps: [
          'Taking into account the nature of the processing, we assist the Client with appropriate technical and organisational measures in fulfilling data subject requests (access, deletion, portability and the rest of Arts. 15–22). If a caller contacts us directly, we forward the request to the Client without undue delay and do not respond on the merits unless instructed. PLACEHOLDER: confirm what the portal supports today for per-caller export/deletion; interim requests are handled manually by support.',
        ],
      },
      {
        id: 'breach',
        h: '8. Personal data breach notification',
        ps: [
          'We notify the Client without undue delay after becoming aware of a personal data breach affecting the Client’s data, and in any case within PLACEHOLDER: confirm commitment (commonly 48 hours), providing the information required by Art. 33(3) GDPR as it becomes available: nature of the breach, categories and approximate numbers affected, likely consequences, and measures taken. Notifying the supervisory authority and data subjects remains the Client’s responsibility as controller; we assist.',
        ],
      },
      {
        id: 'deletion',
        h: '9. Deletion and return',
        ps: [
          'On termination, at the Client’s choice, we return the Client’s personal data (portal export) and delete existing copies within PLACEHOLDER: confirm window (e.g. 30 days), unless EU or Greek law requires storage. Deletion extends to subprocessors per their retention terms.',
        ],
      },
      {
        id: 'audit',
        h: '10. Audits',
        ps: [
          'We make available the information necessary to demonstrate compliance with Art. 28 (including subprocessor certifications such as SOC 2 reports where available) and allow for and contribute to audits conducted by the Client or a mandated auditor, on reasonable notice, at most once per year unless a supervisory authority requires otherwise or a breach has occurred, and subject to confidentiality.',
        ],
      },
      {
        id: 'transfers-dpa',
        h: '11. International transfers',
        ps: [
          'Transfers outside the EEA occur only under Chapter V GDPR safeguards: the subprocessors above rely on EU Standard Contractual Clauses (and the EU–US Data Privacy Framework where certified). We will inform the Client of any change affecting transfer mechanisms.',
        ],
      },
      {
        id: 'liability-dpa',
        h: '12. Liability and precedence',
        ps: [
          'Liability follows the service agreement’s limitation of liability. If this DPA conflicts with the Terms, this DPA prevails for data-protection matters. PLACEHOLDER: counsel to confirm.',
        ],
      },
      {
        id: 'signed-copy',
        h: '13. Getting a countersigned copy',
        ps: [
          'Email <a class="link-hover text-primary hover:text-white" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a> with the subject “DPA request” and your company details; we return a countersigned PDF. The current subprocessor list is always on this page and on <a class="link-hover text-primary hover:text-white" href="/en/trust/">Trust &amp; Security</a>.',
        ],
      },
    ],
  },

  'ai-policy': {
    title: 'AI Disclosure Policy',
    updated: 'Last updated: 24 July 2026',
    intro:
      'Callers interacting with an AIAnchor voice agent are talking to software, not a person. This page documents how we disclose that, how humans stay in the loop, what the AI does with call data, and its limits.',
    sections: [
      {
        id: 'what-it-is',
        h: '1. What our voice agents are',
        ps: [
          'An AIAnchor agent is an AI system built on Retell AI’s conversational voice platform. It answers a business’s inbound phone line, understands natural speech, answers questions from that business’s approved knowledge base, books appointments and records lead details. After the call, the recording is transcribed and analysed (using Retell post-call analysis and the Anthropic Claude API) to produce the summary and metrics the business sees in its portal.',
        ],
      },
      {
        id: 'disclosure',
        h: '2. The spoken disclosure at call start',
        ps: [
          'Every agent we deploy identifies itself as an AI assistant, and states that the call is recorded, in the first moments of the call, in the language of the call, before any personal data is collected. Example script: “Hi, you’ve reached [Business]. I’m their AI assistant, and this call is recorded so the team can follow up. How can I help?”',
          'This in-call spoken disclosure is our compliance mechanism for Article 50(1) of the EU AI Act (Regulation (EU) 2024/1689), which applies from 2 August 2026 and requires that people interacting with an AI system are informed in a way that is perceivable during the interaction itself. A note buried in terms and conditions does not satisfy this; the agent must say it. The recording announcement also satisfies Greek call-recording rules (Article 11, Law 3471/2006), which require participants to be informed before recording.',
          'Clients may adjust wording (tone, branding) but may not remove either element. The disclosure cannot be disabled.',
        ],
      },
      {
        id: 'oversight',
        h: '3. Human oversight',
        ps: [
          'Agents operate within scopes their business owner configures and approves: what they may answer, what they must not discuss, and where they hand off. Businesses review calls, transcripts and summaries in their portal and can correct the agent’s knowledge base at any time. AIAnchor monitors deployed agents for failures. PLACEHOLDER: describe the concrete review cadence/alerting once confirmed.',
        ],
      },
      {
        id: 'escalation',
        h: '4. Reaching a human',
        ps: [
          'A caller can ask for a human at any point. Depending on the business’s configuration, the agent transfers the call, takes a callback request for a named person, or provides direct contact details. Agents are configured to recognise emergencies and complex requests and route them out rather than improvise. PLACEHOLDER: confirm transfer/callback capability per plan.',
        ],
      },
      {
        id: 'objection',
        h: '5. If a caller objects to AI or recording',
        ps: [
          'A caller who does not want to talk to an AI or be recorded can say so; the agent offers the human path in section 4 and does not press on. For rights over data from a past call (access, deletion), the caller’s request goes to the business they called, which controls that data; we assist that business. Callers can also reach us at <a class="link-hover text-primary hover:text-white" href="mailto:' + PRIVACY_EMAIL + '">' + PRIVACY_EMAIL + '</a> and we will route the request. PLACEHOLDER: confirm whether recording can be disabled mid-call on request; if not, the objection path is the human handoff.',
        ],
      },
      {
        id: 'model-data',
        h: '6. What the AI does with call data',
        list: [
          'Anthropic (Claude API, used for call analysis): under its commercial terms, API inputs and outputs are <strong class="text-gray-200">not used to train</strong> Anthropic’s models.',
          'Retell AI (voice platform): recordings, transcripts and logs are retained per the configured retention policy (configurable from 1 day to 2 years). PLACEHOLDER: Retell’s public documentation does not state a no-training commitment; we must verify this in Retell’s DPA before asserting it here.',
          'AIAnchor does not use caller data to train any models of its own.',
        ],
      },
      {
        id: 'limitations',
        h: '7. Limitations, honestly',
        list: [
          'The agent can mishear (accents, background noise) and occasionally answers imperfectly or not at all. It answers only from the business’s approved information, but AI-generated speech can still contain errors.',
          'It does not give medical, legal or financial advice, and it is not an emergency service; it routes such calls to humans.',
          'Prices, availability and commitments stated by the agent are confirmed by the business in the follow-up where they matter.',
        ],
      },
      {
        id: 'regulatory',
        h: '8. Regulatory framing',
        ps: [
          'Under the EU AI Act our voice agents are AI systems intended to interact directly with natural persons (Art. 50(1)); they are not used for emotion recognition or biometric categorisation, and the post-call sentiment analysis assesses conversation tone for customer-service quality on behalf of the business, not to identify or infer emotions of identified individuals for the purposes of Art. 50(3). PLACEHOLDER: counsel to confirm this classification. AI-generated audio content in the calls is disclosed at call start (Art. 50 disclosure above).',
        ],
      },
      {
        id: 'contact-ai',
        h: '9. Questions',
        ps: [
          'About this policy or an experience with one of our agents: <a class="link-hover text-primary hover:text-white" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>.',
        ],
      },
    ],
  },

  trust: {
    title: 'Trust & Security',
    updated: 'Last updated: 24 July 2026',
    intro:
      'How we protect your data and your callers’ data, in plain language. This page is written to be shared: send it to your security reviewer along with our DPA.',
    sections: [
      {
        id: 'architecture',
        h: '1. Architecture and tenant isolation',
        ps: [
          'Each client gets an isolated workspace in our portal. Data separation is enforced at the database layer with Supabase row-level security policies, not just in application code, so one client can never query another’s calls, transcripts or leads. PLACEHOLDER: confirm RLS coverage on all tables before publishing.',
        ],
      },
      {
        id: 'encryption',
        h: '2. Encryption',
        list: [
          'In transit: TLS on all connections between callers, our systems and providers.',
          'At rest: databases and file storage (recordings) are encrypted at rest by our infrastructure providers (Supabase/AWS).',
        ],
      },
      {
        id: 'access',
        h: '3. Access control',
        list: [
          'Client portal access is authenticated (Supabase Auth) and scoped to your workspace and role.',
          'Internal access to production data is limited to authorised AIAnchor personnel on a least-privilege basis, for support and operations. PLACEHOLDER: confirm MFA enforcement and the current access list process.',
        ],
      },
      {
        id: 'integrity',
        h: '4. System integrity',
        list: [
          'Webhooks between telephony, automation and the portal are signature-verified so events can’t be forged. PLACEHOLDER: confirm implementation status.',
          'Administrative actions and data access are logged. PLACEHOLDER: confirm audit-log scope.',
          'Backups: PLACEHOLDER: document backup schedule and restore testing.',
        ],
      },
      {
        id: 'hosting',
        h: '5. Where data lives',
        ps: [
          'Portal data is hosted on Supabase (PLACEHOLDER: confirm project region; EU regions such as Frankfurt are available and preferred). Call processing runs on Retell AI (AWS, USA) under EU Standard Contractual Clauses. This website is served by Vercel. Full detail per provider is in the subprocessor table below.',
        ],
      },
      {
        id: 'subprocessors-trust',
        h: '6. Subprocessor transparency',
        ps: ['The complete list of companies that touch service data, why, and under which terms:'],
        table: SUBPROCESSORS_TABLE,
      },
      {
        id: 'compliance-posture',
        h: '7. Compliance posture',
        list: [
          'GDPR: we sign a <a class="link-hover text-primary hover:text-white" href="/en/dpa/">DPA</a> with every client that needs one; SCCs cover non-EEA transfers.',
          'EU AI Act: our agents disclose AI interaction in-call; see the <a class="link-hover text-primary hover:text-white" href="/en/ai-policy/">AI Disclosure Policy</a>.',
          'Our vendors hold SOC 2 attestations (Retell: Type I &amp; II; Supabase: Type II). AIAnchor itself does not yet hold its own certification; we say so honestly rather than implying otherwise.',
        ],
      },
      {
        id: 'vulnerability',
        h: '8. Reporting a vulnerability',
        ps: [
          'If you believe you have found a security issue in our website, portal or agents, email <a class="link-hover text-primary hover:text-white" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a> with the subject “Security report”. We acknowledge within 2 business days, keep you informed, and do not pursue good-faith researchers. Please do not access other clients’ data or disrupt the service while testing. PLACEHOLDER: dedicated security@ address once created.',
        ],
      },
      {
        id: 'requests',
        h: '9. DPA and documentation requests',
        ps: [
          'Security questionnaires, DPA signing and subprocessor notifications: <a class="link-hover text-primary hover:text-white" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>. We aim to turn questionnaires around within PLACEHOLDER: confirm (e.g. 5 business days).',
        ],
      },
    ],
  },
};
