import { ImpactStats, LeaderProfile, StoryItem, ContactDetails, FAQItem, Founder, OrganizationCharter } from '../types';

export const VACOCA_CHARTER: OrganizationCharter = {
  name: 'Volunteers Anti-Corruption Campaign Africa (VACOCA)',
  acronym: 'VACOCA',
  about:
    'Volunteers Anti-Corruption Campaign Africa (VACOCA) is an anti-corruption NGO registered with the NGO Board of Uganda. The organization has been in existence since 2008. VACOCA is made up of volunteers and operates as a non-partisan and inclusive pressure group, working within the laws of Uganda as enshrined in the 1995 Constitution of the Republic of Uganda. VACOCA seeks to mobilize citizens and communities to resist corruption, promote accountability and integrity, educate society about corruption, and contribute to the creation of a corruption-free society.',
  registration: 'Registered with the NGO Board of Uganda. In existence since 2008.',
  legalBasis: 'Working within the laws of Uganda as enshrined in the 1995 Constitution of the Republic of Uganda.',
  nature: 'Non-partisan and inclusive pressure group made up of volunteers.',
  motto: 'No more corruption we shall win.',
  mission: 'To create a corruption free society.',
  vision: 'To be the indomitable and most sustainable mass movement against corruption.',
  values: [
    {
      title: 'Accountability',
      desc: 'Holding public officials and institutions answerable to the people, ensuring transparency in every action and resource allocation.',
    },
    {
      title: 'Integrity',
      desc: 'Upholding strict moral and ethical standards, honesty, and consistency in public and civic service.',
    },
    {
      title: 'Sustainability',
      desc: 'Building enduring, self-reliant citizen movements and anti-corruption systems that thrive for generations.',
    },
    {
      title: 'Unity',
      desc: 'Bringing together diverse citizens across all backgrounds in a cohesive, non-partisan front against corruption.',
    },
    {
      title: 'Peace',
      desc: 'Promoting a just, harmonious, and conflict-free society anchored in the rule of law and equitable public stewardship.',
    },
  ],
  objectives: [
    'Organize a critical mass of volunteers to resist all forms of corruption in society.',
    'Cooperate with other anti-corruption organizations in the fight against corruption.',
    'Educate society about corruption and its effects.',
    'Prevent corruption before it is committed.',
    'Expose corruption and help in the prosecution of the corrupt.',
    'Reward individuals who distinguish themselves in the campaign against corruption.',
    'Work towards the eradication of corruption.',
  ],
};

export const INITIAL_IMPACT_STATS: ImpactStats = {
  volunteers: '5,000+',
  volunteersLabel: 'FOUNDING VOLUNTEERS (2011)',
  communities: '120+',
  communitiesLabel: 'COMMUNITIES & DISTRICTS',
  campaigns: '45+',
  campaignsLabel: 'CIVIC INTEGRITY FORUMS',
  partnerships: '25+',
  partnershipsLabel: 'CAMPUS CHAPTERS & HUBS',
  lastUpdated: 'Live Movement Registry',
};

export const INITIAL_LEADER_PROFILE: LeaderProfile = {
  name: 'General Elly Tumwine',
  title: 'Lead Founder & Chief Inspirer, VACOCA',
  roleDescription: 'Patriotic Commander, Cultural Visionary & Pioneer of Citizen Anti-Corruption Activism',
  bio: [
    'General Elly Tumwine was the lead founder and chief inspirer of Volunteers Anti-Corruption Campaign Africa (VACOCA). In 2008, during a national state address, President Yoweri Kaguta Museveni remarked that while he had won many military and political battles, the battle that he had failed to win was the battle against corruption, and that he was leaving it to every Ugandan citizen to help him fight and defeat it.',
    'Galvanized by this presidential call to civic duty and national conscience, General Elly Tumwine stepped forward to establish VACOCA as a dedicated, volunteer-driven movement. He was joined by a committed team of original co-founders—Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza—who worked alongside him to build the organization from the ground up.',
    'Under their collective leadership, the movement grew rapidly. By 2011, VACOCA had mobilized over 5,000 active members and established dynamic chapters across universities in Uganda, where they systematically trained young people and students about the critical importance of fighting corruption, upholding civic values, and defending public resources.',
    'Following three years of dedicated grassroots organizing and campus integrity drives, VACOCA was fully and officially registered in March 2011, enshrining its permanent mission to mobilize voluntary citizen power against graft across Uganda and the wider African continent.'
  ],
  message: [
    'The battle against corruption cannot be won through routine bureaucratic measures or commercialized careers. When the head of state challenged every Ugandan to take ownership of this fight, it was a call to our deepest patriotic duty.',
    'By establishing chapters in universities across Uganda and training thousands of young minds, we built a generation of youth who refuse to normalize bribery, embezzlement, or public decay.',
    'Victory over corruption requires the uncompromised, selfless volunteer courage of citizens standing together for their homeland.'
  ],
  approvedQuote: 'The battle against corruption cannot be left to a few; every citizen must willingly volunteer to defend our nation’s integrity.',
  image: '/ldr.png',
};

export const ORIGINAL_FOUNDERS: Founder[] = [
  {
    id: 'elly-tumwine',
    name: 'General Elly Tumwine',
    role: 'Lead Founder & Chief Inspirer',
    badge: 'Visionary & Chief Inspirer',
    bio: 'Inspired by President Museveni’s 2008 national address challenging Ugandans to help fight corruption, General Elly Tumwine conceived VACOCA and rallied citizens to combat graft through selfless volunteerism.',
  },
  {
    id: 'kyomugisha-grace',
    name: 'Hon. Major Kyomugisha Grace',
    role: 'Original Co-Founder & Executive Leader',
    badge: 'Original Co-Founder',
    bio: 'Founding pioneer alongside General Elly Tumwine, providing steadfast leadership in organizing civic outreach, women’s integrity advocacy, and national campaign structures.',
  },
  {
    id: 'yasine-juma',
    name: 'Yasine Juma',
    role: 'Original Co-Founder & Mobilization Leader',
    badge: 'Original Co-Founder',
    bio: 'Core founding pillar who spearheaded grassroots community engagement and student recruitment across Ugandan higher institutions during the 2008–2011 founding era.',
  },
  {
    id: 'waidhuba-john',
    name: 'Waidhuba John',
    role: 'Original Co-Founder & Strategic Outreach Leader',
    badge: 'Original Co-Founder',
    bio: 'Co-founder instrumental in establishing university chapters, institutional frameworks, and coordination protocols culminating in the March 2011 registration.',
  },
  {
    id: 'merab-akampumuza',
    name: 'Merab Akampumuza',
    role: 'Original Co-Founder & Civic Education Coordinator',
    badge: 'Original Co-Founder',
    bio: 'Pioneering co-founder who designed youth training curricula on ethics, civic oversight, and youth empowerment across university campuses in Uganda.',
  },
];

export const INITIAL_STORIES: StoryItem[] = [
  {
    id: 'story-genesis-2008',
    title: 'The 2008 Presidential Address: How a Call to the Nation Sparked VACOCA',
    slug: '2008-presidential-state-address-vacoca-inspiration',
    category: 'STATEMENTS',
    excerpt: 'In 2008, President Yoweri Museveni stated he had won many battles, but the battle he had failed to win was corruption—leaving it to every Ugandan to help.',
    content: `In 2008, during a national state address, President Yoweri Kaguta Museveni made a momentous and candid declaration to the nation: while he had fought and won many military and political struggles, the one battle that had proven insurmountable through state machinery alone was the battle against corruption.\n\nPresident Museveni declared that he was leaving this crucial fight to every Ugandan citizen to take ownership of and assist him in eradicating it.\n\nListening closely to this national call, General Elly Tumwine recognized that corruption could never be dismantled solely by statutory enforcement without citizen-level vigilance. He immediately envisioned a patriotic, citizen-led volunteer movement: the Volunteers Anti-Corruption Campaign Africa (VACOCA).`,
    date: 'March 2011 Registry',
    readTime: '5 min read',
    author: 'VACOCA Historical Archive Desk',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['History', 'General Elly Tumwine', 'Founding', 'Uganda', 'Origins'],
  },
  {
    id: 'story-march-2011-registration',
    title: 'March 2011 Milestone: Official Registration and 5,000-Strong Volunteer Army',
    slug: 'march-2011-full-registration-5000-members',
    category: 'NEWS',
    excerpt: 'By 2011, VACOCA had mobilized over 5,000 members and university chapters across Uganda, achieving full legal registration in March 2011.',
    content: `Between 2008 and 2011, General Elly Tumwine alongside co-founders Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza traversed Uganda’s higher institutions and communities.\n\nBy early 2011, the movement had amassed over 5,000 active, registered members and vibrant student chapters across major universities. Recognizing the rapid national growth and need for formal institutional standing, the founders successfully secured full legal registration for VACOCA in March 2011.\n\nThis landmark registration cemented VACOCA as a permanent, non-partisan civil society movement in Uganda.`,
    date: 'March 2011',
    readTime: '4 min read',
    author: 'Founding Secretariat',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Registration', '5000 Members', 'March 2011', 'Civic Action'],
  },
  {
    id: 'story-campus-chapters-training',
    title: 'University Chapters: Training Uganda’s Youth on the Frontlines of Integrity',
    slug: 'university-chapters-youth-anti-corruption-training',
    category: 'COMMUNITY ACTION',
    excerpt: 'How VACOCA established chapters in universities across Uganda, equipping students with practical methods to confront and defeat graft.',
    content: `A central cornerstone of VACOCA’s strategy under General Elly Tumwine and the original founders was university mobilization.\n\nChapters were established across leading Ugandan universities, where thousands of youths were trained on the mechanisms of corruption, public procurement scrutiny, budget tracking, and ethical leadership.\n\n"If we teach young people that corruption is an existential threat before they enter public service and business, we inoculate the future of our nation," noted founding leader Hon. Major Kyomugisha Grace during a campus integrity forum.`,
    date: 'Campus Registry',
    readTime: '5 min read',
    author: 'Youth Mobilization Desk',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Youth Training', 'Campus Chapters', 'Universities', 'Civic Integrity'],
  },
  {
    id: 'story-original-founders-legacy',
    title: 'Honoring the Original Founders: Tumwine, Kyomugisha, Juma, Waidhuba & Akampumuza',
    slug: 'honoring-the-original-founders-vacoca',
    category: 'VOLUNTEER STORIES',
    excerpt: 'The visionary civic alliance of five Ugandan patriots who answered the national call and laid the permanent foundation of VACOCA.',
    content: `The founding of VACOCA was a collaborative triumph of five distinguished civic pioneers led by General Elly Tumwine.\n\nAlongside General Tumwine were Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza. Each brought unique strengths—military discipline, parliamentary leadership, grassroots organizing, strategic program design, and youth pedagogy.\n\nTogether, they rejected donor-dependency and instituted the principle that citizens must willingly volunteer their time and energy to defeat graft.`,
    date: 'Historical Profile',
    readTime: '6 min read',
    author: 'VACOCA Board of Trustees Archive',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Founders', 'General Elly Tumwine', 'Kyomugisha Grace', 'Yasine Juma', 'Waidhuba John', 'Merab Akampumuza'],
  },
  {
    id: 'story-zero-budget',
    title: 'The Zero-Budget Volunteer Mandate: Why We Reject Paid Activism',
    slug: 'zero-budget-volunteer-mandate-civic-integrity',
    category: 'VOLUNTEER STORIES',
    excerpt: 'Why VACOCA strictly refuses paying allowances to student activists, ensuring uncompromised moral integrity and selflessness.',
    content: `Traditional NGO models often inadvertently cultivate monetary dependency by paying participants per-diem allowances for meetings. VACOCA Lead Founder General Elly Tumwine instituted the Zero-Budget Volunteer Mandate to eliminate mercenary incentives.\n\n"If a citizen requires cash allowances to speak out against corruption that impoverishes their own family, that is not patriotism—it is a commercial transaction," General Tumwine taught. This pure volunteer ethic has produced Africa’s most resilient, unbought youth anti-corruption advocates.`,
    date: 'Ethics Charter',
    readTime: '4 min read',
    author: 'VACOCA Ethics Council',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Volunteerism', 'Ethics', 'Zero-Budget', 'Philosophy'],
  },
  {
    id: 'story-intellectual-activism',
    title: 'Accountability Forums: Bridging Statesmen, Generals, and Student Advocates',
    slug: 'intellectual-activism-accountability-forums-uganda',
    category: 'CAMPAIGNS',
    excerpt: 'VACOCA’s signature accountability forums bring cabinet ministers, military commanders, and legal experts directly before youth audiences.',
    content: `VACOCA’s intellectual activism approach avoids destructive riots and replaces them with intense, fact-grounded accountability forums.\n\nIn university halls, students interrogate public officials directly on budget execution, local road works, healthcare supplies, and transparency standards.\n\nThese forums embody General Tumwine’s vision: empowering citizens with knowledge and confidence to hold power accountable through lawful civic participation.`,
    date: 'Public Forum Series',
    readTime: '4 min read',
    author: 'Public Engagement Desk',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Intellectual Activism', 'Accountability', 'Public Forums', 'Youth'],
  }
];

export const INITIAL_CONTACT_DETAILS: ContactDetails = {
  email: 'anticorruptionvolunteers150@gmail.com',
  phones: ['+256 782 363 894', '+256 777 794 602'],
  secretariatName: 'VACOCA Secretariat',
  location: 'Nommo Gallery',
  opposite: 'Opposite Rwenzori House',
  cityCountry: 'Kampala, Uganda',
  postalAddress: 'P.O. Box 120762, Kampala, Uganda',
  visitNote: 'Our secretariat is located at Nommo Gallery, opposite Rwenzori House, Kampala, Uganda.',
  emailPlaceholder: 'anticorruptionvolunteers150@gmail.com',
  phonePlaceholder: '+256 782 363 894 / +256 777 794 602',
  officeAddressPlaceholder: 'VACOCA Secretariat, Nommo Gallery, Opposite Rwenzori House, Kampala, Uganda (P.O. Box 120762)',
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
    question: 'Where is the VACOCA Secretariat located and how can I visit?',
    answer: 'Our secretariat is located at Nommo Gallery, opposite Rwenzori House, Kampala, Uganda. Postal Address: P.O. Box 120762, Kampala, Uganda. You can reach the coordination desk via email at anticorruptionvolunteers150@gmail.com or by telephone at +256 782 363 894 / +256 777 794 602.',
  },
  {
    category: 'about',
    question: 'What is VACOCA’s official Motto, Mission, and Vision?',
    answer: 'Our Motto is “No more corruption we shall win.” Our Mission is “To create a corruption free society.” Our Vision is “To be the indomitable and most sustainable mass movement against corruption.”',
  },
  {
    category: 'about',
    question: 'What are the 7 core objectives of VACOCA?',
    answer: '1) Organize a critical mass of volunteers to resist all forms of corruption in society; 2) Cooperate with other anti-corruption organizations; 3) Educate society about corruption and its effects; 4) Prevent corruption before it is committed; 5) Expose corruption and help in the prosecution of the corrupt; 6) Reward individuals who distinguish themselves in the anti-corruption campaign; and 7) Work towards the total eradication of corruption.',
  },
  {
    category: 'about',
    question: 'What are VACOCA’s foundational core values?',
    answer: 'VACOCA is anchored by five non-negotiable core values: Accountability, Integrity, Sustainability, Unity, and Peace.',
  },
  {
    category: 'about',
    question: 'What is the legal status and constitutional basis of VACOCA?',
    answer: 'Volunteers Anti-Corruption Campaign Africa (VACOCA) is an anti-corruption NGO registered with the NGO Board of Uganda. The organization has been in existence since 2008. VACOCA is made up of volunteers and operates as a non-partisan and inclusive pressure group, working within the laws of Uganda as enshrined in the 1995 Constitution of the Republic of Uganda.',
  },
  {
    category: 'about',
    question: 'Who founded VACOCA and what is its true history?',
    answer: 'In 2008, during a national state address, President Yoweri Museveni stated that while he had won many battles, the battle that he had failed to win was the battle against corruption, leaving it to every Ugandan citizen to help him fight it. Inspired by this speech, General Elly Tumwine founded VACOCA alongside original co-founders Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza. By 2011, VACOCA had over 5,000 members and active chapters across universities in Uganda training youths on anti-corruption, and was fully registered in March 2011.',
  },
  {
    category: 'about',
    question: 'Who were the original founders who led VACOCA alongside General Elly Tumwine?',
    answer: 'Alongside Lead Founder General Elly Tumwine, VACOCA was led by its original co-founders: Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza. Together, they established university chapters and spearheaded nationwide civic training.',
  },
  {
    category: 'about',
    question: 'When was VACOCA officially registered as an NGO?',
    answer: 'Following three years of intensive nationwide mobilization that grew the movement to more than 5,000 members across universities and communities, VACOCA was fully and officially registered in March 2011.',
  },
  {
    category: 'about',
    question: 'What is VACOCA’s core philosophy on volunteering?',
    answer: 'VACOCA operates on the core principle that citizens must willingly volunteer to defeat corruption rather than treating activism as a commercial job or donor-funded enterprise. Under the Zero-Budget Volunteer Mandate established by General Elly Tumwine and the founders, VACOCA strictly rejects paying allowances for activism, instilling pure patriotic conviction.',
  },
  {
    category: 'about',
    question: 'Is VACOCA affiliated with any political party or government agency?',
    answer: 'No. VACOCA is strictly non-partisan, independent, and civic-driven. While inspired by President Museveni’s 2008 call to all Ugandan citizens, VACOCA operates as an autonomous civil society volunteer movement dedicated solely to integrity and transparency.',
  },
  {
    category: 'volunteering',
    question: 'How did VACOCA university chapters begin and how do they operate?',
    answer: 'Between 2008 and 2011, General Elly Tumwine and the original co-founders established chapters across Ugandan universities to train young people on civic vigilance, public procurement monitoring, and the danger of graft. Today, chapters operate semi-autonomously, organizing campus accountability debates and community integrity audits.',
  },
  {
    category: 'reporting',
    question: 'Does VACOCA investigate or prosecute crimes?',
    answer: 'No. VACOCA is a civil society initiative, not a law enforcement agency or judicial body. VACOCA reviews submissions to provide civic guidance and may refer verified concerns to relevant, lawful statutory institutions (e.g. Inspectorate of Government, Auditor General, Anti-Corruption bodies) where appropriate.',
  },
  {
    category: 'reporting',
    question: 'Can I report a concern anonymously?',
    answer: 'Yes. Our reporting system offers a 100% anonymous submission mode. We do not publish accusations publicly or compromise informant safety.',
  },
  {
    category: 'volunteering',
    question: 'Who can volunteer with VACOCA?',
    answer: 'Any African citizen or resident committed to honesty, ethical leadership, and civic responsibility can join. We welcome university students, professionals, educators, legal practitioners, community leaders, and civic advocates.',
  },
  {
    category: 'partnerships',
    question: 'How can our institution or university collaborate?',
    answer: 'We partner with universities, secondary schools, media outlets, faith-based associations, community-based organizations, and civic groups on integrity training, student dialogues, and public budget literacy workshops.',
  },
];
