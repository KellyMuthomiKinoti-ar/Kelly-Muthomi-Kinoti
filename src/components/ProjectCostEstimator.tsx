import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageSquare, Clock, ShieldCheck, ShoppingBag, Globe, BookOpen, Layers } from 'lucide-react';

interface FeatureOption {
  id: string;
  name: string;
  category: 'core' | 'ecommerce' | 'edtech' | 'growth';
  priceKes: number;
  timeDays: number;
  description: string;
}

const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: 'responsive-design',
    name: 'Custom Responsive Web UI (React / Tailwind)',
    category: 'core',
    priceKes: 25000,
    timeDays: 4,
    description: 'Modern, ultra-fast mobile & desktop design optimized for high performance and clean UX.'
  },
  {
    id: 'cms-wordpress',
    name: 'WordPress Custom Content Management (CMS)',
    category: 'core',
    priceKes: 20000,
    timeDays: 3,
    description: 'Easy admin dashboard for updating blogs, safari packages, or company announcements without coding.'
  },
  {
    id: 'ecommerce-catalog',
    name: 'E-Commerce Product Catalog & Cart (MySQL/PHP)',
    category: 'ecommerce',
    priceKes: 35000,
    timeDays: 6,
    description: 'Full product showcase, category filter, inventory management (like StyledKid.co.ke).'
  },
  {
    id: 'mpesa-gateway',
    name: 'M-Pesa Express & Card Payment Gateway',
    category: 'ecommerce',
    priceKes: 20000,
    timeDays: 3,
    description: 'Automated instant M-Pesa STK push checkout and payment notification verification.'
  },
  {
    id: 'school-portal',
    name: 'School Student / Parent Information Portal',
    category: 'edtech',
    priceKes: 40000,
    timeDays: 7,
    description: 'Student exam results, CBC progress reports, fee statement viewer (like Menwe School Portal).'
  },
  {
    id: 'kemis-integration',
    name: 'KEMIS / NEMIS School Record Synchronization',
    category: 'edtech',
    priceKes: 25000,
    timeDays: 4,
    description: 'Institutional education management system integration and data export formatting.'
  },
  {
    id: 'seo-analytics',
    name: 'Advanced Technical SEO & Google Analytics 4',
    category: 'growth',
    priceKes: 15000,
    timeDays: 2,
    description: 'Meta tags, sitemap submission, Google Search Console indexing, and visitor heatmaps.'
  },
  {
    id: 'data-research',
    name: 'SPSS Academic Research & Statistical Report',
    category: 'growth',
    priceKes: 25000,
    timeDays: 5,
    description: 'Quantitative survey analysis, regression modeling, hypothesis testing & data visualizations.'
  }
];

export const ProjectCostEstimator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'responsive-design',
    'cms-wordpress',
    'seo-analytics'
  ]);
  const [clientType, setClientType] = useState<'business' | 'school' | 'research'>('business');

  const toggleFeature = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectedFeatures = FEATURE_OPTIONS.filter(f => selectedIds.includes(f.id));
  const totalKes = selectedFeatures.reduce((acc, f) => acc + f.priceKes, 0);
  const totalDays = selectedFeatures.reduce((acc, f) => acc + f.timeDays, 0);
  const estUsd = Math.round(totalKes / 130); // Approx KES to USD conversion

  const generateWhatsAppMessage = () => {
    const listNames = selectedFeatures.map(f => `• ${f.name}`).join('%0A');
    const msg = `Hello Kelly Muthomi,%0A%0AI used your website Project Estimator and would like to inquire about a project:%0A%0A*Client Type:* ${clientType.toUpperCase()}%0A*Estimated Budget:* KES ${totalKes.toLocaleString()} (~$${estUsd} USD)%0A*Target Timeline:* ~${totalDays} business days%0A%0A*Selected Features:*%0A${listNames}%0A%0APlease let me know your availability for a discovery call or consultation!`;
    window.open(`https://wa.me/254708220323?text=${msg}`, '_blank');
  };

  return (
    <section id="cost-estimator" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Project Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web & EdTech Project Investment Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Planning a custom e-commerce web platform, institutional school portal, or academic research analysis? Select your desired modules below to calculate estimated investment and turnaround timeline instantly.
          </p>
        </div>

        {/* Client Type Selector */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setClientType('business')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
              clientType === 'business'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>E-Commerce / Business</span>
          </button>
          <button
            onClick={() => setClientType('school')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
              clientType === 'school'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>School / EdTech Portal</span>
          </button>
          <button
            onClick={() => setClientType('research')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
              clientType === 'research'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Academic Research / Data</span>
          </button>
        </div>

        {/* Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Feature Checkbox Selection Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURE_OPTIONS.map((feature) => {
              const isSelected = selectedIds.includes(feature.id);
              return (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-950 border-slate-800/80 hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {feature.name}
                      </h4>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-amber-500 border-amber-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 font-mono text-xs">
                    <span className="text-amber-400 font-bold">
                      KES {feature.priceKes.toLocaleString()}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      ~{feature.timeDays} days
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Live Quote Summary Box (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6 sticky top-24 shadow-2xl">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider block">
                Estimated Project Investment
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  KES {totalKes.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  (~${estUsd} USD)
                </span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Selected Modules:</span>
                <span className="font-bold text-amber-400">{selectedFeatures.length} items</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Est. Development Time:</span>
                <span className="font-bold text-emerald-400">~{totalDays} business days</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">TSC Educator Guarantee:</span>
                <span className="font-bold text-white">Included</span>
              </div>
            </div>

            {/* Selected Modules Mini List */}
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 max-h-40 overflow-y-auto space-y-1.5 font-mono text-[11px]">
              {selectedFeatures.length === 0 ? (
                <p className="text-slate-500 italic text-center py-2">No modules selected yet. Click any option to calculate.</p>
              ) : (
                selectedFeatures.map(f => (
                  <div key={f.id} className="flex items-center justify-between text-slate-300">
                    <span className="truncate pr-2">✓ {f.name}</span>
                    <span className="text-amber-400 font-semibold shrink-0">KES {f.priceKes / 1000}k</span>
                  </div>
                ))
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={generateWhatsAppMessage}
              disabled={selectedFeatures.length === 0}
              className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Send Instant Quote to WhatsApp</span>
            </button>

            <div className="text-[11px] font-mono text-center text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free 30-day post-launch warranty included</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
