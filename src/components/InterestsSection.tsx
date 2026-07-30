import React from 'react';
import { 
  Laptop, Sparkles, RefreshCw, Layers, PieChart, Compass, 
  BookOpen, TrendingUp, Heart
} from 'lucide-react';
import { INTERESTS } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return Laptop;
      case 'Sparkles': return Sparkles;
      case 'RefreshCw': return RefreshCw;
      case 'Layers': return Layers;
      case 'PieChart': return PieChart;
      case 'Compass': return Compass;
      case 'BookOpen': return BookOpen;
      case 'TrendingUp': return TrendingUp;
      default: return Heart;
    }
  };

  return (
    <section id="interests" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Heart className="w-4 h-4" />
              <span>Future Focus & Passion</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Professional Interests & Focus</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Core domains driving continuous learning, technology innovation, and educational advancement.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERESTS.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-300 shadow-lg flex flex-col justify-between group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-semibold whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
