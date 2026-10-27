import React, { useState, useEffect } from 'react';
import { BackgroundGlows } from './components/BackgroundGlows';
import { TopWidgets } from './components/TopWidgets';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { IntroReel } from './components/IntroReel';
import { SelectedWork } from './components/SelectedWork';
import { Toolkit } from './components/Toolkit';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ATIK_NAV_SECTIONS } from './data/atikData';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState('home');

  // Track active visible section via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = ATIK_NAV_SECTIONS.length - 1; i >= 0; i--) {
        const secId = ATIK_NAV_SECTIONS[i].id;
        const elem = document.getElementById(secId);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSectionId(secId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#080c14] text-[#F8FAFC]">
      {/* Fixed Ambient Glow Orbs */}
      <BackgroundGlows />

      {/* Top Floating Widgets: Scroll Bar, REC Status Badge, Scroll Ring, Cursor, Floating Button */}
      <TopWidgets activeSectionId={activeSectionId} />

      {/* Top Fixed Header Bar */}
      <HeaderNav activeSectionId={activeSectionId} onNavigate={handleNavigate} />

      {/* Main Content Stream */}
      <main className="relative z-10">
        {/* Section 01: Hero with Orbiting Badges & Stats */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Section 02: Intro Featured Reel */}
        <IntroReel />

        {/* Section 03: Selected Work with 6 Categories */}
        <SelectedWork />

        {/* Section 04: Software Toolkit */}
        <Toolkit />

        {/* Section 05: Contact & Social Collaboration */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
