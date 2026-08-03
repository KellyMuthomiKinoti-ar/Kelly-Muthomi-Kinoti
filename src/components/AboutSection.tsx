import React, { useState } from 'react';
import { 
  Code, Cpu, BarChart3, GraduationCap, Award, ShieldCheck, Download, 
  Send, ArrowRight, ExternalLink, Terminal, Database, BookOpen, 
  Users, CheckCircle2, Sparkles, Target, Compass, Layers, Briefcase,
  Calendar, Check, Zap, Globe, HeartHandshake
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_MILESTONES, CERTIFICATIONS } from '../data/portfolioData';
import { SectionHeading, Card, Badge, Button, StatusBadge } from './ui';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

interface TimelineItem {
  year: string;
  category: 'software' | 'edtech' | 'research' | 'leadership';
  title: string;
  role: string;
  description: string;
  technologies: string[];
  metric: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2024 – Present',
    category: 'software',
    title: 'Full-Stack E-Commerce & Tour Systems Architecture',
    role: 'Lead Software Engineer (StyledKid & WildLens Adventure)',
    description: 'Architecting and deploying production e-commerce platforms and tour booking engines. Engineered real-time database concurrency locking, WebP image pipelines, and responsive React 18 / custom PHP architectures with <1s LCP.',
    technologies: ['React 18', 'TypeScript', 'PHP 8+', 'MySQL', 'WordPress', 'Lovable AI'],
    metric: '99.9% Uptime & 82% Mobile Conversion'
  },
  {
    year: '2023 – Present',
    category: 'edtech',
    title: 'Menwe Junior School Digital Portal & CBC STEM Pedagogy',
    role: 'EdTech Systems Architect & KEMIS Administrator',
    description: 'Designed institutional digital portals and CBC lesson plan engines for secondary education. Certified by Ministry of Education / KEMI in KEMIS learner transfers and institutional reporting analytics.',
    technologies: ['Next.js', 'KEMIS Admin', 'CBC Pedagogy', 'Interactive Sandboxes', 'Institutional Portals'],
    metric: '500+ Students Digitally Administered'
  },
  {
    year: '2020 – 2023',
    category: 'research',
    title: 'Empirical Statistical Research & Academic Modeling',
    role: 'Statistical Research Analyst & Consultant',
    description: 'Conducted rigorous quantitative and qualitative data modeling across 100+ research studies using SPSS, STATA, SAS, and Advanced Excel. Delivered regression analysis and APA/IEEE citations.',
    technologies: ['SPSS', 'STATA', 'SAS', 'Excel VBA', 'APA / IEEE Standards'],
    metric: '100+ Research Projects Analyzed'
  },
  {
    year: '2018 – 2022',
    category: 'leadership',
    title: 'TSC Licensed Educator & STEM Curriculum Lead',
    role: 'Mathematics, Business & Computer Studies Teacher',
    description: 'Registered teacher (TSC) instructing Mathematics and Computer Studies at KCSE level. Led student ICT clubs, managed assessment databases, and championed digital literacy in junior secondary classrooms.',
    technologies: ['TSC License', 'KCSE STEM', 'Computer Logic', 'Assessment Tracking'],
    metric: 'High Pass Rates & STEM Club Mentorship'
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResume,
  onOpenCertModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'software' | 'edtech' | 'research' | 'leadership'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredTimeline = selectedCategory === 'all' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="about" 
      aria-label="About Kelly Muthomi Kinoti — Professional Narrative & Career Timeline"
      className="py-24 bg-slate-950 relative border-y border-slate-800/80 overflow-hidden"
    >
      {/* Anchor for backward compatibility with #summary bookmarks */}
      <div id="summary" className="-mt-24 pt-24" aria-hidden="true" />

      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="Professional Narrative"
          title="Bridging Full-Stack Engineering, EdTech Architecture, and Empirical Research"
          subtitle="A comprehensive overview of how software craftsmanship, STEM pedagogy, and statistical analysis reinforce each other to create scalable digital solutions."
          align="left"
        />

        {/* 1. EXECUTIVE INTRODUCTION & PRIMARY IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Terminal className="w-4 h-4" />
              <span>Primary Professional Identity: Full-Stack Software Engineer</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Engineering Resilient Web Applications with Built-in Educational Equity and Data Integrity
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              My career is grounded in a singular principle: <strong className="text-white">technology is most powerful when it is accessible, performant, and verifiable</strong>. As a Full-Stack Software Engineer with over six years of experience, I architect production-grade web platforms using React 18, TypeScript, Next.js, and custom PHP/MySQL database schemas.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              What sets my engineering approach apart is the synergy of three supporting disciplines:
            </p>

            {/* Supporting Identities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>EdTech Architect</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Designing institutional school portals (Menwe Junior School), CBC lesson plan engines, and KEMIS-aligned administrative tools.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>TSC Licensed Educator</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Licensed mathematics and computer science teacher (TSC) bringing pedagogical clarity and structured UX to digital software.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <BarChart3 className="w-4 h-4" />
                  <span>Statistical Analyst</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Empirical data modeling across 100+ studies using SPSS, STATA, and SAS—ensuring data pipelines are mathematically sound.
                </p>
              </div>
            </div>

            {/* Internal Links Navigation Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                Explore Deep-Dive Sections:
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>Experience (#experience)</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>Projects (#projects)</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('skills')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Skills (#skills)</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Contact (#contact)</span>
              </button>
            </div>
          </div>

          {/* Right Side Bio Highlights Card */}
          <div className="lg:col-span-4">
            <Card variant="glass" className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                    Alumni & Credential verification
                  </span>
                  <h4 className="text-white font-bold text-lg mt-0.5">Moi University Graduate</h4>
                </div>
                <Badge variant="amber" size="sm">B.A. Education</Badge>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">TSC Licensed Educator:</strong> Registered under Teacher Service Commission for Secondary Mathematics & Computer Studies.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">KEMI Certified (June 2026):</strong> Certified in KEMIS learner module administration and education management systems.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Full-Stack Production SLA:</strong> 99.9% uptime achieved across live e-commerce and booking platforms.
                  </div>
                </div>
              </div>

              {/* Quick CTA Actions */}
              <div className="pt-2 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={onOpenResume}
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Official Résumé
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={onOpenCertModal}
                  icon={<Award className="w-4 h-4 text-amber-400" />}
                >
                  Verify TSC & KEMI Licenses
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* 2. MISSION, VISION & CORE VALUES GRID */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MISSION CARD */}
            <Card variant="base" className="border-amber-500/40 bg-gradient-to-br from-slate-900/90 to-amber-950/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Professional Mission</h4>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Why I Engineer</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                To engineer high-performance, low-latency software applications and EdTech portals that solve real institutional challenges—combining clean full-stack architecture with pedagogical clarity to bridge the digital divide in African secondary education and enterprise e-commerce.
              </p>
            </Card>

            {/* VISION CARD */}
            <Card variant="base" className="border-emerald-500/40 bg-gradient-to-br from-slate-900/90 to-emerald-950/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Long-Term Vision</h4>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">The Next 10 Years</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                To lead cross-border digital transformation as a Principal Full-Stack Engineer and EdTech Architect—standardizing data-driven school management systems (KEMIS) and empowering the next generation of African STEM engineers through open-source tooling and curriculum innovation.
              </p>
            </Card>
          </div>

          {/* 4 CORE VALUES */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Core Engineering & Professional Values</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-amber-500/30 transition-colors">
                <Badge variant="amber" size="sm">Value 01</Badge>
                <h5 className="font-bold text-white text-base">Technical Excellence</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero compromise on database normalization, strict TypeScript typing, responsive mobile layout, and WCAG 2.2 AA accessibility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-emerald-500/30 transition-colors">
                <Badge variant="emerald" size="sm">Value 02</Badge>
                <h5 className="font-bold text-white text-base">Educational Equity</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every software tool should lower the barrier to learning. Pedagogical structure ensures software is usable by teachers, students, and clients alike.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-cyan-500/30 transition-colors">
                <Badge variant="cyan" size="sm">Value 03</Badge>
                <h5 className="font-bold text-white text-base">Empirical Rigor</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Decisions are driven by verifiable data. Using SPSS, SAS, and STATA statistical modeling to validate educational and business outcomes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-amber-500/30 transition-colors">
                <Badge variant="slate" size="sm">Value 04</Badge>
                <h5 className="font-bold text-white text-base">Institutional Integrity</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Adhering strictly to Ministry of Education KEMIS compliance, data privacy, and ethical software development standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 3-PILLAR PHILOSOPHIES (ENGINEERING, EDUCATION, RESEARCH) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Interdisciplinary Philosophies</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">Software • Pedagogy • Data</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Engineering Philosophy */}
            <Card variant="interactive" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Code className="w-5 h-5" />
                  <span>Engineering Philosophy</span>
                </div>
                <Badge variant="amber" size="sm">Architecture</Badge>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                I build software that is <strong>predictable, modular, and fast</strong>. By combining React 18 server/client boundaries with normalized MySQL relational databases, I eliminate N+1 query bottlenecks and achieve sub-second page loads even on constrained mobile networks.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mobile-first responsive Tailwind layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Transactional MySQL row-level locking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Strict TypeScript type safety across APIs</span>
                </li>
              </ul>
            </Card>

            {/* Educational Philosophy */}
            <Card variant="interactive" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <GraduationCap className="w-5 h-5" />
                  <span>Educational Philosophy</span>
                </div>
                <Badge variant="emerald" size="sm">Pedagogy</Badge>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Guided by the Kenyan <strong>Competency Based Curriculum (CBC)</strong>, my pedagogy shifts classroom focus from rote memorization to practical inquiry. I use interactive software sandboxes to help learners visualize mathematical theorems and programming logic.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Inquiry-based CBC STEM instruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Practical programming logic in schools</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Digital literacy for teachers and youth</span>
                </li>
              </ul>
            </Card>

            {/* Research Philosophy */}
            <Card variant="interactive" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <BarChart3 className="w-5 h-5" />
                  <span>Research Philosophy</span>
                </div>
                <Badge variant="cyan" size="sm">Statistics</Badge>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous empirical data analysis transforms speculation into certainty. Using <strong>SPSS, STATA, and SAS</strong>, I test hypotheses, run multivariate regression models, and validate both software performance and student learning outcomes.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Multivariate regression & ANOVA modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>APA, IEEE & Harvard citation compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Data-driven educational policy support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* 4. INTERACTIVE PROFESSIONAL JOURNEY TIMELINE */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h4 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Calendar className="w-6 h-6 text-amber-400" />
                <span>Interactive Professional Journey Timeline</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Filter career milestones by professional domain to see how engineering, pedagogy, and research intersect.
              </p>
            </div>

            {/* Timeline Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs" role="tablist" aria-label="Timeline domain filter">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                role="tab"
                aria-selected={selectedCategory === 'all'}
                className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                All Eras ({TIMELINE_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('software')}
                role="tab"
                aria-selected={selectedCategory === 'software'}
                className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === 'software'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                Software Engineering
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('edtech')}
                role="tab"
                aria-selected={selectedCategory === 'edtech'}
                className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === 'edtech'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                EdTech & KEMIS
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('research')}
                role="tab"
                aria-selected={selectedCategory === 'research'}
                className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === 'research'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                Research & SPSS
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('leadership')}
                role="tab"
                aria-selected={selectedCategory === 'leadership'}
                className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === 'leadership'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                TSC Teaching Lead
              </button>
            </div>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTimeline.map((item, idx) => (
              <Card key={idx} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={
                        item.category === 'software' ? 'amber' :
                        item.category === 'edtech' ? 'emerald' :
                        item.category === 'research' ? 'cyan' : 'slate'
                      }
                      size="sm"
                    >
                      {item.year}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {item.metric}
                    </span>
                  </div>

                  <h5 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs font-mono text-amber-400 mb-3">
                    {item.role}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 5. LEADERSHIP HIGHLIGHTS & COMMUNITY IMPACT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leadership Highlights */}
          <Card variant="base" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Users className="w-5 h-5 text-amber-400" />
                <span>Leadership Highlights</span>
              </div>
              <Badge variant="amber" size="sm">Institutional Lead</Badge>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">Menwe Junior School Digital Portal Architect</h5>
                <p className="text-slate-300 leading-relaxed">
                  Led the technical design and deployment of the Menwe Junior School web portal—digitizing student enrollment, assessment tracking, and parent communication for CBC junior secondary learners.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">KEMIS Administrative Officer</h5>
                <p className="text-slate-300 leading-relaxed">
                  Certified by Kenya Education Management Institute (KEMI) to manage learner transfer modules, user role access, and institutional analytics for Ministry of Education reporting.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">Cross-Functional Software Mentorship</h5>
                <p className="text-slate-300 leading-relaxed">
                  Mentored junior developers and educators in React 18, TypeScript, and version control—bridging academic theory with enterprise software delivery.
                </p>
              </div>
            </div>
          </Card>

          {/* Community Impact */}
          <Card variant="base" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <HeartHandshake className="w-5 h-5 text-emerald-400" />
                <span>Community Impact & Youth Literacy</span>
              </div>
              <Badge variant="emerald" size="sm">STEM Equity</Badge>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">500+ CBC STEM Students Mentored</h5>
                <p className="text-slate-300 leading-relaxed">
                  Instructed over 500 secondary school students in foundational programming logic, spreadsheet automation, and hardware literacy across Kenyan schools.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">Open-Source Educational Tooling</h5>
                <p className="text-slate-300 leading-relaxed">
                  Developed free, web-based CBC lesson plan generators and interactive mathematical sandboxes available to teachers and students without licensing fees.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-white text-sm">Academic Research Citation Mentorship</h5>
                <p className="text-slate-300 leading-relaxed">
                  Guided university scholars and postgraduate students in APA, IEEE, Harvard, and Chicago citation standards and statistical interpretation.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* 6. MAJOR ACHIEVEMENTS & PROFESSIONAL STATISTICS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Verifiable Career Statistics</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">Live Portfolio Metrics</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CAREER_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1.5 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-3xl font-extrabold text-white font-sans tracking-tight">
                  {milestone.value}
                </div>
                <div className="text-xs font-bold text-amber-400">
                  {milestone.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CERTIFICATIONS PREVIEW & CTAs */}
        <Card variant="glass" className="p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Government & Educational Licenses</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                TSC Registered Educator & KEMI Certified Administrator
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Officially licensed by the Teacher Service Commission (TSC) for secondary Mathematics and Computer Studies, and certified by KEMI (Ministry of Education, June 2026) for KEMIS institutional administration.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenCertModal}
                  icon={<Award className="w-4 h-4" />}
                >
                  Verify Official Certifications
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onOpenResume}
                  icon={<Download className="w-4 h-4 text-amber-400" />}
                >
                  Download Full CV (PDF)
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => scrollToSection('contact')}
                  icon={<Send className="w-4 h-4 text-amber-400" />}
                >
                  Initiate Project Collaboration
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Quick verification Links
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span>TSC License Status:</span>
                    <Badge variant="emerald" size="sm">Active #Registered</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span>KEMIS Certification:</span>
                    <Badge variant="amber" size="sm">June 2026 Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span>Moi University Degree:</span>
                    <Badge variant="slate" size="sm">B.A. Education</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};
