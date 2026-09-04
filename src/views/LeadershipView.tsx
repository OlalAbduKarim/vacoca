import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Edit3,
  ArrowRight,
  MessageSquareQuote,
  GraduationCap,
  BookOpen,
  Building2,
  Award,
  Globe2,
  Users2,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const LeadershipView: React.FC = () => {
  const { leaderProfile, setIsCMSOpen, setCurrentView, setSelectedArticle, stories } = useApp();

  const dwcPublications = [
    {
      title: 'USA-Israel War Against Iran Is Illegal & Sets Cements Precedent',
      type: 'Foreign Policy & International Law Analysis',
      focus: 'Legal sovereignty, UN charters, and unilateral escalation boundaries.',
      author: 'Dr. Allawi Ssemanda Apuuli',
      slug: 'dwc-usa-israel-iran-international-law-analysis',
    },
    {
      title: 'Africa: The World’s Fastest Growing Continent But Home to 90% of World’s Poorest?',
      type: 'Socio-Economic Review',
      focus: 'Resource extraction paradoxes, procurement leakage, and wealth disparities.',
      author: 'Development Watch Centre Research Desk',
      slug: 'dwc-africa-economic-growth-paradox-poverty',
    },
    {
      title: 'A Critical Analysis of China’s Infrastructure Assistance To Uganda',
      type: 'Peer-Reviewed Research Paper',
      focus: 'Bilateral financing mechanics, sovereign debt governance, and contract transparency.',
      author: 'Dr. Allawi Ssemanda Apuuli et al.',
      slug: 'dwc-china-infrastructure-assistance-uganda-analysis',
    },
    {
      title: 'The Unfinished War: The African Struggle for Intellectual Sovereignty',
      type: 'Decolonial Policy Commentary',
      focus: 'Decolonial knowledge production, domestic think tank funding, and research autonomy.',
      author: 'Dr. Allawi Ssemanda Apuuli',
      slug: 'dwc-african-struggle-intellectual-sovereignty',
    },
  ];

  const universityChapters = [
    {
      campus: 'Mbarara University of Science and Technology (MUST)',
      role: 'Founding Chapter (Inception: 2010)',
      established: 'Western Uganda',
      notes: 'Where Dr. Ssemanda initiated VACOCA during his studies and subsequent 2011 Guild Presidency.',
    },
    {
      campus: 'Makerere University',
      role: 'Central Regional Chapter',
      established: 'Kampala, Uganda',
      notes: 'Active hub for student-led accountability debates, legal symposiums, and public finance scrutiny.',
    },
    {
      campus: 'Ndejje University',
      role: 'Inter-Campus Mobilization Chapter',
      established: 'Luweero & Kampala',
      notes: 'Coordinating student integrity clubs and community-level social audit exercises.',
    },
    {
      campus: 'Bishop Stuart University',
      role: 'Western Regional Chapter',
      established: 'Mbarara, Uganda',
      notes: 'Engaging student guilds and grassroots youth networks on anti-extortion civic monitoring.',
    },
  ];

  const handleOpenPublication = (slug: string) => {
    const article = (stories || []).find((s) => s.slug === slug);
    if (article) {
      setSelectedArticle(article);
    } else {
      setCurrentView('news');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                Academic Leadership & Civic Stewardship
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
              FOUNDER & <span className="text-[#1B4332]">LEADERSHIP</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              Meet the intellectual visionaries and youth mobilization leaders guiding Volunteers Anti-Corruption Campaign Africa in building an unbought, volunteer-driven civic front.
            </p>
          </div>

          <button
            onClick={() => setIsCMSOpen(true)}
            className="self-start md:self-auto px-5 py-3 bg-[#1A1A1A] hover:bg-[#1B4332] text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 transition-all cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Edit Leader in CMS</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Leader Feature: Dr. Allawi Ssemanda Apuuli */}
        <section className="bg-white border border-gray-200 border-l-4 border-[#D4AF37] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Leader Portrait & Credentials */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="border border-gray-200 bg-[#F9F9F7] p-3 space-y-3">
                <img
                  src={leaderProfile.image || '/ldr.png'}
                  alt={`${leaderProfile.name} - ${leaderProfile.title}`}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.endsWith('/ldr.png')) {
                      target.src = '/ldr.png';
                    }
                  }}
                />
                <div className="p-4 bg-white border border-gray-200 space-y-1">
                  <div className="text-[10px] font-mono-accent uppercase tracking-widest text-gray-500 font-bold">
                    Official Designation
                  </div>
                  <h2 className="text-xl font-black text-[#1A1A1A] uppercase font-display">
                    {leaderProfile.name}
                  </h2>
                  <p className="text-xs text-[#1B4332] font-bold uppercase">{leaderProfile.title}</p>
                </div>
              </div>

              {/* Quick Academic & Public Record Fast-Facts */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 space-y-3">
                <div className="text-xs font-mono-accent font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" /> Core Academic & Civic Credentials
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Origin:</strong> Raised in Mbarara, Western Uganda.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Doctorate:</strong> Ph.D. in International Relations (International Law focus).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Think Tank Leadership:</strong> Executive Director, Development Watch Centre (DWC).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Student Leadership:</strong> Guild President, Mbarara University of Science and Technology (MUST, 2011).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Published Book:</strong> <em>Global Governance and Norm Contestation: How BRICS is Reshaping World Order</em>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>VACOCA Founding:</strong> Founded in 2010 at MUST on the Zero-Budget Volunteer Mandate.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Leader Bio & Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold tracking-widest uppercase">
                  Movement Founder Profile
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
                  {leaderProfile.name}
                </h2>
                <div className="text-base sm:text-xl font-bold text-[#D4AF37] font-mono-accent uppercase">
                  {leaderProfile.title}
                </div>
              </div>

              {/* Highlighted Quote Box */}
              <div className="p-6 bg-[#F9F9F7] border border-gray-200 border-l-4 border-[#1B4332] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-accent text-[#1B4332] uppercase tracking-wider font-bold">
                  <MessageSquareQuote className="w-4 h-4 text-[#D4AF37]" /> Core Movement Principle
                </div>
                <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed font-medium">
                  "{leaderProfile.approvedQuote}"
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                {(Array.isArray(leaderProfile?.bio) ? leaderProfile.bio : [leaderProfile?.bio || '']).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* High-Level Engagement Context */}
              <div className="p-5 bg-white border border-gray-200 space-y-2">
                <div className="text-xs font-mono-accent font-bold uppercase text-[#1B4332] flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#D4AF37]" /> High-Level Accountability Dialogue Record
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Through VACOCA's Intellectual Activism model, Dr. Ssemanda and student leaders have hosted high-level accountability forums and direct dialogues featuring prominent national statesmen, including former Prime Minister Hon. Amama Mbabazi, the late Security Minister Gen. Elly Tumwine, senior military commanders, seasoned constitutional lawyers, and public officials.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentView('get-involved')}
                  className="px-8 py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Join The Volunteer Front</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
                <button
                  onClick={() => setCurrentView('news')}
                  className="px-6 py-4 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Read Policy Research
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Development Watch Centre (DWC) Publications */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                  Independent Foreign Policy Think Tank
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] uppercase font-display">
                DEVELOPMENT WATCH CENTRE (DWC) RESEARCH
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                As Executive Director of DWC, Dr. Allawi Ssemanda provides intellectual rigor and policy depth to anti-corruption advocacy through foreign policy, development economics, and international law scholarship.
              </p>
            </div>

            <button
              onClick={() => setCurrentView('news')}
              className="self-start md:self-auto px-4 py-2.5 bg-white border border-gray-300 hover:border-[#1B4332] text-xs font-bold uppercase tracking-widest text-[#1A1A1A] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>View All Dispatches</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1B4332]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dwcPublications.map((pub, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenPublication(pub.slug)}
                className="p-6 bg-white border border-gray-200 hover:border-[#1B4332] transition-all cursor-pointer space-y-4 shadow-sm group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono-accent uppercase tracking-widest text-gray-500">
                    <span className="px-2 py-0.5 bg-[#F9F9F7] border border-gray-200 text-[#1B4332] font-bold">
                      {pub.type}
                    </span>
                    <span>DWC Research</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pub.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-700">{pub.author}</span>
                  <span className="text-[#1B4332] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Analysis <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: VACOCA Inter-University Chapter Model */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                Youth & Student Mobilization
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A] uppercase font-display">
              INTER-UNIVERSITY CHAPTER NETWORK
            </h2>
            <p className="text-sm text-gray-600">
              Founded at Mbarara University of Science and Technology in 2010, VACOCA operates semi-autonomous student chapters enabling young leaders to monitor university procurement and host intellectual accountability forums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universityChapters.map((ch, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-200 border-t-4 border-[#1B4332] space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[10px] font-mono-accent uppercase tracking-widest text-[#1B4332] font-bold">
                  {ch.role}
                </div>
                <h4 className="text-sm font-bold text-[#1A1A1A] leading-snug">
                  {ch.campus}
                </h4>
                <div className="text-xs font-semibold text-[#D4AF37]">{ch.established}</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {ch.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Governance & Working Committees */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
              Institutional Structure
            </span>
            <h2 className="text-3xl font-black text-[#1A1A1A] uppercase font-display">
              ADVISORY & WORKING COMMITTEES
            </h2>
            <p className="text-sm text-gray-600">
              VACOCA operates under a decentralized, volunteer-led structure. Additional executive positions and specialized advisory appointments are ratified and announced via official dispatches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                role: 'Civic Legal & Policy Advisory Group',
                desc: 'Providing pro-bono legal review on whistleblower protection, public procurement laws, and statutory referral protocols.',
                status: 'Active Working Cell',
              },
              {
                num: '02',
                role: 'Youth & Campus Integrity Network',
                desc: 'Coordinating student-led integrity clubs and civic monitoring chapters in higher institutions across Africa.',
                status: 'Mobilization Cell',
              },
              {
                num: '03',
                role: 'Civic Technology & Data Working Group',
                desc: 'Developing open-source verification tools, encrypted reporting channels, and public budget visualization dashboards.',
                status: 'Technical Cell',
              },
            ].map((cell) => (
              <div
                key={cell.role}
                className="p-8 bg-white border border-gray-200 space-y-4 shadow-sm hover:border-[#1B4332] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-accent font-bold text-[#1B4332]">
                    {cell.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-[#F9F9F7] px-2 py-1 border border-gray-200">
                    {cell.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1A1A1A] uppercase font-display">
                  {cell.role}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cell.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

