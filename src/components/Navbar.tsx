import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PageView } from '../types';
import {
  ShieldAlert,
  UserPlus,
  Search,
  Sliders,
  Menu,
  X,
  ChevronDown,
  Globe2,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, setIsSearchOpen, setIsCMSOpen, reports } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNameDropdownOpen, setIsNameDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'HOME', view: 'home' },
    { label: 'ABOUT', view: 'about' },
    { label: 'WHAT WE DO', view: 'what-we-do' },
    { label: 'CAMPAIGNS', view: 'campaigns' },
    { label: 'GET INVOLVED', view: 'get-involved' },
    { label: 'NEWS & STORIES', view: 'news' },
    { label: 'LEADERSHIP', view: 'leadership' },
    { label: 'CONTACT', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm'
          : 'bg-white border-b border-gray-100 py-4 shadow-sm'
      }`}
    >
      {/* Top micro-bar for movement mandate */}
      <div className="hidden lg:block border-b border-gray-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] tracking-widest text-gray-500 font-mono-accent uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-[#1B4332]">
              <Globe2 className="w-3 h-3 text-[#D4AF37]" /> PAN-AFRICAN CITIZEN INTEGRITY MOVEMENT
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600 font-medium">NON-PARTISAN & VOLUNTEER-DRIVEN</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-[#1B4332]">
              <Lock className="w-3 h-3 text-emerald-600" /> SECURE CONCERN INTAKE
            </span>
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-gray-500 hover:text-[#1B4332] flex items-center gap-1.5 transition-colors cursor-pointer font-bold"
              title="Open Movement CMS & Submissions Desk"
            >
              <Sliders className="w-3 h-3" />
              <span>CMS / Movement Editor</span>
              {reports.length > 0 && (
                <span className="bg-[#D4AF37] text-[#1A1A1A] text-[9px] font-bold px-1.5 py-0.2">
                  {reports.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO AREA - Geometric Balance */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-2.5 text-left focus:outline-none cursor-pointer"
            aria-label="VACOCA Home"
          >
            <img
              src="/logo.png"
              alt="VACOCA Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-sm shadow-xs shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black tracking-tighter text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors">
                VACOCA
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B4332] border-l border-gray-300 pl-2 hidden sm:inline-block leading-tight">
                Volunteers Anti-Corruption<br className="hidden md:inline" /> Campaign Africa
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIsNameDropdownOpen(!isNameDropdownOpen)}
            className="text-gray-400 hover:text-[#1A1A1A] p-0.5 transition-colors hidden sm:inline-flex"
            aria-label="Toggle full organization name"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isNameDropdownOpen ? 'rotate-180 text-[#1B4332]' : ''}`} />
          </button>

          {/* Organization Full Name Dropdown Panel */}
          <AnimatePresence>
            {isNameDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-16 left-8 sm:left-24 z-50 p-5 bg-white border border-gray-200 max-w-sm shadow-xl"
              >
                <div className="text-[10px] font-bold text-[#1B4332] uppercase tracking-widest mb-1 font-mono-accent">
                  Official Full Designation
                </div>
                <div className="text-sm font-black text-[#1A1A1A] leading-snug">
                  Volunteers Anti-Corruption Campaign Africa
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  A citizen and volunteer-driven civil society movement promoting integrity, transparency, accountability, and collective civic action across African communities.
                </p>
                <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-[11px]">
                  <span className="text-[#1B4332] font-bold">Civil Society Movement</span>
                  <button
                    onClick={() => {
                      setIsNameDropdownOpen(false);
                      handleNavClick('about');
                    }}
                    className="text-[#1B4332] hover:underline font-bold"
                  >
                    Read Our Story →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP NAVIGATION LINKS - Geometric Balance */}
        <nav className="hidden xl:flex items-center space-x-6 text-[11px] font-bold tracking-widest">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`relative py-1 tracking-widest uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1B4332] font-black'
                    : 'text-gray-500 hover:text-[#1B4332]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1B4332]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ACTION BUTTONS & SEARCH */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Search stories and campaigns"
            title="Search (Click or press /)"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Secondary Action: REPORT A CONCERN */}
          <button
            id="nav-report-btn"
            onClick={() => handleNavClick('report')}
            className={`hidden sm:flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${
              currentView === 'report'
                ? 'bg-rose-50 border-rose-600 text-rose-700'
                : 'bg-white hover:bg-rose-50 border-gray-300 hover:border-rose-500 text-rose-700'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Report Concern</span>
          </button>

          {/* Primary Action: JOIN THE MOVEMENT */}
          <button
            id="nav-join-btn"
            onClick={() => handleNavClick('get-involved')}
            className="bg-[#1A1A1A] text-white text-[10px] font-bold px-5 sm:px-6 py-2.5 tracking-widest hover:bg-[#1B4332] transition-all uppercase cursor-pointer"
          >
            <span className="hidden sm:inline">Join the Movement</span>
            <span className="sm:hidden">Join</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-gray-600 hover:text-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 mt-3 shadow-xl overflow-hidden"
          >
            <div className="p-3 mb-3 bg-[#F9F9F7] border border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-[#1A1A1A]">VACOCA</div>
                <div className="text-[11px] text-gray-600">Volunteers Anti-Corruption Campaign Africa</div>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCMSOpen(true);
                }}
                className="text-xs font-bold text-gray-600 hover:text-[#1B4332] flex items-center gap-1 border border-gray-300 px-2 py-1 bg-white"
              >
                <Sliders className="w-3 h-3" /> CMS
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wider transition-colors ${
                    currentView === item.view
                      ? 'bg-[#1B4332] text-white'
                      : 'bg-[#F9F9F7] text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <button
                onClick={() => handleNavClick('report')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-rose-600 text-rose-700 text-xs font-bold uppercase tracking-widest"
              >
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Report a Concern Safely</span>
              </button>
              <button
                onClick={() => handleNavClick('get-involved')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] hover:bg-[#1B4332] text-white text-xs font-bold uppercase tracking-widest"
              >
                <UserPlus className="w-4 h-4 text-[#D4AF37]" />
                <span>Join The Movement</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
