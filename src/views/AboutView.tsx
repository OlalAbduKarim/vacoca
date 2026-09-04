import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_FAQS } from '../data/initialData';
import {
  Target,
  Eye,
  Compass,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setCurrentView, leaderProfile } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header Banner - Geometric Balance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Institutional Identity & Charter
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            ABOUT <span className="text-[#1B4332]">VACOCA</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Volunteers Anti-Corruption Campaign Africa (VACOCA) is a civil-society, citizen and volunteer-driven anti-corruption movement focused on promoting integrity, transparency, accountability, civic participation and collective action against corruption.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section: OUR STORY & FACTUAL CHARTER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Origins & Academic Inception</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR ORIGIN: FROM CAMPUS AWAKENING TO CONTINENTAL FRONT
            </h2>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Volunteers Anti-Corruption Campaign Africa (VACOCA) was founded in <strong>2010</strong> by <strong>Dr. Allawi Ssemanda Apuuli</strong> during his student leadership tenure at <strong>Mbarara University of Science and Technology (MUST)</strong> in western Uganda, where he later served as the <strong>Guild President in 2011</strong>.
              </p>
              <p>
                Observing that conventional anti-corruption efforts were often detached, donor-dependent, or reduced to commercialized careers, Dr. Ssemanda instituted the <strong>Zero-Budget Volunteer Mandate</strong>—the foundational doctrine that citizens must willingly volunteer to defeat corruption rather than treating activism as a paid job.
              </p>
              <p>
                From MUST, the movement expanded into an Inter-University Chapter Model across institutions like Makerere University, Ndejje University, and Bishop Stuart University, organizing high-stakes "Intellectual Activism" forums where students directly question senior politicians, lawyers, and military officials on public accountability.
              </p>
              <div className="bg-white p-5 border border-gray-200 border-l-4 border-[#1B4332] text-xs sm:text-sm text-gray-600 shadow-sm space-y-1">
                <strong className="text-[#1A1A1A] block font-mono-accent uppercase">Institutional Synergy:</strong>
                Dr. Ssemanda also serves as Executive Director of the <em>Development Watch Centre (DWC)</em>, an independent foreign policy think tank whose research on international law and African economic sovereignty informs VACOCA’s analytical work.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white p-4 border border-gray-200 shadow-sm space-y-4">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="African youth and community leaders in civic solidarity"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-[#F9F9F7] border border-gray-200 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] font-mono-accent">
                  Founding Philosophy (2010)
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A] italic">
                  "People must willingly volunteer to defeat corruption rather than treating activism as a paid job."
                </p>
                <div className="text-[11px] text-[#D4AF37] font-bold uppercase font-mono-accent pt-1">
                  — Dr. Allawi Ssemanda Apuuli, Founder
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#1B4332] shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#F9F9F7] border border-gray-200 text-[#1B4332] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR MISSION
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To mobilize, educate, and empower African citizens and volunteers to actively champion integrity, expose misuse of public resources, and demand systemic transparency through constructive collective civic action.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-200 border-t-4 border-[#D4AF37] shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#F9F9F7] border border-gray-200 text-[#D4AF37] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#1A1A1A] uppercase font-display tracking-tight">
              OUR VISION
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              A thriving, accountable, and corruption-free Africa where public resources serve the common good, institutions operate with absolute transparency, and citizens lead with moral courage.
            </p>
          </div>
        </section>

        {/* Section: CORE VALUES */}
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
              OUR FIVE PILLARS OF ETHICS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'INTEGRITY',
                desc: 'Uncompromising adherence to honesty, ethical stewardship, and moral consistency in all public and civic endeavors.',
              },
              {
                num: '02',
                title: 'TRANSPARENCY',
                desc: 'Championing open government data, accessible public contracting, and clear disclosures for citizen oversight.',
              },
              {
                num: '03',
                title: 'ACCOUNTABILITY',
                desc: 'Holding duty-bearers answerable to the people they serve and ensuring public funds reach intended destinations.',
              },
              {
                num: '04',
                title: 'CITIZEN ACTION',
                desc: 'Shifting from passive observation to organized, courageous, and lawful community-driven participation.',
              },
              {
                num: '05',
                title: 'AFRICAN SOLIDARITY',
                desc: 'Uniting grassroots networks across national boundaries to share anti-corruption toolkits and collective wisdom.',
              },
            ].map((val) => (
              <div
                key={val.title}
                className="p-6 bg-white border border-gray-200 shadow-sm hover:border-[#1B4332] transition-colors space-y-3"
              >
                <div className="text-xs font-bold text-[#1B4332] font-mono-accent">
                  {val.num}
                </div>
                <div className="text-sm font-extrabold text-[#1A1A1A] font-display uppercase tracking-tight">
                  {val.title}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: OUR STRATEGIC APPROACH */}
        <section className="p-8 sm:p-12 bg-white border border-gray-200 shadow-sm space-y-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase font-display">
              THE CITIZEN-FIRST CIVIC MODEL
            </h2>
            <p className="text-sm text-gray-600">
              How VACOCA turns grassroots awareness into institutional accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F9F9F7] border border-gray-200 space-y-3">
              <div className="text-2xl font-black text-[#1B4332] font-mono-accent">01</div>
              <h4 className="text-sm font-bold text-[#1A1A1A] uppercase font-display">Educate & Demystify</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Translate complex procurement laws, local budgets, and whistleblower statutes into accessible citizen toolkits in local languages.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9F7] border border-gray-200 space-y-3">
              <div className="text-2xl font-black text-[#D4AF37] font-mono-accent">02</div>
              <h4 className="text-sm font-bold text-[#1A1A1A] uppercase font-display">Monitor & Document</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Organize community social audit committees to verify project deliverables, supply chains, and local government expenditures.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9F7] border border-gray-200 space-y-3">
              <div className="text-2xl font-black text-[#1A1A1A] font-mono-accent">03</div>
              <h4 className="text-sm font-bold text-[#1A1A1A] uppercase font-display">Engage & Refer</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Channel verified findings through structured dialogue with ombudsman offices, anti-corruption commissions, and investigative media.
              </p>
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
