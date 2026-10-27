import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/atikData';

interface VideoCardProps {
  id: string;
  vertical?: boolean;
  big?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ id, vertical = false, big = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[rgba(227,242,253,0.14)] bg-[rgba(13,22,36,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2196F3]"
      style={{
        aspectRatio: vertical ? '9 / 16' : '16 / 9',
        boxShadow: big ? '0 24px 70px -20px rgba(33,150,243,0.55)' : undefined,
      }}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={`Video by ${PERSONAL_INFO.name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          className="absolute inset-0 h-full w-full cursor-pointer text-left focus:outline-none"
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={`Video edit thumbnail by ${PERSONAL_INFO.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('mqdefault')) {
                target.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
              }
            }}
          />

          {/* Vignette Gradient Overlay */}
          <span
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(8,12,20,0.15) 0%, rgba(8,12,20,0.4) 45%, rgba(8,12,20,0.9) 100%)',
            }}
          />

          {/* Centered Play Button */}
          <span
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: big ? 84 : 46,
              height: big ? 84 : 46,
              background: 'var(--gradient-accent)',
              boxShadow: '0 10px 30px -6px rgba(33,150,243,0.7)',
            }}
          >
            <svg
              width={big ? 28 : 16}
              height={big ? 28 : 16}
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};
