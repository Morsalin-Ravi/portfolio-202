import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Film, Sparkles, Megaphone, Smartphone, Video, Sliders, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Film: <Film className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Megaphone: <Megaphone className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
};

interface ServicesSectionProps {
  onInquireService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  return (
    <section id="services" className="py-24 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              03 — WHAT I DO
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              SPECIALIZED EDITORIAL SERVICES
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Every service is tailored to maximize audience retention, clarify your brand narrative, and turn views into real business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl md:rounded-3xl border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {ICON_MAP[service.iconName] || <Film className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {service.shortSubtitle}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {service.description}
                </p>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase text-blue-400 font-semibold">
                    Client Value Delivered
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {service.valueDelivered}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase text-zinc-500">
                    Deliverable Scope
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{service.keySoftware.join(' · ')}</span>
                <a
                  href="#contact"
                  onClick={() => onInquireService && onInquireService(service.title)}
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Inquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
