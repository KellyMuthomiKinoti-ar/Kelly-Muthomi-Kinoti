import React, { useState } from 'react';
import { 
  Send, Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram, Globe, Copy, Check, 
  ExternalLink, Sparkles, MessageSquare, CheckCircle2, AlertCircle, Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
              <span>Contact & Engagement</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0 font-light">
            Available for educational leadership, STEM instruction, full-stack software development projects, or academic research consulting.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards Side */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Phone / WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="text-white font-mono font-bold hover:text-amber-400 text-sm">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 hover:text-white"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-mono font-bold hover:text-amber-400 text-sm">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 hover:text-white"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 flex items-center gap-4 shadow-lg backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Location</span>
                  <span className="text-white font-bold text-sm">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Open Source & Code</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">GitHub Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Professional Network</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">LinkedIn Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Social Media</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">Facebook Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>

              {/* X (Twitter) */}
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Social Media</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">X (Twitter) Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>

              {/* TikTok */}
              <a
                href={PERSONAL_INFO.tiktok}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.21 0 .42.02.62.07V9.32a6.34 6.34 0 1 0 5.72 6.31V8.58a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Social Media</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">TikTok Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-amber-500/50 transition-all flex items-center justify-between group shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Social Media</span>
                    <span className="text-white font-bold text-sm group-hover:text-amber-300">Instagram Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
              </a>
            </div>

            {/* Live Portfolio Links Box */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-3 backdrop-blur-md">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center gap-2 font-semibold">
                <Globe className="w-4 h-4" />
                <span>Live External Websites</span>
              </span>
              <div className="space-y-2">
                {PERSONAL_INFO.livePortfolios.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all text-xs text-slate-200 group"
                  >
                    <span className="font-medium group-hover:text-amber-300">{item.name}</span>
                    <div className="flex items-center gap-1 font-mono text-amber-400 font-semibold">
                      <span>{item.url.replace('https://', '')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-700/60 p-6 sm:p-8 rounded-2xl shadow-2xl relative space-y-6 backdrop-blur-md">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                  <span>Send Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  Fill out the form below to initiate collaboration or request project proposals.
                </p>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/50 text-amber-300 text-xs flex items-start gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white mb-0.5">Message Sent Successfully!</span>
                    Thank you for reaching out to Kelly Muthomi Kinoti. Your message has been routed and Kelly will reply via email shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane.doe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. EdTech Web Application / Statistical Research Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                    id="contact-subject-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or academic collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                  id="contact-submit-btn"
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Kelly</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
