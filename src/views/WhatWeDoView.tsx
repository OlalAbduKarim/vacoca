import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Megaphone,
  BookOpen,
  Network,
  Radio,
  Vote,
  Compass,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  FileCheck2,
} from 'lucide-react';

export const WhatWeDoView: React.FC = () => {
  const { setCurrentView } = useApp();
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: 'advocacy',
      title: 'ANTI-CORRUPTION ADVOCACY',
      tagline: 'Mobilizing citizens and communities to reject corruption.',
      icon: Megaphone,
      accent: 'emerald',
      overview:
        'Our advocacy initiatives transform passive frustration into lawful, structured civic pressure. We engage with public institutions, local government bodies, and parliamentary committees to advance open data standards, whistleblower safety laws, and fiscal transparency.',
      coreActivities: [
        'Organizing citizen dialogue forums on public resource management.',
        'Submitting public interest memoranda on open budget access.',
        'Campaigning against arbitrary checkpoint levies and administrative extortion.',
        'Facilitating multi-stakeholder integrity pacts between local businesses and councils.',
      ],
      impactOutcome:
        'Establishing community norms where corruption is actively identified, reported, and socially rejected.',
    },
    {
      id: 'education',
      title: 'INTEGRITY EDUCATION',
      tagline: 'Promoting ethical leadership, integrity and responsible citizenship.',
      icon: BookOpen,
      accent: 'gold',
      overview:
        'Long-term cultural transformation requires instilling moral courage in youth before they enter the professional workforce. Our curriculum brings interactive ethics training to schools, tertiary institutions, and vocational hubs.',
      coreActivities: [
        'Integrity Clubs in secondary schools and youth associations.',
        'University ethical leadership symposia on procurement integrity.',
        'Gamified civic ethics simulations exposing the hidden economic costs of graft.',
        'Mentorship networks pairing young leaders with veteran civic advocates.',
      ],
      impactOutcome:
        'Nurturing a new generation of African professionals who place public duty and integrity above personal enrichment.',
    },
    {
      id: 'volunteers',
      title: 'VOLUNTEER MOBILIZATION',
      tagline: 'Building a network of people committed to positive change.',
      icon: Network,
      accent: 'sky',
      overview:
        'Volunteers are the lifeblood of VACOCA. We recruit, train, and support grassroots organizers, data analysts, legal researchers, and media professionals to conduct monitoring in their home communities.',
      coreActivities: [
        'Structured volunteer induction on safe documentation and digital security.',
        'Community chapters coordinating local social audits and budget tracking.',
        'Specialized volunteer cells (Civic Tech, Legal Aid, Youth Outreach, Media).',
        'Regular peer-learning exchanges across African regions.',
      ],
      impactOutcome:
        'A resilient continental network of trained civic champions ready to act in public interest.',
    },
    {
      id: 'awareness',
      title: 'PUBLIC AWARENESS',
      tagline: 'Using campaigns, dialogue, media and community engagement.',
      icon: Radio,
      accent: 'amber',
      overview:
        'Corruption thrives in shadows and confusion. We produce clear, jargon-free informational campaigns via community radio, digital media, podcasts, and town hall gatherings to explain citizen rights.',
      coreActivities: [
        'Vernacular community radio programs dissecting local municipal budgets.',
        'Plain-language infographics illustrating public tender requirements.',
        'Street-theatre and town square dialogues on rejecting election bribery.',
        'Digital myth-busting series debunking the notion that corruption is culturally inevitable.',
      ],
      impactOutcome:
        'Demystified public finance that empowers every taxpayer to demand what they are owed.',
    },
    {
      id: 'accountability',
      title: 'CIVIC ACCOUNTABILITY INITIATIVES',
      tagline: 'Encouraging citizens to participate in demanding transparency.',
      icon: Vote,
      accent: 'rose',
      overview:
        'We pioneer community-led social auditing and monitoring. Citizens inspect public infrastructure projects (roads, schools, boreholes, clinics) to verify if deliverables match approved budget specifications.',
      coreActivities: [
        'Community project tracking checklists for public works.',
        'Facilitating constructive public hearings with local council representatives.',
        'Documenting procurement discrepancies and submitting structured inquiries.',
        'Assisting whistleblowers to connect securely with lawful investigative agencies.',
      ],
      impactOutcome:
        'Ensuring diverted or abandoned public projects are promptly flagged and rectified.',
    },
    {
      id: 'collaboration',
      title: 'AFRICAN COLLABORATION',
      tagline: 'Supporting cooperation and collective action across communities.',
      icon: Compass,
      accent: 'emerald',
      overview:
        'Illicit financial flows and governance deficits cross national borders. VACOCA fosters pan-African civil society solidarity to share investigative frameworks, joint campaigns, and cross-border research.',
      coreActivities: [
        'Pan-African civic integrity summits and policy working groups.',
        'Shared open-source toolkits for social audits and open contracting.',
        'Cross-border civil society statements on natural resource governance.',
        'Regional solidarity networks protecting frontline civic advocates.',
      ],
      impactOutcome:
        'A unified, unstoppable African citizen front for transparent and prosperous governance.',
    },
  ];

  const current = pillars[selectedPillar];

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Operational Architecture
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            WHAT <span className="text-[#1B4332]">WE DO</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            From grassroots budget monitoring to ethical youth education: explore the six strategic pillars through which VACOCA converts civic commitment into lasting institutional transparency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Pillar Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {pillars.map((p, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-5 text-left transition-all border flex flex-col justify-between h-36 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#1B4332] border-t-4 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center font-bold text-xs font-mono-accent ${
                    isSelected ? 'bg-[#1B4332] text-white' : 'bg-[#F9F9F7] text-gray-600 border border-gray-200'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div className="space-y-0.5">
                  <div
                    className={`text-xs font-bold leading-tight uppercase font-display ${
                      isSelected ? 'text-[#1B4332]' : 'text-gray-700'
                    }`}
                  >
                    {p.title.replace('ANTI-CORRUPTION ', '').replace(' INITIATIVES', '')}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <div className="p-8 sm:p-12 bg-white border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-widest">
                  Pillar 0{selectedPillar + 1} Spotlight
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                  {current.title}
                </h2>
                <p className="text-sm font-bold text-[#D4AF37] font-mono-accent uppercase">
                  {current.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {current.overview}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono-accent font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#1B4332]" /> Core Program Activities
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {current.coreActivities.map((act, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#F9F9F7] border border-gray-200 flex items-start gap-3 text-xs sm:text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Expected Impact Box */}
              <div className="p-6 bg-[#F9F9F7] border border-gray-200 border-l-4 border-[#1B4332] space-y-3">
                <div className="text-xs font-bold text-[#1B4332] uppercase font-mono-accent tracking-wider">
                  Target Civic Outcome
                </div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  "{current.impactOutcome}"
                </p>
              </div>

              {/* Action Prompt */}
              <div className="p-6 bg-white border border-gray-200 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-[#1A1A1A] uppercase font-display">
                  Support This Pillar
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Are you a volunteer, researcher, educator, or civil society organizer passionate about {current.title}?
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={() => setCurrentView('get-involved')}
                    className="w-full py-3.5 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Volunteer for this Initiative</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                  <button
                    onClick={() => setCurrentView('report')}
                    className="w-full py-3.5 bg-white hover:bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-widest border border-rose-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    <span>Report a Related Concern</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Section: Three Primary Campus Youth Engagement Strategies */}
        <section className="space-y-10 pt-8 border-t border-gray-200">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                Youth Mobilization Doctrine
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
              CAMPUS ENGAGEMENT & <span className="text-[#1B4332]">INTELLECTUAL ACTIVISM</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Inspired in 2008 by President Yoweri Museveni’s national state address and established by General Elly Tumwine alongside original co-founders Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza (fully registered in March 2011), VACOCA is built upon three non-negotiable strategic pillars that mobilize the intellectual and civic power of Ugandan youth without commercial compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy 1 */}
            <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#1B4332] space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-accent font-bold text-[#1B4332] bg-[#F9F9F7] px-2.5 py-1 border border-gray-200">
                  STRATEGY 01
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] font-mono-accent">
                  Direct Interrogation
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] font-display uppercase leading-snug">
                "Intellectual Activism" Accountability Forums
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Rather than street confrontation, VACOCA brings power into the lecture hall. We invite high-profile public servants, senior cabinet ministers, seasoned constitutional lawyers, military commanders, and civic leaders directly to university campuses.
              </p>
              <div className="p-4 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-800 space-y-1">
                <strong className="text-[#1B4332] block font-mono-accent uppercase tracking-wider">Methodology:</strong>
                Students conduct pre-forum forensic research on municipal and national expenditures, questioning duty-bearers with facts, statutory references, and unflinching intellectual rigor.
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#D4AF37] space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-accent font-bold text-[#D4AF37] bg-[#F9F9F7] px-2.5 py-1 border border-gray-200">
                  STRATEGY 02
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1B4332] font-mono-accent">
                  Decentralized Network
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] font-display uppercase leading-snug">
                Inter-University Chapter Model
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                VACOCA is not a centralized bureaucracy. We establish semi-autonomous chapters across universities—including Mbarara University of Science and Technology (MUST), Makerere University, Ndejje University, and Bishop Stuart University.
              </p>
              <div className="p-4 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-800 space-y-1">
                <strong className="text-[#D4AF37] block font-mono-accent uppercase tracking-wider">Campus Autonomy:</strong>
                Student guilds and chapter coordinators independently design their anti-corruption campaigns, investigating local university tuition management, library procurement, and municipal utility services.
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#1A1A1A] space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-accent font-bold text-[#1A1A1A] bg-[#F9F9F7] px-2.5 py-1 border border-gray-200">
                  STRATEGY 03
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 font-mono-accent">
                  Uncompromised Integrity
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] font-display uppercase leading-snug">
                Zero-Budget Volunteer Mandate
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                VACOCA strictly rejects paying students or volunteers allowances to attend meetings or conduct civic activism. We operate on the foundational premise that citizens must willingly volunteer to defeat corruption rather than treating activism as a commercial career.
              </p>
              <div className="p-4 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-800 space-y-1">
                <strong className="text-[#1A1A1A] block font-mono-accent uppercase tracking-wider">Moral Shield:</strong>
                By eliminating monetary incentives, VACOCA immunizes its advocates against external co-optation and donor dependency, instilling unshakeable moral conviction in the next generation of African leaders.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
