import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, Percent, RefreshCw } from 'lucide-react';

export const InteractiveMathSandbox: React.FC = () => {
  const [calcMode, setCalcMode] = useState<'interest' | 'breakeven' | 'quadratic'>('interest');

  // Interest Calculator state
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(3);

  // Break-even state
  const [fixedCosts, setFixedCosts] = useState(30000);
  const [pricePerUnit, setPricePerUnit] = useState(1500);
  const [costPerUnit, setCostPerUnit] = useState(900);

  // Quadratic state (ax^2 + bx + c = 0)
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  // Compound Interest Calculation
  const compoundInterest = Math.round(principal * Math.pow(1 + rate / 100, years));
  const interestEarned = compoundInterest - principal;

  // Break-even Calculation
  const contributionMargin = pricePerUnit - costPerUnit;
  const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;

  // Quadratic calculation
  const discriminant = b * b - 4 * a * c;
  let quadResult = '';
  if (a === 0) {
    quadResult = 'Invalid: Coefficient "a" cannot be zero in quadratic equations.';
  } else if (discriminant < 0) {
    quadResult = `Discriminant (Δ) = ${discriminant} (< 0). No real roots exist (complex conjugate roots).`;
  } else if (discriminant === 0) {
    const root = (-b / (2 * a)).toFixed(2);
    quadResult = `One real repeated root: x = ${root}`;
  } else {
    const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    quadResult = `Two real distinct roots: x₁ = ${root1},  x₂ = ${root2}`;
  }

  return (
    <section id="math-sandbox" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Practical STEM & Business Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mathematics & Business Financial Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test Teacher Kelly's interactive mathematics and financial formulas in real-time. Adjust the parameters below to observe dynamic algebraic calculations.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setCalcMode('interest')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              calcMode === 'interest'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Compound Interest</span>
          </button>

          <button
            onClick={() => setCalcMode('breakeven')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              calcMode === 'breakeven'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Business Break-Even</span>
          </button>

          <button
            onClick={() => setCalcMode('quadratic')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              calcMode === 'quadratic'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Quadratic Roots Solver</span>
          </button>
        </div>

        {/* Calculator Display Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          
          {/* Mode 1: Compound Interest */}
          {calcMode === 'interest' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-mono text-xs">
                <h3 className="text-lg font-bold text-white font-sans">Compound Interest Formula: A = P(1 + r/n)^(nt)</h3>
                
                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Principal Amount (KES): <strong className="text-amber-400">{principal.toLocaleString()}</strong></label>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Annual Interest Rate (%): <strong className="text-amber-400">{rate}%</strong></label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Time Period (Years): <strong className="text-amber-400">{years} {years === 1 ? 'Year' : 'Years'}</strong></label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Display */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 font-mono">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Calculation Output:</span>
                <div>
                  <span className="text-slate-400 text-xs block">Total Accumulated Future Value:</span>
                  <span className="text-3xl font-extrabold text-emerald-400">KES {compoundInterest.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-800 pt-3 flex justify-between text-xs">
                  <span className="text-slate-400">Total Interest Earned:</span>
                  <span className="text-amber-400 font-bold">+KES {interestEarned.toLocaleString()}</span>
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Used in Form 3 Mathematics & Business Financial Mathematics instruction.
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Business Break-Even */}
          {calcMode === 'breakeven' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-mono text-xs">
                <h3 className="text-lg font-bold text-white font-sans">Break-Even Point = Fixed Costs / (Price - Cost)</h3>
                
                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Total Fixed Overhead Costs (KES): <strong className="text-amber-400">{fixedCosts.toLocaleString()}</strong></label>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Selling Price Per Unit (KES): <strong className="text-amber-400">{pricePerUnit.toLocaleString()}</strong></label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 block">Variable Cost Per Unit (KES): <strong className="text-amber-400">{costPerUnit.toLocaleString()}</strong></label>
                  <input
                    type="range"
                    min="50"
                    max="9000"
                    step="50"
                    value={costPerUnit}
                    onChange={(e) => setCostPerUnit(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Display */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 font-mono">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Break-Even Output:</span>
                <div>
                  <span className="text-slate-400 text-xs block">Required Sales Quantity to Break Even:</span>
                  <span className="text-3xl font-extrabold text-emerald-400">{breakEvenUnits.toLocaleString()} Units</span>
                </div>
                <div className="border-t border-slate-800 pt-3 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Break-Even Sales Revenue:</span>
                    <span className="text-amber-400 font-bold">KES {breakEvenRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Contribution Margin / Unit:</span>
                    <span className="text-emerald-400 font-bold">KES {contributionMargin.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: Quadratic Formula */}
          {calcMode === 'quadratic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-mono text-xs">
                <h3 className="text-lg font-bold text-white font-sans">Quadratic Equation: ax² + bx + c = 0</h3>
                
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Coeff 'a':</label>
                    <input
                      type="number"
                      value={a}
                      onChange={(e) => setA(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Coeff 'b':</label>
                    <input
                      type="number"
                      value={b}
                      onChange={(e) => setB(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Coeff 'c':</label>
                    <input
                      type="number"
                      value={c}
                      onChange={(e) => setC(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-white font-bold"
                    />
                  </div>
                </div>

                <p className="text-slate-400 text-xs">
                  Formula: <code className="text-amber-400">x = [-b ± √(b² - 4ac)] / 2a</code>
                </p>
              </div>

              {/* Output Display */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 font-mono">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Algebraic Solution:</span>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Discriminant (b² - 4ac):</span>
                  <span className="text-amber-400 font-bold text-sm">Δ = {discriminant}</span>
                </div>
                <div className="text-sm font-bold text-emerald-400 leading-relaxed">
                  {quadResult}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
