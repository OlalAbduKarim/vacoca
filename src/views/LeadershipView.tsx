import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Edit3,
  ArrowRight,
  MessageSquareQuote,
  GraduationCap,
  Award,
  Users2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const LeadershipView: React.FC = () => {
  const { leaderProfile, founders, setIsCMSOpen, setCurrentView, setSelectedArticle, stories } = useApp();

  const universityChapters = [
    {
      campus: 'Mbarara University of Science and Technology (MUST)',
      role: 'Founding Campus Chapter (2009–2011)',
      established: 'Western Uganda',
      notes: 'Pioneered early student anti-corruption training and accountability lecture forums.',
    },
    {
      campus: 'Makerere University',
      role: 'National Student Chapter Hub',
      established: 'Kampala, Uganda',
      notes: 'Trained thousands of student advocates in budget scrutiny and integrity ethics.',
    },
    {
      campus: 'Ndejje University',
      role: 'Inter-Campus Mobilization Chapter',
      established: 'Luweero & Kampala',
      notes: 'Coordinated student integrity clubs and community-level social audit exercises.',
    },
    {
      campus: 'Bishop Stuart University',
      role: 'Western Regional Chapter',
      established: 'Mbarara, Uganda',
      notes: 'Engaged student guilds and grassroots youth networks on anti-extortion civic monitoring.',
    },
  ];

  const historicalMilestones = [
    {
      year: '2008',
      title: 'The Presidential National State Address',
      desc: 'During a national address, President Yoweri Museveni declared he had won many battles, but the battle he had failed to win was the battle against corruption, leaving it to every Ugandan to help him. General Elly Tumwine drew immediate inspiration from this call to create VACOCA.',
    },
    {
      year: '2009–2010',
      title: 'Founding Council & Campus Chapters',
      desc: 'General Elly Tumwine united with co-founders Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza to establish university chapters, training youth on fighting graft without financial dependency.',
    },
    {
      year: 'Early 2011',
      title: 'Growth to Over 5,000 Volunteers',
      desc: 'Through dedicated campus outreach and community rallies, VACOCA surpassed 5,000 active members and developed an autonomous student guild network across Uganda.',
    },
    {
      year: 'March 2011',
      title: 'Full Official NGO Registration',
      desc: 'VACOCA was officially and fully registered in March 2011 as a non-partisan civil society organization, solidifying its institutional mandate.',
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
                Origins, Leadership & Founding History
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
              FOUNDERS & <span className="text-[#1B4332]">LEADERSHIP</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              Discover the true history of VACOCA, inspired in 2008 by President Yoweri Museveni’s national address, led by General Elly Tumwine and the original co-founders to full registration in March 2011.
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
        {/* Main Leader Feature: General Elly Tumwine */}
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

              {/* Founding Highlights Fast-Facts */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 space-y-3">
                <div className="text-xs font-mono-accent font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" /> Historical Founding Record
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Inception:</strong> Inspired in 2008 following President Yoweri Museveni’s national state address.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Lead Founder:</strong> General Elly Tumwine conceived and guided the volunteer movement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Original Co-Founders:</strong> Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Movement Growth:</strong> Reached 5,000+ members and established university chapters by 2011.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Registration:</strong> Fully and officially registered in March 2011.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                    <span><strong>Core Principle:</strong> The Zero-Budget Volunteer Mandate—fighting corruption as a patriotic duty.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Leader Bio & Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold tracking-widest uppercase">
                  Lead Founder & Inspirer
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

              {/* Founding Context Callout */}
              <div className="p-5 bg-white border border-gray-200 space-y-2">
                <div className="text-xs font-mono-accent font-bold uppercase text-[#1B4332] flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#D4AF37]" /> The 2008 State Address Genesis
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  During a 2008 national state address, President Yoweri Museveni stated that while he had won many battles, the battle that he had failed to win was the battle against corruption, leaving it to every Ugandan to help him on it. General Elly Tumwine was inspired by this address to create VACOCA, establishing a voluntary platform for every citizen to take up this critical duty.
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
                  Explore Historical Dispatches
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Original Founders */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                  Founding Council (Registered March 2011)
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#1A1A1A] uppercase font-display">
                THE ORIGINAL FOUNDERS OF VACOCA
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The distinguished patriots and civic champions who led the movement alongside Lead Founder General Elly Tumwine:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((f) => (
              <div
                key={f.id}
                className="p-6 bg-white border border-gray-200 border-t-4 border-[#1B4332] space-y-4 shadow-sm hover:border-[#D4AF37] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#1B4332] font-bold bg-[#F9F9F7] px-2.5 py-1 border border-gray-200">
                    {f.badge}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-gray-500 font-mono-accent">
                    March 2011 Charter
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                    {f.name}
                  </h3>
                  <div className="text-xs text-[#D4AF37] font-semibold font-mono-accent pt-0.5">
                    {f.role}
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {f.bio}
                </p>
              </div>
            ))}
            <div className="p-6 bg-[#1A1A1A] text-white border border-gray-800 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#D4AF37] font-bold">
                  Collective Legacy
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase tracking-tight">
                  Over 5,000 Founding Volunteers by 2011
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Through the uncompromised leadership of General Elly Tumwine, Hon. Major Kyomugisha Grace, Yasine Juma, Waidhuba John, and Merab Akampumuza, VACOCA established youth chapters in universities across Uganda, leading to full registration in March 2011.
                </p>
              </div>
              <button
                onClick={() => setCurrentView('get-involved')}
                className="w-full bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest py-3 text-center transition-colors cursor-pointer"
              >
                Volunteer With Us
              </button>
            </div>
          </div>
        </section>

        {/* Section: Historical Milestones (2008-2011) */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                Chronology of the Movement
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1A1A1A] uppercase font-display">
              HISTORICAL FOUNDING MILESTONES
            </h2>
            <p className="text-sm text-gray-600">
              The defining moments that shaped VACOCA from the 2008 presidential speech to formal incorporation in March 2011.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalMilestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-200 border-t-4 border-[#1B4332] space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-black font-display text-[#1B4332]">
                  {m.year}
                </div>
                <h4 className="text-sm font-bold text-[#1A1A1A] uppercase leading-snug">
                  {m.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
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
              UNIVERSITY CHAPTER NETWORK IN UGANDA
            </h2>
            <p className="text-sm text-gray-600">
              By 2011, VACOCA had established different chapters across universities of Uganda where they systematically trained youths about the importance of fighting corruption and upholding civic values.
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
              VACOCA operates under a decentralized, volunteer-led structure established by the original founders.
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
                desc: 'Coordinating student-led integrity clubs and civic monitoring chapters in higher institutions across Uganda and Africa.',
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

