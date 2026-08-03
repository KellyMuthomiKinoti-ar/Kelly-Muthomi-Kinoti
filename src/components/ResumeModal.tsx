import React, { useState } from 'react';
import { 
  X, Printer, Copy, Check, Download, FileText, Mail, Phone, 
  MapPin, ShieldCheck, Award, GraduationCap, Briefcase, Code, Sparkles, ExternalLink, Github 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatePlainTextCV = () => {
    return `
======================================================================
CURRICULUM VITAE: ${PERSONAL_INFO.name}
======================================================================
Headline: ${PERSONAL_INFO.headline}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
TSC Status: Active & Licensed Educator

EXECUTIVE SUMMARY
----------------------------------------------------------------------
${PERSONAL_INFO.summary}

LICENSES & CERTIFICATIONS
----------------------------------------------------------------------
1. Registered Teacher License — Teachers Service Commission (TSC)
   Status: Active & Licensed Educator
2. KEMIS Certification (Kenya Education Management Information System)
   Issuing Body: Kenya Education Management Institute (KEMI), Ministry of Education
   Topics Covered:
   • KEMIS System Fundamentals & Architecture
   • Institution Module (Theory & Practicals)
   • Learner Module & Learner Transfer Procedures
   • Reporting Module & Institutional Analytics
   • User Management Module & Access Control

WORK EXPERIENCE
----------------------------------------------------------------------
${EXPERIENCES.map(exp => `
• ${exp.role} | ${exp.organization} (${exp.period})
  Location: ${exp.location}
  Responsibilities:
  ${exp.responsibilities.map(r => `  - ${r}`).join('\n')}
`).join('\n')}

EDUCATION
----------------------------------------------------------------------
${EDUCATION_LIST.map(edu => `
• ${edu.qualification} — ${edu.institution} (${edu.year})
`).join('\n')}

FEATURED LIVE WEBSITES & PORTFOLIOS
----------------------------------------------------------------------
- StyledKid E-Commerce: https://styledkid.co.ke
- WildLens Adventure: https://wildlensadventure.com
- Menwe Junior School: https://menwe-school.vercel.app/
`;
  };

  const handleCopyCV = () => {
    const cvText = generatePlainTextCV();
    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full my-8 p-6 sm:p-10 text-slate-200 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Top Header Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 sticky top-0 bg-slate-900 z-10 pt-1">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
            <FileText className="w-4 h-4" />
            <span>Official Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            <a
              href="https://drive.google.com/file/d/1kCAmCDUSp-V-4Mz3j2TdfBr6rawftcf0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 text-xs text-emerald-300 flex items-center gap-1.5 font-bold transition-colors"
              title="View & Download Official PDF CV from Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Original PDF CV</span>
            </a>

            <button
              onClick={handleCopyCV}
              className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 flex items-center gap-1.5 font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'CV Copied' : 'Copy Text CV'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-xs text-amber-300 flex items-center gap-1.5 font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted CV Document Body */}
        <div className="space-y-8 font-sans" id="printable-cv">
          
          {/* CV Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-amber-400 text-xs font-mono mt-1 font-semibold">{PERSONAL_INFO.headline}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-amber-400" />
                github.com/KellyMuthomiKinoti-ar
              </span>
              <span>•</span>
              <span className="text-amber-400 font-bold">TSC Registered Educator (Licensed)</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Executive Summary</span>
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Licenses & Certifications */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Licenses & Professional Certifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{cert.title}</span>
                    <span className="text-[10px] font-mono text-amber-400 font-semibold">{cert.badge}</span>
                  </div>
                  <p className="text-[11px] text-amber-300 font-mono">{cert.issuingBody}</p>
                  {cert.regNumber && <p className="text-[11px] text-slate-400 font-mono">Reg No: {cert.regNumber}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Detailed Work Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map(exp => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{exp.role}</span>
                    <span className="text-[11px] font-mono text-amber-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-xs text-amber-300 font-medium">{exp.organization} — {exp.location}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education Background</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {EDUCATION_LIST.map(edu => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-bold text-white block">{edu.qualification}</span>
                  <span className="text-xs text-amber-400 block">{edu.institution}</span>
                  <span className="text-[11px] font-mono text-slate-500 block mt-1">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
