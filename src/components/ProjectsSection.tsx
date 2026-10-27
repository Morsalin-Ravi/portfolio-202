import React, { useState } from 'react';
import { ArrowUpRight, Filter, Play } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectPosterCanvas } from './ProjectPosterCanvas';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'All Works', value: 'All' },
  { label: 'Commercials', value: 'Commercial Video Editing' },
  { label: 'Brand Ads', value: 'Brand Advertisement' },
  { label: 'Motion Graphics', value: 'Motion Graphics' },
  { label: 'Social & Creator', value: 'Social Media Campaign' },
  { label: 'Cinematic Films', value: 'Cinematic Storytelling' },
  { label: 'Product Spotlight', value: 'Product Promotional Video' },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              02 — SELECTED CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              CRAFTED FOR IMPACT
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Curated selection of high-retention commercial edits, brand campaigns, 3D kinetic design, and narrative post-production.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.value
                  ? 'bg-zinc-100 text-zinc-900 shadow-md font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Bento / Varied Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout logic: 1st and 4th items are wide 8-col or 7-col cards for editorial rhythm
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer rounded-2xl md:rounded-3xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Media Container with Procedural Canvas & Hover Indicator */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                  <ProjectPosterCanvas
                    project={project}
                    isHovered={hoveredProjectId === project.id}
                  />

                  {/* Hover Preview Indicator Overlay */}
                  <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm flex items-center gap-1.5 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Inspect Case Study</span>
                    </div>
                  </div>

                  {/* Corner Aspect Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-zinc-300 border border-white/10 pointer-events-none">
                    {project.aspectRatio}
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.duration}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-normal line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Techniques & Deliverables Preview */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="truncate max-w-[200px]">{project.role}</span>
                    <span className="text-blue-400 group-hover:underline">View Breakdown →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state safeguard if category yields zero results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-zinc-400 font-mono text-sm">No demonstration projects in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-xs font-mono text-white hover:bg-zinc-700"
            >
              Reset Category Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
