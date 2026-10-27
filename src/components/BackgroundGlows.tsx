import React from 'react';

export const BackgroundGlows: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-Left Primary Electric Blue Glow (#2196F3) */}
      <div
        className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.22), transparent 70%)',
        }}
      />

      {/* Mid-Right Secondary Soft Mist Blue Glow (#E3F2FD) */}
      <div
        className="absolute -right-40 top-[35%] h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(227, 242, 253, 0.12), transparent 70%)',
        }}
      />

      {/* Bottom-Left Electric Cyan / Blue Glow */}
      <div
        className="absolute left-1/4 bottom-[10%] h-[30rem] w-[30rem] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.16), transparent 70%)',
        }}
      />
    </div>
  );
};
