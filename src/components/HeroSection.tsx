import React from 'react';
import { SectionKicker } from './SectionKicker';
import { HERO_BADGES, HERO_STATS, PERSONAL_INFO } from '../data/atikData';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Right Column: User Avatar with Orbiting Badges and Ambient Pulsing Glow */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-sm">
            {/* Pulsing Gradient Aura in Primary #2196F3 & Secondary #E3F2FD */}
            <div
              className="absolute inset-4 rounded-[40px] blur-3xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 40% 40%, rgba(33,150,243,0.65), rgba(227,242,253,0.35) 60%, transparent 75%)',
                animation: 'glow-pulse 5s ease-in-out infinite',
              }}
            />

            {/* Portrait Image (User Uploaded Character/Portrait) */}
            <img
              src={PERSONAL_INFO.avatarImage}
              alt={`Portrait of ${PERSONAL_INFO.name}, video editor and motion designer`}
              className="relative aspect-square w-full rounded-[32px] border border-[rgba(227,242,253,0.2)] object-cover shadow-2xl"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('ChatGPT_Image')) {
                  target.src = '/assets/aistudio/ChatGPT_Image_Aug_10__2026__01_43_23_PM_dfee4ce6.png';
                }
              }}
            />

            {/* Orbiting Floating Badges */}
            {HERO_BADGES.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.pos} flex items-center gap-2 rounded-full border border-[rgba(227,242,253,0.2)] px-3 py-2 backdrop-blur-md shadow-xl select-none`}
                style={{
                  background: 'rgba(13, 22, 36, 0.85)',
                  animation: 'float-badge 4.5s ease-in-out infinite',
                  animationDelay: badge.delay,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: badge.dot }}
                />
                <span className="whitespace-nowrap text-xs font-semibold text-foreground">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Column: Headlines & Actions */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <SectionKicker dash={true}>Video Editor & Motion Designer · Based in Bangladesh</SectionKicker>
          </div>

          <h1
            className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontWeight: 800 }}
          >
            Hi there, I'm <span className="gradient-text">{PERSONAL_INFO.name}.</span>
          </h1>

          <p
            className="mt-4 font-mono text-xs sm:text-sm tracking-wider font-semibold"
            style={{ color: '#2196F3' }}
          >
            {PERSONAL_INFO.tagline}
          </p>

          <p className="mt-5 text-[#94a3b8] text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
              style={{
                borderRadius: 10,
                background: 'var(--gradient-accent)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              VIEW MY WORK
            </button>

            <button
              type="button"
              onClick={() => onNavigate('reel')}
              className="px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 border border-[rgba(227,242,253,0.2)] hover:border-[#2196F3] cursor-pointer"
              style={{
                borderRadius: 10,
                background: 'rgba(13,22,36,0.78)',
              }}
            >
              WATCH REEL
            </button>
          </div>

          {/* 4 Stats Counters */}
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 pt-8 border-t border-[rgba(227,242,253,0.14)]">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="gradient-text font-mono text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[#94a3b8]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
