import React, { useState, useEffect } from 'react';
import { X, Play, Settings, Check } from 'lucide-react';
import { SHOWREEL_CONFIG } from '../data/portfolioData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [customUrl, setCustomUrl] = useState(SHOWREEL_CONFIG.videoUrl);
  const [activeUrl, setActiveUrl] = useState(SHOWREEL_CONFIG.videoUrl);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveUrl(customUrl);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
    setIsConfigOpen(false);
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(activeUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Theater Mode Showreel"
    >
      <div className="relative w-full max-w-6xl bg-zinc-950 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header Bar */}
        <div className="p-4 md:px-6 md:py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              Morsalin Ravi
            </span>
            <span aria-hidden="true" className="text-zinc-700">|</span>
            <span className="text-xs md:text-sm font-semibold text-zinc-200">
              Creative Showreel {SHOWREEL_CONFIG.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsConfigOpen(!isConfigOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              title="Configure Showreel URL"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close Theater Mode"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas / Embed Container */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Morsalin Ravi Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-zinc-950 via-[#0a0f1d] to-zinc-950">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2)_0%,transparent_70%)] pointer-events-none" />

              <div className="relative z-10 text-center max-w-lg space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-xl shadow-blue-600/30">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                    MORSALIN RAVI — 2025/2026 REEL
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                    Commercial video editing, dynamic 3D kinetic typography, and precision sound design portfolio reel.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                  <span>{SHOWREEL_CONFIG.resolution}</span>
                  <span>·</span>
                  <span>{SHOWREEL_CONFIG.colorProfile}</span>
                  <span>·</span>
                  <span>{SHOWREEL_CONFIG.duration}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  <span>MASTER AUDIO -14 LUFS</span>
                </div>
                <div>PRESS ESC TO EXIT</div>
              </div>
            </div>
          )}
        </div>

        {/* Configuration Drawer */}
        {isConfigOpen && (
          <form
            onSubmit={handleSaveUrl}
            className="p-6 bg-zinc-900/90 border-t border-zinc-800 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Configure Video Source URL</h4>
              <span className="text-xs text-zinc-400 font-mono">Supports YouTube, Vimeo, or direct MP4 link</span>
            </div>
            <div className="flex gap-3">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold uppercase tracking-wider text-white transition-colors flex items-center gap-1.5"
              >
                {savedSuccess ? <Check className="w-4 h-4" /> : null}
                <span>{savedSuccess ? 'Applied' : 'Apply URL'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
