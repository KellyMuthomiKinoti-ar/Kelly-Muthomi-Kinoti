import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Phone, Mail, CheckCircle } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is Kelly Muthomi Kinoti fully registered and licensed by the Teachers Service Commission (TSC)?',
    answer: 'Yes! Kelly is an officially licensed and registered teacher with the Teachers Service Commission (TSC) in Kenya. He holds a Bachelor of Arts in Education (Business Studies & Mathematics) from Moi University and is certified for Secondary and Junior Secondary STEM instruction.',
    category: 'education'
  },
  {
    id: 'faq-2',
    question: 'What web development technologies does Kelly specialize in for client projects?',
    answer: 'Kelly is a full-stack developer experienced in React, Next.js, TypeScript, Tailwind CSS, PHP, MySQL, WordPress custom themes/plugins, Node.js, and automated M-Pesa payment gateways. Live client examples include StyledKid.co.ke and WildLensAdventure.com.',
    category: 'web-dev'
  },
  {
    id: 'faq-3',
    question: 'Can Kelly assist with academic statistical research, SPSS data analysis, and thesis methodology?',
    answer: 'Yes. Kelly provides expert quantitative and qualitative data research services using SPSS, STATA, SAS, and Advanced Excel. Services include survey data cleaning, hypothesis testing, ANOVA, linear regression, and chapter summary reports.',
    category: 'research'
  },
  {
    id: 'faq-4',
    question: 'How can school administrators or parents request mathematics tutoring or curriculum consulting?',
    answer: 'You can directly contact Teacher Kelly via phone (+254 708 220 323), WhatsApp, or the email contact form. He offers CBC STEM curriculum advisory, school ERP setup, and private mathematics instruction.',
    category: 'education'
  },
  {
    id: 'faq-5',
    question: 'What is the typical turnaround time for a custom full-stack web development project?',
    answer: 'Depending on complexity: standard corporate or safari booking websites take 5-8 business days; custom e-commerce systems with M-Pesa integration take 7-12 business days; and full school portals take 10-15 business days.',
    category: 'web-dev'
  },
  {
    id: 'faq-6',
    question: 'Where is Kelly based, and is he available for remote or on-site engagements?',
    answer: 'Kelly is based in Nairobi, Kenya. He is available for on-site teaching and consultations across Kenya, as well as remote web development and data research contracts globally.',
    category: 'general'
  }
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<'all' | 'education' | 'web-dev' | 'research'>('all');

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions & Information
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Find quick answers regarding teaching credentials, web development capabilities, research data services, and direct booking options.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. 'TSC', 'M-Pesa', 'SPSS', 'Turnaround')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            <button
              onClick={() => setSelectedCat('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCat === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300'
              }`}
            >
              All FAQs
            </button>
            <button
              onClick={() => setSelectedCat('education')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCat === 'education' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300'
              }`}
            >
              TSC Teaching & School
            </button>
            <button
              onClick={() => setSelectedCat('web-dev')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCat === 'web-dev' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300'
              }`}
            >
              Web Dev & E-Commerce
            </button>
            <button
              onClick={() => setSelectedCat('research')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCat === 'research' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 border border-slate-800 text-slate-300'
              }`}
            >
              SPSS & Academic Data
            </button>
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-slate-950 border border-slate-800 rounded-2xl text-slate-400 font-mono text-xs">
              No matching questions found. Feel free to contact Teacher Kelly directly below.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-950 border border-slate-800/90 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-slate-900/80 bg-slate-900/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
