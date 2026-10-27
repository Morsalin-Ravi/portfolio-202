import React from 'react';
import { PERSONAL_INFO } from '../data/atikData';

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto max-w-6xl border-t border-[rgba(227,242,253,0.14)] px-5 py-8">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-display text-base tracking-tight text-foreground font-extrabold">
          {PERSONAL_INFO.brandMark}
          <span style={{ color: '#2196F3' }}>.</span>
        </span>
        <span className="text-xs text-[#94a3b8]">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
