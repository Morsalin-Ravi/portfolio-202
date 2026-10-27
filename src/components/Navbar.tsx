import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070709]/90 border-b border-zinc-800/80 backdrop-blur-md py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-lg md:text-xl font-display font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            aria-label="Morsalin Ravi Home"
          >
            <span>MR</span>
            <span className="text-xs font-mono font-normal text-blue-500">®</span>
            <span className="hidden sm:inline font-normal text-zinc-400 text-sm ml-1.5 tracking-normal">
              Morsalin Ravi
            </span>
          </a>

          {/* Zone 2: 4–6 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#070709]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-zinc-200 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-zinc-800/80 space-y-4">
            <p className="text-xs text-zinc-400 font-mono">
              Available for international projects & remote collaboration.
            </p>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors block"
            >
              Initiate Project Inquiry
            </a>
          </div>
        </div>
      )}
    </>
  );
};
