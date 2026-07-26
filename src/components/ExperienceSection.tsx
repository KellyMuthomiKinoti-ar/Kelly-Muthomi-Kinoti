import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, 
  Sparkles, Layers, Globe, Building2, Terminal
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('menwe-educator');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Career History & Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Detailed Work Experience Timeline</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Timeline of professional contributions across classroom education, government KEMIS administration, and global freelance software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                {/* Timeline Point Dot */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  exp.isCurrent 
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-4 ring-amber-500/20' 
                    : 'bg-slate-900 border-2 border-amber-500/50 text-amber-400'
                }`}>
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Card Container */}
                <div className="bg-slate-900/70 hover:bg-slate-900 border border-slate-700/60 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl backdrop-blur-md">
                  
                  {/* Card Header Top */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-slate-950 uppercase">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-amber-400 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-amber-500" />
                          <span>{exp.organization}</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 text-xs font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{exp.period}</span>
                      </div>
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-400 hover:text-white"
                        title={isExpanded ? "Collapse Details" : "Expand Details"}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Platforms Tags (if freelance) */}
                  {exp.platforms && (
                    <div className="mb-4 flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-mono text-slate-400 font-semibold">Key Freelance Platforms:</span>
                      {exp.platforms.map((plat, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-amber-300"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Responsibilities List */}
                  <div className="space-y-3 my-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-amber-400" />
                      <span>Core Responsibilities & Deliverables:</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Accordion Extension */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
                      {exp.highlights && (
                        <div>
                          <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 font-semibold">
                            Key Accomplishments & Achievements:
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {exp.highlights.map((high, hIdx) => (
                              <div
                                key={hIdx}
                                className="p-3 rounded-xl bg-slate-950 border border-slate-700/80 text-xs text-slate-300 leading-relaxed"
                              >
                                <span className="text-amber-400 font-bold block mb-1">Key Result #{hIdx + 1}</span>
                                {high}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.techAndTools && (
                        <div>
                          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                            Skills, Tools & Methodology Applied:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techAndTools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-200"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Toggle Expand Trigger Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Full Accomplishments & Tools'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
