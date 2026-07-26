import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle, Copy, Check, Calculator, GraduationCap, ChevronRight, Download, RefreshCw } from 'lucide-react';

interface LessonTemplate {
  grade: string;
  subject: string;
  strand: string;
  substrand: string;
  competencies: string[];
  inquiryQuestion: string;
  learningExperiences: string[];
  sampleProblem: {
    title: string;
    question: string;
    steps: string[];
    answer: string;
  };
  assessmentRubric: string;
}

const SAMPLE_LESSONS: Record<string, LessonTemplate> = {
  'math-g8': {
    grade: 'Grade 8 (Junior Secondary)',
    subject: 'Mathematics',
    strand: 'Numbers & Algebra',
    substrand: 'Linear Equations in One Unknown',
    competencies: ['Critical Thinking & Problem Solving', 'Digital Literacy', 'Self-Efficacy'],
    inquiryQuestion: 'How can algebraic equations model real-life business profit calculations?',
    learningExperiences: [
      'Learners work in groups to construct algebraic expressions from real market scenarios (e.g., StyledKid merchandise sales).',
      'Learners solve step-by-step equations using inverse operations.',
      'Learners verify solutions using interactive digital calculators and peer review.'
    ],
    sampleProblem: {
      title: 'Real-World Business Profit Equation',
      question: 'A student seller buys custom printed shirts for KES 400 each and pays a fixed market stall fee of KES 1,200. If they sell each shirt for KES 700, how many shirts must they sell to make a net profit of KES 6,000?',
      steps: [
        'Step 1: Define variables: Let x = number of shirts sold.',
        'Step 2: Formulate Profit Equation: Profit = (Selling Price × x) - (Cost Price × x) - Fixed Fee',
        'Step 3: Substitute known values: 6,000 = (700x) - (400x) - 1,200',
        'Step 4: Simplify equation: 6,000 = 300x - 1,200',
        'Step 5: Add 1,200 to both sides: 7,200 = 300x',
        'Step 6: Divide both sides by 300: x = 7,200 / 300 = 24 shirts.'
      ],
      answer: 'The student seller must sell exactly 24 shirts to achieve a net profit of KES 6,000.'
    },
    assessmentRubric: 'Observation of group problem-solving, written task accuracy, and verbal explanation during plenary.'
  },
  'biz-f2': {
    grade: 'Form 2 (Senior Secondary)',
    subject: 'Business Studies',
    strand: 'Forms of Business Units',
    substrand: 'Sole Proprietorship vs. Partnership vs. E-Commerce Models',
    competencies: ['Financial Literacy', 'Creativity & Innovation', 'Communication'],
    inquiryQuestion: 'Why are traditional brick-and-mortar retail shops transitioning to automated e-commerce platforms like StyledKid?',
    learningExperiences: [
      'Learners compare capital requirements and operating costs between physical storefronts and online web portals.',
      'Learners calculate Break-Even Quantity for a digital venture.',
      'Learners present a 3-minute mini business pitch incorporating digital payment gateways (M-Pesa).'
    ],
    sampleProblem: {
      title: 'Digital E-Commerce Break-Even Analysis',
      question: 'WildLens Safaris invests KES 50,000 in a web booking portal. Each tour booking yields a revenue of KES 15,000 with variable costs of KES 5,000 per booking. What is the Break-Even Point in number of bookings?',
      steps: [
        'Step 1: Identify Fixed Capital Investment = KES 50,000',
        'Step 2: Calculate Contribution Margin per Booking = Revenue - Variable Cost = KES 15,000 - KES 5,000 = KES 10,000',
        'Step 3: Break-Even Point (Units) = Fixed Costs / Contribution Margin',
        'Step 4: Substitute values: Break-Even Point = 50,000 / 10,000 = 5 bookings.'
      ],
      answer: 'WildLens Safaris breaks even after securing exactly 5 tour bookings.'
    },
    assessmentRubric: 'Portfolio assignment evaluating business plan feasibility and financial break-even calculation.'
  },
  'cs-g7': {
    grade: 'Grade 7 (Junior Secondary)',
    subject: 'Computer Studies / ICT',
    strand: 'Computer Systems & Web Concepts',
    substrand: 'Introduction to HTML, CSS & Web Browsers',
    competencies: ['Digital Literacy', 'Problem Solving', 'Learning to Learn'],
    inquiryQuestion: 'How do web browsers render text and media from server code into visual web pages?',
    learningExperiences: [
      'Learners inspect basic HTML tags (<h1>, <p>, <a>, <img>) using browser Developer Tools.',
      'Learners edit text content live on a sample local HTML file to observe instant web browser updates.',
      'Learners discuss internet safety, data privacy, and ethical web browsing practices.'
    ],
    sampleProblem: {
      title: 'Web Structure Debugging Exercise',
      question: 'Identify the error in the following HTML snippet intended to display a hyperlinked phone number: `<a href="tel:0708220323">Call Teacher Kelly</a`',
      steps: [
        'Step 1: Inspect opening tag: `<a href="tel:0708220323">` (Valid)',
        'Step 2: Inspect anchor text: `Call Teacher Kelly` (Valid)',
        'Step 3: Inspect closing tag: `</a` (Invalid - missing closing angle bracket `>`).',
        'Step 4: Correct code snippet: `<a href="tel:0708220323">Call Teacher Kelly</a>`'
      ],
      answer: 'The closing tag `</a` was incomplete; adding `>` completes the HTML element correctly.'
    },
    assessmentRubric: 'Hands-on practical assessment on web tag identification and debugging exercises.'
  }
};

export const LessonPlanGenerator: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<'math-g8' | 'biz-f2' | 'cs-g7'>('math-g8');
  const [copied, setCopied] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const currentLesson = SAMPLE_LESSONS[selectedKey];

  const handleCopy = () => {
    const text = `
CBC LESSON PLAN OUTLINE — KELLY MUTHOMI KINOTI (TSC EDUCATOR)
------------------------------------------------------------------
Grade Level: ${currentLesson.grade}
Subject: ${currentLesson.subject}
Strand: ${currentLesson.strand}
Sub-Strand: ${currentLesson.substrand}

CORE COMPETENCIES:
${currentLesson.competencies.map(c => `- ${c}`).join('\n')}

KEY INQUIRY QUESTION:
"${currentLesson.inquiryQuestion}"

LEARNING EXPERIENCES:
${currentLesson.learningExperiences.map((e, idx) => `${idx + 1}. ${e}`).join('\n')}

SAMPLE STEP-BY-STEP PROBLEM SOLVER:
Title: ${currentLesson.sampleProblem.title}
Question: ${currentLesson.sampleProblem.question}
Steps:
${currentLesson.sampleProblem.steps.join('\n')}
Final Answer: ${currentLesson.sampleProblem.answer}

ASSESSMENT RUBRIC:
${currentLesson.assessmentRubric}
------------------------------------------------------------------
Prepared by Teacher Kelly Muthomi Kinoti | TSC Registered Educator
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cbc-tool" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive CBC Pedagogy Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CBC STEM Lesson Plan & Problem Solver
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience Teacher Kelly's Competency-Based Curriculum (CBC) instructional design in action. Select a subject below to inspect auto-generated lesson plans and interactive step-by-step math/business problem solvers.
          </p>
        </div>

        {/* Subject Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => { setSelectedKey('math-g8'); setShowSolution(false); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 ${
              selectedKey === 'math-g8'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Grade 8 Mathematics (Linear Equations)</span>
          </button>

          <button
            onClick={() => { setSelectedKey('biz-f2'); setShowSolution(false); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 ${
              selectedKey === 'biz-f2'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Form 2 Business Studies (Break-Even)</span>
          </button>

          <button
            onClick={() => { setSelectedKey('cs-g7'); setShowSolution(false); }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 ${
              selectedKey === 'cs-g7'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Grade 7 Computer Studies (Web Code)</span>
          </button>
        </div>

        {/* Lesson Plan Card Output */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Corner Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CBC Aligned Template
            </span>
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-all text-xs font-mono flex items-center gap-1.5"
              title="Copy Full Lesson Plan"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Plan'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Lesson Metadata & Learning Experiences */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  {currentLesson.subject} • {currentLesson.grade}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {currentLesson.substrand}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Strand: <strong className="text-slate-200">{currentLesson.strand}</strong>
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                  CBC Core Competencies Targeted:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentLesson.competencies.map((comp, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono font-medium">
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Inquiry Question */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl space-y-1">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  Key Inquiry Question (KIQ):
                </span>
                <p className="text-sm font-semibold text-slate-200 italic">
                  "{currentLesson.inquiryQuestion}"
                </p>
              </div>

              {/* Learning Experiences */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                  Interactive Learning Experiences:
                </span>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed font-sans">
                  {currentLesson.learningExperiences.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Interactive Step-by-Step Problem Solver */}
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1.5">
                    <Calculator className="w-4 h-4" />
                    <span>Practical STEM Problem Solver</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Contextualized Problem</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white">
                    {currentLesson.sampleProblem.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    {currentLesson.sampleProblem.question}
                  </p>
                </div>

                {/* Solution Reveal Toggle */}
                <div className="pt-2">
                  {!showSolution ? (
                    <button
                      onClick={() => setShowSolution(true)}
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Reveal Step-by-Step CBC Working</span>
                    </button>
                  ) : (
                    <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Step-by-Step Solution Breakdown
                        </span>
                        <button
                          onClick={() => setShowSolution(false)}
                          className="text-[10px] font-mono text-slate-400 hover:text-slate-200 underline"
                        >
                          Hide Steps
                        </button>
                      </div>

                      <div className="space-y-1.5 font-mono text-xs text-slate-300">
                        {currentLesson.sampleProblem.steps.map((step, sIdx) => (
                          <p key={sIdx} className="text-[11px] leading-relaxed text-slate-300">
                            {step}
                          </p>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                        ✓ Final Answer: {currentLesson.sampleProblem.answer}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>TSC Educator License Validated</span>
                <span className="text-amber-400 font-semibold">Ready for Classroom Implementation</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
