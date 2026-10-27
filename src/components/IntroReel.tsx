import React from 'react';
import { SectionKicker } from './SectionKicker';
import { VideoCard } from './VideoCard';
import { INTRO_REEL_ID } from '../data/atikData';

export const IntroReel: React.FC = () => {
  return (
    <section id="reel" className="mx-auto max-w-5xl px-5 py-24">
      <div className="text-center">
        <SectionKicker>Featured</SectionKicker>
        <h2
          className="mt-4 font-display text-3xl sm:text-4xl text-white tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Watch The Intro Reel
        </h2>
      </div>

      <div className="mt-12">
        <VideoCard id={INTRO_REEL_ID} big={true} />
      </div>
    </section>
  );
};
