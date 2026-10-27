import React from 'react';
import { SectionKicker } from './SectionKicker';
import { TOOLKIT_SOFTWARE } from '../data/atikData';

export const Toolkit: React.FC = () => {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-5 py-24 text-center">
      <SectionKicker>Toolkit</SectionKicker>
      <h2
        className="mt-4 font-display text-3xl sm:text-4xl text-white tracking-tight"
        style={{ fontWeight: 700 }}
      >
        Software I Edit With
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-[#94a3b8] leading-relaxed">
        The core stack behind every project, from rough cut to final export.
      </p>

      {/* Software Interactive Chips with #2196F3 and #E3F2FD Hover Accents */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {TOOLKIT_SOFTWARE.map((software) => (
          <div
            key={software}
            data-cursor="hover"
            className="chip text-sm font-semibold hover:-translate-y-1 hover:border-[#2196F3] hover:shadow-[0_14px_34px_-14px_rgba(33,150,243,0.85)] cursor-default select-none border-[rgba(227,242,253,0.14)]"
          >
            <span
              className="h-4 w-4 rounded-[5px] shrink-0"
              style={{ background: 'var(--gradient-accent)' }}
            />
            <span>{software}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
