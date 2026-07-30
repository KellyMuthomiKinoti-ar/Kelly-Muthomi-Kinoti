import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Globe, Download, Award, Send, Code, 
  Check, Copy, ShieldCheck, Sparkles, ExternalLink, ArrowRight, Laptop, CheckCircle, X, ZoomIn
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenCertModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1.85); // Default tightly cropped on face
  const [posY, setPosY] = useState<number>(18); // Default focus on top head area
  const [cropMode, setCropMode] = useState<'cropped' | 'full'>('cropped');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Background Ambient Glow Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.10),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_40%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      {/* Decorative Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Top Status & Verification Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>TSC Registered Educator</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>KEMI Certified KEMIS Administrator</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Text Side */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none uppercase">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed border-l-2 border-amber-500 pl-4 bg-gradient-to-r from-slate-900/90 to-transparent py-2 rounded-r-lg">
              {PERSONAL_INFO.headline}
            </p>

            {/* Short Bio Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Licensed Educator bridging technology & academics with over 6 years of expertise delivering CBC-aligned STEM instruction, building custom full-stack web architectures, and conducting quantitative/qualitative data research.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2" id="hero-actions">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 group"
                id="hero-explore-btn"
              >
                <Code className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-amber-500/50 shadow-md transition-all flex items-center gap-2"
                id="hero-resume-btn"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume/CV</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-amber-500/50 shadow-md transition-all flex items-center gap-2"
                id="hero-contact-btn"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCertModal}
                className="px-5 py-3 rounded-xl bg-amber-950/60 hover:bg-amber-900/70 text-amber-300 font-semibold text-sm border border-amber-500/40 shadow-md transition-all flex items-center gap-2"
                id="hero-cert-btn"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>View Certifications</span>
              </button>
            </div>

            {/* Direct Contact Details Quick Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Direct Contact & Social Connections
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                {/* Phone */}
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="hover:text-amber-300 font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="ml-1 p-1 text-slate-400 hover:text-white rounded"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-300 font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="ml-1 p-1 text-slate-400 hover:text-white rounded"
                    title="Copy Email Address"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* Facebook */}
                <a
                  href={PERSONAL_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-amber-400" />
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* X (Twitter) */}
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-amber-400" />
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                {/* TikTok */}
                <a
                  href={PERSONAL_INFO.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.21 0 .42.02.62.07V9.32a6.34 6.34 0 1 0 5.72 6.31V8.58a8.2 8.2 0 0 0 4.77 1.53V6.69z" />
                  </svg>
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Card Side */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-slate-900/80 border border-slate-700/80 p-6 rounded-2xl shadow-2xl backdrop-blur-xl space-y-5">
                {/* Profile Badge Avatar */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="relative shrink-0 group/photo">
                    <div 
                      onClick={() => setIsPhotoModalOpen(true)}
                      className="relative cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-500/80 shadow-xl bg-slate-900 transition-all hover:scale-105 hover:border-amber-400 group-hover/photo:shadow-amber-500/20 w-28 h-32 sm:w-32 sm:h-36 flex items-center justify-center"
                      title="Click to view & adjust photo crop"
                    >
                      <img
                        src={PERSONAL_INFO.profileImage}
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        style={{
                          transform: cropMode === 'cropped' ? `scale(${zoomLevel})` : 'scale(1)',
                          objectPosition: cropMode === 'cropped' ? `50% ${posY}%` : 'center center'
                        }}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5 text-amber-400 drop-shadow-md" />
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md pointer-events-none">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg uppercase tracking-tight">Kelly Muthomi Kinoti</h3>
                    <p className="text-xs text-amber-400 font-mono font-semibold">B.A. Ed (Moi University)</p>
                    <p className="text-xs text-slate-400 mt-0.5">TSC Registered Educator (Licensed)</p>
                    <button
                      onClick={() => setIsPhotoModalOpen(true)}
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-mono text-amber-400/90 hover:text-amber-300 underline"
                    >
                      <ZoomIn className="w-3 h-3" />
                      <span>View Full Photo</span>
                    </button>
                  </div>
                </div>

                {/* Live Websites Quick Bar */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Live Platforms</span>
                  </span>
                  <div className="space-y-2">
                    {PERSONAL_INFO.livePortfolios.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-all text-xs text-slate-200 group/link"
                      >
                        <span className="font-medium group-hover/link:text-amber-300">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px] group-hover/link:text-amber-400">
                          <span>visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info Box */}
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs space-y-1.5 text-amber-200/90">
                  <div className="flex items-center gap-2 font-semibold text-amber-400">
                    <Laptop className="w-4 h-4" />
                    <span>Cross-Domain Expertise</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Educator • PHP & Next.js Full-Stack Web Dev • SPSS & STATA Data Analyst • KEMIS Systems Admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Photo Modal Lightbox & Crop Adjuster */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl relative p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-sm font-extrabold text-white">Kelly Muthomi Kinoti — Portrait Headshot</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Fine-tune face crop & zoom level</p>
                </div>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Crop Mode Switcher */}
            <div className="flex items-center justify-between gap-3 bg-slate-950 p-2 rounded-2xl border border-slate-800 font-mono text-xs">
              <span className="text-slate-400 font-bold px-2">Crop Style:</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => { setCropMode('cropped'); setZoomLevel(1.85); setPosY(18); }}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    cropMode === 'cropped' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ✂️ Tight Headshot (No Background)
                </button>
                <button
                  type="button"
                  onClick={() => { setCropMode('full'); setZoomLevel(1); setPosY(50); }}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    cropMode === 'full' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🖼️ Uncropped Photo
                </button>
              </div>
            </div>

            {/* Interactive Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-950 flex items-center justify-center h-80 sm:h-96 w-full shadow-inner">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                style={{
                  transform: `scale(${zoomLevel})`,
                  objectPosition: `50% ${posY}%`
                }}
                className="w-full h-full object-cover transition-all duration-200"
              />
            </div>

            {/* Fine Tuning Controls */}
            {cropMode === 'cropped' && (
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Zoom Level ({zoomLevel.toFixed(2)}x):</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.15))}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold hover:bg-slate-800"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="0.05"
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                      className="w-32 accent-amber-500 cursor-pointer"
                    />
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.15))}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Face Position (Vertical):</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPosY(prev => Math.max(0, prev - 5))}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold hover:bg-slate-800"
                    >
                      ▲ Move Up
                    </button>
                    <button
                      onClick={() => setPosY(prev => Math.min(100, prev + 5))}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold hover:bg-slate-800"
                    >
                      ▼ Move Down
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center font-mono text-xs text-slate-400 pt-1">
              <span className="text-amber-400 font-bold">TSC Registered Educator</span> • B.A. Education (Moi University)
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
