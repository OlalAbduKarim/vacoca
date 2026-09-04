import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, Clock, User, Share2, Tag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ArticleModal: React.FC = () => {
  const { activeStoryModal, setActiveStoryModal, showToast } = useApp();

  if (!activeStoryModal) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative w-full max-w-3xl my-8 bg-white border border-gray-200 shadow-2xl overflow-hidden"
        >
          {/* Header Image with Gradient */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={activeStoryModal.image}
              alt={activeStoryModal.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white text-[#1A1A1A] hover:bg-[#1B4332] hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-gray-200"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Badge & Metadata Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#1B4332] text-white font-mono-accent">
                {activeStoryModal.category}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1 bg-black/60 hover:bg-black/80 text-xs text-white backdrop-blur-sm transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight leading-snug font-display uppercase">
              {activeStoryModal.title}
            </h2>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-y border-gray-100 py-3 font-mono-accent">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1B4332]" />
                {activeStoryModal.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1B4332]" />
                {activeStoryModal.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gray-500" />
                {activeStoryModal.author}
              </span>
            </div>

            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed italic border-l-4 border-[#1B4332] pl-4">
              {activeStoryModal.excerpt}
            </p>

            {/* Full Content */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {activeStoryModal.content}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {activeStoryModal.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-[#F9F9F7] text-gray-700 border border-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Institutional Disclaimer */}
            <div className="p-4 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-600 leading-relaxed border-l-4 border-[#D4AF37]">
              <strong className="text-[#1A1A1A]">Editorial Notice:</strong> VACOCA reports and dispatches are produced to foster civic engagement, transparency, and public dialogue. Where information is under verification, updates are issued in accordance with our editorial standards.
            </div>

            {/* Back Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveStoryModal(null)}
                className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#1B4332] text-white text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Close Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
