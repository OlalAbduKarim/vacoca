import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Globe2,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast, setCurrentView } = useApp();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Your message has been sent to the VACOCA Secretariat.');
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Connect with VACOCA
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            CONTACT <span className="text-[#1B4332]">US</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Have an institutional inquiry, media request, partnership proposal, or civic question? Reach out to our coordination team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                SEND AN INQUIRY
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Please complete the form below. For reporting corruption or irregularities, please use our dedicated{' '}
                <button
                  onClick={() => setCurrentView('report')}
                  className="text-rose-700 font-bold underline cursor-pointer hover:text-rose-900"
                >
                  Report a Concern portal
                </button>.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#F9F9F7] border border-gray-200 border-t-4 border-[#1B4332] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#1B4332] mx-auto" />
                <h4 className="text-xl font-bold text-[#1A1A1A] uppercase font-display">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Volunteers Anti-Corruption Campaign Africa. A representative will respond to your email shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      category: 'General Inquiry',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Your name"
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@organization.org"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+254 700 000000"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Inquiry Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Media & Press">Media & Press</option>
                      <option value="Institutional Partnership">Institutional Partnership</option>
                      <option value="Volunteer Programs">Volunteer Programs</option>
                      <option value="Youth Integrity Clubs">Youth Integrity Clubs</option>
                      <option value="Secretariat Administrative">Secretariat Administrative</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Brief summary of your message"
                    className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-white border border-gray-300 p-3.5 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Secretariat & Regional Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-gray-200 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-mono-accent text-[#1B4332] font-bold uppercase tracking-wider">
                  Official Channels
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A] uppercase font-display">
                  COORDINATION SECRETARIAT
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-4 bg-[#F9F9F7] border border-gray-200">
                  <Mail className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase font-mono-accent font-bold">
                      Official Communications
                    </span>
                    <span className="text-[#1A1A1A] font-semibold">contact@vacoca.org</span>
                    <span className="text-gray-400 block text-[10px] mt-0.5">
                      (Editable placeholder)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#F9F9F7] border border-gray-200">
                  <Globe2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase font-mono-accent font-bold">
                      Regional Civic Coordination
                    </span>
                    <span className="text-[#1A1A1A] font-semibold">Pan-African Movement Network</span>
                    <span className="text-gray-400 block text-[10px] mt-0.5">
                      Operating across East, West, Central & Southern Africa
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#F9F9F7] border border-gray-200">
                  <Clock className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase font-mono-accent font-bold">
                      Response Timelines
                    </span>
                    <span className="text-[#1A1A1A] font-semibold">Monday - Friday • 08:00 - 17:00 GMT</span>
                    <span className="text-gray-400 block text-[10px] mt-0.5">
                      Civic intake reports reviewed continuously
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Disclaimer Card */}
            <div className="p-6 bg-white border border-gray-200 border-l-4 border-[#D4AF37] text-xs text-gray-600 leading-relaxed space-y-2 shadow-sm">
              <strong className="text-[#1A1A1A] block font-display uppercase tracking-wider">
                Factual Integrity & Communication Policy
              </strong>
              <p>
                In strict adherence to factual integrity standards, official phone numbers, legal secretariat registry codes, and accredited regional offices are published solely when verified by our governance council.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
