import React, { useEffect, useState } from 'react';
import { ATIK_NAV_SECTIONS } from '../data/atikData';

interface TopWidgetsProps {
  activeSectionId: string;
}

export const TopWidgets: React.FC<TopWidgetsProps> = ({ activeSectionId }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrailing, setCursorTrailing] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const activeIdx = Math.max(
    0,
    ATIK_NAV_SECTIONS.findIndex((s) => s.id === activeSectionId)
  );
  const currentSection = ATIK_NAV_SECTIONS[activeIdx] || ATIK_NAV_SECTIONS[0];

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percent = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollPercent(percent);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setCursorPos({ x: targetX, y: targetY });

      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [data-cursor="hover"]')) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setCursorTrailing({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* 1. Top Scroll Progress Bar */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(227,242,253,0.18) 0 1px, transparent 1px 12px), #080c14',
        }}
      >
        <div
          className="relative h-full transition-[width] duration-75"
          style={{
            width: `${scrollPercent}%`,
            background: 'var(--gradient-accent)',
          }}
        >
          {/* Glowing Diamond Indicator */}
          <span
            className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45"
            style={{
              background: '#2196F3',
              boxShadow: '0 0 12px 3px rgba(33,150,243,0.9)',
            }}
          />
        </div>
      </div>

      {/* 2. Top-Left REC Recording Status Badge */}
      <div
        className="fixed left-4 top-6 z-[65] flex items-center gap-2.5 rounded-full border border-[rgba(227,242,253,0.16)] px-3.5 py-2 backdrop-blur-md transition-all duration-300"
        style={{ background: 'rgba(13,22,36,0.85)' }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            background: '#2196F3',
            animation: 'rec-blink 1.1s infinite',
            boxShadow: '0 0 8px #2196F3',
          }}
        />
        <span className="font-mono text-[11px] tracking-widest text-[#94a3b8]">
          SEC {String(activeIdx + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] tracking-widest text-foreground font-semibold">
          {currentSection.name}
        </span>
      </div>

      {/* 3. Top-Right Circular Scroll Percentage Ring */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed right-4 top-5 z-[65] hidden h-12 w-12 items-center justify-center rounded-full border border-[rgba(227,242,253,0.16)] backdrop-blur-md sm:flex hover:scale-105 active:scale-95 transition-transform"
        style={{ background: 'rgba(13,22,36,0.85)' }}
      >
        <svg className="absolute -rotate-90" width="48" height="48" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2196F3" />
              <stop offset="100%" stopColor="#E3F2FD" />
            </linearGradient>
          </defs>
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(227,242,253,0.14)"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 150ms linear' }}
          />
        </svg>
        <span className="relative font-mono text-[10px] text-foreground font-semibold">
          {Math.round(scrollPercent)}%
        </span>
      </button>

      {/* 4. Interactive Custom Glowing Cursor in Primary/Secondary Blue */}
      {!isTouchDevice && (
        <>
          <div
            className="pointer-events-none fixed left-0 top-0 z-[80] rounded-full blur-md transition-[width,height] duration-200"
            style={{
              width: isHoveringClickable ? 60 : 40,
              height: isHoveringClickable ? 60 : 40,
              transform: `translate3d(${cursorTrailing.x}px, ${cursorTrailing.y}px, 0) translate(-50%, -50%)`,
              background:
                'radial-gradient(circle, rgba(33,150,243,0.7), rgba(227,242,253,0.15) 70%)',
            }}
          />
          <div
            className="pointer-events-none fixed left-0 top-0 z-[81] h-2 w-2 rounded-full"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
              background: '#E3F2FD',
              boxShadow: '0 0 6px #2196F3',
            }}
          />
        </>
      )}

      {/* 5. Floating Bottom-Right Contact Action Button */}
      <a
        href="#contact"
        aria-label="Go to contact section"
        className="fixed bottom-6 right-6 z-[60] flex h-13 w-13 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          background: 'var(--gradient-accent)',
          boxShadow: '0 10px 30px -4px rgba(33,150,243,0.65)',
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 5h16v14H4z" />
          <path d="m4 6 8 6 8-6" />
        </svg>
      </a>
    </>
  );
};
