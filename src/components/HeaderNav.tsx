import React, { useState } from 'react';
import { ATIK_NAV_SECTIONS, PERSONAL_INFO } from '../data/atikData';

interface HeaderNavProps {
  activeSectionId: string;
  onNavigate: (id: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeSectionId, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-1 z-[60] border-b border-[rgba(227,242,253,0.14)] backdrop-blur-xl"
        style={{ background: 'rgba(8,12,20,0.78)' }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 pl-36 sm:pl-44">
          {/* Brand Wordmark with Primary #2196F3 accent dot */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-display text-base sm:text-lg tracking-tight text-foreground font-extrabold flex items-center gap-0.5 cursor-pointer"
            style={{ fontWeight: 800 }}
          >
            <span className="hidden sm:inline">MORSALIN RAVI</span>
            <span className="sm:hidden">MR</span>
            <span style={{ color: '#2196F3' }}>.</span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 min-[760px]:flex">
            {ATIK_NAV_SECTIONS.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative pb-1 text-sm font-medium transition-colors cursor-pointer ${
                      isActive ? 'text-foreground font-semibold' : 'text-[#94a3b8] hover:text-[#E3F2FD]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-[2px] origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ background: 'var(--gradient-accent)' }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[rgba(227,242,253,0.16)] min-[760px]:hidden transition-colors"
            style={{ background: '#0e1726' }}
          >
            <span
              className={`h-[2px] w-4 transition-transform duration-200 ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
              style={{ background: '#F8FAFC' }}
            />
            <span
              className={`h-[2px] w-4 transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ background: '#F8FAFC' }}
            />
            <span
              className={`h-[2px] w-4 transition-transform duration-200 ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
              style={{ background: '#F8FAFC' }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080c14]/95 px-6 pt-28 pb-10 backdrop-blur-2xl min-[760px]:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#94a3b8]">
              Navigation
            </span>
            {ATIK_NAV_SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-display text-2xl font-bold transition-colors ${
                  activeSectionId === item.id ? 'gradient-text' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="border-t border-[rgba(227,242,253,0.14)] pt-6 space-y-3">
            <p className="font-mono text-xs text-[#94a3b8]">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
            </p>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl text-center text-sm font-bold text-white shadow-xl"
              style={{ background: 'var(--gradient-accent)' }}
            >
              LET'S CUT IT TOGETHER
            </button>
          </div>
        </div>
      )}
    </>
  );
};
