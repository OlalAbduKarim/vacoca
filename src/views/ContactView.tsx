import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VACOCA_CHARTER } from '../data/initialData';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Copy,
  ExternalLink,
  Shield,
  Building,
  Compass,
  FileCheck,
  Check,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast, setCurrentView, submitContactMessage } = useApp();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMessage({
      name: form.fullName,
      email: form.email,
      subject: `[${form.category}] ${form.subject}${form.phone ? ` (Phone: ${form.phone})` : ''}`,
      message: form.message,
    });
    setIsSubmitted(true);
    showToast('Your message has been received by the VACOCA Secretariat.');
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Official Movement Secretariat & Coordination Desk
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            VISIT & CONTACT <span className="text-[#1B4332]">OUR SECRETARIAT</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Volunteers Anti-Corruption Campaign Africa (VACOCA) is an anti-corruption NGO registered with the NGO Board of Uganda, in existence since 2008. We operate as a non-partisan, inclusive voluntary pressure group under the 1995 Constitution of the Republic of Uganda.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1B4332] text-white text-xs font-bold font-mono-accent tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Motto: “No more corruption we shall win.”</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 text-gray-800 text-xs font-medium font-mono-accent">
              <FileCheck className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Registered NGO Board of Uganda • Est. 2008</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            PROMINENT SECRETARIAT LOCATION SECTION (EXACT REQUESTED FORMAT)
           ========================================================================= */}
        <section className="bg-white border-2 border-[#1B4332] shadow-md p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-[#1B4332]/5 rounded-full pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {/* Header / Notice */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2 text-xs font-mono-accent font-bold uppercase tracking-widest text-[#1B4332] mb-1">
                <Building className="w-4 h-4 text-[#D4AF37]" />
                <span>Visit Our Secretariat</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                Our Secretariat Location in Kampala, Uganda
              </h2>
              <p className="mt-2 text-base text-gray-700 font-medium">
                Our secretariat is located at <strong className="text-[#1B4332]">Nommo Gallery, opposite Rwenzori House, Kampala, Uganda</strong>.
              </p>
            </div>

            {/* Grid of Key Secretariat Contact Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Physical Location */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-[#1B4332] text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-mono-accent uppercase font-bold text-gray-500 tracking-wider block">
                    Physical Secretariat
                  </span>
                  <div className="font-bold text-[#1A1A1A] text-sm leading-snug">
                    VACOCA Secretariat<br />
                    Nommo Gallery<br />
                    Opposite Rwenzori House<br />
                    Kampala, Uganda
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('VACOCA Secretariat, Nommo Gallery, Opposite Rwenzori House, Kampala, Uganda', 'Address')}
                  className="w-full py-2 bg-white border border-gray-300 hover:bg-gray-100 text-[11px] font-bold text-gray-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedField === 'Address' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  <span>{copiedField === 'Address' ? 'Copied' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Official Postal Address */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center">
                    <Building className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-mono-accent uppercase font-bold text-gray-500 tracking-wider block">
                    Postal Address
                  </span>
                  <div className="font-bold text-[#1A1A1A] text-sm leading-snug">
                    P.O. Box 120762<br />
                    Kampala, Uganda
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Official dispatch and registered correspondence address.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('P.O. Box 120762, Kampala, Uganda', 'Postal Box')}
                  className="w-full py-2 bg-white border border-gray-300 hover:bg-gray-100 text-[11px] font-bold text-gray-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedField === 'Postal Box' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  <span>{copiedField === 'Postal Box' ? 'Copied' : 'Copy Postal Box'}</span>
                </button>
              </div>

              {/* Official Email */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-[#1B4332] text-white flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-mono-accent uppercase font-bold text-gray-500 tracking-wider block">
                    Official Email
                  </span>
                  <a
                    href="mailto:anticorruptionvolunteers150@gmail.com"
                    className="font-bold text-[#1B4332] hover:underline text-xs sm:text-sm break-all block leading-snug"
                  >
                    anticorruptionvolunteers150@gmail.com
                  </a>
                  <p className="text-[11px] text-gray-500">
                    Direct communications, partnership briefs, and media queries.
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="mailto:anticorruptionvolunteers150@gmail.com"
                    className="flex-1 py-2 bg-[#1B4332] hover:bg-green-800 text-white text-[11px] font-bold text-center transition-colors"
                  >
                    Send Email
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('anticorruptionvolunteers150@gmail.com', 'Email')}
                    className="px-2.5 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-[11px] text-gray-700 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  </button>
                </div>
              </div>

              {/* Telephones */}
              <div className="p-5 bg-[#F9F9F7] border border-gray-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] font-mono-accent uppercase font-bold text-gray-500 tracking-wider block">
                    Telephone Lines
                  </span>
                  <div className="space-y-1">
                    <a
                      href="tel:+256782363894"
                      className="font-bold text-[#1A1A1A] hover:text-[#1B4332] text-xs sm:text-sm block transition-colors"
                    >
                      📞 +256 782 363 894
                    </a>
                    <a
                      href="tel:+256777794602"
                      className="font-bold text-[#1A1A1A] hover:text-[#1B4332] text-xs sm:text-sm block transition-colors"
                    >
                      📞 +256 777 794 602
                    </a>
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Secretariat coordination & volunteer helpdesks.
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+256782363894"
                    className="flex-1 py-2 bg-[#1A1A1A] hover:bg-black text-white text-[11px] font-bold text-center transition-colors"
                  >
                    Call Secretariat
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+256 782 363 894 / +256 777 794 602', 'Phones')}
                    className="px-2.5 py-2 bg-white border border-gray-300 hover:bg-gray-100 text-[11px] text-gray-700 cursor-pointer"
                    title="Copy Phones"
                  >
                    {copiedField === 'Phones' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Practical Visiting Directions & Map Guidance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-gray-200">
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-sm font-bold uppercase font-mono-accent text-[#1B4332] tracking-wider">
                  Directions & Visitor Welcome
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  VACOCA welcomes citizens, youth delegates from university chapters, civil society partners, and media researchers. The secretariat is situated right in the cultural and administrative heart of Kampala at the historic <strong>Nommo Gallery</strong> grounds, directly opposite <strong>Rwenzori House</strong> (near Victoria Avenue and Nakasero).
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#1B4332]" />
                    <span>Office Hours: Monday – Friday, 08:30 AM – 05:00 PM (EAT)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#D4AF37]" />
                    <span>Landmark: Opposite Rwenzori House / Lumumba Avenue</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch gap-3 justify-end">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nommo+Gallery+Opposite+Rwenzori+House+Kampala+Uganda"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('contact-form-block');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Send Direct Message</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE MAP EMBED & FORM SECTION
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-form-block">
          {/* Main Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-[#1A1A1A] font-display uppercase tracking-tight">
                SEND AN INQUIRY TO THE SECRETARIAT
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Please complete the form below. For reporting graft, extortion, or tender anomalies, please use our secure{' '}
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
                  Message Delivered to Secretariat
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Volunteers Anti-Corruption Campaign Africa (VACOCA). Your inquiry has been forwarded directly to our secretariat inbox.
                </p>
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center justify-center gap-2 max-w-md mx-auto">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Transmitted to: <strong>anticorruptionvolunteers150@gmail.com</strong></span>
                </div>
                <div className="text-xs text-[#1B4332] font-mono-accent font-bold pt-1">
                  Nommo Gallery Secretariat • Tel: +256 782 363 894 / +256 777 794 602
                </div>
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
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+256 700 000 000"
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
                      <option value="Secretariat Visit & Appointment">Secretariat Visit & Appointment</option>
                      <option value="Media & Press">Media & Press</option>
                      <option value="University Chapter Collaboration">University Chapter Collaboration</option>
                      <option value="Institutional Partnership">Institutional Partnership</option>
                      <option value="Volunteer Programs">Volunteer Programs</option>
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
                    placeholder="Write your message to the VACOCA Secretariat here..."
                    className="w-full bg-white border border-gray-300 p-3.5 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="p-3 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>
                    <strong>Direct Desk Delivery:</strong> Your inquiry is dispatched directly to the official NGO email at <code className="text-[#1B4332] font-mono font-bold">anticorruptionvolunteers150@gmail.com</code>.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>SEND MESSAGE TO SECRETARIAT</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Map Preview & Institutional Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Frame Card */}
            <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-[#1A1A1A] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold font-mono-accent uppercase tracking-wider">
                    Nommo Gallery, Opposite Rwenzori House
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase">Kampala</span>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative w-full h-64 bg-gray-100 border-b border-gray-200">
                <iframe
                  title="VACOCA Secretariat Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756193910352!2d32.57945037496464!3d0.3175409996793134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7f830d94f7%3A0x6bfe7f62e8312e9b!2sNommo%20Gallery!5e0!3m2!1sen!2sug!4v1710000000000!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-5 space-y-3 bg-[#F9F9F7]">
                <div className="text-xs font-mono-accent uppercase text-[#1B4332] font-bold">
                  Secretariat Address
                </div>
                <div className="text-xs text-gray-700 leading-relaxed">
                  <strong>VACOCA Secretariat</strong><br />
                  Nommo Gallery, Opposite Rwenzori House<br />
                  P.O. Box 120762, Kampala, Uganda
                </div>
                <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono-accent">Coordinates: Nakasero / Central Kampala</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nommo+Gallery+Opposite+Rwenzori+House+Kampala+Uganda"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1B4332] font-bold underline flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Institutional Summary */}
            <div className="p-6 bg-white border border-gray-200 border-l-4 border-[#1B4332] space-y-3 shadow-sm">
              <span className="text-[10px] font-mono-accent uppercase font-bold text-[#1B4332] tracking-wider block">
                Official Charter & Legal Registration
              </span>
              <h4 className="text-sm font-bold text-[#1A1A1A] uppercase font-display">
                Registered with the NGO Board of Uganda
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Volunteers Anti-Corruption Campaign Africa (VACOCA) has been in existence since 2008. Operating under the 1995 Constitution of the Republic of Uganda as a non-partisan and inclusive pressure group of volunteers, our mission is to create a corruption free society.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono-accent font-bold text-gray-700">
                <span className="px-2 py-0.5 bg-gray-100 border border-gray-200">Accountability</span>
                <span className="px-2 py-0.5 bg-gray-100 border border-gray-200">Integrity</span>
                <span className="px-2 py-0.5 bg-gray-100 border border-gray-200">Sustainability</span>
                <span className="px-2 py-0.5 bg-gray-100 border border-gray-200">Unity</span>
                <span className="px-2 py-0.5 bg-gray-100 border border-gray-200">Peace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
