import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';

interface LegalViewProps {
  type: 'privacy' | 'terms' | 'disclaimer';
}

export const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  const { setCurrentView } = useApp();

  const contentMap = {
    privacy: {
      title: 'PRIVACY & DATA PROTECTION POLICY',
      subtitle: 'Whistleblower Protection, Anonymity Safeguards, and Data Handling Standards',
      lastUpdated: 'Updated September 2026',
      sections: [
        {
          heading: '1. Whistleblower Anonymity & Protection',
          body: 'Volunteers Anti-Corruption Campaign Africa (VACOCA) prioritizes citizen security above all operational considerations. When submitting incident reports or concerns via our platform, you are not required to provide personal identity credentials unless you explicitly choose to do so.',
        },
        {
          heading: '2. Zero IP Logging on Anonymous Reports',
          body: 'Submissions made anonymously do not retain client IP addresses or unique device fingerprints in our public records. Encrypted tracking codes are generated client-side to allow citizens to follow incident verification status without revealing their identities.',
        },
        {
          heading: '3. Volunteer & Partner Information Handling',
          body: 'Personal data submitted for volunteer enlistment or institutional partnership dialogues is stored securely and processed exclusively for civic coordination, capacity building workshops, and authorized movement activities. VACOCA does not sell, trade, or transfer contact records to commercial entities.',
        },
      ],
    },
    terms: {
      title: 'TERMS OF CIVIC ENGAGEMENT',
      subtitle: 'Operational Guidelines for Citizen Advocates, Volunteers, and University Chapters',
      lastUpdated: 'Updated September 2026',
      sections: [
        {
          heading: '1. The Voluntary Principle',
          body: 'VACOCA was founded in 2010 by Dr. Allawi Ssemanda Apuuli on the foundational principle that citizens must willingly volunteer to defeat corruption rather than treating activism as a commercial enterprise or donor-dependent career.',
        },
        {
          heading: '2. Non-Partisan Stewardship',
          body: 'All campus chapters, working cells, and volunteer advocates operate on a strictly non-partisan basis. Our commitment is solely to integrity, transparency, accountability, and the lawful stewardship of public resources across Africa.',
        },
        {
          heading: '3. Factual Verification Standards',
          body: 'Advocates and contributors must adhere to ethical verification standards. Allegations of public resource misappropriation must be substantiated with documentary or observable evidence to maintain the moral integrity of civic investigations.',
        },
      ],
    },
    disclaimer: {
      title: 'REPORTING & CIVIC DISCLAIMER',
      subtitle: 'Statutory Limits, Public Interest Verification, and Referral Frameworks',
      lastUpdated: 'Updated September 2026',
      sections: [
        {
          heading: '1. Civil Society Scope',
          body: 'VACOCA is an independent civil society organization and volunteer movement. It does not replace statutory judicial bodies, the Inspectorate of Government, police anti-corruption departments, or national ombudsman offices.',
        },
        {
          heading: '2. Evidence Triage & Statutory Referrals',
          body: 'Concerns reported to VACOCA are reviewed by civic legal volunteers for public interest credibility. When actionable evidence of systemic graft is verified, reports are packaged into lawful civic memoranda and referred to relevant public oversight institutions.',
        },
        {
          heading: '3. Community Protection Notice',
          body: 'Citizens are strongly advised never to put themselves or their families in physical jeopardy to acquire sensitive documentation. Use lawful open data requests, public budget hearings, and protected digital channels.',
        },
      ],
    },
  };

  const item = contentMap[type] || contentMap.privacy;

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentView('home')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-mono-accent font-bold uppercase tracking-wider text-gray-600 hover:text-[#1B4332] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-3 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2 text-[#1B4332]">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest uppercase">
                {item.lastUpdated}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#1A1A1A]">
              {item.title}
            </h1>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              {item.subtitle}
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            {item.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] font-display uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                  {sec.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between text-xs font-mono-accent">
            <span className="text-gray-500">
              VACOCA Secretariat • Independent Think Tank & Civic Alliance
            </span>
            <button
              onClick={() => setCurrentView('contact')}
              className="text-[#1B4332] hover:underline font-bold uppercase"
            >
              Have questions? Contact Legal Desk →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
