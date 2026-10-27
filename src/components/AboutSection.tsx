import React from 'react';
import { ABOUT_ME_DATA, PERSONAL_CONFIG } from '../data/portfolioData';
import { Cpu, Award, Compass, Zap, MapPin, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
            04 — CREATIVE PHILOSOPHY & PROFILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            ABOUT MORSALIN RAVI
          </h2>
        </div>

        {/* 2-Column Split: Bio on Left, Suite & Principles on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Introduction & Location */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
              {ABOUT_ME_DATA.headline}
            </h3>

            <div className="space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
              {ABOUT_ME_DATA.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Location & Remote Availability Details */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400">
                <MapPin className="w-4 h-4" />
                <span>Base & International Reach</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Location</div>
                  <div className="text-zinc-200 font-medium mt-0.5">{PERSONAL_CONFIG.location}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Collaboration Model</div>
                  <div className="text-zinc-200 font-medium mt-0.5">100% Remote Worldwide</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs text-zinc-500 font-mono">Timezone Agility</div>
                  <div className="text-zinc-300 font-mono text-xs mt-0.5">{PERSONAL_CONFIG.timeZone}</div>
                </div>
              </div>
            </div>

            {/* Core Principles (Clean list, no pill slop) */}
            <div className="space-y-4 pt-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Core Editorial Tenets
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_ME_DATA.corePrinciples.map((principle, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 space-y-1.5"
                  >
                    <h4 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                      <span className="text-blue-500 font-mono text-xs">0{pIdx + 1}.</span>
                      <span>{principle.title}</span>
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Software Suite & Production Rig */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Software Suite */}
            <div className="p-8 rounded-2xl md:rounded-3xl bg-zinc-950/80 border border-zinc-800/90 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400">
                  <Cpu className="w-4 h-4" />
                  <span>Software Ecosystem</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">Industry Standard</span>
              </div>

              <div className="space-y-3">
                {ABOUT_ME_DATA.primaryTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-colors flex items-center justify-between ${
                      tool.highlight
                        ? 'bg-blue-950/20 border-blue-900/50 text-white'
                        : 'bg-zinc-900/40 border-zinc-800/70 text-zinc-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-2">
                        <span>{tool.name}</span>
                        {tool.highlight && (
                          <span className="text-[10px] font-mono text-blue-400">
                            (PRIMARY)
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">
                        {tool.level}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-zinc-500">
                      {tool.years}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Benchmarks Strip */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_ME_DATA.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-center space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
