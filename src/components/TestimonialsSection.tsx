import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, User, Building, Award } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Elizabeth Mwangi',
    role: 'Principal & School Administrator',
    organization: 'Menwe Junior & Senior Secondary School',
    category: 'education',
    quote: 'Teacher Kelly Muthomi has transformed our Mathematics and Computer Studies department with his digital pedagogical approach. His integration of interactive tools and CBC-compliant lesson structures has boosted our national examination pass rates significantly.',
    rating: 5,
    avatarInitials: 'EM',
    badge: 'School Principal',
    date: 'Certified Recommendation'
  },
  {
    id: 't2',
    name: 'Samuel K. Nderitu',
    role: 'Founder & CEO',
    organization: 'StyledKid Apparel Kenya (styledkid.co.ke)',
    category: 'web-dev',
    quote: 'Kelly engineered our full-stack e-commerce system from scratch. His custom PHP and MySQL catalog architecture handles thousands of product views smoothly and integrated our M-Pesa checkout seamlessly. Highly professional developer.',
    rating: 5,
    avatarInitials: 'SN',
    badge: 'E-Commerce Client',
    date: 'Verified Client'
  },
  {
    id: 't3',
    name: 'Grace W. Mutua',
    role: 'Director of Operations',
    organization: 'WildLens Safaris (wildlensadventure.com)',
    category: 'web-dev',
    quote: 'Working with Kelly on our safari booking engine was a game changer. He delivered a fast, SEO-optimized WordPress platform with custom lead forms that increased our international tour inquiries by over 40%.',
    rating: 5,
    avatarInitials: 'GM',
    badge: 'Tourism Client',
    date: 'Verified Client'
  },
  {
    id: 't4',
    name: 'Prof. J. O. Ochieng',
    role: 'Academic Research Lead',
    organization: 'Moi University Department of Education',
    category: 'research',
    quote: 'Kelly demonstrated exceptional analytical rigor during his academic thesis research. His mastery of SPSS quantitative modeling, regression analysis, and data synthesis sets a benchmark for education research in Kenya.',
    rating: 5,
    avatarInitials: 'JO',
    badge: 'Academic Mentor',
    date: 'University Faculty'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'education' | 'web-dev' | 'research'>('all');

  const filtered = activeCategory === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-20 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Verified Endorsements & Peer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional & Client Recommendations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read verified feedback from school administrators, e-commerce business owners, and university research faculty collaborating with Kelly Muthomi Kinoti.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            All Recommendations ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setActiveCategory('education')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeCategory === 'education'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            School Leadership & Teaching
          </button>
          <button
            onClick={() => setActiveCategory('web-dev')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeCategory === 'web-dev'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Full-Stack Web Clients
          </button>
          <button
            onClick={() => setActiveCategory('research')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeCategory === 'research'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Academic & SPSS Research
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400 text-[11px] font-mono font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    {item.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic relative">
                  <Quote className="w-8 h-8 text-slate-800 absolute -top-3 -left-3 pointer-events-none" />
                  "{item.quote}"
                </p>

              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-extrabold text-sm shrink-0">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role} • <strong className="text-slate-300">{item.organization}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
