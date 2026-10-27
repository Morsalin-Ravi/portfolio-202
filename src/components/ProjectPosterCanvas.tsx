import React, { useRef, useEffect } from 'react';
import { Project } from '../types';

interface ProjectPosterCanvasProps {
  project: Project;
  isHovered?: boolean;
}

export const ProjectPosterCanvas: React.FC<ProjectPosterCanvasProps> = ({ project, isHovered = false }) => {
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

      // Base background
      ctx.fillStyle = '#090a0f';
      ctx.fillRect(0, 0, w, h);

      // Procedural Theme Visuals
      if (project.theme === 'automotive') {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#0a1026');
        grad.addColorStop(0.5, '#05070f');
        grad.addColorStop(1, '#1e1b4b');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        const flareY = h * 0.48 + Math.sin(t * 0.03) * 6;
        const flareGrad = ctx.createRadialGradient(w * 0.5, flareY, 5, w * 0.5, flareY, w * 0.65);
        flareGrad.addColorStop(0, 'rgba(59, 130, 246, 0.7)');
        flareGrad.addColorStop(0.3, 'rgba(37, 99, 235, 0.3)');
        flareGrad.addColorStop(0.8, 'rgba(147, 51, 234, 0.08)');
        flareGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = flareGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(96, 165, 250, 0.25)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 7; i++) {
          const y = h * 0.3 + i * 28 + Math.sin(t * 0.05 + i) * 8;
          ctx.beginPath();
          ctx.moveTo(w * 0.15, y);
          ctx.lineTo(w * 0.85, y + 10);
          ctx.stroke();
        }
      } else if (project.theme === 'luxury') {
        const grad = ctx.createRadialGradient(w * 0.6, h * 0.4, 20, w * 0.5, h * 0.5, w * 0.7);
        grad.addColorStop(0, 'rgba(129, 140, 248, 0.35)');
        grad.addColorStop(0.5, 'rgba(49, 46, 129, 0.25)');
        grad.addColorStop(1, '#07070a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(199, 210, 254, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.55, h * 0.32, Math.PI * 0.8, Math.PI * 2.2);
        ctx.stroke();
      } else if (project.theme === 'motion') {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#020617');
        grad.addColorStop(0.6, '#0f172a');
        grad.addColorStop(1, '#082f49');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        for (let j = 0; j < 5; j++) {
          ctx.strokeStyle = j % 2 === 0 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(129, 140, 248, 0.3)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (let x = 0; x < w; x += 12) {
            const y = h * 0.5 + Math.sin(x * 0.015 + t * 0.04 + j) * 35 + Math.cos(x * 0.03 + j) * 15;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (project.theme === 'social') {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#1c1917');
        grad.addColorStop(0.5, '#292524');
        grad.addColorStop(1, '#451a03');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
        const bars = 16;
        const barW = w / (bars * 1.8);
        for (let b = 0; b < bars; b++) {
          const barH = 30 + Math.abs(Math.sin(t * 0.08 + b * 0.6)) * (h * 0.45);
          ctx.fillRect(w * 0.12 + b * barW * 1.5, h * 0.7 - barH, barW, barH);
        }
      } else if (project.theme === 'narrative') {
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#06171d');
        grad.addColorStop(0.55, '#0b2933');
        grad.addColorStop(0.56, '#051318');
        grad.addColorStop(1, '#020608');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
        ctx.fillRect(0, h * 0.48, w, h * 0.14);
      } else {
        const grad = ctx.createRadialGradient(w * 0.5, h * 0.45, 10, w * 0.5, h * 0.5, w * 0.6);
        grad.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
        grad.addColorStop(0.6, 'rgba(30, 27, 75, 0.2)');
        grad.addColorStop(1, '#050508');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(165, 180, 252, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.48, 60, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.48, 105, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Cinematic Film Letterbox & Metadata Overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, w, 28);
      ctx.fillRect(0, h - 32, w, 32);

      // Timecode
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText(`REC · ${project.aspectRatio} · ${project.duration}`, 14, 18);
      ctx.fillText(`PRORES 422 HQ · 4K`, w - 120, 18);

      // Subtle audio wave track at bottom
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 14; x < w - 14; x += 6) {
        const val = Math.sin(x * 0.1 + t * 0.1) * 6;
        ctx.moveTo(x, h - 16);
        ctx.lineTo(x, h - 16 + val);
      }
      ctx.stroke();

      t += isHovered ? 1.5 : 0.6;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [project, isHovered]);

  return (
    <div className="relative w-full h-full min-h-[220px] overflow-hidden bg-zinc-950 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={560}
        height={320}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};
