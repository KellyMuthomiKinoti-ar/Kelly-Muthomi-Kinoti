import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2, User as UserIcon, ShieldCheck } from 'lucide-react';
import { UserRating, User } from '../types';

interface UserRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onSubmitRating: (rating: UserRating) => void;
}

export const UserRatingModal: React.FC<UserRatingModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSubmitRating
}) => {
  const [userName, setUserName] = useState(currentUser?.name || '');
  const [userRole, setUserRole] = useState(currentUser?.role === 'admin' ? 'TSC Registered Educator' : 'Educator / Client');
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState<'teaching' | 'web-dev' | 'research' | 'overall'>('overall');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !reviewTitle.trim() || !reviewText.trim()) return;

    const newRating: UserRating = {
      id: 'rat-' + Date.now(),
      userName: userName.trim(),
      userRole: userRole.trim() || 'Client / Reader',
      rating,
      category,
      reviewTitle: reviewTitle.trim(),
      reviewText: reviewText.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };

    onSubmitRating(newRating);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">Rate Teacher Kelly & Services</h3>
              <p className="text-xs text-slate-400 font-mono">Submit your feedback and 5-star review</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Thank you! Your 5-star review has been published on the ratings board.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          
          {/* Rating Stars Selector */}
          <div className="space-y-1.5 text-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <label className="text-slate-300 font-bold block">Your Overall Rating:</label>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-2 rounded-xl transition-all ${
                    rating >= star ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 scale-110' : 'text-slate-600 bg-slate-900'
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              ))}
            </div>
            <span className="text-[11px] text-amber-400 font-bold block">
              {rating === 5 ? '🌟 Outstanding (5/5)' : rating === 4 ? '👍 Very Good (4/5)' : `${rating} Stars`}
            </span>
          </div>

          {/* User Name & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-slate-400 block">Your Name: *</label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Samuel Kariuki"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 block">Your Role / Organization:</label>
              <input
                type="text"
                placeholder="e.g. School Principal / Founder"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Service Category */}
          <div className="space-y-1">
            <label className="text-slate-400 block">Service Evaluated:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
            >
              <option value="overall">⭐ Overall Expertise & Leadership</option>
              <option value="teaching">📐 CBC Mathematics & STEM Teaching</option>
              <option value="web-dev">💻 Web Development & E-Commerce Systems</option>
              <option value="research">📊 SPSS Academic Data Analysis</option>
            </select>
          </div>

          {/* Title & Review Text */}
          <div className="space-y-1">
            <label className="text-slate-400 block">Review Headline: *</label>
            <input
              type="text"
              required
              placeholder="e.g. Exceptional STEM Educator & Technical Developer"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500 font-sans font-bold text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 block">Detailed Review Feedback: *</label>
            <textarea
              rows={4}
              required
              placeholder="Share your experience working with Teacher Kelly..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-amber-500 font-sans text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Publish Rating & Review</span>
          </button>

        </form>

      </div>
    </div>
  );
};
