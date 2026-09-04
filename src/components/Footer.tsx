import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageView } from '../types';
import { AfricanPattern } from './AfricanPattern';
import {
  Shield,
  ArrowRight,
  Mail,
  Send,
  Globe2,
  Heart,
  FileText,
  AlertCircle,
  ExternalLink,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  SendHorizontal,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    showToast('Subscribed to VACOCA Civic Integrity Dispatch.');
    setNewsletterEmail('');
  };

  const navLinks: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About VACOCA', view: 'about' },
    { label: 'What We Do', view: 'what-we-do' },
    { label: 'Campaigns', view: 'campaigns' },
    { label: 'Get Involved', view: 'get-involved' },
    { label: 'News & Stories', view: 'news' },
    { label: 'Leadership', view: 'leadership' },
    { label: 'Contact Us', view: 'contact' },
  ];

  const legalLinks: { label: string; view: PageView }[] = [
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'Terms of Use', view: 'terms' },
    { label: 'Reporting Disclaimer', view: 'disclaimer' },
  ];

  return (
    <footer className="relative bg-[#1A1A1A] border-t border-gray-800 text-gray-300 pt-16 pb-12 overflow-hidden">
      {/* Geometric Matrix Watermarks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="VACOCA Logo"
                className="w-10 h-10 object-contain rounded-sm bg-white/5 p-1 border border-white/10 shrink-0"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black tracking-tighter text-white">VACOCA</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] border-l border-gray-700 pl-2">
                  Volunteers Anti-Corruption<br />Campaign Africa
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              A civil-society, citizen and volunteer-driven anti-corruption movement focused on promoting integrity, transparency, accountability, civic participation, and collective action across Africa.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-gray-300">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="tracking-widest uppercase text-[10px] font-bold">Courage • Integrity • Action • Africa</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 hover:bg-[#1B4332] hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 hover:bg-[#1B4332] hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 hover:bg-[#1B4332] hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 hover:bg-[#1B4332] hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 hover:bg-[#1B4332] hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                aria-label="Telegram"
              >
                <SendHorizontal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono-accent font-bold tracking-widest text-[#D4AF37] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase font-bold tracking-wider">
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => setCurrentView(item.view)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-gray-400 text-left block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Movement */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono-accent font-bold tracking-widest text-[#D4AF37] uppercase">
              Movement Hubs
            </h4>
            <ul className="space-y-2 text-xs uppercase font-bold tracking-wider">
              {navLinks.slice(5).map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => setCurrentView(item.view)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-gray-400 text-left block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setCurrentView('report')}
                  className="text-rose-400 hover:text-rose-300 font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  Report Safely <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Citizen Action */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono-accent font-bold tracking-widest text-[#D4AF37] uppercase">
              Civic Integrity Dispatch
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Receive monthly briefs on citizen monitoring victories, policy updates, ethical leadership workshops, and anti-corruption campaigns across Africa.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-gray-500 absolute left-3" />
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-white/5 border border-white/10 pl-9 pr-24 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-3 py-1.5 bg-[#1B4332] hover:bg-green-800 text-white text-[10px] font-bold tracking-widest uppercase transition-colors"
                >
                  <span>Subscribe</span>
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-400 font-medium">
                  ✓ Thank you for joining our movement bulletin.
                </p>
              )}
            </form>

            <div className="p-3 bg-white/5 border border-white/10 text-[11px] text-gray-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-200">Legal Notice:</strong> VACOCA is an independent civil society organization. We do not exercise statutory prosecution authority.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-400 font-medium">
              Building a culture of integrity, accountability and citizen action.
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p>© 2026 VACOCA. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center text-[10px] font-bold uppercase tracking-widest">
            {legalLinks.map((item) => (
              <button
                key={item.view}
                onClick={() => setCurrentView(item.view)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
