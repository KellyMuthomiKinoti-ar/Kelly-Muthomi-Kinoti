import React, { useState } from 'react';
import { 
  Code, ExternalLink, Check, Globe, Sparkles, Filter, Search, 
  ShoppingBag, Compass, GraduationCap, ArrowUpRight, X, Info, Github,
  Layers, Cpu, BarChart3, Monitor, Shield, Database, Server, Zap, CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'architecture' | 'challenges' | 'preview'>('overview');

  const categories: { id: ProjectCategory; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length, icon: Code },
    { id: 'e-commerce', label: 'E-Commerce', count: PROJECTS.filter(p => p.category === 'e-commerce').length, icon: ShoppingBag },
    { id: 'web-app', label: 'Web Apps & Portals', count: PROJECTS.filter(p => p.category === 'web-app').length, icon: Compass },
    { id: 'edtech', label: 'EdTech & School Systems', count: PROJECTS.filter(p => p.category === 'edtech').length, icon: GraduationCap },
  ];

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.techStack.some(t => t.toLowerCase().includes(query)) ||
      p.features.some(f => f.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Code className="w-4 h-4" />
              <span>Live Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Featured Web Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-light">
              Production web applications engineered and deployed live for e-commerce enterprises, tourism engines, and educational institutions.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech stack or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                id="projects-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80'
                }`}
                id={`project-filter-${cat.id}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  isSelected ? 'bg-slate-950/30 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg group backdrop-blur-md"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 whitespace-nowrap">
                    {project.badge}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    title="Open Live Website"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-amber-400/90 mb-4 font-semibold">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Key Features & Architecture:
                  </span>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-1.5 font-mono text-xs"
                      title="View Source Code on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setActiveModalProject(project);
                      setActiveModalTab('overview');
                    }}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 transition-all flex items-center gap-1.5 font-mono text-xs font-semibold"
                    title="View Technical Case Study, Architecture & Metrics"
                  >
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects match the search criteria "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-950/40 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal - Deep-Dive Case Study */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1 pr-12">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  {activeModalProject.badge || 'Technical Case Study'}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  • {activeModalProject.category.toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-300 font-mono">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveModalTab('overview')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'overview'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Overview & Metrics</span>
              </button>
              <button
                onClick={() => setActiveModalTab('architecture')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'architecture'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </button>
              <button
                onClick={() => setActiveModalTab('challenges')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'challenges'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Engineering Challenges</span>
              </button>
              <button
                onClick={() => setActiveModalTab('preview')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeModalTab === 'preview'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Live Sandbox Preview</span>
              </button>
            </div>

            {/* TAB 1: OVERVIEW & METRICS */}
            {activeModalTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in-50 duration-200">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>

                {/* Key Metrics Grid */}
                {activeModalProject.keyMetrics && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Production Performance & Impact Metrics</span>
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

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Engineering & Functional Deliverables:
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

                {/* Technologies Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Stack Used:
                  </h4>
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
                </div>
              </div>
            )}

            {/* TAB 2: SYSTEM ARCHITECTURE */}
            {activeModalTab === 'architecture' && (
              <div className="space-y-6 animate-in fade-in-50 duration-200">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                  <strong className="text-amber-300 uppercase font-mono">Architectural Overview:</strong> This application utilizes a clean separation of concerns with optimized client delivery, scalable data persistence, and automated CI/CD deployment pipelines.
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
                        <span>Backend & Application Logic</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.backend}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold">
                        <Database className="w-4 h-4" />
                        <span>Database & Schema Layer</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeModalProject.architecture.database}
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase font-bold">
                        <Cpu className="w-4 h-4" />
                        <span>DevOps, CDN & Security</span>
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

            {/* TAB 3: ENGINEERING CHALLENGES */}
            {activeModalTab === 'challenges' && (
              <div className="space-y-4 animate-in fade-in-50 duration-200">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  Below are key technical roadblocks encountered during development and how they were solved to achieve enterprise reliability and high conversion.
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

            {/* TAB 4: LIVE SANDBOX PREVIEW */}
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
                    title={`${activeModalProject.title} Preview`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 pointer-events-none">
                    Interactive Live Preview
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Live Production Host: <a href={activeModalProject.link} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">{activeModalProject.displayUrl}</a>
              </span>
              <div className="flex items-center gap-2">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center gap-2 text-xs font-mono font-bold transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
