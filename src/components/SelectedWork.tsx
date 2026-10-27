import React from 'react';
import { SectionKicker } from './SectionKicker';
import { VideoCard } from './VideoCard';
import { WORK_CATEGORIES } from '../data/atikData';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      {/* Section Header */}
      <div className="text-center">
        <SectionKicker>Portfolio</SectionKicker>
        <h2
          className="mt-4 font-display text-3xl sm:text-4xl text-white tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Selected <span className="gradient-text">Work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#94a3b8] leading-relaxed">
          A mix of edits across styles — motion graphics, talking-head, long-form, faceless, vox-style explainers and typography reels.
        </p>
      </div>

      {/* Categorized Video Clip Showcase */}
      <div className="mt-16 space-y-16">
        {WORK_CATEGORIES.map((category) => (
          <div key={category.title} className="space-y-8">
            {/* Category Header Row */}
            <div className="flex items-end justify-between gap-4 border-b border-[rgba(227,242,253,0.14)] pb-4">
              <h3
                className="font-display text-xl sm:text-2xl text-white font-semibold"
                style={{ fontWeight: 600 }}
              >
                {category.title}
              </h3>
              <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-[#94a3b8]">
                {String(category.ids.length).padStart(2, '0')} CLIPS
              </span>
            </div>

            {/* Video Grid */}
            <div className={`grid gap-5 ${category.cols}`}>
              {category.ids.map((id) => (
                <VideoCard
                  key={id}
                  id={id}
                  vertical={category.vertical}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
