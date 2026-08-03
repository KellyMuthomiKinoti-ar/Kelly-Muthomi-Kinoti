import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Award, Briefcase, Code, GraduationCap, BarChart3, UserCheck, Search, Sparkles, Phone, Mail, BookOpen, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeaderNavProps {
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenResume, onOpenCertModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = ['hero', 'summary', 'projects', 'experience', 'certifications', 'skills', 'analytics', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary', icon: UserCheck },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Skills', href: '#skills', icon: GraduationCap },
    { name: 'Analytics', href: '#analytics', icon: BarChart3 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickSearchClick = () => {
    const projectsInput = document.getElementById('projects-search-input');
    if (projectsInput) {
      projectsInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        projectsInput.focus();
      }, 400);
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-slate-950/90 py-2'
          : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-2.5'
      }`}
    >
      {/* Scroll Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-900 overflow-hidden">
        <div
          className="h-full bg-amber-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Contact Utility Micro-Bar */}
      <div className="hidden md:block border-b border-slate-800/80 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono text-slate-400">
          
          {/* Direct Reach Icon Favicons/Logos */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-sans text-xs mr-1 font-semibold uppercase tracking-wider">Direct Reach:</span>
            
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-amber-400 hover:text-amber-300 transition-all flex items-center justify-center shadow-sm"
              title={`Call Kelly: ${PERSONAL_INFO.phone}`}
              aria-label="Call Kelly Muthomi"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/254708220323"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 transition-all flex items-center justify-center shadow-sm"
              title="WhatsApp Chat: +254 708 220 323"
              aria-label="Open WhatsApp Chat"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-amber-400 hover:text-amber-300 transition-all flex items-center justify-center shadow-sm"
              title={`Email Kelly: ${PERSONAL_INFO.email}`}
              aria-label="Send Direct Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Web Developer & STEM Educator
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-amber-400 font-semibold">
              Available for Remote & On-Site Engineering Roles
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            id="brand-logo"
          >
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-500/40 shrink-0">
                <img src="/favicon.svg" alt="KMK Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" title="Available for Engagements" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-slate-100 font-bold text-xs sm:text-sm tracking-wide group-hover:text-amber-400 transition-colors uppercase">
                KELLY MUTHOMI KINOTI
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400 font-mono font-medium flex items-center gap-1.5">
                <span>Full-Stack Engineer & Educator</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-md shadow-inner" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                  id={`nav-link-${link.href.replace('#', '')}`}
                >
                  <link.icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400/80'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Compact Nav for Medium/Large Screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-700/60 backdrop-blur-md" id="desktop-nav-compact">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80"
            >
              More...
            </a>
          </nav>

          {/* Header Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
            
            {/* Direct Contact Icon Favicons */}
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="p-2 text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl transition-all flex items-center justify-center shadow-sm"
              title={`Call Kelly: ${PERSONAL_INFO.phone}`}
              aria-label="Call Phone Number"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/254708220323"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-emerald-400 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl transition-all flex items-center justify-center shadow-sm"
              title="WhatsApp: +254 708 220 323"
              aria-label="Open WhatsApp Chat"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl transition-all flex items-center justify-center shadow-sm"
              title={`Email Kelly: ${PERSONAL_INFO.email}`}
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-300 hover:text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl transition-all flex items-center justify-center shadow-sm"
              title="View GitHub Profile"
              aria-label="View GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={handleQuickSearchClick}
              className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center shadow-sm"
              title="Search Projects & Tech Stack"
              id="header-search-btn"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCertModal}
              className="hidden md:flex px-3 py-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-all items-center gap-1.5 shadow-sm"
              id="header-cert-btn"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Certifications</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
              id="header-cv-btn"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Right Action Bar */}
          <div className="flex sm:hidden items-center gap-1.5">
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="p-2 text-amber-400 bg-slate-900 border border-slate-800 rounded-xl"
              title={`Call: ${PERSONAL_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/254708220323"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-emerald-400 bg-slate-900 border border-slate-800 rounded-xl"
              title="WhatsApp: +254 708 220 323"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-amber-400 bg-slate-900 border border-slate-800 rounded-xl"
              title={`Email: ${PERSONAL_INFO.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 text-xs font-extrabold text-slate-950 bg-amber-500 rounded-xl shadow-md shadow-amber-500/20 flex items-center gap-1"
              title="Open Official CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Upgraded Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          
          {/* Direct Contact Micro-Card in Mobile Drawer */}
          <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TSC Licensed Educator
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-1.5 font-mono text-xs text-slate-200">
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-amber-400 font-bold"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <span className="text-[10px] text-slate-400">Call Now</span>
              </a>

              <a
                href={`https://wa.me/254708220323`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 font-bold"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </div>
                <span className="text-[10px] text-emerald-400/80">Instant</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <span className="text-[10px] text-slate-400">Email</span>
              </a>
            </div>
          </div>

          {/* Navigation Items Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:text-white border-slate-800'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Inspect Verified Credentials</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-xs font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Full CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

