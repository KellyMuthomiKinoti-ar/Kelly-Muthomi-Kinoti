import React from 'react';
import { BookOpen, GraduationCap, Cpu, TrendingUp, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

const PEDAGOGY_PILLARS = [
  {
    icon: GraduationCap,
    title: '1. CBC Learner-Centered Pedagogy',
    subtitle: 'Competency-Based Curriculum Alignment',
    description: 'Transitioning from rote memorization to active inquiry, peer collaboration, and core competency development (Critical Thinking, Self-Efficacy, Digital Literacy).',
    highlights: ['Group Inquiry Scenarios', 'Formative Assessment Rubrics', 'Values-Based STEM Leadership']
  },
  {
    icon: Cpu,
    title: '2. Practical ICT-Infused Instruction',
    subtitle: 'STEM & Computer Science Synergy',
    description: 'Integrating modern web apps, interactive digital calculators, and coding exercises into secondary Mathematics and Computer Studies lessons.',
    highlights: ['Interactive Math Simulators', 'Basic Web Development Training', 'Computer Hardware & Data Safety']
  },
  {
    icon: TrendingUp,
    title: '3. Real-World Business Financial Literacy',
    subtitle: 'Applied Business Studies',
    description: 'Connecting secondary Business Studies concepts to actual Kenyan economic platforms (M-Pesa, E-Commerce, Break-Even Analysis, Entrepreneurship).',
    highlights: ['Micro-Business Budgeting', 'M-Pesa Gateway Economics', 'Financial Ratio Computations']
  },
  {
    icon: Award,
    title: '4. Data-Driven Academic Remediation',
    subtitle: 'Statistical Progress Analytics',
    description: 'Utilizing statistical evaluation (SPSS, Excel) on internal examination scores to identify individual learning gaps and deploy targeted remediation plans.',
    highlights: ['Individualized Learner Analytics', 'Item Analysis on Math Exams', 'KEMIS Performance Tracking']
  }
];

export const TeachingPhilosophySection: React.FC = () => {
  return (
    <section id="pedagogy" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>TSC Registered Educator Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teaching Philosophy & Pedagogical Framework
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            As a licensed TSC Educator holding a Bachelor of Arts in Education from Moi University, Kelly integrates four core pillars into secondary STEM and Business instruction.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEDAGOGY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 flex flex-col justify-between transition-all duration-300 shadow-lg group backdrop-blur-md"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
