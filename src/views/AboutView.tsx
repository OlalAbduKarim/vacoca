import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_FAQS, VACOCA_CHARTER } from '../data/initialData';
import {
  Target,
  Eye,
  Compass,
  HelpCircle,
  ChevronDown,
  Shield,
  Sparkles,
  Scale,
  Users2,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Building,
  Award,
  BookOpen,
  EyeOff,
  UserCheck,
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setCurrentView, leaderProfile } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const objectiveIcons = [
    Users2,
    HeartHandshake,
    BookOpen,
    Shield,
    EyeOff,
    Award,
    Scale,
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Institutional Identity & Legal Charter
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            ABOUT <span className="text-[#1B4332]">VACOCA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-normal">
            Volunteers Anti-Corruption Campaign Africa (VACOCA) is an anti-corruption NGO registered with the NGO Board of Uganda. The organization has been in existence since 2008.
          </p>
          <p className="text-base text-gray-600 leading-relaxed font-light">
            VACOCA is made up of volunteers and operates as a non-partisan and inclusive pressure group, working within the laws of Uganda as enshrined in the 1995 Constitution of the Republic of Uganda. VACOCA seeks to mobilize citizens and communities to resist corruption, promote accountability and integrity, educate society about corruption, and contribute to the creation of a corruption-free society.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1B4332] text-white text-xs font-bold font-mono-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Our Motto: “No more corruption we shall win.”</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-300 text-gray-800 text-xs font-medium font-mono-accent">
              <Shield className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Registered with NGO Board of Uganda</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* =========================================================================
            SECTION: MOTTO, MISSION & VISION (TRIFECTA SHOWCASE)
           ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Motto Card */}
          <div className="p-8 bg-[#1A1A1A] text-white border-t-4 border-[#D4AF37] shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 bg-white/10 text-[#D4AF37] flex items-center justify-center border border-white/10">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#D4AF37] font-bold block">
              Movement Creed
            </span>
            <h3 className="text-2xl font-black uppercase font-display tracking-tight text-white">
              OUR MOTTO
            </h3>
            <p className="text-xl sm:text-2xl font-black text-white italic font-display leading-snug">
              “No more corruption we shall win.”
            </p>
            <p className="text-xs text-gray-400 leading-relaxed pt-2 border-t border-white/10">
              A defiant proclamation of citizen confidence, moral determination, and shared African victory over graft.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#1B4332] shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#F9F9F7] border border-gray-200 text-[#1B4332] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#1B4332] font-bold block">
              Core Purpose
            </span>
            <h3 className="text-2xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR MISSION
            </h3>
            <p className="text-xl sm:text-2xl font-black text-[#1B4332] italic font-display leading-snug">
              “To create a corruption free society.”
            </p>
            <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              Mobilizing every citizen, youth student, and community to defend public resources through ethical courage and lawful collective action.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#D4AF37] shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#F9F9F7] border border-gray-200 text-[#D4AF37] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#D4AF37] font-bold block">
              Future Horizon
            </span>
            <h3 className="text-2xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR VISION
            </h3>
            <p className="text-lg sm:text-xl font-black text-[#1A1A1A] italic font-display leading-snug">
              “To be the indomitable and most sustainable mass movement against corruption.”
            </p>
            <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              Building an unbought, uncompromised, and enduring volunteer infrastructure that outlasts any single election or administration.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: OUR CORE VALUES (5 OFFICIAL VALUES)
           ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-[2px] bg-[#1B4332]" />
              <h3 className="text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                Guiding Principles
              </h3>
              <div className="w-6 h-[2px] bg-[#1B4332]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase">
              OUR CORE VALUES
            </h2>
            <p className="text-sm text-gray-600">
              The ethical compass governing every volunteer, chapter, and initiative across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'ACCOUNTABILITY',
                desc: 'Holding public officials and institutions answerable to the people, ensuring transparency in every action and resource allocation.',
              },
              {
                num: '02',
                title: 'INTEGRITY',
                desc: 'Upholding strict moral and ethical standards, honesty, and consistency in public, civic, and personal conduct.',
              },
              {
                num: '03',
                title: 'SUSTAINABILITY',
                desc: 'Building enduring, self-reliant citizen movements and anti-corruption systems that thrive for generations without compromise.',
              },
              {
                num: '04',
                title: 'UNITY',
                desc: 'Bringing together diverse citizens across all backgrounds, regions, and faiths in a cohesive, non-partisan front against corruption.',
              },
              {
                num: '05',
                title: 'PEACE',
                desc: 'Promoting a just, harmonious, and conflict-free society anchored in the rule of law, fair courts, and equitable public stewardship.',
              },
            ].map((val) => (
              <div
                key={val.title}
                className="p-6 bg-white border border-gray-200 shadow-sm hover:border-[#1B4332] transition-colors space-y-3"
              >
                <div className="text-xs font-bold text-[#1B4332] font-mono-accent">
                  {val.num}
                </div>
                <div className="text-base font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                  {val.title}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: OUR OBJECTIVES (THE 7 OFFICIAL STATUTORY OBJECTIVES)
           ========================================================================= */}
        <section className="bg-white border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                Mandate & Directives
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR OBJECTIVES
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              VACOCA’s objectives guide our volunteer mobilizations, legal collaborations, and anti-corruption campaigns across Uganda and the African continent:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {VACOCA_CHARTER.objectives.map((obj, idx) => {
              const Icon = objectiveIcons[idx % objectiveIcons.length];
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#F9F9F7] border border-gray-200 flex items-start gap-4 hover:border-[#1B4332] transition-colors"
                >
                  <div className="w-9 h-9 bg-white border border-gray-300 text-[#1B4332] flex items-center justify-center shrink-0 font-mono-accent font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#1A1A1A] leading-relaxed">
                      {obj}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION: OUR STORY & FACTUAL CHARTER
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Origins & Historical Foundation (2008–2011)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              FROM A PRESIDENTIAL CALL TO A CITIZEN VOLUNTEER FRONT
            </h2>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                In <strong>2008</strong>, during a momentous national state address, <strong>President Yoweri Kaguta Museveni</strong> openly acknowledged that while he had fought and won many military and political battles, the one battle that he had failed to win was the battle against corruption, and that he was leaving it to every Ugandan citizen to rise up and help him on it.
              </p>
              <p>
                From that pivotal declaration, <strong>General Elly Tumwine</strong> drew the deep patriotic inspiration to create <strong>Volunteers Anti-Corruption Campaign Africa (VACOCA)</strong>—convinced that corruption could only be defeated if citizens took personal responsibility rather than relying solely on bureaucratic enforcement.
              </p>
              <p>
                General Elly Tumwine was joined by a visionary team of original co-founders who led the organization alongside him: <strong>Hon. Major Kyomugisha Grace</strong>, <strong>Yasine Juma</strong>, <strong>Waidhuba John</strong>, and <strong>Merab Akampumuza</strong>. Together, they established chapters across universities in Uganda, where they systematically trained thousands of youths about the paramount importance of resisting bribery, exposing graft, and upholding civic integrity.
              </p>
              <p>
                By <strong>2011</strong>, the movement had mobilized over <strong>5,000 active members</strong> and established active student chapters across Ugandan universities. Following this remarkable grassroots growth, VACOCA was <strong>fully registered in March 2011</strong> with the NGO Board of Uganda.
              </p>
              <div className="bg-white p-5 border border-gray-200 border-l-4 border-[#1B4332] text-xs sm:text-sm text-gray-600 shadow-sm space-y-1">
                <strong className="text-[#1A1A1A] block font-mono-accent uppercase">The Core Volunteer Mandate:</strong>
                General Elly Tumwine and the founders instituted the principle that citizens must willingly volunteer their energy to defeat corruption rather than treating activism as a commercial job or donor-seeking business.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white p-4 border border-gray-200 shadow-sm space-y-4">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Ugandan youth and community leaders in civic solidarity"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] font-mono-accent">
                  Founding Principle (Inspired 2008 • Registered March 2011)
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A] italic">
                  "{leaderProfile.approvedQuote}"
                </p>
                <div className="text-[11px] text-[#D4AF37] font-bold uppercase font-mono-accent pt-1">
                  — General Elly Tumwine, Lead Founder & Chief Inspirer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: ORIGINAL FOUNDING COUNCIL
           ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-[2px] bg-[#1B4332]" />
              <h3 className="text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                Historical Leadership
              </h3>
              <div className="w-6 h-[2px] bg-[#1B4332]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase">
              THE ORIGINAL FOUNDING COUNCIL
            </h2>
            <p className="text-sm text-gray-600">
              The original pioneers who led VACOCA alongside General Elly Tumwine to full registration in March 2011.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 border-t-4 border-[#1B4332] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#1B4332] bg-[#F9F9F7] px-2 py-0.5 border border-gray-200 uppercase font-mono-accent">
                  Lead Founder
                </span>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase font-mono-accent">
                  Chief Inspirer
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">General Elly Tumwine</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Spearheaded the creation of VACOCA following President Museveni’s 2008 national address. Championed patriotic volunteerism, moral courage, and youth integrity across Uganda.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 border-t-4 border-[#D4AF37] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#F9F9F7] px-2 py-0.5 border border-gray-200 uppercase font-mono-accent">
                  Original Co-Founder
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase font-mono-accent">
                  March 2011 Charter
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">Hon. Major Kyomugisha Grace</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Founding leader who worked alongside General Tumwine, providing institutional direction, women’s civic mobilization, and structuring the nationwide anti-corruption chapters.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 border-t-4 border-[#1A1A1A] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-800 bg-[#F9F9F7] px-2 py-0.5 border border-gray-200 uppercase font-mono-accent">
                  Original Co-Founder
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase font-mono-accent">
                  March 2011 Charter
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">Yasine Juma</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Core founding pillar who organized community awareness campaigns and student recruitment across Ugandan higher institutions during the 2008–2011 mobilization phase.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 border-t-4 border-[#1B4332] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#1B4332] bg-[#F9F9F7] px-2 py-0.5 border border-gray-200 uppercase font-mono-accent">
                  Original Co-Founder
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase font-mono-accent">
                  March 2011 Charter
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">Waidhuba John</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Founding architect who helped structure the civic outreach frameworks and university anti-corruption chapters leading to the milestone of over 5,000 members by 2011.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 border-t-4 border-[#D4AF37] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#F9F9F7] px-2 py-0.5 border border-gray-200 uppercase font-mono-accent">
                  Original Co-Founder
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase font-mono-accent">
                  March 2011 Charter
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] uppercase font-display">Merab Akampumuza</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pioneering co-founder who designed youth training curricula on ethics, civic oversight, and youth empowerment across university campuses throughout Uganda.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9F7] border border-gray-200 border-dashed space-y-3 flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1B4332] font-mono-accent">
                Growth Milestone
              </div>
              <h4 className="text-base font-bold text-[#1A1A1A] uppercase font-display">5,000+ Founding Volunteers</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                By 2011, VACOCA had successfully trained more than 5,000 members in universities across Uganda, culminating in official registration in March 2011.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: VISIT OUR SECRETARIAT (PROMINENT LOCATION SECTION)
           ========================================================================= */}
        <section className="p-8 sm:p-10 bg-white border-2 border-[#1B4332] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Visit Our Secretariat</span>
              </div>
              <h3 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                VACOCA Secretariat in Kampala
              </h3>
            </div>
            <button
              onClick={() => setCurrentView('contact')}
              className="px-6 py-3 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer self-start md:self-auto"
            >
              Secretariat Map & Inquiries →
            </button>
          </div>

          <p className="text-base text-gray-800 font-medium">
            Our secretariat is located at <strong className="text-[#1B4332]">Nommo Gallery, opposite Rwenzori House, Kampala, Uganda</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
              <span className="font-mono-accent text-[10px] uppercase font-bold text-gray-500 block">Location</span>
              <div className="font-bold text-[#1A1A1A]">
                Nommo Gallery<br />
                Opposite Rwenzori House<br />
                Kampala, Uganda
              </div>
            </div>

            <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
              <span className="font-mono-accent text-[10px] uppercase font-bold text-gray-500 block">Postal Address</span>
              <div className="font-bold text-[#1A1A1A]">
                P.O. Box 120762<br />
                Kampala, Uganda
              </div>
            </div>

            <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
              <span className="font-mono-accent text-[10px] uppercase font-bold text-gray-500 block">Email</span>
              <a href="mailto:anticorruptionvolunteers150@gmail.com" className="font-bold text-[#1B4332] hover:underline break-all block">
                anticorruptionvolunteers150@gmail.com
              </a>
            </div>

            <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
              <span className="font-mono-accent text-[10px] uppercase font-bold text-gray-500 block">Telephones</span>
              <div className="font-bold text-[#1A1A1A] space-y-0.5">
                <div>+256 782 363 894</div>
                <div>+256 777 794 602</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: LEADERSHIP LINK */}
        <section className="p-8 bg-[#1A1A1A] text-white border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-[#D4AF37]">
              Movement Leadership
            </div>
            <h3 className="text-2xl font-black text-white uppercase font-display">
              {leaderProfile.name} • <span className="text-[#D4AF37]">{leaderProfile.title}</span>
            </h3>
            <p className="text-xs text-gray-400 max-w-xl font-light">
              Meet our leadership and learn about the advisory framework driving VACOCA's continent-wide civic campaigns.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('leadership')}
            className="px-6 py-3.5 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shrink-0 cursor-pointer transition-colors"
          >
            VIEW LEADERSHIP PROFILE →
          </button>
        </section>

        {/* Section: FREQUENTLY ASKED QUESTIONS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-accent uppercase tracking-widest text-[#1B4332]">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase">
              CLARITY ON OUR MANDATE
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {INITIAL_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#1B4332] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
