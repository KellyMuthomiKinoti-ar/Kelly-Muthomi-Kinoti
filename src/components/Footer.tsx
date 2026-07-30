import React from 'react';
import { 
  ArrowUp, ShieldCheck, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, ExternalLink, 
  FileText, Award, Code, GraduationCap, BarChart3, Briefcase, BookOpen, 
  Sparkles, CheckCircle2, MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom WhatsApp Icon component
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface FooterProps {
  onOpenResume?: () => void;
  onOpenCertModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenCertModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-400">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-slate-900 overflow-hidden border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
                <img src="/kmk-logo.jpg" alt="KMK Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="text-white font-bold text-base block tracking-tight">KELLY MUTHOMI KINOTI</span>
                <span className="text-xs text-amber-400 font-mono block font-semibold">TSC Educator • Full-Stack Developer</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Empowering CBC learners with STEM & Mathematics instruction, engineering high-scale full-stack web applications, and conducting statistical academic research in Nairobi, Kenya.
            </p>

            {/* Credential Micro Badges */}
            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TSC Licensed Educator (Mathematics & Business)</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>KEMI Educational Administrator Certified</span>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Official CV</span>
                </button>
              )}
              {onOpenCertModal && (
                <button
                  onClick={onOpenCertModal}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-400 font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Verify Credentials</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 2: Portfolio Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block border-b border-slate-800/80 pb-1.5">
              Sections
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#summary" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-amber-500/60" />
                  <span>Executive Summary</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Code className="w-3 h-3 text-amber-500/60" />
                  <span>Featured Projects</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3 text-amber-500/60" />
                  <span>Work Experience</span>
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-amber-500/60" />
                  <span>Certifications & TSC</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-500/60" />
                  <span>Skills Matrix</span>
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 text-amber-500/60" />
                  <span>Data & Research</span>
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3 text-amber-500/60" />
                  <span>Education (Moi Univ)</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-amber-500/60" />
                  <span>Contact Portal</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Live Platforms & Deployed Systems (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block border-b border-slate-800/80 pb-1.5">
              Live Platforms
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://styledkid.co.ke"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between text-slate-300 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">StyledKid E-Commerce</span>
                  <ExternalLink className="w-3 h-3 text-amber-400/80 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://wildlensadventure.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between text-slate-300 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">WildLens Adventure</span>
                  <ExternalLink className="w-3 h-3 text-amber-400/80 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between text-slate-300"
                >
                  <span>CBC Math Learning Portal</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between text-slate-300"
                >
                  <span>KEMIS School ERP System</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">Demo</span>
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between text-slate-300"
                >
                  <span>SPSS Data Analytics Suite</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">Tool</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Specializations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block border-b border-slate-800/80 pb-1.5">
              Specializations
            </span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Full-Stack Development</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>WordPress Custom Systems</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>CBC STEM & Mathematics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Business Studies Pedagogy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>SPSS & Quantitative Data</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Academic Research Papers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>School Admin & KEMIS</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Reach & Quick Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block border-b border-slate-800/80 pb-1.5">
              Direct Contact
            </span>
            
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="Call Phone Number"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href="https://wa.me/254708220323"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold group"
                title="Open WhatsApp Chat"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/50">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                </div>
                <span>WhatsApp Direct</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group truncate"
                title="Send Direct Email"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="LinkedIn Profile"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="Facebook Profile"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <Facebook className="w-3.5 h-3.5" />
                </div>
                <span>Facebook Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="X (Twitter) Profile"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <Twitter className="w-3.5 h-3.5" />
                </div>
                <span>X (Twitter) Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="TikTok Profile"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.21 0 .42.02.62.07V9.32a6.34 6.34 0 1 0 5.72 6.31V8.58a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
                  </svg>
                </div>
                <span>TikTok Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                title="Instagram Profile"
              >
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Feature & Quick Jump Utility Toolbar */}
        <div className="py-6 border-b border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px]">Key Highlights:</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Moi University Educator
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Full-Stack Software Engineer
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              6+ Years Industry & Teaching
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
              Available for Remote & On-Site Roles
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="hover:text-amber-400 transition-colors underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Printable CV / Resume</span>
              </button>
            )}
            <span>•</span>
            {onOpenCertModal && (
              <button
                onClick={onOpenCertModal}
                className="hover:text-amber-400 transition-colors underline flex items-center gap-1"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Certifications Modal</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} KELLY MUTHOMI KINOTI. All rights reserved.</p>
            <p className="text-[11px] text-slate-600">
              TSC Registered Educator • Bachelor of Arts in Education (Moi University) • Full-Stack Web Developer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all flex items-center gap-2 group backdrop-blur-md shadow-md"
            title="Scroll back to top of page"
          >
            <span className="font-semibold text-xs">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

