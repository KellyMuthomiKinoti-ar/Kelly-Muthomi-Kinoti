import React, { useState } from 'react';
import { 
  Code, Cpu, BarChart3, GraduationCap, Award, ShieldCheck, Download, 
  Send, Terminal, Database, BookOpen, Users, CheckCircle2, Sparkles, 
  Target, Compass, Layers, Briefcase, Calendar, Check, Zap, Globe, 
  HeartHandshake, ArrowUpRight, CheckSquare, LineChart, Server,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_MILESTONES } from '../data/portfolioData';
import { SectionHeading, Card, Badge, Button } from './ui';

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
    title: 'Production E-Commerce & Tour Booking Systems Architecture',
    role: 'Lead Software Engineer (StyledKid & WildLens Adventure Tours)',
    description: 'Architecting and scaling full-stack e-commerce platforms and booking engines. Implemented custom PHP 8+/MySQL transactional row-level concurrency locking, automated WebP image pipelines, and React 18 UI architecture achieving sub-second LCP and 99.9% uptime SLA.',
    technologies: ['React 18', 'TypeScript', 'PHP 8+', 'MySQL Transactional SQL', 'WordPress API', 'Tailwind CSS'],
    metric: '99.9% Uptime & 82% Mobile Checkout Conversion'
  },
  {
    year: '2023 – Present',
    category: 'edtech',
    title: 'Institutional EdTech Portal & KEMIS Administration Engine',
    role: 'EdTech Systems Architect (Menwe Junior School)',
    description: 'Designed and deployed institutional secondary education portals and Competency-Based Curriculum (CBC) STEM lesson planning tools. Certified by Ministry of Education / KEMI in digital KEMIS learner transfers and institutional reporting analytics.',
    technologies: ['Next.js', 'KEMIS Institutional DB', 'CBC Pedagogy Framework', 'Interactive Sandboxes', 'Role-Based Access Control'],
    metric: '500+ Students Digitally Administered & Zero Records Loss'
  },
  {
    year: '2020 – 2023',
    category: 'research',
    title: 'Empirical Statistical Research & Academic Data Modeling',
    role: 'Quantitative Research Analyst & Statistical Consultant',
    description: 'Conducted rigorous empirical data modeling across 100+ multidisciplinary research studies using SPSS, STATA, SAS, and Advanced VBA. Delivered multivariate regression, ANOVA modeling, and APA/IEEE/Harvard citation compliance.',
    technologies: ['IBM SPSS Statistics', 'STATA', 'SAS', 'Excel VBA Modeling', 'APA / IEEE Compliance', 'Multivariate Regression'],
    metric: '100+ Research Projects & Empirical Studies Verified'
  },
  {
    year: '2018 – 2022',
    category: 'leadership',
    title: 'TSC Licensed STEM Educator & Secondary Curriculum Lead',
    role: 'Mathematics & Computer Studies Teacher (TSC #Registered)',
    description: 'Registered secondary school educator (TSC) instructing KCSE Mathematics and Computer Studies. Led student ICT clubs, managed institutional assessment databases, and championed digital literacy in junior secondary classrooms.',
    technologies: ['TSC Educator License', 'KCSE STEM Pedagogy', 'Computer Logic & Algorithms', 'Assessment Analytics'],
    metric: 'Top-Tier STEM Pass Rates & 500+ Youth Mentored'
  }
];

interface PillarDetail {
  id: 'software' | 'edtech' | 'research' | 'teaching';
  label: string;
  title: string;
  icon: React.ReactNode;
  badgeText: string;
  badgeVariant: 'amber' | 'emerald' | 'cyan' | 'slate';
  description: string;
  outcomes: string[];
  techStack: string[];
}

const PILLARS_DATA: PillarDetail[] = [
  {
    id: 'software',
    label: '01. Full-Stack Engineering',
    title: 'High-Performance Web Architecture & Relational Database Engineering',
    icon: <Code className="w-5 h-5 text-amber-400" />,
    badgeText: 'Primary Expertise',
    badgeVariant: 'amber',
    description: 'Architecting scalable, production-grade applications that prioritize speed, security, and data integrity. By combining React 18 server/client boundaries with normalized MySQL relational databases and PHP backend APIs, I eliminate N+1 query bottlenecks and achieve sub-second page loads.',
    outcomes: [
      'Engineered real-time database concurrency locking preventing overbooking across e-commerce and tour platforms.',
      'Achieved consistently <1.0s Largest Contentful Paint (LCP) across mobile and desktop devices.',
      'Maintained 99.9% uptime across production e-commerce and booking engines.'
    ],
    techStack: ['React 18', 'TypeScript', 'Next.js', 'PHP 8+', 'MySQL 8', 'Tailwind CSS', 'REST / GraphQL']
  },
  {
    id: 'edtech',
    label: '02. EdTech Architecture',
    title: 'Institutional School Portals & KEMIS Education Management',
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    badgeText: 'System Design',
    badgeVariant: 'emerald',
    description: 'Bridging software architecture and educational administration. Designed and deployed the Menwe Junior School digital portal—streamlining student enrollment, CBC learner assessments, and Ministry of Education KEMIS compliance without administrative friction.',
    outcomes: [
      'Digitized enrollment and academic tracking for 500+ junior secondary school learners.',
      'Certified by Kenya Education Management Institute (KEMI, June 2026) for KEMIS institutional administration.',
      'Created open-source CBC lesson plan generators used by educators without licensing fees.'
    ],
    techStack: ['Next.js Portals', 'KEMIS Compliance', 'Role-Based Access Control', 'CBC Analytics', 'Interactive Sandboxes']
  },
  {
    id: 'research',
    label: '03. Empirical Research',
    title: 'Quantitative Statistical Modeling & Evidence-Based Validation',
    icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
    badgeText: 'Data Rigor',
    badgeVariant: 'cyan',
    description: 'Software and educational systems must be validated by evidence, not guesswork. Utilizing IBM SPSS, STATA, and SAS, I run multivariate regression models, test hypotheses, and ensure data pipelines and user outcomes are mathematically sound.',
    outcomes: [
      'Executed quantitative and qualitative data modeling across 100+ research studies and consultancy projects.',
      'Validated institutional learning gains and user conversion metrics using ANOVA and multivariate regression.',
      'Mentored scholars and engineers in APA, IEEE, Harvard, and Chicago citation compliance.'
    ],
    techStack: ['IBM SPSS Statistics', 'STATA', 'SAS', 'Multivariate Regression', 'Excel VBA', 'APA / IEEE Standards']
  },
  {
    id: 'teaching',
    label: '04. Teaching & Pedagogy',
    title: 'TSC Licensed STEM Educator & Instructional UX Clarity',
    icon: <GraduationCap className="w-5 h-5 text-slate-300" />,
    badgeText: 'Pedagogical UX',
    badgeVariant: 'slate',
    description: 'A licensed educator brings an unmatched advantage to software engineering: the ability to design intuitive, human-centered experiences. My background teaching KCSE Mathematics and Computer Studies ensures every tool is accessible, structured, and easy to master.',
    outcomes: [
      'Licensed by Teacher Service Commission (TSC) for secondary Mathematics & Computer Studies instruction.',
      'Mentored 500+ STEM students in foundational programming logic, algorithms, and digital literacy.',
      'Applies inquiry-based CBC pedagogy to simplify complex software workflows for non-technical users.'
    ],
    techStack: ['TSC Educator License', 'KCSE Mathematics', 'Computer Logic', 'Instructional UX Design', 'CBC STEM']
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResume,
  onOpenCertModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'software' | 'edtech' | 'research' | 'leadership'>('all');
  const [activePillar, setActivePillar] = useState<'software' | 'edtech' | 'research' | 'teaching'>('software');
  const [showMoreBio, setShowMoreBio] = useState(false);
  const [showMoreTimeline, setShowMoreTimeline] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredTimeline = selectedCategory === 'all' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.category === selectedCategory);

  const displayedTimeline = showMoreTimeline ? filteredTimeline : filteredTimeline.slice(0, 4);

  const currentPillar = PILLARS_DATA.find(p => p.id === activePillar) || PILLARS_DATA[0];

  return (
    <section 
      id="about" 
      aria-label="About Kelly Muthomi Kinoti — Unified Professional Narrative & Career Timeline"
      className="py-24 bg-slate-950 relative border-y border-slate-800/80 overflow-hidden"
    >
      {/* Anchor for backward compatibility with #summary bookmarks */}
      <div id="summary" className="-mt-24 pt-24" aria-hidden="true" />

      {/* Ambient background lighting accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="Unified Professional Narrative"
          title="Engineering High-Performance Web Systems Grounded in EdTech Pedagogy & Statistical Rigor"
          subtitle="How Full-Stack Software Engineering, EdTech Systems Architecture, Empirical Research, and STEM Teaching converge to deliver resilient, outcome-oriented digital platforms."
          align="left"
        />

        {/* 1. EXECUTIVE SYNTHESIS & IDENTITY INTEGRATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Outcome-Oriented Full-Stack Engineer & EdTech Architect</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Building Software Where Architectural Precision Meets Educational Equity and Verifiable Data
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              My professional identity is built on a simple premise: <strong className="text-white">great software requires clean code, intuitive human pedagogy, and empirical verification</strong>. As a Full-Stack Software Engineer with over six years of experience, I architect production-grade web applications using React 18, TypeScript, Next.js, and custom PHP/MySQL schemas that deliver sub-second performance and 99.9% uptime.
            </p>

            {/* Read More / Show Less Toggle Button */}
            <div>
              <button
                type="button"
                onClick={() => setShowMoreBio(!showMoreBio)}
                className="inline-flex items-center flex-wrap text-left max-w-full gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition-colors"
              >
                <span>{showMoreBio ? 'Show Less (Summary Mode)' : 'Read More: Unified Engineering Methodology & Synergy'}</span>
                {showMoreBio ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0" />}
              </button>
            </div>

            {showMoreBio && (
              <div className="space-y-4 pt-2 animate-fadeIn">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Rather than treating Software Engineering, EdTech, Research, and Teaching as separate domains, I integrate them into a singular engineering methodology:
                </p>

                {/* Core Synergy Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Full-Stack Core</h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                        React 18, TypeScript, custom PHP 8+/MySQL with ACID concurrency locking.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">EdTech & KEMIS</h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                        Menwe Junior School Portal & KEMI-certified education management pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Empirical Rigor</h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                        100+ SPSS/STATA research studies ensuring data integrity and evidence-based UX.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Section Navigation Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                Explore Portfolio Areas:
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('featured-projects')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>Projects (#projects)</span>
              </button>
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

          {/* Right Column: Verifiable Competency Card */}
          <div className="lg:col-span-4">
            <Card variant="glass" className="space-y-6 border-amber-500/30">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                    Verified Credentials
                  </span>
                  <h4 className="text-white font-bold text-lg mt-0.5">Moi University Alumnus</h4>
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
                    <strong className="text-white">KEMI Certified (June 2026):</strong> Verified in KEMIS learner module administration and education management systems.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Production SLA Record:</strong> 99.9% uptime achieved across live e-commerce and tour reservation platforms.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={onOpenResume}
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Official CV (PDF)
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={onOpenCertModal}
                  icon={<Award className="w-4 h-4 text-amber-400" />}
                >
                  Verify TSC & KEMI Credentials
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* 2. THE 4 INTERLOCKING PILLARS: INTERACTIVE DOMAIN EXPLORER */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h4 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-amber-400" />
                <span>The Four Interlocking Pillars of My Practice</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Select a discipline to examine how engineering, pedagogy, and empirical research reinforce each other.
              </p>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs" role="tablist" aria-label="Professional Pillar Explorer">
              {PILLARS_DATA.map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillar(p.id)}
                  role="tab"
                  aria-selected={activePillar === p.id}
                  className={`px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                    activePillar === p.id
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600'
                  }`}
                >
                  {p.icon}
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Pillar Showcase Card */}
          <Card variant="interactive" className="p-6 sm:p-8 border-slate-700/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                      {currentPillar.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                        {currentPillar.label}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                        {currentPillar.title}
                      </h4>
                    </div>
                  </div>
                  <Badge variant={currentPillar.badgeVariant} size="sm">
                    {currentPillar.badgeText}
                  </Badge>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Outcome Callouts */}
                <div className="space-y-2.5 pt-2">
                  <h5 className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                    Verified Outcomes & Impact:
                  </h5>
                  <ul className="space-y-2">
                    {currentPillar.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckSquare className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Tech & Competencies Box */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-slate-300 uppercase font-bold tracking-wider">
                    Core Technologies & Competencies
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    {currentPillar.techStack.length} Tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentPillar.techStack.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950/80 text-xs font-mono text-slate-200 border border-slate-700/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Want to see this in production?</span>
                  <button
                    type="button"
                    onClick={() => scrollToSection('featured-projects')}
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>View Case Studies</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 3. VERIFIABLE CAREER STATISTICS & OUTCOMES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Verifiable Career Outcomes & Impact Metrics</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">Live Portfolio Benchmarks</span>
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

        {/* 4. MISSION, VISION & CORE ENGINEERING ETHICS */}
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
                To engineer high-performance, resilient software applications and institutional EdTech portals that solve real educational and enterprise challenges—combining clean full-stack code with pedagogical clarity and empirical rigor.
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
                To lead cross-border digital transformation as a Principal Full-Stack Engineer and EdTech Systems Architect—standardizing data-driven school management systems (KEMIS) and empowering the next generation of African STEM engineers.
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
                  Zero compromise on normalized database schemas, strict TypeScript typing, sub-second LCP, and WCAG 2.2 AA accessibility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-emerald-500/30 transition-colors">
                <Badge variant="emerald" size="sm">Value 02</Badge>
                <h5 className="font-bold text-white text-base">Educational Equity</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Software must lower the barrier to learning. Pedagogical structure ensures systems are intuitive for teachers, students, and clients alike.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-cyan-500/30 transition-colors">
                <Badge variant="cyan" size="sm">Value 03</Badge>
                <h5 className="font-bold text-white text-base">Empirical Verification</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Decisions are driven by verifiable data. Using SPSS, STATA, and SAS statistical modeling to validate performance and learning gains.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-amber-500/30 transition-colors">
                <Badge variant="slate" size="sm">Value 04</Badge>
                <h5 className="font-bold text-white text-base">Institutional Integrity</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Adhering strictly to Ministry of Education KEMIS compliance, data privacy, and ethical software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. INTERACTIVE PROFESSIONAL JOURNEY TIMELINE */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h4 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Calendar className="w-6 h-6 text-amber-400" />
                <span>Career Milestones & Outcome Timeline</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Filter career milestones by domain to see how engineering, pedagogy, and research intersect in practice.
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
            {displayedTimeline.map((item, idx) => (
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

          {filteredTimeline.length > 4 && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setShowMoreTimeline(!showMoreTimeline)}
                className="inline-flex items-center justify-center flex-wrap max-w-full gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <span>
                  {showMoreTimeline
                    ? 'Show Fewer Milestones'
                    : `Show All ${filteredTimeline.length} Career Milestones`}
                </span>
                {showMoreTimeline ? <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />}
              </button>
            </div>
          )}
        </div>

        {/* 6. INSTITUTIONAL LEADERSHIP & COMMUNITY IMPACT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leadership Highlights */}
          <Card variant="base" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Users className="w-5 h-5 text-amber-400" />
                <span>Institutional Leadership</span>
              </div>
              <Badge variant="amber" size="sm">System Architecture</Badge>
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
                <span>Community Impact & STEM Equity</span>
              </div>
              <Badge variant="emerald" size="sm">Youth Mentorship</Badge>
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

        {/* 7. LICENSING VERIFICATION & COLLABORATION CTA CARD */}
        <Card variant="glass" className="p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-orange-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Government & Educational Credentials</span>
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
                  Credential Verification
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
