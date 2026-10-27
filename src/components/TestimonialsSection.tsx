import React, { useState } from 'react';
import { TESTIMONIALS_CONFIG } from '../data/portfolioData';
import { Quote, Eye, EyeOff, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(TESTIMONIALS_CONFIG.enabled);

  return (
    <section id="testimonials" className="py-24 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              06 — COLLABORATION & CREDIBILITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="px-3.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              {isVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{isVisible ? 'Hide Section' : 'Show Section'}</span>
            </button>
          </div>
        </div>

        {/* Transparent Label Notice: Anti-fabrication integrity */}
        <div className="p-4 mb-8 rounded-xl border border-zinc-800/80 bg-zinc-950/70 flex items-start gap-3 text-xs font-mono text-zinc-400">
          <MessageSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p>
            <span className="text-zinc-200 font-semibold">Integrity Standard: </span>
            {TESTIMONIALS_CONFIG.notice} (Toggle visibility above or populate authentic client testimonials inside <code className="text-zinc-300">portfolioData.ts</code>).
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS_CONFIG.items.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl md:rounded-3xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-blue-500/40" />
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900 space-y-1">
                  <div className="text-sm font-semibold text-white">
                    {item.clientName}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {item.clientRole} · {item.company}
                  </div>
                  <div className="text-[11px] font-mono text-blue-400/80">
                    Project: {item.projectTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
