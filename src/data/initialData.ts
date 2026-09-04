import { ImpactStats, LeaderProfile, StoryItem, ContactDetails, FAQItem } from '../types';

export const INITIAL_IMPACT_STATS: ImpactStats = {
  volunteers: '[000]+',
  volunteersLabel: 'VOLUNTEERS',
  communities: '[000]+',
  communitiesLabel: 'COMMUNITIES REACHED',
  campaigns: '[00]+',
  campaignsLabel: 'CAMPAIGNS',
  partnerships: '[00]+',
  partnershipsLabel: 'PARTNERSHIPS',
  lastUpdated: 'Live Movement Registry',
};

export const INITIAL_LEADER_PROFILE: LeaderProfile = {
  name: 'Dr. Allawi Ssemanda Apuuli',
  title: 'Founder, VACOCA | Executive Director, Development Watch Centre (DWC)',
  roleDescription: 'Ugandan Academic, Development Communicator & Anti-Corruption Activist',
  bio: [
    'Dr. Allawi Ssemanda Apuuli is a prominent Ugandan academic, development communicator, and anti-corruption activist who founded the Volunteers Anti-Corruption Campaign Africa (VACOCA). Raised in Mbarara, western Uganda, he is widely recognized for mobilizing young people and university students across Uganda and the continent to advocate for transparency, integrity, and good governance.',
    'He earned a Doctorate of Philosophy (Ph.D.) in International Relations with a focus on International Law. Dr. Ssemanda serves as the Executive Director of the Development Watch Centre (DWC), an independent foreign policy think tank in Uganda focusing on diplomacy, global governance, and the Global South. In 2011, he served as the Guild President of Mbarara University of Science and Technology (MUST).',
    'He is the author of the influential book "Global Governance and Norm Contestation: How BRICS is Reshaping World Order". In 2010, while studying at MUST, he founded VACOCA on the radical founding principle that citizens must willingly volunteer to defeat corruption rather than treating activism as a paid job.',
    'Under his strategic direction, VACOCA has expanded from MUST to establish active chapters at Makerere University, Ndejje University, and Bishop Stuart University, organizing high-impact "Intellectual Activism" forums connecting students directly with senior lawyers, politicians, civil servants, and military officers.'
  ],
  message: [
    'Corruption cannot be eradicated if anti-graft activism is treated as a commercial career or donor-dependent enterprise. It demands the uncompromised moral courage of citizens who willingly volunteer their time and energy for their motherland.',
    'Through intellectual activism and campus accountability forums, we empower students to confront leaders directly, question budget allocations, and demand institutional stewardship.',
    'Africa’s youth hold the keys to a prosperous continent—provided we anchor our civic life in absolute integrity and selfless service.'
  ],
  approvedQuote: 'People must willingly volunteer to defeat corruption rather than treating activism as a paid job.',
  image: '/ldr.png',
};

export const INITIAL_STORIES: StoryItem[] = [
  {
    id: 'story-dwc-1',
    title: 'DWC Research: USA-Israel War Against Iran Is Illegal & Sets Cements Precedent',
    slug: 'dwc-usa-israel-iran-international-law-analysis',
    category: 'STATEMENTS',
    excerpt: 'A comprehensive foreign policy analysis by the Development Watch Centre detailing the strict boundaries of international law and global legal sovereignty.',
    content: `Under the executive leadership of Dr. Allawi Ssemanda Apuuli, the Development Watch Centre (DWC) has published critical foreign policy analysis addressing the legality of state aggression and international norms.\n\nThis legal paper investigates how unilateral military escalation undermines established United Nations charters and creates dangerous precedents that threaten smaller and developing states across the Global South.\n\nDr. Ssemanda argues that consistent adherence to international law is the only legitimate safeguard for equitable multilateral relations.`,
    date: 'Aug 26, 2026',
    readTime: '6 min read',
    author: 'Dr. Allawi Ssemanda Apuuli (DWC)',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['DWC', 'Foreign Policy', 'International Law', 'Global Governance'],
  },
  {
    id: 'story-dwc-2',
    title: 'Economic Review: Africa—The Fastest Growing Continent But Home to 90% of World’s Poorest?',
    slug: 'dwc-africa-economic-growth-paradox-poverty',
    category: 'NEWS',
    excerpt: 'An incisive economic analysis from DWC dissecting Sub-Saharan growth ironies, resource leakage, and structural corruption.',
    content: `Despite recording some of the world's most rapid GDP growth rates, Sub-Saharan Africa remains disproportionately burdened by extreme poverty. In this analytical review published by the Development Watch Centre, Dr. Ssemanda examines the structural mechanics of wealth extraction and fiscal leakages.\n\nThe paper highlights how corruption in public procurement, illicit capital flight, and weak sovereign bargaining perpetuate inequality, underscoring VACOCA’s mission to foster grassroots economic monitoring and budget accountability.`,
    date: 'Aug 20, 2026',
    readTime: '5 min read',
    author: 'Development Watch Centre Research Desk',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Economics', 'DWC', 'Sub-Saharan Africa', 'Poverty', 'Governance'],
  },
  {
    id: 'story-dwc-3',
    title: 'Peer-Reviewed Analysis: A Critical Analysis of China’s Infrastructure Assistance To Uganda',
    slug: 'dwc-china-infrastructure-assistance-uganda-analysis',
    category: 'STATEMENTS',
    excerpt: 'Co-authored by Dr. Allawi Ssemanda, this peer-reviewed study evaluates bilateral financing mechanics, project execution, and public debt governance.',
    content: `Examining one of Uganda's most significant development relationships, this paper provides a rigorous, data-driven assessment of major infrastructure projects funded through bilateral arrangements.\n\nThe study analyzes contract transparency, local capacity transfer, and sovereign debt sustainability, offering actionable policy recommendations for Ugandan negotiators and civil society watchdogs monitoring large-scale infrastructure investments.`,
    date: 'Aug 14, 2026',
    readTime: '7 min read',
    author: 'Dr. Allawi Ssemanda Apuuli et al.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['China-Uganda', 'Infrastructure', 'Public Debt', 'DWC Research'],
  },
  {
    id: 'story-dwc-4',
    title: 'Commentary: The Unfinished War—The African Struggle for Intellectual Sovereignty',
    slug: 'dwc-african-struggle-intellectual-sovereignty',
    category: 'NEWS',
    excerpt: 'Dr. Ssemanda makes a powerful case for African-funded research institutions and decolonial policy generation across the continent.',
    content: `In this widely cited commentary, Dr. Allawi Ssemanda argues that genuine political and economic independence cannot be achieved without intellectual sovereignty.\n\n"When Africa relies entirely on external institutions to define its problems, measure its progress, and write its policy solutions, it surrenders its strategic agency," writes Dr. Ssemanda. The article calls for robust domestic funding of African think tanks like DWC and student-led civic research networks like VACOCA.`,
    date: 'Aug 08, 2026',
    readTime: '4 min read',
    author: 'Dr. Allawi Ssemanda Apuuli',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Intellectual Sovereignty', 'Think Tanks', 'DWC', 'Education'],
  },
  {
    id: 'story-campus-1',
    title: 'Intellectual Activism: How VACOCA University Chapters are Holding Public Officials to Account',
    slug: 'intellectual-activism-university-chapters-accountability',
    category: 'COMMUNITY ACTION',
    excerpt: 'From MUST to Makerere and Ndejje, student-led chapters invite senior ministers, lawyers, and military officers for direct accountability interrogations.',
    content: `VACOCA’s signature "Intellectual Activism" model brings high-profile civil servants, politicians, lawyers, and military leaders into university auditoriums. Students engage in rigorous, respectful, and direct cross-examination regarding public expenditures and institutional governance.\n\n"By operating as semi-autonomous chapters across universities like MUST, Makerere, Ndejje, and Bishop Stuart, students take ownership of their integrity campaigns without waiting for donor handouts," notes a campus coordinator.`,
    date: 'Aug 02, 2026',
    readTime: '4 min read',
    author: 'Inter-University Mobilization Desk',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Youth', 'MUST', 'Makerere', 'Intellectual Activism', 'Universities'],
  },
  {
    id: 'story-zero-budget',
    title: 'The Zero-Budget Volunteer Mandate: Why We Reject Paid Activism',
    slug: 'zero-budget-volunteer-mandate-civic-integrity',
    category: 'VOLUNTEER STORIES',
    excerpt: 'Why VACOCA strictly refuses paying allowances to student activists, ensuring uncompromised moral integrity and selflessness.',
    content: `Traditional NGO models often inadvertently cultivate monetary dependency by paying participants per-diem allowances for meetings. VACOCA founder Dr. Allawi Ssemanda instituted the Zero-Budget Volunteer Mandate to eliminate mercenary incentives.\n\n"If a student requires a cash allowance to speak out against corruption in their own university, that is not civic duty—it is an economic transaction," Dr. Ssemanda explains. This pure volunteer ethic has produced Africa’s most resilient, unbought youth anti-corruption advocates.`,
    date: 'Jul 25, 2026',
    readTime: '3 min read',
    author: 'VACOCA Ethics Council',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Volunteerism', 'Ethics', 'Zero-Budget', 'Philosophy'],
  }
];

export const INITIAL_CONTACT_DETAILS: ContactDetails = {
  emailPlaceholder: 'info@vacoca.org (Official contact mailbox)',
  phonePlaceholder: '+[Country Code] [Official Phone Number Placeholder]',
  officeAddressPlaceholder: '[Secretariat & Regional Coordinating Office Address Placeholder — Official details to be published upon registration confirmation]',
  socialLinks: {
    twitter: 'https://x.com/VACOCA_Africa',
    linkedin: 'https://linkedin.com/company/vacoca',
    facebook: 'https://facebook.com/vacoca.africa',
    youtube: 'https://youtube.com/@vacoca_africa',
    telegram: 'https://t.me/vacoca_channel',
  },
  mapActivated: true,
};

export const INITIAL_FAQS: FAQItem[] = [
  {
    category: 'about',
    question: 'Who founded VACOCA and when?',
    answer: 'VACOCA was founded in 2010 by Dr. Allawi Ssemanda Apuuli while studying at Mbarara University of Science and Technology (MUST), where he later served as Guild President in 2011. It has since expanded to Makerere University, Ndejje University, Bishop Stuart University, and chapters across Africa.',
  },
  {
    category: 'about',
    question: 'What is VACOCA’s core philosophy on volunteering?',
    answer: 'VACOCA operates on the core principle that citizens must willingly volunteer to defeat corruption rather than treating activism as a paid job. Under the Zero-Budget Volunteer Mandate, VACOCA strictly rejects paying student allowances for activism, cultivating pure moral integrity.',
  },
  {
    category: 'about',
    question: 'What is the relationship between VACOCA and the Development Watch Centre (DWC)?',
    answer: 'VACOCA founder Dr. Allawi Ssemanda Apuuli also serves as Executive Director of the Development Watch Centre (DWC), an independent foreign policy think tank in Uganda. DWC provides rigorous research on global governance, diplomacy, and African economic sovereignty that enriches VACOCA’s intellectual activism.',
  },
  {
    category: 'about',
    question: 'Is VACOCA affiliated with any political party or government agency?',
    answer: 'No. VACOCA is strictly non-partisan, independent, and civic-driven. We do not represent any political party or state authority, but we host robust accountability dialogues where senior politicians, lawyers, civil servants, and military officers interact with students.',
  },
  {
    category: 'reporting',
    question: 'Does VACOCA investigate or prosecute crimes?',
    answer: 'No. VACOCA is a civil society initiative, not a law enforcement agency or judicial body. VACOCA reviews submissions to provide civic guidance and may refer verified concerns to relevant, lawful statutory institutions (e.g. Inspectorate bodies, Anti-Corruption Commissions, Auditor General offices) where appropriate.',
  },
  {
    category: 'reporting',
    question: 'Can I report a concern anonymously?',
    answer: 'Yes. Our reporting system offers a 100% anonymous submission mode. We do not publish accusations publicly or compromise informant safety.',
  },
  {
    category: 'volunteering',
    question: 'How do University Chapters operate?',
    answer: 'VACOCA uses an Inter-University Chapter Model with semi-autonomous student-led hubs at MUST, Makerere, Ndejje, and Bishop Stuart. Chapters organize "Intellectual Activism" forums, student budget monitoring, and campus integrity debates.',
  },
  {
    category: 'volunteering',
    question: 'Who can volunteer with VACOCA?',
    answer: 'Any African citizen or resident committed to honesty, ethical leadership, and civic responsibility can join. We welcome university students, professionals, educators, legal practitioners, community leaders, and civic tech enthusiasts.',
  },
  {
    category: 'partnerships',
    question: 'How can our institution or university collaborate?',
    answer: 'We partner with universities, secondary schools, media outlets, faith-based associations, community-based organizations, and think tanks on integrity training, student dialogues, and public budget literacy workshops.',
  },
];
