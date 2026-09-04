export type PageView =
  | 'home'
  | 'about'
  | 'what-we-do'
  | 'campaigns'
  | 'get-involved'
  | 'news'
  | 'leadership'
  | 'report'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

export interface ImpactStats {
  volunteers: string;
  volunteersLabel: string;
  communities: string;
  communitiesLabel: string;
  campaigns: string;
  campaignsLabel: string;
  partnerships: string;
  partnershipsLabel: string;
  lastUpdated: string;
}

export interface LeaderProfile {
  name: string;
  title: string;
  roleDescription: string;
  bio: string[];
  message: string[];
  approvedQuote: string;
  image: string;
}

export interface StoryItem {
  id: string;
  title: string;
  slug: string;
  category: 'CAMPAIGNS' | 'COMMUNITY ACTION' | 'VOLUNTEER STORIES' | 'NEWS' | 'STATEMENTS' | 'EVENTS';
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface ConcernReport {
  id: string;
  trackingCode: string;
  timestamp: string;
  typeOfConcern: string;
  locationCountry: string;
  locationCityOrRegion: string;
  dateOfIncident: string;
  description: string;
  institutionOrSector: string;
  evidenceProvided: boolean;
  evidenceFileName?: string;
  isAnonymous: boolean;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  consentGiven: boolean;
  status: 'Received - Under Review' | 'Information Verified' | 'Referred to Lawful Authority' | 'Archived';
  statusNote?: string;
}

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  ageRange?: string;
  areaOfInterest: string;
  skills: string;
  motivation: string;
  weeklyHours: string;
  timestamp: string;
  status: 'Pending Review' | 'Contacted' | 'Onboarded';
}

export interface PartnerInquiry {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: string;
  country: string;
  proposal: string;
  timestamp: string;
  status: 'Received' | 'In Discussion' | 'Partnered';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface ContactDetails {
  emailPlaceholder: string;
  phonePlaceholder: string;
  officeAddressPlaceholder: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    facebook: string;
    youtube: string;
    telegram: string;
  };
  mapActivated: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'about' | 'reporting' | 'volunteering' | 'partnerships';
}
