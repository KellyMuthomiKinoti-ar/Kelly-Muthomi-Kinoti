import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ConsultationBooking: React.FC = () => {
  const [serviceType, setServiceType] = useState('web-dev');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const serviceLabels: Record<string, string> = {
      'web-dev': 'Full-Stack Web / E-Commerce Project Discovery',
      'cbc-advisory': 'CBC STEM Curriculum & School ERP Advisory',
      'spss-research': 'SPSS Academic Research & Statistical Data Session',
      'math-tutoring': 'Secondary / Junior Secondary Mathematics Tutoring'
    };

    const msg = `Hello Kelly Muthomi,%0A%0AI would like to book a consultation:%0A%0A*Service:* ${serviceLabels[serviceType] || serviceType}%0A*Preferred Date:* ${date || 'Flexible'}%0A*Preferred Time:* ${timeSlot}%0A*Client Name:* ${name}%0A*Contact:* ${contact}%0A*Brief Scope:* ${note || 'N/A'}%0A%0APlease confirm availability!`;

    setTimeout(() => {
      window.open(`https://wa.me/254708220323?text=${msg}`, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="book-consultation" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Appointment Scheduler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule a Discovery Call or Consultation
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Select your preferred consultation topic and time slot to book a direct 1-on-1 session with Kelly Muthomi Kinoti.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Service Type Options */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                1. Select Consultation Objective:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('web-dev')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono transition-all ${
                    serviceType === 'web-dev'
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  💻 Web Dev / E-Commerce Discovery
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('cbc-advisory')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono transition-all ${
                    serviceType === 'cbc-advisory'
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  🏫 CBC STEM Curriculum & School ERP
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('spss-research')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono transition-all ${
                    serviceType === 'spss-research'
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  📊 SPSS Academic Data Analysis
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('math-tutoring')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono transition-all ${
                    serviceType === 'math-tutoring'
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  📐 Secondary Math Instruction
                </button>
              </div>
            </div>

            {/* Date and Time Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  2. Preferred Date:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  3. Preferred Time Slot:
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="09:00 AM">09:00 AM EAT (Morning)</option>
                  <option value="11:00 AM">11:00 AM EAT (Midday)</option>
                  <option value="02:00 PM">02:00 PM EAT (Afternoon)</option>
                  <option value="05:00 PM">05:00 PM EAT (Evening)</option>
                </select>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  Your Full Name: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  Phone / WhatsApp / Email: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., +254 712 345 678"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Note */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-400 font-bold block">
                Brief Scope / Topic Details (Optional):
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your requirements or inquiry..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              {submitted ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Generating Direct Booking...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Confirm & Send Booking Request via WhatsApp</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
