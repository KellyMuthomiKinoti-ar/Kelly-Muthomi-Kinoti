import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, FolderGit2, Award, GraduationCap, Calculator, MessageSquare, BookOpen, Layers, ArrowRight, ExternalLink, Copy, Check, FileText, Globe, Sparkles } from 'lucide-react';
import { PROJECTS, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Quick Actions' | 'Featured Live Apps' | 'Interactive Tools' | 'Jump to Section';
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export const GlobalCommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCertModal
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (selector: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const allItems: CommandItem[] = useMemo(() => [
    // Quick Actions
    {
      id: 'action-cv',
      title: 'View Official Resume & CV',
      subtitle: 'Open interactive full-screen CV with direct PDF download',
      category: 'Quick Actions',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => { onClose(); onOpenResume(); },
      keywords: ['resume', 'cv', 'pdf', 'hire', 'qualifications', 'experience']
    },
    {
      id: 'action-cert',
      title: 'View TSC License & Certifications',
      subtitle: 'TSC No. 867083, ALX Software Engineering, freeCodeCamp, Google',
      category: 'Quick Actions',
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      action: () => { onClose(); onOpenCertModal(); },
      keywords: ['certifications', 'tsc', 'license', 'alx', 'freecodecamp', 'teacher']
    },
    {
      id: 'action-email',
      title: copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Direct Email Address',
      subtitle: `${PERSONAL_INFO.email} — Click to copy instantly`,
      category: 'Quick Actions',
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blue-400" />,
      action: () => copyEmail(),
      keywords: ['email', 'contact', 'copy', 'mail', 'gmail']
    },
    {
      id: 'action-whatsapp',
      title: 'WhatsApp Direct Chat',
      subtitle: '+254 701 445 401 — Connect instantly via WhatsApp',
      category: 'Quick Actions',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      action: () => { onClose(); window.open('https://wa.me/254701445401', '_blank', 'noopener,noreferrer'); },
      keywords: ['whatsapp', 'phone', 'chat', 'call', 'mobile', 'connect']
    },

    // Featured Live Apps
    {
      id: 'app-knews',
      title: 'K-News 254 Digital Media Portal',
      subtitle: 'Live Next.js & Tailwind real-time news platform (knews-254.vercel.app)',
      category: 'Featured Live Apps',
      icon: <Globe className="w-4 h-4 text-amber-400" />,
      action: () => { onClose(); window.open('https://knews-254.vercel.app/', '_blank', 'noopener,noreferrer'); },
      keywords: ['knews', 'news', 'journalism', 'media', 'nextjs', 'edge', 'seo']
    },
    {
      id: 'app-styledkid',
      title: 'StyledKid Apparel E-Commerce',
      subtitle: 'Kenyan childrenswear e-commerce platform (styledkid.co.ke)',
      category: 'Featured Live Apps',
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      action: () => { onClose(); window.open('https://styledkid.co.ke', '_blank', 'noopener,noreferrer'); },
      keywords: ['styledkid', 'ecommerce', 'shop', 'mpesa', 'clothing', 'retail']
    },
    {
      id: 'app-menwe',
      title: 'Menwe Junior School Web App',
      subtitle: 'Institutional digital portal & ICT integration (menwe-school.vercel.app)',
      category: 'Featured Live Apps',
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      action: () => { onClose(); window.open('https://menwe-school.vercel.app/', '_blank', 'noopener,noreferrer'); },
      keywords: ['menwe', 'school', 'cbc', 'junior school', 'education', 'portal']
    },
    {
      id: 'app-wildlens',
      title: 'WildLens Adventure Safaris',
      subtitle: 'Luxury African safari booking platform (wildlensadventure.com)',
      category: 'Featured Live Apps',
      icon: <Globe className="w-4 h-4 text-amber-400" />,
      action: () => { onClose(); window.open('https://wildlensadventure.com', '_blank', 'noopener,noreferrer'); },
      keywords: ['wildlens', 'safari', 'travel', 'tourism', 'booking', 'africa']
    },

    // Interactive Tools
    {
      id: 'tool-cbc',
      title: 'CBC STEM Lesson Plan Generator',
      subtitle: 'Automated 5-E constructivist lesson planner & STEM problem builder',
      category: 'Interactive Tools',
      icon: <BookOpen className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection('#cbc-tool'),
      keywords: ['cbc', 'lesson plan', 'stem', 'generator', 'teacher', 'competency', '5e', 'math']
    },
    {
      id: 'tool-cost',
      title: 'EdTech & Software Cost Estimator',
      subtitle: 'Interactive architecture budget calculator & timeline estimator',
      category: 'Interactive Tools',
      icon: <Calculator className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection('#cost-estimator'),
      keywords: ['cost', 'estimator', 'calculator', 'budget', 'price', 'quote', 'edtech']
    },
    {
      id: 'tool-spss',
      title: 'SPSS Statistical Analytics Demo',
      subtitle: 'Empirical research charts, ANOVA variance & descriptive stats',
      category: 'Interactive Tools',
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection('#analytics'),
      keywords: ['spss', 'analytics', 'statistics', 'anova', 'research', 'charts', 'data']
    },

    // Jump to Section
    {
      id: 'jump-projects',
      title: 'Projects Showcase & Systems Architecture',
      subtitle: 'View live deployments, GitHub repositories & engineering case studies',
      category: 'Jump to Section',
      icon: <FolderGit2 className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection('#featured-projects'),
      keywords: ['projects', 'apps', 'portfolio', 'work', 'case studies', 'github']
    },
    {
      id: 'jump-research',
      title: 'Research Publications & Empirical Papers',
      subtitle: 'Peer-reviewed academic studies & STEM curriculum research',
      category: 'Jump to Section',
      icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#research-papers'),
      keywords: ['research', 'papers', 'publications', 'academic', 'studies', 'journal']
    },
    {
      id: 'jump-skills',
      title: 'Technical Skills Matrix',
      subtitle: 'Full-stack engineering, databases, research tools & teaching competencies',
      category: 'Jump to Section',
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection('#skills'),
      keywords: ['skills', 'tech stack', 'react', 'typescript', 'nextjs', 'node', 'python', 'spss']
    },
    {
      id: 'jump-contact',
      title: 'Contact & Consultation Booking',
      subtitle: 'Direct email, WhatsApp, and interactive inquiry form',
      category: 'Jump to Section',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection('#contact'),
      keywords: ['contact', 'hire', 'consultation', 'inquiry', 'message', 'reach out']
    }
  ], [copiedEmail]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const lower = query.toLowerCase();
    return allItems.filter(item =>
      item.title.toLowerCase().includes(lower) ||
      item.subtitle.toLowerCase().includes(lower) ||
      item.keywords.some(k => k.includes(lower))
    );
  }, [query, allItems]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search K-News 254, projects, CV, lesson tools... (⌘K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-400 font-sans focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white mr-2"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold rounded bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-3 divide-y divide-slate-800/60">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p className="text-sm">No matching results found for <span className="text-amber-400 font-semibold">"{query}"</span></p>
              <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "K-News", "Resume", "CBC", or "WhatsApp"</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 sm:px-4 py-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/10 border border-amber-500/30 text-white'
                      : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${isSelected ? 'bg-amber-500/20' : 'bg-slate-800'}`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-slate-100 truncate">{item.title}</span>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts bar */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">↑↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">ENTER</kbd>
              to select
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">Quick Switcher</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-400 font-semibold text-[10px]">⌘K / Ctrl+K</kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
