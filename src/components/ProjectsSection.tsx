import React, { useState } from 'react';
import { 
  Code, ExternalLink, Check, Globe, Sparkles, Filter, Search, 
  ShoppingBag, Compass, GraduationCap, ArrowUpRight, X, Info, Github
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

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
              className="bg-slate-900/70 hover:bg-slate-900 border border-slate-700/60 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-md"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {project.badge}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                    title="Open Live Website"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-amber-400/90 mb-4 font-semibold">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Key Features Architecture:
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
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-800 text-slate-200 border border-slate-700"
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
                      className="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all flex items-center gap-1.5 font-mono text-xs"
                      title="View Source Code on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 shrink-0"
                    title="View Full Architecture Details"
                  >
                    <Info className="w-4 h-4" />
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

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Full Technical Architecture Breakdown
              </span>
              <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
              <p className="text-xs text-amber-300 font-mono">{activeModalProject.subtitle}</p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeModalProject.description}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Engineering & Functional Deliverables:
              </h4>
              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                {activeModalProject.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Live URL: <a href={activeModalProject.link} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">{activeModalProject.displayUrl}</a>
              </span>
              <div className="flex items-center gap-2">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center gap-2 text-xs font-mono font-bold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 flex items-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <span>Visit Live App</span>
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
