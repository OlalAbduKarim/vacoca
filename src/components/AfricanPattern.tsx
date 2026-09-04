import React from 'react';

interface AfricanPatternProps {
  className?: string;
  variant?: 'divider' | 'corner' | 'badge' | 'line' | 'watermark';
  opacity?: number;
}

export const AfricanPattern: React.FC<AfricanPatternProps> = ({
  className = '',
  variant = 'divider',
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 overflow-hidden py-4 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-[#D4AF37]/60" />
        <div className="flex items-center gap-1.5 px-2">
          {/* Subtle African Diamond & Chevron Motif */}
          <div className="w-1.5 h-1.5 rotate-45 bg-[#0E5A35]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20 flex items-center justify-center">
            <div className="w-1 h-1 bg-[#D4AF37]" />
          </div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#0E5A35]" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/30 to-[#D4AF37]/60" />
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`h-1.5 w-full bg-gradient-to-r from-[#0E5A35] via-[#D4AF37] to-[#0E5A35] rounded-full opacity-80 ${className}`} />
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        className={`w-12 h-12 text-[#D4AF37]/30 pointer-events-none ${className}`}
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M0 0H48V12H12V48H0V0Z" fill="currentColor" opacity="0.15" />
        <path d="M4 4H24V8H8V24H4V4Z" fill="currentColor" opacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'badge') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        <span className="font-mono-accent">VACOCA</span>
      </span>
    );
  }

  // Watermark
  return (
    <svg
      className={`absolute select-none pointer-events-none opacity-5 ${className}`}
      viewBox="0 0 200 200"
      fill="none"
    >
      <polygon points="100,10 190,100 100,190 10,100" stroke="#D4AF37" strokeWidth="2" />
      <polygon points="100,35 165,100 100,165 35,100" stroke="#0E5A35" strokeWidth="2" />
      <polygon points="100,60 140,100 100,140 60,100" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="100" cy="100" r="12" fill="#D4AF37" />
    </svg>
  );
};
