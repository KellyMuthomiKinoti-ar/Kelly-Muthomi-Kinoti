import React from 'react';
import { 
  UserCheck, Award, GraduationCap, Code, BarChart3, CheckCircle2, 
  ShieldCheck, FileText, Sparkles, BookOpen, Layers
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_MILESTONES } from '../data/portfolioData';

export const SummarySection: React.FC = () => {
  const highlightsList = [
    {
      icon: GraduationCap,
      title: '6+ Years Experience',
      detail: 'Proven experience spanning Secondary & Junior Secondary STEM Education, ICT Integration, Web Engineering, and Academic Research Support.',
      tag: 'Education & Tech'
    },
    {
      icon: ShieldCheck,
      title: 'Licensed TSC Educator',
      detail: 'Fully registered with Teachers Service Commission (TSC No. 1030686) for Mathematics, Business Studies, and Computer Studies instruction.',
      tag: 'TSC License #1030686'
    },
    {
      icon: Award,
      title: 'KEMI Certified KEMIS Admin',
      detail: 'Certified by Kenya Education Management Institute for administering institution modules, learner profiles, transfers, and institutional analytics.',
      tag: 'KEMI Ministry of Education'
    },
    {
      icon: Code,
      title: 'Full-Stack Web Architect',
      detail: 'Architected and deployed production web solutions including StyledKid (E-Commerce), WildLens Adventure (Travel CMS), and Menwe Junior School (Next.js App).',
      tag: 'PHP • React • WordPress'
    },
    {
      icon: BarChart3,
      title: 'Global Research & Data Analyst',
      detail: 'Conducted advanced statistical analytics using SPSS, SAS, STATA, and Advanced Excel for global platforms (Studybay, Fiverr, Studypool, Uvocorp).',
      tag: 'SPSS • STATA • SAS'
    }
  ];

  return (
    <section id="summary" className="py-20 bg-slate-950 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Executive Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Executive Summary & Milestones</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Bridging academic rigor, STEM pedagogy, software engineering, and empirical statistical research.
          </p>
        </div>

        {/* Executive Summary Main Box */}
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 sm:p-8 mb-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600" />
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400 shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Executive Summary</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-mono uppercase font-semibold">
                  Moi University Alumni
                </span>
              </h3>
              
              <p className="text-slate-200 text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Core Domains:</span>
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-medium">
                  Mathematics & Business Education
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-300 text-xs font-medium">
                  Computer Science & CBC STEM
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-orange-300 text-xs font-medium">
                  PHP / MySQL / JavaScript / WordPress
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-medium">
                  SPSS / STATA / SAS Research
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium">
                  KEMIS Data Administration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Career Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-700/60 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 group-hover:bg-amber-950/50 group-hover:border-amber-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center text-xs text-amber-400 font-mono gap-1 group-hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Professional Highlight</span>
                </div>
              </div>
            );
          })}

          {/* Special Quick Stats Counter Card */}
          <div className="bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 border border-amber-500/30 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-3">
                <Layers className="w-4 h-4" />
                <span>At a Glance Metrics</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Impact Summary</h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700">
                  <div className="text-2xl font-black text-amber-400 font-mono">6+ Yrs</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Education & ICT</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700">
                  <div className="text-2xl font-black text-amber-300 font-mono">300+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Global Research Projects</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700">
                  <div className="text-2xl font-black text-amber-400 font-mono">3 Live</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Production Web Platforms</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700">
                  <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">TSC & KEMI Compliance</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 text-[11px] text-slate-400 font-mono text-center">
              Licensed • Certified • Experienced
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
