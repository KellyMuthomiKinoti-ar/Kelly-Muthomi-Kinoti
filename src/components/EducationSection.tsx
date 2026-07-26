import React from 'react';
import { GraduationCap, Award, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Education Background</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Formal university degree and national examination credentials establishing strong foundations in Mathematics, Business Economics, and Science.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/70 hover:bg-slate-900 border border-slate-700/60 hover:border-amber-500/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center font-bold group-hover:bg-amber-500/10 group-hover:border-amber-500/50 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-950 text-amber-400 font-bold border border-slate-700">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.qualification}
                </h3>

                <p className="text-sm font-semibold text-amber-400 mb-4 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{item.institution}</span>
                </p>

                <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center text-xs text-slate-400 font-mono gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Academic Credentials</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
