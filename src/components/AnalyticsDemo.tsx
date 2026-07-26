import React, { useState } from 'react';
import { 
  BarChart3, PieChart, LineChart, Table, FileText, CheckCircle2, 
  Sparkles, Layers, Terminal, BookOpen, Search, ArrowRight
} from 'lucide-react';

export const AnalyticsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spss' | 'stata' | 'sas' | 'formatting'>('spss');

  const researchCapabilities = [
    { name: 'Quantitative Modeling', tool: 'SPSS / STATA', desc: 'Hypothesis testing, ANOVA, linear & logistic regression, factor analysis.' },
    { name: 'Qualitative Analysis', tool: 'NVivo / Content Analysis', desc: 'Thematic coding, narrative analysis, and structured interview synthesis.' },
    { name: 'Survey Design', tool: 'Qualtrics / Kobo / Excel', desc: 'Likert scale validation, sampling methodology, response rate optimization.' },
    { name: 'Academic Writing', tool: 'APA / IEEE / Chicago', desc: 'Rigorously formatted research manuscripts, literature reviews, and peer-review QA.' }
  ];

  return (
    <section id="analytics" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Statistical Research Capability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Academic Research & Data Analytics</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Interactive demonstration of statistical modeling, survey research methodology, and international academic citation compliance.
          </p>
        </div>

        {/* Interactive Data Sandbox Dashboard */}
        <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8 backdrop-blur-md">
          
          {/* Top Tool Switcher */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 font-semibold">Tool Suite:</span>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setActiveTab('spss')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === 'spss' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SPSS Analytics
                </button>
                <button
                  onClick={() => setActiveTab('stata')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === 'stata' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  STATA Econometrics
                </button>
                <button
                  onClick={() => setActiveTab('sas')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === 'sas' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SAS Modeling
                </button>
                <button
                  onClick={() => setActiveTab('formatting')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === 'formatting' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Citation Styles
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>300+ Manuscripts Delivered</span>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'spss' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="text-amber-400 font-bold">SPSS Output: Multiple Regression Model</span>
                    <span>N = 450 Respondents</span>
                  </div>
                  <div className="text-slate-300 space-y-1">
                    <p className="text-amber-300">&gt; REGRESSION /MISSING LISTWISE /STATISTICS R COEFF OUTS R</p>
                    <p>&gt; Model Summary: R = 0.884, R-Square = 0.781, Adjusted R-Square = 0.776</p>
                    <p>&gt; ANOVA: F(3, 446) = 158.42, p &lt; 0.001 (Statistically Significant)</p>
                  </div>
                  
                  {/* Mock Regression Coefficient Table */}
                  <div className="overflow-x-auto pt-2">
                    <table className="w-full text-left text-[11px] text-slate-300">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-bold">
                          <th className="py-1">Predictor Variable</th>
                          <th className="py-1">B Coeff</th>
                          <th className="py-1">Std Error</th>
                          <th className="py-1">Beta (β)</th>
                          <th className="py-1">t-value</th>
                          <th className="py-1">Sig. (p)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900">
                        <tr>
                          <td className="py-1.5 text-white font-medium">(Constant)</td>
                          <td>2.14</td>
                          <td>0.31</td>
                          <td>--</td>
                          <td>6.90</td>
                          <td className="text-amber-400 font-bold">&lt; 0.001</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-white font-medium">ICT Integration Level</td>
                          <td>0.48</td>
                          <td>0.06</td>
                          <td>0.52</td>
                          <td>8.00</td>
                          <td className="text-amber-400 font-bold">&lt; 0.001</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-white font-medium">Teacher CBC Training</td>
                          <td>0.32</td>
                          <td>0.05</td>
                          <td>0.38</td>
                          <td>6.40</td>
                          <td className="text-amber-400 font-bold">&lt; 0.001</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <PieChart className="w-4 h-4 text-amber-400" />
                      <span>Methodological Insight</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      Expert in designing structured SPSS workflows, evaluating Cronbach&apos;s alpha reliability (&gt; 0.85 threshold), removing multicollinearity (VIF &lt; 5.0), and drafting clear statistical interpretations for academic journals.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-amber-300 border border-slate-700">
                        Hypothesis Testing
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-amber-300 border border-slate-700">
                        Cronbach Alpha
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-amber-300 border border-slate-700">
                        ANOVA & Chi-Square
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stata' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold border-b border-slate-800 pb-2">
                  STATA 18 Econometrics Output & Panel Data Model
                </div>
                <p className="text-slate-300">&gt; xtreg gdp_growth education_expenditure inflation, fe robust</p>
                <p className="text-slate-400">&gt; Fixed-effects (within) regression | Group variable: country_id</p>
                <div className="p-3 bg-slate-900 rounded-lg text-slate-300 border border-slate-800">
                  <p className="text-amber-400 font-bold">&gt; R-sq: within = 0.812 | corr(u_i, Xb) = -0.142</p>
                  <p>&gt; F(2, 48) = 104.18 | Prob &gt; F = 0.0000</p>
                  <p>&gt; Conclusion: Strong positive relationship between education expenditure and GDP growth across longitudinal dataset.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sas' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold border-b border-slate-800 pb-2">
                  SAS Enterprise Guide Modeling
                </div>
                <p className="text-slate-300">PROC LOGISTIC DATA=educational_outcomes;</p>
                <p className="text-slate-300 pl-4">MODEL stem_completion(event=&apos;1&apos;) = cbc_exposure math_score computer_literacy / RSQUARE;</p>
                <p className="text-slate-300">RUN;</p>
                <div className="p-3 bg-slate-900 rounded-lg text-slate-300 border border-slate-800">
                  <p className="text-amber-400 font-bold">&gt; Odds Ratio Estimates: CBC Exposure OR = 2.45 (95% CI: 1.80 - 3.32)</p>
                  <p>&gt; Students with early CBC exposure show 145% higher odds of completing STEM tracks.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'formatting' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">APA 7th Edition Style</span>
                  <p className="text-xs text-slate-300 font-serif italic">
                    Kinoti, K. M. (2024). Integrating competency-based curriculum and ICT infrastructure in Kenyan secondary schools. Journal of Educational Technology, 18(2), 145–162. https://doi.org/10.1080/02602938
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">IEEE Technical Style</span>
                  <p className="text-xs text-slate-300 font-mono">
                    [1] K. M. Kinoti, &quot;Full-Stack E-Commerce Database Optimization and Cloud Deployment,&quot; IEEE Trans. Software Eng., vol. 49, no. 4, pp. 201–215, Apr. 2024.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Research Grid Capabilities Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            {researchCapabilities.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{item.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 font-bold border border-slate-800">
                    {item.tool}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
