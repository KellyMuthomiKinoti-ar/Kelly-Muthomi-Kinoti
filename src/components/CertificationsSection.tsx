import React, { useState } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, FileCheck, ExternalLink, 
  BookOpen, Sparkles, X, Printer, Building, UserCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

interface CertificationsSectionProps {
  onOpenCertModal: (cert?: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenCertModal }) => {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Licenses & Professional Certifications</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Government & Ministry of Education licensed credentials verifying teaching authority and educational system administration.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black shadow-md">
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 whitespace-nowrap">
                        {cert.badge}
                      </span>
                      {cert.regNumber && (
                        <span className="text-xs text-slate-400 font-mono block mt-1">
                          Reg No: <span className="text-white font-bold">{cert.regNumber}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCertModal(cert)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold"
                    title="View Credential Card"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Title & Issuing Body */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-amber-400 mb-4 flex items-center gap-1.5 font-semibold">
                  <Building className="w-3.5 h-3.5" />
                  <span>{cert.issuingBody}</span>
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>

                {/* Topics Covered (if KEMIS) */}
                {cert.topics && (
                  <div className="space-y-3 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                      Certified Topics & Modules Covered:
                    </span>
                    <ul className="space-y-2">
                      {cert.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Authorization Highlights:
                  </span>
                  {cert.keyHighlights.map((high, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Credential Record</span>
                </span>
                <button
                  onClick={() => onOpenCertModal(cert)}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 hover:border-amber-500/50 text-amber-400 text-xs font-semibold hover:bg-amber-950/40 transition-all flex items-center gap-1.5"
                >
                  <span>Credential Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
