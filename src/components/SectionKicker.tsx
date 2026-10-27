import React from 'react';

interface SectionKickerProps {
  children: React.ReactNode;
  dash?: boolean;
}

export const SectionKicker: React.FC<SectionKickerProps> = ({ children, dash = false }) => {
  return (
    <p className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-[#A99BB8]">
      {dash && (
        <span
          className="inline-block h-[2px] w-8"
          style={{ background: 'var(--gradient-accent)' }}
        />
      )}
      {children}
    </p>
  );
};
