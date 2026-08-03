import React, { useState, useMemo } from 'react';
import { 
  Code, ExternalLink, Check, Globe, Search, 
  ShoppingBag, Compass, GraduationCap, ArrowUpRight, X, Github,
  Layers, Cpu, BarChart3, Monitor, Shield, Database, Server, Zap, CheckCircle2,
  ArrowUpDown, BookOpen, Lightbulb, Terminal, ArrowRight, SlidersHorizontal
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { SectionHeading, Card, Button, Badge } from './ui';

interface CaseStudyDetails {
  problemExisted: string;
  whyImportant: string;
  solutionEngineered: string;
  lessonsLearned: string[];
  techRationale: { tech: string; reason: string }[];
}

const CASE_STUDIES: Record<string, CaseStudyDetails> = {
  'styledkid': {
    problemExisted: 'Complex inventory synchronization during high-concurrency checkout bursts and slow mobile page loads on African 3G/4G cellular networks.',
    whyImportant: 'Over 82% of regional e-commerce traffic originates from mobile devices; overselling inventory breaks customer trust, increases refund overhead, and damages brand reputation.',
    solutionEngineered: 'Engineered a custom object-oriented PHP inventory backend with MySQL row-level locking, automated M-Pesa payment webhook confirmation, and WebP asset optimization.',
    lessonsLearned: [
      'Database transaction isolation levels are critical for preventing race conditions in e-commerce checkout flows.',
      'Aggressive image optimization and asset minification directly correlate with lower mobile cart abandonment.',
      'Decoupling inventory checkouts from UI rendering prevents server contention during flash sales.'
    ],
    techRationale: [
      { tech: 'PHP 8+', reason: 'Custom object-oriented e-commerce logic and WordPress core integration' },
      { tech: 'MySQL', reason: 'Normalized relational schema with SKU indexing and ACID transactional guarantees' },
      { tech: 'JavaScript (ES6+)', reason: 'Asynchronous AJAX cart updates without full page reloads' },
      { tech: 'WordPress', reason: 'Robust admin CMS interface for client product catalog management' }
    ]
  },
  'wildlens': {
    problemExisted: 'Static tourism catalogs could not handle dynamic multi-day safari pricing across seasonal lodge tariffs, and open inquiry forms suffered from excessive automated spam.',
    whyImportant: 'International tourists require immediate, transparent pricing estimates before committing to high-ticket travel packages; spam inquiries overwhelm reservation agents.',
    solutionEngineered: 'Architected a dynamic JSON-backed pricing calculator in PHP and implemented server-side rate limiting with zero-friction honeypots, reducing spam by 98%.',
    lessonsLearned: [
      'Stateless JSON calculation matrices in PHP outperform database lookups for complex combinatorial pricing tiers.',
      'Silent honeypots and server-side rate limiting protect conversion funnels without degrading user experience with captchas.',
      'Schema markup automation dramatically improves organic search ranking for competitive travel keywords.'
    ],
    techRationale: [
      { tech: 'Custom PHP', reason: 'High-speed routing layer and dynamic pricing matrix engine' },
      { tech: 'JavaScript', reason: 'Interactive itinerary filter and live package cost estimation widget' },
      { tech: 'WordPress', reason: 'SEO-optimized editorial blog and safari tour destination management' },
      { tech: 'Cloudflare CDN', reason: 'Global edge caching and DDoS/spam firewall protection' }
    ]
  },
  'menwe-school': {
    problemExisted: 'Parents in rural low-bandwidth areas lacked reliable digital access to school schedules, while Ministry of Education KEMIS administrative records needed secure separation from public notices.',
    whyImportant: 'Equitable parent-teacher communication in CBC education requires lightweight web pages that load instantly on entry-level mobile devices.',
    solutionEngineered: 'Built a Next.js App Router portal with React Server Components, static site generation (SSG), and edge caching on Vercel, achieving a 100/100 Lighthouse score and 0.4s load time.',
    lessonsLearned: [
      'React Server Components and Static Site Generation are essential for serving institutional portals in bandwidth-constrained regions.',
      'Separating public academic calendars from administrative KEMIS databases simplifies governance and enhances security.',
      'Accessible keyboard navigation and clear contrast improve usability for parents across all digital literacy levels.'
    ],
    techRationale: [
      { tech: 'Next.js / React', reason: 'Hybrid Static Site Generation (SSG) and fast edge routing' },
      { tech: 'Tailwind CSS', reason: 'Low-footprint CSS utility bundle with responsive mobile-first tokens' },
      { tech: 'Vercel Edge', reason: 'Global edge network delivery with zero-configuration SSL and CI/CD' },
      { tech: 'Web Architecture', reason: 'Accessible WCAG AA compliant navigation hierarchy' }
    ]
  },
  'portfolio-system': {
    problemExisted: 'Conventional developer portfolios lack verifiable empirical research models, pedagogical proof, and dynamic print-ready professional CV generation.',
    whyImportant: 'Technical evaluators and academic recruiters require immediate, verifiable evidence across full-stack engineering, classroom instruction, and statistical analysis.',
    solutionEngineered: 'Architected a single-page React 18 & TypeScript application with instant command-palette navigation (Cmd+K), custom print stylesheets, and modular data type safety.',
    lessonsLearned: [
      'Strict TypeScript interfaces across multi-domain data models eliminate runtime errors and simplify interactive filtering.',
      'Custom print stylesheets allow a single React codebase to serve as both an interactive web app and a clean PDF CV.',
      'Command palette shortcuts (Cmd+K) significantly improve navigation velocity for technical recruiters.'
    ],
    techRationale: [
      { tech: 'React 18', reason: 'Modular functional components and responsive state management' },
      { tech: 'TypeScript', reason: '100% type safety across project metadata, certifications, and SPSS analytics models' },
      { tech: 'Tailwind CSS', reason: 'Systematic utility styling with custom dark-mode design tokens' },
      { tech: 'Vite', reason: 'Ultra-fast HMR build pipeline and optimized production bundling' }
    ]
  }
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all-tech');
  const [sortBy, setSortBy] = useState<'featured' | 'title' | 'category' | 'performance'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'architecture' | 'tech-rationale' | 'challenges' | 'preview'>('overview');

  const categories: { id: ProjectCategory; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length, icon: Code },
    { id: 'e-commerce', label: 'E-Commerce', count: PROJECTS.filter(p => p.category === 'e-commerce').length, icon: ShoppingBag },
    { id: 'web-app', label: 'Web Apps & Portals', count: PROJECTS.filter(p => p.category === 'web-app').length, icon: Compass },
    { id: 'edtech', label: 'EdTech & School Systems', count: PROJECTS.filter(p => p.category === 'edtech').length, icon: GraduationCap },
  ];

  const techFilters = [
    { id: 'all-tech', label: 'All Technologies' },
    { id: 'React', label: 'React / Next.js' },
    { id: 'PHP', label: 'PHP & MySQL' },
    { id: 'WordPress', label: 'WordPress' },
    { id: 'TypeScript', label: 'TypeScript' }
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesTech = selectedTech === 'all-tech' || p.techStack.some(t => t.toLowerCase().includes(selectedTech.toLowerCase()));
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.techStack.some(t => t.toLowerCase().includes(query)) ||
        p.features.some(f => f.toLowerCase().includes(query)) ||
        p.description.toLowerCase().includes(query);

      return matchesCategory && matchesTech && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      if (sortBy === 'performance') {
        const getSpeedVal = (proj: Project) => {
          const lcp = proj.keyMetrics?.find(m => m.label.toLowerCase().includes('lcp') || m.label.toLowerCase().includes('load') || m.label.toLowerCase().includes('pageload'));
          if (!lcp) return 99;
          return parseFloat(lcp.value.replace(/[^0-9.]/g, '')) || 99;
        };
        return getSpeedVal(a) - getSpeedVal(b);
      }
      return 0; // default featured order
    });
  }, [selectedCategory, selectedTech, sortBy, searchQuery]);

  const handleOpenCaseStudy = (project: Project) => {
    setActiveModalProject(project);
    setActiveModalTab('overview');
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'e-commerce': return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      case 'edtech': return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'web-app': return <Compass className="w-4 h-4 text-cyan-400" />;
      default: return <Code className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Production Engineering Case Studies"
          title="Featured Web Applications & Portals"
          subtitle="Full-stack web applications engineered and deployed live for e-commerce enterprises, tourism engines, and educational institutions with verified performance SLAs."
          align="left"
        />

        {/* Project Engineering Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">4 Production</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Live Deployments</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">99.9%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Production SLA Uptime</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">&lt;0.9s</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Average Mobile LCP</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">100%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Type &amp; Schema Safety</div>
          </div>
        </div>

        {/* Search, Filter & Sort Bar */}
        <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects by tech stack, feature, or architecture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects by tech stack, feature, or architecture"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-xs font-mono text-slate-400 shrink-0">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort projects"
                className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-mono rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Featured Order</option>
                <option value="performance">Fastest Speed (LCP)</option>
                <option value="title">Project Name (A-Z)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Category & Tech Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Project categories">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      isSelected ? 'bg-slate-950/30 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tech Stack Filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-slate-400 mr-1 hidden md:inline">Tech:</span>
              {techFilters.map((tf) => {
                const isSelected = selectedTech === tf.id;
                return (
                  <button
                    key={tf.id}
                    onClick={() => setSelectedTech(tf.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                      isSelected
                        ? 'bg-slate-200 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tf.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const caseStudy = CASE_STUDIES[project.id];
            return (
              <Card
                key={project.id}
                variant="interactive"
                className="p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Status & Live URL Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <Badge variant="amber">{project.badge}</Badge>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        <span>{project.category.replace('-', ' ')}</span>
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-mono text-amber-400/90 hover:text-amber-300 transition-colors group-hover:underline"
                      title={`Open ${project.displayUrl}`}
                    >
                      <span>{project.displayUrl}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Project Header Banner & Visual Graphic */}
                  <div className="w-full h-36 sm:h-44 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 mb-6 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/40 transition-colors">
                    <div className="flex items-start justify-between relative z-10">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-amber-400 shadow-md">
                        {getCategoryIcon(project.category)}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>VERIFIED PROD SLA</span>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Architecture Stack</div>
                      <div className="text-sm font-bold text-white font-mono truncate">
                        {project.techStack.slice(0, 4).join(' • ')}
                      </div>
                    </div>
                    {/* Subtle decorative background lines */}
                    <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 mb-4 font-semibold">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Problem Solved Highlight Box */}
                  {project.challengesSolved && project.challengesSolved.length > 0 && (
                    <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl mb-6 space-y-1.5">
                      <div className="font-semibold text-amber-400 text-xs flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 shrink-0" />
                        <span>Problem Solved: {project.challengesSolved[0].title}</span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {project.challengesSolved[0].solution}
                      </p>
                    </div>
                  )}

                  {/* Key Production Metrics Grid */}
                  {project.keyMetrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                      {project.keyMetrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-slate-950/90 p-2.5 rounded-xl border border-slate-800 text-center">
                          <div className="text-base font-bold text-amber-400 font-mono">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="slate" className="text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleOpenCaseStudy(project)}
                    className="flex-1 min-w-[150px] justify-center"
                    aria-label={`View Case Study for ${project.title}`}
                  >
                    <Layers className="w-3.5 h-3.5 mr-1.5" />
                    <span>Case Study &amp; Specs</span>
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      as="a"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open Live Demo for ${project.title}`}
                    >
                      <Globe className="w-3.5 h-3.5 mr-1 text-amber-400" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>

                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Source Code on GitHub"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects match your search criteria "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech('all-tech');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-950/40 font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bottom Call-to-Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase font-bold mb-1">
              <Terminal className="w-4 h-4" />
              <span>Custom Full-Stack Engineering</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need a Scalable E-Commerce, Tourism Engine, or School Portal?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              From PHP/MySQL transactional systems to Next.js App Router educational portals, let&apos;s engineer a high-speed production solution tailored to your operational SLA.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Request Engineering Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive Case-Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Case Study modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 pr-12">
              <div className="flex items-center gap-2">
                <Badge variant="amber">{activeModalProject.badge || 'Technical Case Study'}</Badge>
                <span className="text-xs text-slate-400 font-mono uppercase">
                  • {activeModalProject.category.replace('-', ' ')}
                </span>
              </div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-300 font-mono font-semibold">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Case Study Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3" role="tablist">
              <button
                onClick={() => setActiveModalTab('overview')}
                role="tab"
                aria-selected={activeModalTab === 'overview'}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'overview'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Executive Case Study</span>
              </button>
              <button
                onClick={() => setActiveModalTab('architecture')}
                role="tab"
                aria-selected={activeModalTab === 'architecture'}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'architecture'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </button>
              <button
                onClick={() => setActiveModalTab('tech-rationale')}
                role="tab"
                aria-selected={activeModalTab === 'tech-rationale'}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'tech-rationale'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Tech Selection Rationale</span>
              </button>
              <button
                onClick={() => setActiveModalTab('challenges')}
                role="tab"
                aria-selected={activeModalTab === 'challenges'}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'challenges'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Challenges &amp; Solutions</span>
              </button>
              <button
                onClick={() => setActiveModalTab('preview')}
                role="tab"
                aria-selected={activeModalTab === 'preview'}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'preview'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Live Sandbox Preview</span>
              </button>
            </div>

            {/* TAB 1: EXECUTIVE CASE STUDY */}
            {activeModalTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in-50 duration-200">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>

                {/* What Problem Existed & Why Important */}
                {CASE_STUDIES[activeModalProject.id] && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold">
                        <Lightbulb className="w-4 h-4" />
                        <span>What Problem Existed?</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {CASE_STUDIES[activeModalProject.id].problemExisted}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Why Was It Important?</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {CASE_STUDIES[activeModalProject.id].whyImportant}
                      </p>
                    </div>
                  </div>
                )}

                {/* Key Metrics Grid */}
                {activeModalProject.keyMetrics && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Measurable Production Outcomes &amp; SLA Performance</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeModalProject.keyMetrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                          <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 uppercase font-mono">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features & Functional Deliverables */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Engineering Deliverables &amp; Features:
                  </h4>
                  <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {activeModalProject.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                {CASE_STUDIES[activeModalProject.id] && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Lessons Learned &amp; Engineering Takeaways:
                    </h4>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
                      {CASE_STUDIES[activeModalProject.id].lessonsLearned.map((lesson, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: SYSTEM ARCHITECTURE */}
            {activeModalTab === 'architecture' && (
              <div className="space-y-6 animate-in fade-in-50 duration-200">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                  <strong className="text-amber-300 uppercase font-mono">Architectural Overview:</strong> Clean separation of concerns with responsive client delivery, normalized relational databases, and automated deployment pipelines.
                </div>

                {activeModalProject.architecture ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold">
                        <Monitor className="w-4 h-4" />
                        <span>Frontend Client Tier</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.frontend}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold">
                        <Server className="w-4 h-4" />
                        <span>Backend &amp; Application Logic</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.backend}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold">
                        <Database className="w-4 h-4" />
                        <span>Database &amp; Schema Layer</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.database}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase font-bold">
                        <Cpu className="w-4 h-4" />
                        <span>DevOps, CDN &amp; Security</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.devops}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">Detailed architecture diagram is being updated for this deployment.</p>
                )}
              </div>
            )}

            {/* TAB 3: TECH RATIONALE */}
            {activeModalTab === 'tech-rationale' && (
              <div className="space-y-6 animate-in fade-in-50 duration-200">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  Every technology and tool in this production stack was selected to maximize speed, scalability, and long-term maintainability.
                </div>

                {CASE_STUDIES[activeModalProject.id]?.techRationale ? (
                  <div className="space-y-3">
                    {CASE_STUDIES[activeModalProject.id].techRationale.map((item, tIdx) => (
                      <div key={tIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            {item.tech}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 sm:text-right flex-1 leading-relaxed">
                          {item.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-amber-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: CHALLENGES & SOLUTIONS */}
            {activeModalTab === 'challenges' && (
              <div className="space-y-4 animate-in fade-in-50 duration-200">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  Below are key technical roadblocks encountered during development and how they were engineered to achieve enterprise SLA reliability.
                </div>

                {activeModalProject.challengesSolved && activeModalProject.challengesSolved.length > 0 ? (
                  <div className="space-y-3">
                    {activeModalProject.challengesSolved.map((challenge, cIdx) => (
                      <div key={cIdx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold">
                          <Shield className="w-4 h-4 shrink-0" />
                          <span>{challenge.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pl-6">
                          {challenge.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">Engineering challenges documentation is available in the technical whitepaper.</p>
                )}
              </div>
            )}

            {/* TAB 5: LIVE SANDBOX PREVIEW */}
            {activeModalTab === 'preview' && (
              <div className="space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-mono text-amber-400">{activeModalProject.displayUrl}</span>
                  </div>
                  <a
                    href={activeModalProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in Full Browser Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="w-full h-[400px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                  <iframe
                    src={activeModalProject.link}
                    title={`${activeModalProject.title} Live Preview`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 pointer-events-none">
                    Interactive Live Preview Sandbox
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Live Host: <a href={activeModalProject.link} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">{activeModalProject.displayUrl}</a>
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setActiveModalProject(null);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Inquire for Similar Project</span>
                </Button>
                {activeModalProject.githubUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    as="a"
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    <span>Repo</span>
                  </Button>
                )}
                <Button
                  variant="primary"
                  size="sm"
                  as="a"
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
