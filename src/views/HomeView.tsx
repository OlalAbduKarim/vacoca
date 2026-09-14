import React from 'react';
import { useApp } from '../context/AppContext';
import { VACOCA_CHARTER } from '../data/initialData';
import {
  ShieldAlert,
  UserPlus,
  ArrowRight,
  Building2,
  GraduationCap,
  TrendingUp,
  Users2,
  Scale,
  Megaphone,
  BookOpen,
  Network,
  Radio,
  Vote,
  Compass,
  Sparkles,
  ExternalLink,
  Lock,
  HeartHandshake,
  MapPin,
  Target,
  Eye,
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomeView: React.FC = () => {
  const {
    setCurrentView,
    impactStats,
    leaderProfile,
    stories,
    setActiveStoryModal,
    setIsCMSOpen,
  } = useApp();

  return (
    <div className="relative min-h-screen bg-[#F9F9F7] text-[#1A1A1A] overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (Geometric Balance - Bold Dark Canvas with Gold & Dot Matrix)
         ========================================================================= */}
      <section
        id="hero"
        className="relative bg-[#1A1A1A] flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden pt-32 pb-24 min-h-[640px]"
      >
        {/* Geometric Matrix Pattern Background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Ambient Emerald Glow on Right */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#1B4332]/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl space-y-8">
          {/* Eyebrow with Fine Gold Geometric Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-[2px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase font-mono-accent">
              Courage • Integrity • Action
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] text-white uppercase font-display tracking-tight"
          >
            A CORRUPTION-FREE AFRICA{' '}
            <span className="text-[#D4AF37]">STARTS WITH US.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            Volunteers Anti-Corruption Campaign Africa mobilizes citizens, communities and volunteers to promote integrity, transparency, accountability and collective action across the continent.
          </motion.p>

          {/* Action CTAs - Sharp Geometric Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              id="hero-report-btn"
              onClick={() => setCurrentView('report')}
              className="bg-[#1B4332] text-white px-8 py-4 font-bold tracking-widest text-xs uppercase hover:bg-green-800 transition-all cursor-pointer shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
              <span>Report a Concern</span>
            </button>

            <button
              id="hero-join-btn"
              onClick={() => setCurrentView('get-involved')}
              className="border border-white/30 text-white px-8 py-4 font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-emerald-400" />
              <span>Join the Movement</span>
            </button>
          </motion.div>

          {/* Subtle Geometric Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-12 flex flex-col items-start opacity-50 space-y-2"
          >
            <span className="text-[8px] text-gray-400 tracking-[0.5em] uppercase font-mono-accent">
              Scroll to explore
            </span>
            <div className="w-16 h-[1px] bg-gray-600" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VALUES STRIP (Geometric Deep Green Accent Bar)
         ========================================================================= */}
      <section className="h-14 bg-[#1B4332] flex items-center justify-around px-4 md:px-20 border-y border-[#1A1A1A] overflow-x-auto whitespace-nowrap">
        {['ACCOUNTABILITY', 'INTEGRITY', 'SUSTAINABILITY', 'UNITY', 'PEACE', 'MOTTO: “NO MORE CORRUPTION WE SHALL WIN.”'].map(
          (value, idx, arr) => (
            <React.Fragment key={value}>
              <span className="text-[10px] font-bold text-white tracking-[0.25em] uppercase font-mono-accent">
                {value}
              </span>
              {idx < arr.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mx-3 shrink-0" />
              )}
            </React.Fragment>
          )
        )}
      </section>

      {/* =========================================================================
          SECTION 2B: OFFICIAL CHARTER — MOTTO, MISSION & OBJECTIVES
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Motto & Mission Highlight Box */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 border-l-4 border-[#D4AF37]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-accent uppercase font-bold text-[#D4AF37] tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>VACOCA Institutional Identity</span>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono-accent uppercase text-gray-400 font-bold block">Our Motto</span>
                <p className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight italic">
                  “No more corruption we shall win.”
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono-accent uppercase text-[#D4AF37] font-bold block">Our Mission</span>
                <p className="text-lg font-bold text-gray-200 font-display italic">
                  “To create a corruption free society.”
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono-accent uppercase text-gray-400 font-bold block">Our Vision</span>
                <p className="text-sm font-medium text-gray-300 italic">
                  “To be the indomitable and most sustainable mass movement against corruption.”
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Nommo Gallery, Opposite Rwenzori House, Kampala</span>
              </div>
              <button
                onClick={() => setCurrentView('contact')}
                className="text-[#D4AF37] hover:underline font-bold font-mono-accent shrink-0"
              >
                Visit →
              </button>
            </div>
          </div>

          {/* 7 Objectives Summary */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-[2px] bg-[#1B4332]" />
                  <span className="text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332]">
                    Legal Mandate & Directives
                  </span>
                </div>
                <span className="text-xs font-mono-accent text-gray-500 font-bold">7 Objectives</span>
              </div>
              <h3 className="text-2xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
                OUR CORE OBJECTIVES
              </h3>
              <p className="text-xs text-gray-600">
                Registered with the NGO Board of Uganda. Operating under the 1995 Constitution of the Republic of Uganda.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {VACOCA_CHARTER.objectives.slice(0, 6).map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 bg-[#F9F9F7] p-2.5 border border-gray-200">
                    <span className="font-mono-accent font-bold text-[#1B4332] shrink-0">0{i + 1}.</span>
                    <span className="leading-snug">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">
                Objective 07: Work towards the eradication of corruption.
              </span>
              <button
                onClick={() => setCurrentView('about')}
                className="text-[#1B4332] font-bold hover:underline flex items-center gap-1 font-mono-accent uppercase tracking-wider"
              >
                <span>Full Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE COST OF CORRUPTION (Light Geometric Cards)
         ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                The Reality We Must Confront
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
              CORRUPTION HAS A COST.{' '}
              <span className="text-[#1B4332]">EVERYONE PAYS.</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Corruption is not a victimless transaction. It extracts a devastating toll from every layer of African society, directly harming public welfare and stifling human potential.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-5xl font-black text-gray-200 font-mono-accent">05</span>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Critical Dimensions</div>
          </div>
        </div>

        {/* 5 Visual Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'PUBLIC SERVICES',
              icon: Building2,
              desc: 'When resources are diverted, communities lose access to essential health, clean water, and civic infrastructure.',
              tag: 'Basic Rights',
            },
            {
              num: '02',
              title: 'EDUCATION',
              icon: GraduationCap,
              desc: 'Accountability matters because the future depends on how public resources and educational opportunities are protected.',
              tag: 'Youth & Future',
            },
            {
              num: '03',
              title: 'DEVELOPMENT',
              icon: TrendingUp,
              desc: 'Corruption weakens institutions, raises business friction, and deters domestic and regional economic opportunity.',
              tag: 'Economic Growth',
            },
            {
              num: '04',
              title: 'COMMUNITIES',
              icon: Users2,
              desc: 'Ordinary citizens often carry the greatest burden when resources are misused or public funds vanish without a trace.',
              tag: 'Social Fabric',
            },
            {
              num: '05',
              title: 'TRUST',
              icon: Scale,
              desc: 'A society cannot thrive without institutional trust, judicial integrity, and responsible ethical leadership.',
              tag: 'Civic Contract',
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 bg-white border border-gray-200 shadow-sm hover:border-[#1B4332] transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#F9F9F7] flex items-center justify-center border border-gray-200 group-hover:bg-[#1B4332] transition-colors">
                      <Icon className="w-5 h-5 text-[#1B4332] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono-accent uppercase tracking-widest text-[#1B4332] font-bold">
                      {card.num} / {card.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#1A1A1A] font-display uppercase tracking-tight group-hover:text-[#1B4332] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#1B4332] transition-colors">
                  <span>Demand Accountability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BENTO GRID - WHAT WE DO & CITIZEN ACTION (Geometric Balance)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3">
            <div className="w-6 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Action Architecture
            </span>
            <div className="w-6 h-[2px] bg-[#1B4332]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
            FROM AWARENESS <span className="text-[#1B4332]">TO ACTION.</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            VACOCA translates anti-corruption sentiment into coordinated, tangible citizen engagement across six core operational pillars.
          </p>
        </div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'ANTI-CORRUPTION ADVOCACY',
              icon: Megaphone,
              desc: 'Mobilizing citizens and communities to reject corruption in public life and service delivery.',
            },
            {
              num: '02',
              title: 'INTEGRITY EDUCATION',
              icon: BookOpen,
              desc: 'Promoting ethical leadership, integrity and responsible citizenship among youth and professionals.',
            },
            {
              num: '03',
              title: 'VOLUNTEER MOBILIZATION',
              icon: Network,
              desc: 'Building a continental network of people committed to positive change and community action.',
            },
            {
              num: '04',
              title: 'PUBLIC AWARENESS',
              icon: Radio,
              desc: 'Using grassroots campaigns, open dialogue, digital media and community forums to demystify governance.',
            },
            {
              num: '05',
              title: 'CIVIC ACCOUNTABILITY',
              icon: Vote,
              desc: 'Encouraging citizens to participate actively in demanding transparency, open contracting and accountability.',
            },
            {
              num: '06',
              title: 'AFRICAN COLLABORATION',
              icon: Compass,
              desc: 'Supporting cooperation and collective action across communities, civil society and oversight institutions.',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-8 border border-gray-200 shadow-sm hover:border-[#1B4332] transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#F9F9F7] flex items-center justify-center border border-gray-200 group-hover:bg-[#1B4332] transition-colors">
                      <span className="text-[#1B4332] group-hover:text-white font-bold text-sm font-mono-accent">
                        {card.num}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm tracking-widest text-[#1A1A1A] uppercase font-display group-hover:text-[#1B4332] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-2">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => setCurrentView('what-we-do')}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] hover:text-green-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GET INVOLVED (Dark Geometric Canvas with 3 Distinct Cards)
         ========================================================================= */}
      <section className="py-24 bg-[#1A1A1A] text-white border-y border-gray-800 relative overflow-hidden">
        {/* Subtle Geometric Dot Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-[2px] bg-[#D4AF37]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#D4AF37] uppercase">
                Citizen Action Pathways
              </span>
              <div className="w-6 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
              YOU DON'T NEED A TITLE{' '}
              <span className="text-[#D4AF37]">TO FIGHT CORRUPTION.</span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Every citizen holds the constitutional and moral right to demand honesty in public stewardship. Choose your way to stand with VACOCA.
            </p>
          </div>

          {/* 3 Large Structured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01: Become a Volunteer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono-accent font-bold text-[#D4AF37] tracking-widest uppercase">
                  Step 01
                </span>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                  BECOME A VOLUNTEER
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Join citizens committed to integrity, positive change, community monitoring, and civic ethics education across Africa.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setCurrentView('get-involved')}
                  className="w-full py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4 text-[#D4AF37]" />
                  <span>Join VACOCA</span>
                </button>
              </div>
            </motion.div>

            {/* Card 02: Partner with Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono-accent font-bold text-gray-400 tracking-widest uppercase">
                  Step 02
                </span>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                  PARTNER WITH US
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Collaborate with VACOCA as an organization, academic institution, school, community-based group, or media organization.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setCurrentView('get-involved')}
                  className="w-full py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                >
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
                  <span>Partner With Us</span>
                </button>
              </div>
            </motion.div>

            {/* Card 03: Report a Concern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white/5 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-accent font-bold text-[#D4AF37] tracking-widest uppercase">
                    Step 03
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-mono-accent uppercase">
                    Encrypted Intake
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                  REPORT A CONCERN
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Submit information responsibly and help connect public concerns to appropriate lawful channels and oversight institutions.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Anonymous submission option available</span>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setCurrentView('report')}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f27] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-[#1A1A1A]" />
                  <span>Report Safely</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LEADERSHIP PROFILE & ABOUT VACOCA (Geometric Structure)
         ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Leadership Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-8 border border-gray-200 border-l-4 border-[#D4AF37] shadow-sm flex flex-col justify-between space-y-6">
              <div className="relative overflow-hidden border border-gray-200">
                <img
                  src={leaderProfile.image || '/ldr.png'}
                  alt={`${leaderProfile.name} - ${leaderProfile.title}`}
                  className="w-full h-80 object-cover filter contrast-105"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.endsWith('/ldr.png')) {
                      target.src = '/ldr.png';
                    }
                  }}
                />
                <div className="p-4 bg-white/95 border-t border-gray-200 space-y-1">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono-accent">
                    Founder Profile
                  </div>
                  <div className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight font-display">
                    {leaderProfile.name}
                  </div>
                  <div className="text-xs font-bold text-[#1B4332] uppercase">
                    {leaderProfile.title}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1 text-xs text-gray-700">
                <div className="font-bold text-[#1A1A1A] uppercase font-mono-accent text-[10px] tracking-wider">
                  Core Founding Principle (2008–2011)
                </div>
                <p className="italic font-medium">
                  "{leaderProfile.approvedQuote}"
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 font-mono-accent text-[10px] uppercase font-bold text-[#1B4332]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" /> Lead Founder & Inspirer • Registered March 2011
                </div>
                <p className="leading-relaxed">
                  Pioneer of patriotic citizen volunteerism and university anti-corruption mobilization across Uganda.
                </p>
              </div>

              <button
                onClick={() => setCurrentView('leadership')}
                className="w-full bg-[#1A1A1A] text-white hover:bg-[#1B4332] py-3.5 text-xs font-bold uppercase tracking-widest transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Founders & Movement History</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Right Column: About VACOCA Mandate & Youth Strategy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                Origins & History (2008–2011)
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] font-display uppercase tracking-tight leading-tight">
              FROM PRESIDENTIAL CALL TO <span className="text-[#1B4332]">CONTINENTAL CITIZEN POWER</span>
            </h2>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                In <strong>2008</strong>, during a national state address, <strong>President Yoweri Kaguta Museveni</strong> stated that while he had won many battles, the battle that he had failed to win was the battle against corruption, leaving it to every Ugandan citizen to help him fight it.
              </p>
              <p>
                Inspired by this call, <strong>General Elly Tumwine</strong> took the initiative to establish <strong>VACOCA</strong> alongside dedicated original co-founders: <strong>Hon. Major Kyomugisha Grace</strong>, <strong>Yasine Juma</strong>, <strong>Waidhuba John</strong>, and <strong>Merab Akampumuza</strong>.
              </p>
              <p>
                By <strong>2011</strong>, the movement had mobilized more than <strong>5,000 members</strong> and established active chapters in universities across Uganda, systematically training youths on the importance of fighting corruption and upholding civic integrity—leading to full registration in <strong>March 2011</strong>.
              </p>
            </div>

            {/* 3 Youth Engagement Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-white border border-gray-200 space-y-1.5 shadow-sm border-t-2 border-[#1B4332]">
                <div className="text-[10px] font-bold text-[#1B4332] uppercase font-mono-accent">
                  01 / Forums
                </div>
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase">Intellectual Activism</h4>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Direct cross-examination of ministers, generals, lawyers, and politicians in auditoriums.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 space-y-1.5 shadow-sm border-t-2 border-[#D4AF37]">
                <div className="text-[10px] font-bold text-[#D4AF37] uppercase font-mono-accent">
                  02 / Network
                </div>
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase">University Chapters</h4>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Autonomous student guilds monitoring campus procurement and local municipal finances.
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 space-y-1.5 shadow-sm border-t-2 border-[#1A1A1A]">
                <div className="text-[10px] font-bold text-gray-800 uppercase font-mono-accent">
                  03 / Ethics
                </div>
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase">Zero-Budget Mandate</h4>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Pure volunteerism rejecting paid per-diems, keeping citizen advocates completely unbought.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('what-we-do')}
                className="bg-[#1B4332] text-white px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-green-800 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore Strategic Pillars</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
              <button
                onClick={() => setCurrentView('news')}
                className="border border-gray-300 text-[#1A1A1A] px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-gray-100 transition-all cursor-pointer"
              >
                Read DWC Policy Research
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: IMPACT METRICS (Structured Geometric Data Blocks)
         ========================================================================= */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-6 h-[2px] bg-[#1B4332]" />
                <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                  Movement Footprint
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                OUR COLLECTIVE IMPACT
              </h2>
            </div>

            <div className="text-xs text-gray-500 max-w-sm">
              Verifiable grassroots indicators reflecting citizen engagement and monitoring nationwide.
            </div>
          </div>

          {/* 4 Editable Metric Blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: impactStats.volunteers,
                label: impactStats.volunteersLabel,
                desc: 'Citizens registered for community monitoring',
              },
              {
                value: impactStats.communities,
                label: impactStats.communitiesLabel,
                desc: 'Localities engaging in public resource oversight',
              },
              {
                value: impactStats.campaigns,
                label: impactStats.campaignsLabel,
                desc: 'Grassroots ethics initiatives launched',
              },
              {
                value: impactStats.partnerships,
                label: impactStats.partnershipsLabel,
                desc: 'Civil society, media and civic alliances',
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-[#F9F9F7] border border-gray-200 text-center space-y-2 group hover:border-[#1B4332] transition-colors"
              >
                <div className="text-3xl sm:text-5xl font-black text-[#1B4332] font-mono-accent">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] font-display">
                  {stat.label}
                </div>
                <p className="text-[11px] text-gray-500 leading-snug pt-1">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CAMPAIGNS AND STORIES (Magazine Editorial Grid)
         ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                Dispatches & Investigations
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              THE MOVEMENT IN ACTION.
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Explore featured campaigns, community social audits, volunteer profiles, official statements, and civic events.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('news')}
            className="self-start md:self-auto px-6 py-3 bg-[#1A1A1A] hover:bg-[#1B4332] text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>All News & Stories</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(0, 6).map((story) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveStoryModal(story)}
              className="bg-white border border-gray-200 hover:border-[#1B4332] transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm"
            >
              <div>
                <div className="relative h-52 overflow-hidden border-b border-gray-200">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-mono-accent font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#D4AF37]">
                      {story.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono-accent">
                    <span>{story.date}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors leading-snug font-display uppercase">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1B4332] group-hover:text-green-800">
                <span>Read Full Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CALL TO ACTION (Geometric Balance Deep Dark Banner)
         ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] text-white border-t border-gray-800 overflow-hidden">
        {/* Geometric Matrix Pattern Background */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#D4AF37] uppercase">
              Stand for Africa
            </span>
            <div className="w-8 h-[2px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight">
            AFRICA NEEDS MORE{' '}
            <span className="text-[#D4AF37]">THAN SPECTATORS.</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            Join citizens and volunteers committed to building a culture of integrity, accountability and transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentView('get-involved')}
              className="bg-[#1B4332] text-white px-8 py-4 font-bold tracking-widest text-xs uppercase hover:bg-green-800 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-[#D4AF37]" />
              <span>BECOME A VACOCA VOLUNTEER</span>
            </button>

            <button
              onClick={() => setCurrentView('get-involved')}
              className="border border-white/30 text-white px-8 py-4 font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>PARTNER WITH US</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
