import React from 'react';
import { 
  X, Award, ShieldCheck, CheckCircle2, FileCheck, Building2, 
  ExternalLink, Printer, UserCheck, BookOpen 
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Certification } from '../types';

interface CertModalProps {
  isOpen: boolean;
  selectedCert: Certification | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ isOpen, selectedCert, onClose }) => {
  if (!isOpen) return null;

  const certsToDisplay = selectedCert ? [selectedCert] : CERTIFICATIONS;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full my-8 p-6 sm:p-8 text-slate-200 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 sticky top-0 bg-slate-900 z-10">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>Verified Accreditation Credential Sheet</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certifications Body */}
        <div className="space-y-8">
          {certsToDisplay.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <ShieldCheck className="w-32 h-32 text-amber-400" />
              </div>

              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-xs text-amber-400 font-mono font-semibold">{cert.issuingBody}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {cert.badge}
                </span>
              </div>

              {/* License Details Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-400 block">Licensee Name:</span>
                  <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                </div>
                {cert.regNumber && (
                  <div>
                    <span className="text-slate-400 block">Registration Number:</span>
                    <span className="text-amber-400 font-bold">{cert.regNumber}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-400 block">Status:</span>
                  <span className="text-amber-400 font-bold">Active & Licensed</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Scope:</span>
                  <span className="text-white font-semibold">Mathematics, Business & CS</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                {cert.description}
              </p>

              {/* Topics Breakdown */}
              {cert.topics && (
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-semibold">
                    Comprehensive KEMIS Certificate Topics:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                    {cert.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Authorized Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {cert.keyHighlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
