import React, { useState } from 'react';
import { X, Heart, Star, Download, Share2, MessageSquare, Send, Check, User as UserIcon, Calendar, Clock, BookOpen, ThumbsUp } from 'lucide-react';
import { BlogPost, BlogComment, User } from '../types';

interface BlogReaderModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLikePost: (postId: string) => void;
  onRatePost: (postId: string, rating: number) => void;
  onAddComment: (postId: string, commentText: string) => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  post,
  isOpen,
  onClose,
  currentUser,
  onLikePost,
  onRatePost,
  onAddComment
}) => {
  const [userRating, setUserRating] = useState<number>(5);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !post) return null;

  const avgRating = post.ratingCount > 0 ? (post.ratingSum / post.ratingCount).toFixed(1) : '5.0';

  const handleRatingSubmit = (stars: number) => {
    setUserRating(stars);
    onRatePost(post.id, stars);
    setRatingSubmitted(true);
    setTimeout(() => setRatingSubmitted(false), 2500);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    onAddComment(post.id, commentInput.trim());
    setCommentInput('');
  };

  const handleDownloadArticle = () => {
    const contentText = `
===================================================================
${post.title.toUpperCase()}
===================================================================
Author: ${post.authorName} (${post.authorRole})
Published: ${post.publishedAt} | Category: ${post.category.toUpperCase()}
Read Time: ${post.readTime} | Average Rating: ${avgRating} / 5.0

EXCERPT:
${post.excerpt}

ARTICLE CONTENT:
${post.content}

-------------------------------------------------------------------
Downloaded from Kelly Muthomi Kinoti's Official Portfolio Platform
TSC Registered Educator & Full-Stack Developer | Nairobi, Kenya
===================================================================
    `.trim();

    const blob = new Blob([contentText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${post.slug || 'article'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden max-h-[92vh] flex flex-col justify-between">
        
        {/* Sticky Close Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold uppercase">
              {post.category}
            </span>
            <span className="text-slate-400 hidden sm:inline">• {post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download TXT Article Button */}
            <button
              onClick={handleDownloadArticle}
              className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-amber-400 font-mono text-xs flex items-center gap-1.5"
              title="Download Full Article as Text"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{downloaded ? 'Downloaded!' : 'Download Article'}</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-300"
              title="Copy Article Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Scroll Body */}
        <div className="overflow-y-auto space-y-6 pr-2 my-4 font-sans text-xs sm:text-sm text-slate-300">
          
          {/* Cover Hero */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1 text-amber-400">
                    <UserIcon className="w-3.5 h-3.5" />
                    <strong>{post.authorName}</strong> ({post.authorRole})
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Stats Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onLikePost(post.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold hover:bg-red-500/20 transition-all"
              >
                <Heart className="w-4 h-4 fill-red-400" />
                <span>{post.likes} Likes</span>
              </button>

              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{avgRating} / 5.0 ({post.ratingCount} ratings)</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 leading-relaxed font-sans text-slate-200 text-sm sm:text-base whitespace-pre-wrap bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80">
            {post.content}
          </div>

          {/* Rate Article Widget */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 font-mono">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Rate this Educational Article</span>
            </h4>
            <p className="text-xs text-slate-400">
              How informative was this article? Click below to leave your rating:
            </p>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingSubmit(star)}
                  className={`p-2 rounded-xl transition-all ${
                    userRating >= star ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30' : 'text-slate-600 bg-slate-900'
                  }`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
              {ratingSubmitted && (
                <span className="text-xs text-emerald-400 font-bold ml-2">✓ Rating submitted!</span>
              )}
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-mono">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Discussion & Comments ({post.comments.length})</span>
            </h4>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={currentUser ? `Commenting as ${currentUser.name}...` : "Type a comment as visitor..."}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1 font-mono shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </div>
            </form>

            {/* Comment List */}
            <div className="space-y-3 font-mono text-xs">
              {post.comments.length === 0 ? (
                <p className="text-slate-500 italic py-2">No comments yet. Be the first to share your feedback!</p>
              ) : (
                post.comments.map((c) => (
                  <div key={c.id} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-400 font-bold">{c.authorName} <span className="text-slate-500">({c.authorRole})</span></span>
                      <span className="text-slate-500">{c.createdAt}</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed">{c.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
