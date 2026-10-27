import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-24 bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
              05 — PRODUCTION PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              HOW WE WORK TOGETHER
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            A frictionless, milestone-driven post-production workflow designed for international collaboration across borders and time zones.
          </p>
        </div>

        {/* 4 Steps Interactive Horizon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List on Left */}
          <div className="lg:col-span-5 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 flex items-start gap-5 ${
                    isSelected
                      ? 'bg-zinc-900 border-blue-500 shadow-xl shadow-blue-950/30'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/40 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span
                    className={`font-mono text-lg font-bold transition-colors ${
                      isSelected ? 'text-blue-400' : 'text-zinc-600'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <h3
                      className={`text-lg font-display font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-zinc-300'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {step.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Phase Breakdown Pane on Right */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-8 min-h-[380px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
                  <span>Phase {WORKFLOW_STEPS[activeStep].step}</span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span>{WORKFLOW_STEPS[activeStep].title}</span>
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  Step {activeStep + 1} of 4
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {WORKFLOW_STEPS[activeStep].summary}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {WORKFLOW_STEPS[activeStep].description}
                </p>
              </div>

              {/* Milestones Checklist */}
              <div className="space-y-3 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Key Milestones & Deliverable Checkpoints
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WORKFLOW_STEPS[activeStep].milestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation next step footer */}
            <div className="pt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Clear feedback rounds · No guesswork</span>
              {activeStep < WORKFLOW_STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Next: {WORKFLOW_STEPS[activeStep + 1].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Start with Phase 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
