import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Award, GraduationCap, Calculator, MessageSquare, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

export const GlobalCommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCertModal
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // toggle command palette
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'CBC STEM Lesson Plan Generator', href: '#cbc-tool', icon: BookOpen },
    { label: 'Project Investment Cost Estimator', href: '#cost-estimator', icon: Calculator },
    { label: 'Mathematics & Financial Sandbox', href: '#math-sandbox', icon: Calculator },
    { label: 'Academic SPSS Research Papers', href: '#research-papers', icon: Layers },
    { label: 'Verified Client Testimonials', href: '#testimonials', icon: Award },
    { label: 'Teaching Philosophy & CBC Framework', href: '#pedagogy', icon: GraduationCap },
    { label: 'Frequently Asked Questions (FAQ)', href: '#faq', icon: Search },
    { label: 'Schedule 1-on-1 Consultation', href: '#book-consultation', icon: MessageSquare },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fadeIn">
      
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden space-y-3 p-4">
        
        {/* Search Input */}
        <div className="relative flex items-center border-b border-slate-800 pb-3">
          <Search className="w-5 h-5 text-amber-400 absolute left-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, lesson tools, research papers, FAQs, or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-2 bg-transparent text-sm text-white placeholder-slate-500 font-mono focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Nav List */}
        <div className="max-h-80 overflow-y-auto space-y-1 font-mono text-xs">
          
          <span className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1 block">
            Interactive Tools & Sections
          </span>

          {quickNav
            .filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
            .map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-amber-400 flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400" />
                </button>
              );
            })}

          {/* Featured Projects in Search */}
          <span className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1 block pt-2">
            Featured Full-Stack Web Projects
          </span>
          {PROJECTS
            .filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
            .map((proj) => (
              <a
                key={proj.id}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-emerald-400 flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-emerald-400" />
                  <strong className="text-white">{proj.title}</strong> — {proj.subtitle}
                </span>
                <span className="text-[10px] text-slate-500">{proj.displayUrl}</span>
              </a>
            ))}

          {/* Quick Actions */}
          <span className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1 block pt-2">
            Interactive Actions
          </span>
          <button
            onClick={() => { onClose(); onOpenResume(); }}
            className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-amber-400 font-bold flex items-center gap-2"
          >
            <span>📄 View Official Resume CV Modal</span>
          </button>
          <button
            onClick={() => { onClose(); onOpenCertModal(); }}
            className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-amber-400 font-bold flex items-center gap-2"
          >
            <span>📜 View TSC Registration & Certificates</span>
          </button>

        </div>

        {/* Footer info */}
        <div className="border-t border-slate-800 pt-2 px-3 text-[10px] font-mono text-slate-500 flex justify-between">
          <span>Press ESC or click X to close</span>
          <span>Kelly Muthomi Kinoti Portfolio</span>
        </div>

      </div>

    </div>
  );
};
