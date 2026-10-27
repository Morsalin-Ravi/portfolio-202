import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX, Sliders } from 'lucide-react';
import { SHOWREEL_CONFIG } from '../data/portfolioData';

interface ShowreelSectionProps {
  onOpenTheater: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onOpenTheater }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(24);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = '#050608';
      ctx.fillRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, 30, w * 0.5, h * 0.5, w * 0.6);
      grad.addColorStop(0, isPlaying ? 'rgba(37, 99, 235, 0.45)' : 'rgba(37, 99, 235, 0.25)');
      grad.addColorStop(0.6, isPlaying ? 'rgba(79, 70, 229, 0.25)' : 'rgba(79, 70, 229, 0.1)');
      grad.addColorStop(1, '#050608');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const bars = 48;
      const barWidth = w / (bars * 1.6);
      ctx.fillStyle = isPlaying ? 'rgba(147, 197, 253, 0.65)' : 'rgba(147, 197, 253, 0.25)';

      for (let i = 0; i < bars; i++) {
        const factor = isPlaying ? Math.abs(Math.sin(t * 0.08 + i * 0.25)) : Math.abs(Math.sin(i * 0.15)) * 0.4;
        const barH = 15 + factor * (h * 0.35);
        const x = w * 0.1 + i * (barWidth + 4);
        const y = h * 0.5 - barH * 0.5;
        ctx.fillRect(x, y, barWidth, barH);
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w * 0.08, h * 0.5);
      ctx.lineTo(w * 0.92, h * 0.5);
      ctx.moveTo(w * 0.5, h * 0.15);
      ctx.lineTo(w * 0.5, h * 0.85);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillText('01:45:00 · 24.000 FPS', 28, 38);
      ctx.fillText('REC TC 00:25:12:04', w - 165, 38);

      if (isPlaying) {
        t += 1;
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.12));
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  return (
    <section id="showreel" className="py-24 bg-[#070709] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              01 — MASTER SHOWREEL
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              VISUAL RHYTHM IN MOTION
            </h2>
          </div>
          <div className="text-sm font-mono text-zinc-400 flex items-center gap-3">
            <span>{SHOWREEL_CONFIG.duration}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{SHOWREEL_CONFIG.resolution}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-blue-400">{SHOWREEL_CONFIG.fps}</span>
          </div>
        </div>

        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
          <div className="relative aspect-[16/9] w-full">
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="pointer-events-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600/90 text-white flex items-center justify-center hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-600/40 backdrop-blur-sm"
                  aria-label="Play Showreel"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                </button>
              )}
            </div>

            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-700 text-blue-400 text-[10px]">
                  PRORES 422 HQ
                </span>
                <span>COLOR GRADED & MIXED</span>
              </div>
              <button
                type="button"
                onClick={onOpenTheater}
                className="pointer-events-auto px-3.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
              >
                <Maximize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Theater Mode</span>
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div
                className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 cursor-pointer overflow-hidden relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(Math.max(0, Math.min(100, (clickX / rect.width) * 100)));
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="text-xs font-mono text-zinc-400">
                    <span>{Math.floor((progress / 100) * 105)}s</span>
                    <span className="text-zinc-600"> / </span>
                    <span>105s</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenTheater}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
                  >
                    Watch Fullscreen HD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              Configurable Showreel Asset: Set your real YouTube/Vimeo/Cloudflare video URL in <code className="text-zinc-300">portfolioData.ts</code> or the Theater Mode modal.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenTheater}
            className="text-blue-400 hover:text-blue-300 whitespace-nowrap shrink-0"
          >
            Configure Video URL →
          </button>
        </div>
      </div>
    </section>
  );
};
