import React, { useState } from 'react';
import { X, MessageSquare, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');

  const handleStartChat = (promptText?: string) => {
    const text = promptText || customPrompt || 'Hello Teacher Kelly, I would like to make an inquiry regarding your services.';
    window.open(`https://wa.me/254708220323?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Expanded Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-5 space-y-4 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-xs relative">
                KMK
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-slate-950 animate-pulse" />
              </div>
              <div>
                <span className="text-white font-bold text-xs block">Kelly Muthomi Kinoti</span>
                <span className="text-[10px] text-emerald-400 font-mono font-semibold">Online • Usually replies instantly</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans space-y-2">
            <p>
              👋 Hello! Welcome to my portfolio platform. How can I assist you today?
            </p>
            <div className="text-[11px] text-slate-400 font-mono">
              • Full-Stack Web Development<br />
              • CBC STEM & Mathematics Instruction<br />
              • SPSS Academic Data Research
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="space-y-1.5 font-mono text-[11px]">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Quick Inquiries:</span>
            
            <button
              onClick={() => handleStartChat("Hello Kelly, I want to inquire about building a custom website/e-commerce system.")}
              className="w-full text-left p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all flex items-center justify-between"
            >
              <span>💻 Web Development Quote</span>
              <Send className="w-3 h-3 text-amber-400" />
            </button>

            <button
              onClick={() => handleStartChat("Hello Kelly, I want to inquire about secondary mathematics tutoring / CBC school consulting.")}
              className="w-full text-left p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all flex items-center justify-between"
            >
              <span>📐 CBC Math / Teaching Advisory</span>
              <Send className="w-3 h-3 text-amber-400" />
            </button>

            <button
              onClick={() => handleStartChat("Hello Kelly, I want to inquire about SPSS data analysis for academic research.")}
              className="w-full text-left p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all flex items-center justify-between"
            >
              <span>📊 SPSS Data Research Help</span>
              <Send className="w-3 h-3 text-amber-400" />
            </button>
          </div>

          {/* Input field */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type custom message..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleStartChat()}
              className="px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold text-xs flex items-center justify-center shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Messenger Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center gap-2 group border border-emerald-300/40"
        title="Direct WhatsApp Messenger"
      >
        <WhatsAppIcon className="w-6 h-6 fill-slate-950" />
        <span className="hidden sm:inline font-mono font-extrabold text-xs tracking-wider">
          Chat with Kelly
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-pulse" />
      </button>

    </div>
  );
};
