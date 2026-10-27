import React, { useEffect } from 'react';
import { X, ArrowLeft, Clock, Film, Wrench, CheckCircle2, Sliders, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectPosterCanvas } from './ProjectPosterCanvas';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-5xl bg-[#090a0f] border border-zinc-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Works Gallery</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Poster Banner */}
        <div className="relative aspect-[16/9] max-h-[460px] w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden">
          <ProjectPosterCanvas project={project} isHovered={true} />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 pointer-events-none">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
                {project.category}
              </div>
              <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                {project.title}
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{project.duration}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{project.aspectRatio}</span>
            </div>
          </div>
        </div>

        {/* Case Study Content Breakdown */}
        <div className="p-6 sm:p-8 md:p-12 space-y-12">
          {/* Client & Role Summary Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
            <div>
              <div className="text-xs font-mono uppercase text-zinc-500">Client / Context</div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">{project.client}</div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-500">My Role</div>
              <div className="text-sm font-semibold text-blue-400 mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-500">Software Suite</div>
              <div className="text-sm font-medium text-zinc-300 mt-1">
                {project.tools.join(', ')}
              </div>
            </div>
          </div>

          {/* Creative Brief & Narrative Direction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                01 — THE CREATIVE BRIEF
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Intentional visual storytelling with measurable impact.
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base">
              <p>{project.creativeBrief}</p>
              <p className="text-zinc-400">{project.shortDescription}</p>
            </div>
          </div>

          {/* Editing & Motion Techniques */}
          <div className="space-y-6 pt-6 border-t border-zinc-900">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <Sliders className="w-4 h-4 text-blue-400" />
              <span>02 — POST-PRODUCTION & MOTION TECHNIQUES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.techniques.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 flex items-start gap-3"
                >
                  <div className="text-xs font-mono text-blue-400 pt-0.5">0{idx + 1}</div>
                  <div className="text-sm font-medium text-zinc-200">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Deliverables & Results */}
          <div className="space-y-6 pt-6 border-t border-zinc-900">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>03 — DELIVERABLES PACKAGE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-zinc-300 p-3 rounded-lg bg-zinc-900/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {project.results && (
              <div className="p-4 rounded-xl border border-blue-900/30 bg-blue-950/20 text-xs font-mono text-blue-300">
                <span className="font-semibold text-blue-200">Demonstration Metric: </span>
                {project.results}
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500">
              Demonstration Case Study · Editable data structure in portfolioData.ts
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors whitespace-nowrap"
            >
              Discuss a Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
