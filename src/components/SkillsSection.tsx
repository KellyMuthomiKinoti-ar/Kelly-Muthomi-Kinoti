import React, { useState } from 'react';
import { 
  GraduationCap, Search, Code, BarChart3, FileText, Users, 
  Sparkles, X, Filter, Check, Terminal, Cpu, Award
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchingSkills = cat.skills.filter(s => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    });

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    return cat.skills.length > 0;
  });

  const totalFilteredSkills = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Competency Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Comprehensive Skills & Tools Matrix</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-light">
              Categorized technical competencies across Web Development, Data Analytics, STEM Pedagogy, Publishing, and Leadership.
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="w-full lg:w-80 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g., SPSS, PHP, APA, KEMIS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
              id="skills-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-700/80'
            }`}
            id="skill-cat-all"
          >
            <span>All Categories</span>
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-700/80'
              }`}
              id={`skill-cat-${cat.id}`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Groups Display */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-10">
            {filteredCategories.map((group) => (
              <div
                key={group.id}
                className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md"
              >
                {/* Group Title */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span>{group.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">{group.description}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 text-amber-400 font-bold border border-slate-700">
                    {group.skills.length} Competencies
                  </span>
                </div>

                {/* Skills Visual Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => {
                    let badgeStyle = 'bg-slate-950 border-slate-700/80 text-slate-200';
                    if (skill.badgeType === 'highlight') {
                      badgeStyle = 'bg-amber-950/40 border-amber-500/30 text-amber-300';
                    } else if (skill.badgeType === 'accent') {
                      badgeStyle = 'bg-slate-900 border-amber-500/20 text-amber-200';
                    } else if (skill.badgeType === 'primary') {
                      badgeStyle = 'bg-amber-500/10 border-amber-500/30 text-amber-300';
                    }

                    return (
                      <div
                        key={sIdx}
                        className={`p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] flex flex-col justify-between ${badgeStyle}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-white">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-700">
                            {skill.category}
                          </span>
                        </div>

                        {/* Skill Progress Indicator Bar */}
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>Proficiency</span>
                            <span className="text-amber-400 font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                            <div
                              className="h-full bg-amber-500 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 text-xs text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-950/40 font-semibold"
            >
              Clear Search Query
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
