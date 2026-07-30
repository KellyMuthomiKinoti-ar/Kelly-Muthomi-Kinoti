import React, { useState } from 'react';
import { BookOpen, FileText, BarChart3, Download, Search, CheckCircle, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { ResearchPaper } from '../types';

const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-1',
    title: 'Quantitative Evaluation of ICT Integration in Secondary School Mathematics Education',
    field: 'Educational Technology & STEM Pedagogy',
    year: '2023',
    abstract: 'Investigates the impact of digital instructional tools and interactive simulation platforms on student retention in Junior and Senior Secondary Mathematics across Meru and Nakuru counties in Kenya.',
    methodology: 'Quantitative survey design (N=240 students, 30 educators) utilizing SPSS 28.0 for multiple linear regression and paired-samples t-tests.',
    toolsUsed: ['SPSS 28', 'Multiple Linear Regression', 'Descriptive Statistics', 'Excel Advanced'],
    keyFindings: [
      'Statistically significant increase (p < 0.001) in algebra retention scores after ICT simulation integration.',
      '92% of sampled teachers reported improved student classroom engagement during CBC STEM activities.',
      'Identified critical infrastructure prerequisites for scalable school ERP deployment.'
    ],
    citation: 'Kinoti, K. M. (2023). Quantitative Evaluation of ICT Integration in Secondary School Mathematics Education. Moi University Department of Educational Foundations.'
  },
  {
    id: 'paper-2',
    title: 'E-Commerce Adoption Models & Payment Gateway Trust in Micro-Enterprise Retailers',
    field: 'Business Studies & Digital Economy',
    year: '2022',
    abstract: 'Analyzes consumer trust factors and technical adoption barriers for small business e-commerce platforms (such as StyledKid) integrating M-Pesa automated STK push payment systems in Nairobi.',
    methodology: 'Mixed-method quantitative modeling utilizing ANOVA variance testing and cross-tabulation frequency metrics.',
    toolsUsed: ['SPSS', 'STATA', 'Factor Analysis', 'M-Pesa API Telemetry'],
    keyFindings: [
      'Automated instant M-Pesa STK verification reduced cart abandonment rate by 38%.',
      'Mobile-first responsive UX designs increased repeat purchase intention among urban consumers.',
      'Formulated a 5-step digital transition framework for traditional retail merchants.'
    ],
    citation: 'Kinoti, K. M. (2022). E-Commerce Adoption Models & Payment Gateway Trust in Micro-Enterprise Retailers. Academic Research Repository.'
  }
];

export const ResearchPublications: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (paper: ResearchPaper) => {
    navigator.clipboard.writeText(paper.citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research-papers" className="py-20 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
            <span>Academic Research & Quantitative Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Research Papers & SPSS Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            In addition to full-stack engineering and teaching, Kelly leads rigorous academic research investigating educational technology integration and micro-business digital economics.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESEARCH_PAPERS.map((paper) => (
            <div
              key={paper.id}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 shadow-lg backdrop-blur-md"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold whitespace-nowrap">
                    {paper.field}
                  </span>
                  <span className="text-slate-400 font-bold">Published: {paper.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug tracking-tight">
                  {paper.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <strong className="text-amber-400 font-mono text-[11px] uppercase block mb-1">Abstract:</strong>
                  {paper.abstract}
                </p>

                {/* Key Findings */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">
                    Key Quantitative Findings:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {paper.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Badge List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {paper.toolsUsed.map((tool, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between gap-3 text-xs font-mono">
                <button
                  onClick={() => handleCopyCitation(paper)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>{copiedId === paper.id ? 'Citation Copied!' : 'Copy APA Citation'}</span>
                </button>

                <a
                  href={`mailto:kellymuthomi22@gmail.com?subject=Inquiry regarding Research Paper: ${encodeURIComponent(paper.title)}`}
                  className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold transition-all flex items-center gap-1"
                >
                  <span>Request Full PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
