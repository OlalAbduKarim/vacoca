import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  UserPlus,
  HeartHandshake,
  Download,
  Calendar,
  CheckCircle2,
  Send,
  Shield,
} from 'lucide-react';

export const GetInvolvedView: React.FC = () => {
  const { submitVolunteer, submitPartnerInquiry, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'volunteer' | 'partner' | 'toolkit' | 'events'>('volunteer');

  // Volunteer Form State
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    areaOfInterest: 'Anti-Corruption Advocacy & Public Monitoring',
    skills: '',
    motivation: '',
    weeklyHours: '2-4 hours/week',
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Partner Form State
  const [partnerForm, setPartnerForm] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: 'Civil Society Organization (CSO)',
    country: '',
    proposal: '',
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  // Event Registration State
  const [eventEmail, setEventEmail] = useState('');
  const [eventRegistered, setEventRegistered] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitVolunteer(volunteerForm);
    setVolunteerSubmitted(true);
    setVolunteerForm({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      areaOfInterest: 'Anti-Corruption Advocacy & Public Monitoring',
      skills: '',
      motivation: '',
      weeklyHours: '2-4 hours/week',
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPartnerInquiry(partnerForm);
    setPartnerSubmitted(true);
    setPartnerForm({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      organizationType: 'Civil Society Organization (CSO)',
      country: '',
      proposal: '',
    });
  };

  const handleEventRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventEmail) return;
    setEventRegistered(true);
    showToast('Registered for upcoming Pan-African Civic Integrity Summit!');
    setEventEmail('');
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Mobilization Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            GET <span className="text-[#1B4332]">INVOLVED</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Stand with thousands of African citizens taking a courageous stance for integrity. Whether as an individual volunteer, an institutional partner, or a community organizer, there is a role for you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Selector */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-gray-200 shadow-sm max-w-2xl">
          {[
            { id: 'volunteer', label: 'Become a Volunteer', icon: UserPlus },
            { id: 'partner', label: 'Partner With Us', icon: HeartHandshake },
            { id: 'toolkit', label: 'Citizen Toolkits', icon: Download },
            { id: 'events', label: 'Events & Summits', icon: Calendar },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: VOLUNTEER REGISTRATION FORM */}
        {activeTab === 'volunteer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                  VOLUNTEER APPLICATION
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fill in your details to join our movement. All applications are reviewed by our community coordinators.
                </p>
              </div>

              {volunteerSubmitted ? (
                <div className="p-8 bg-[#F9F9F7] border border-gray-200 border-t-4 border-[#1B4332] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#1B4332] mx-auto" />
                  <h4 className="text-xl font-bold text-[#1A1A1A] uppercase font-display">
                    Application Received!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for stepping forward for Africa. A VACOCA regional volunteer coordinator will review your information and contact you with orientation details.
                  </p>
                  <button
                    onClick={() => setVolunteerSubmitted(false)}
                    className="px-6 py-2.5 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.fullName}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                        placeholder="e.g. Kwesi Amara"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="+254 700 000000"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Country in Africa *
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.country}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, country: e.target.value })}
                        placeholder="e.g. Ghana, Uganda, Kenya"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        City / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.city}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, city: e.target.value })}
                        placeholder="e.g. Nairobi, Kampala, Accra"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Primary Area of Interest
                      </label>
                      <select
                        value={volunteerForm.areaOfInterest}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, areaOfInterest: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      >
                        <option value="Anti-Corruption Advocacy & Public Monitoring">
                          Anti-Corruption Advocacy & Public Monitoring
                        </option>
                        <option value="Integrity Education & Youth Outreach">
                          Integrity Education & Youth Outreach
                        </option>
                        <option value="Community Social Audits & Budget Tracking">
                          Community Social Audits & Budget Tracking
                        </option>
                        <option value="Civic Technology & Research">
                          Civic Technology & Research
                        </option>
                        <option value="Communications & Community Media">
                          Communications & Community Media
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Estimated Weekly Availability
                      </label>
                      <select
                        value={volunteerForm.weeklyHours}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, weeklyHours: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      >
                        <option value="1-2 hours/week">1-2 hours/week (Flexible)</option>
                        <option value="2-4 hours/week">2-4 hours/week (Active)</option>
                        <option value="5+ hours/week">5+ hours/week (Core Organizer)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Skills & Background (e.g. Legal, Teaching, Accounting, Tech, Community Organizing)
                    </label>
                    <input
                      type="text"
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                      placeholder="e.g. Legal research, data analysis, youth organizing"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Why do you want to volunteer with VACOCA? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                      placeholder="Share your personal vision for an accountable, corruption-free community..."
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4 text-[#D4AF37]" />
                      <span>SUBMIT VOLUNTEER ENROLLMENT</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Volunteer Perks & Commitment Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-white border border-gray-200 space-y-4 shadow-sm">
                <div className="w-10 h-10 bg-[#F9F9F7] border border-gray-200 text-[#1B4332] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">
                  What You Gain As A VACOCA Volunteer
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>Free participation in civic ethics & social auditing workshops.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>Direct involvement in real community monitoring campaigns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>Pan-African peer network connecting changemakers across countries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>Certificate of Civic Service for active campaign completion.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white border border-gray-200 border-l-4 border-[#D4AF37] text-xs text-gray-700 leading-relaxed shadow-sm">
                <strong className="text-[#1A1A1A]">Volunteer Code of Integrity:</strong> All VACOCA volunteers sign our non-partisan ethics pledge, committing never to solicit unauthorized fees or misrepresent the movement for personal benefit.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PARTNERSHIP INQUIRY FORM */}
        {activeTab === 'partner' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                  INSTITUTIONAL & COMMUNITY PARTNERSHIP
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Collaborate with VACOCA on integrity curricula, joint investigative research, community dialogues, or civic tech initiatives.
                </p>
              </div>

              {partnerSubmitted ? (
                <div className="p-8 bg-[#F9F9F7] border border-gray-200 border-t-4 border-[#1B4332] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#1B4332] mx-auto" />
                  <h4 className="text-xl font-bold text-[#1A1A1A] uppercase font-display">
                    Partnership Inquiry Received!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your organization's interest in advancing transparency. Our coordination secretariat will reach out promptly to schedule an exploratory discussion.
                  </p>
                  <button
                    onClick={() => setPartnerSubmitted(false)}
                    className="px-6 py-2.5 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Organization / Entity Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.organizationName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, organizationName: e.target.value })}
                        placeholder="e.g. Pan-African Civic Alliance"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Contact Person & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.contactPerson}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                        placeholder="e.g. Dr. Jane Okonkwo, Director"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="partner@organization.org"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        placeholder="+234 800 000000"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                        Country of Operation *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.country}
                        onChange={(e) => setPartnerForm({ ...partnerForm, country: e.target.value })}
                        placeholder="e.g. Nigeria, South Africa"
                        className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Organization Category
                    </label>
                    <select
                      value={partnerForm.organizationType}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organizationType: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    >
                      <option value="Civil Society Organization (CSO)">Civil Society Organization (CSO)</option>
                      <option value="Academic / University Institution">Academic / University Institution</option>
                      <option value="Primary / Secondary School">Primary / Secondary School</option>
                      <option value="Community-Based Group (CBO)">Community-Based Group (CBO)</option>
                      <option value="Media & Journalism Outlet">Media & Journalism Outlet</option>
                      <option value="Professional Association / Trade Union">Professional Association / Trade Union</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Proposed Collaboration Outline *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={partnerForm.proposal}
                      onChange={(e) => setPartnerForm({ ...partnerForm, proposal: e.target.value })}
                      placeholder="Briefly describe how your institution envisions working with VACOCA..."
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1A1A1A] hover:bg-[#1B4332] text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
                      <span>SUBMIT PARTNERSHIP INQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-white border border-gray-200 space-y-4 shadow-sm">
                <h4 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">
                  Partnership Modalities
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  VACOCA builds partnerships based on mutual commitment to transparency, non-partisanship, and citizen empowerment.
                </p>
                <div className="space-y-3 text-xs text-gray-600">
                  <div className="p-3.5 bg-[#F9F9F7] border border-gray-200 space-y-1">
                    <strong className="text-[#1A1A1A] block">Academic Alliances:</strong>
                    Integrating anti-corruption and open government research into university seminars.
                  </div>
                  <div className="p-3.5 bg-[#F9F9F7] border border-gray-200 space-y-1">
                    <strong className="text-[#1A1A1A] block">Media & Journalism:</strong>
                    Collaborating with local journalists on community social audits and data-driven investigations.
                  </div>
                  <div className="p-3.5 bg-[#F9F9F7] border border-gray-200 space-y-1">
                    <strong className="text-[#1A1A1A] block">Community Trade Associations:</strong>
                    Documenting extortion on informal market traders and co-designing transparent fee systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CITIZEN TOOLKITS */}
        {activeTab === 'toolkit' && (
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                CITIZEN ACTION KITS & DOWNLOADS
              </h3>
              <p className="text-sm text-gray-600">
                Practical, accessible guides prepared by VACOCA volunteers to empower community monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Community Social Audit Checklist',
                  desc: 'A step-by-step primer on verifying public clinic, borehole, and school procurement deliveries.',
                  size: 'PDF • 1.2 MB',
                  tag: 'Monitoring',
                },
                {
                  title: 'Citizens Whistleblower Safety Guide',
                  desc: 'Legal guidance on documenting facts responsibly and identifying legitimate statutory ombudsman channels.',
                  size: 'PDF • 850 KB',
                  tag: 'Legal Rights',
                },
                {
                  title: 'Youth Integrity Club Starter Pack',
                  desc: 'Activity guides, case studies, and debate topics for school and campus anti-corruption clubs.',
                  size: 'PDF • 2.4 MB',
                  tag: 'Education',
                },
              ].map((kit) => (
                <div
                  key={kit.title}
                  className="p-8 bg-white border border-gray-200 hover:border-[#1B4332] transition-all flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono-accent font-bold px-2 py-0.5 bg-[#F9F9F7] text-[#1B4332] border border-gray-200">
                        {kit.tag}
                      </span>
                      <span className="text-xs text-gray-400">{kit.size}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#1A1A1A] uppercase font-display">{kit.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{kit.desc}</p>
                  </div>
                  <button
                    onClick={() => showToast(`Initiating download for ${kit.title}`)}
                    className="w-full py-3 bg-[#F9F9F7] hover:bg-gray-100 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] border border-gray-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#1B4332]" />
                    <span>Download Toolkit</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: EVENTS & SUMMIT REGISTRATION */}
        {activeTab === 'events' && (
          <div className="p-8 sm:p-12 bg-white border border-gray-200 shadow-sm space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                Upcoming Virtual Gathering
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                PAN-AFRICAN CIVIC INTEGRITY SUMMIT
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join civic advocates, investigative journalists, and volunteer coordinators across 30+ countries for our flagship digital conference on citizen budget tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F9F9F7] border border-gray-200">
                <span className="text-gray-500 text-xs block">Format:</span>
                <span className="text-[#1A1A1A] font-bold text-sm">Virtual Interactive Webinar</span>
              </div>
              <div className="p-4 bg-[#F9F9F7] border border-gray-200">
                <span className="text-gray-500 text-xs block">Date:</span>
                <span className="text-[#1A1A1A] font-bold text-sm">Upcoming Series • 2026</span>
              </div>
              <div className="p-4 bg-[#F9F9F7] border border-gray-200">
                <span className="text-gray-500 text-xs block">Admission:</span>
                <span className="text-[#1B4332] font-bold text-sm">Free for Registered Citizens</span>
              </div>
            </div>

            {eventRegistered ? (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                <span>You are registered! Calendar invitations and link will be emailed prior to the summit.</span>
              </div>
            ) : (
              <form onSubmit={handleEventRegister} className="flex flex-col sm:flex-row gap-3 max-w-xl pt-2">
                <input
                  type="email"
                  required
                  value={eventEmail}
                  onChange={(e) => setEventEmail(e.target.value)}
                  placeholder="Enter your email to reserve your virtual seat..."
                  className="flex-1 bg-white border border-gray-300 px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shadow-sm shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Reserve Seat</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
