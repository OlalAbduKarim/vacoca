import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, BookOpen, Shield, ArrowRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, stories, setCurrentView, setActiveStoryModal } = useApp();
  const [query, setQuery] = useState('');

  const filteredStories = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return stories.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.excerpt.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query, stories]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-[#0F131C] border border-[#2A3245] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <Search className="w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search campaigns, volunteer stories, statements, guides..."
              className="flex-1 bg-transparent text-white text-base placeholder-slate-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-white p-1 rounded"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Categories */}
          <div className="p-3 bg-[#0A0D14] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 font-mono-accent uppercase tracking-wider pl-2">Quick:</span>
            {['Healthcare', 'Education', 'Procurement', 'Volunteers', 'Youth'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-md bg-[#161B26] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-slate-300 transition-colors whitespace-nowrap"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
            {query.trim() === '' ? (
              <div className="text-center py-10 text-slate-500">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                <p className="text-sm">Type keywords to explore movement campaigns and articles</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentView('report');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs"
                  >
                    <Shield className="w-3.5 h-3.5" /> Report a Concern
                  </button>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setCurrentView('about');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141A26] border border-white/10 text-slate-300 text-xs"
                  >
                    <FileText className="w-3.5 h-3.5" /> About VACOCA
                  </button>
                </div>
              </div>
            ) : filteredStories.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <p className="text-sm">No articles or campaigns matching "{query}"</p>
                <p className="text-xs text-slate-500 mt-1">Try broader terms like "ethics", "volunteers", or "civic".</p>
              </div>
            ) : (
              filteredStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => {
                    setActiveStoryModal(story);
                    setIsSearchOpen(false);
                  }}
                  className="p-3.5 rounded-xl bg-[#141824] hover:bg-[#1A2030] border border-white/5 hover:border-[#D4AF37]/40 transition-all cursor-pointer flex items-start justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-accent font-bold px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                        {story.category}
                      </span>
                      <span className="text-[11px] text-slate-500">{story.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {story.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">{story.excerpt}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
