import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, Heart, Star, Download, Share2, MessageSquare, Check, User as UserIcon, 
  Calendar, Clock, BookOpen, Copy, ArrowLeft, ArrowRight, List, 
  ShieldCheck, ExternalLink, Sparkles
} from 'lucide-react';
import { BlogPost, BlogComment, User } from '../types';
import { articleService } from '../services/articleService';
import { Card, Button, Badge } from './ui';

interface BlogReaderModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLikePost: (postId: string) => void;
  onRatePost: (postId: string, rating: number) => void;
  onAddComment: (postId: string, commentText: string) => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  post,
  isOpen,
  onClose,
  currentUser,
  onLikePost,
  onRatePost,
  onAddComment,
  onSelectPost
}) => {
  const [userRating, setUserRating] = useState<number>(5);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showToc, setShowToc] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null);
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  // Fetch related articles & navigation order from articleService
  useEffect(() => {
    if (!post) return;

    let isMounted = true;
    async function loadMetadata() {
      const all = await articleService.getAllArticles();
      const related = await articleService.getRelatedArticles(post!.slug, 2);

      const currentIndex = all.findIndex(a => a.id === post!.id || a.slug === post!.slug);
      const prev = currentIndex > 0 ? all[currentIndex - 1] : null;
      const next = currentIndex !== -1 && currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

      if (isMounted) {
        setRelatedPosts(related);
        setPrevPost(prev);
        setNextPost(next);
      }
    }
    loadMetadata();

    return () => { isMounted = false; };
  }, [post]);

  // Track scroll progress inside modal
  const handleScroll = () => {
    if (!contentRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const totalScrollable = scrollHeight - clientHeight;
    if (totalScrollable <= 0) {
      setScrollProgress(100);
    } else {
      const percentage = Math.min(100, Math.max(0, (scrollTop / totalScrollable) * 100));
      setScrollProgress(percentage);
    }
  };

  // Parse table of contents (H1, H2, H3 headers)
  const tocItems = useMemo(() => {
    if (!post?.content) return [];
    const lines = post.content.split('\n');
    const items: { id: string; text: string; level: number }[] = [];

    lines.forEach((line, idx) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = `heading-${idx}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        items.push({ id, text, level });
      }
    });

    return items;
  }, [post?.content]);

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

  const handleCopyCode = (codeText: string, idx: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(idx);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShare = (platform?: 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const text = `Read "${post.title}" by ${post.authorName} on Knowledge Hub:`;

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      return;
    }
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
      return;
    }

    navigator.clipboard.writeText(`${window.location.origin}/#blog/${post.slug}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleDownloadArticle = () => {
    const contentText = `
================================================================================
${post.title.toUpperCase()}
================================================================================
Author: ${post.authorName} (${post.authorRole})
Published: ${post.publishedAt} | Reading Time: ${post.readTime}
Category: ${post.category.toUpperCase()}
Tags: ${post.tags.map(t => `#${t}`).join(' ')}
================================================================================

${post.excerpt}

--------------------------------------------------------------------------------
FULL ARTICLE CONTENT
--------------------------------------------------------------------------------

${post.content}

================================================================================
Knowledge Hub & Technical Publications by Kelly Muthomi Kinoti
https://styledkid.co.ke | All Rights Reserved
================================================================================
    `.trim();

    const blob = new Blob([contentText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${post.slug || 'knowledge-hub-article'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  // Render markdown content with support for syntax-highlighted code blocks & headings
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLanguage = '';
    let codeBuffer: string[] = [];
    let codeIndex = 0;

    lines.forEach((line, lineIdx) => {
      // Check for code block fence
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.trim().replace('```', '') || 'code';
          codeBuffer = [];
        } else {
          inCodeBlock = false;
          const codeString = codeBuffer.join('\n');
          const currentIdx = codeIndex++;

          elements.push(
            <div key={`code-${lineIdx}`} className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">{codeLanguage}</span>
                <button
                  onClick={() => handleCopyCode(codeString, currentIdx)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors"
                >
                  {copiedCodeIndex === currentIdx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed">
                <code>{codeString}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Check for headings
      const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const id = `heading-${lineIdx}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        if (level === 1) {
          elements.push(
            <h1 key={`h1-${lineIdx}`} id={id} className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 border-b border-slate-800 pb-2">
              {text}
            </h1>
          );
        } else if (level === 2) {
          elements.push(
            <h2 key={`h2-${lineIdx}`} id={id} className="text-xl sm:text-2xl font-bold text-amber-400 mt-6 mb-3">
              {text}
            </h2>
          );
        } else {
          elements.push(
            <h3 key={`h3-${lineIdx}`} id={id} className="text-lg font-bold text-slate-100 mt-5 mb-2">
              {text}
            </h3>
          );
        }
        return;
      }

      // Blockquotes
      if (line.trim().startsWith('>')) {
        elements.push(
          <blockquote key={`quote-${lineIdx}`} className="my-4 pl-4 border-l-4 border-amber-500 bg-amber-500/5 py-3 pr-4 rounded-r-xl italic text-slate-300">
            {line.replace('>', '').trim()}
          </blockquote>
        );
        return;
      }

      // Normal paragraph line
      if (line.trim() !== '') {
        elements.push(
          <p key={`p-${lineIdx}`} className="my-3 leading-relaxed text-slate-300">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-modal-title"
    >
      <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Top Reading Progress Bar */}
        <div className="w-full h-1 bg-slate-900 absolute top-0 left-0 z-20">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
            aria-valuenow={scrollProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
        </div>

        {/* Modal Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold uppercase">
              {post.category.replace('-', ' ')}
            </span>
            <span className="text-slate-400 hidden sm:inline">• {post.readTime}</span>
            <span className="text-slate-500 hidden md:inline">• /knowledge-hub/{post.slug}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* TOC Toggle Button (if TOC items exist) */}
            {tocItems.length > 0 && (
              <button
                onClick={() => setShowToc(!showToc)}
                className={`px-3 py-1.5 rounded-xl border font-mono text-xs flex items-center gap-1.5 transition-colors ${
                  showToc ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
                title="Table of Contents"
                aria-label="Toggle Table of Contents"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">TOC</span>
              </button>
            )}

            {/* Download Text Button */}
            <button
              onClick={handleDownloadArticle}
              className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-amber-400 font-mono text-xs flex items-center gap-1.5 transition-colors"
              title="Download Article as TXT"
              aria-label="Download Article"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{downloaded ? 'Downloaded!' : 'Download'}</span>
            </button>

            {/* Social Sharing Dropdown / Buttons */}
            <div className="flex items-center gap-1 bg-slate-950 border border-slate-700 rounded-xl p-1">
              <button
                onClick={() => handleShare('twitter')}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                title="Share on X (Twitter)"
                aria-label="Share on X"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleShare()}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
                title="Copy Article URL"
                aria-label="Copy Article URL"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Body */}
        <div 
          ref={contentRef}
          onScroll={handleScroll}
          className="overflow-y-auto flex-1 space-y-8 p-4 sm:p-8 font-sans text-xs sm:text-sm text-slate-300"
        >
          {/* Cover Image & Article Title Hero */}
          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-800">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex items-end p-6 sm:p-8">
              <div className="space-y-3 max-w-2xl">
                <h1 id="reader-modal-title" className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold uppercase">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Stats & Tags Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onLikePost(post.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold hover:bg-red-500/20 transition-all"
                aria-label={`Like article (${post.likes} likes)`}
              >
                <Heart className="w-4 h-4 fill-red-400" />
                <span>{post.likes} Likes</span>
              </button>

              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{avgRating} / 5.0 ({post.ratingCount} ratings)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Collapsible Table of Contents */}
          {showToc && tocItems.length > 0 && (
            <div className="p-5 bg-slate-900 border border-amber-500/30 rounded-2xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <List className="w-4 h-4" />
                  <span>Table of Contents</span>
                </span>
                <button onClick={() => setShowToc(false)} className="text-slate-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ul className="space-y-1.5">
                {tocItems.map((item, idx) => (
                  <li key={idx} style={{ paddingLeft: `${(item.level - 1) * 16}px` }}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-slate-300 hover:text-amber-400 transition-colors block py-0.5 truncate"
                    >
                      • {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Article Content */}
          <article className="space-y-4 leading-relaxed font-sans text-slate-200 text-sm sm:text-base bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80">
            {renderFormattedContent(post.content)}
          </article>

          {/* Author Profile Box */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'}
                alt={post.authorName}
                className="w-16 h-16 rounded-full border-2 border-amber-500/50 object-cover shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-white">{post.authorName}</h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" title="TSC Registered Educator & STEM Lead" />
                </div>
                <div className="text-xs font-mono text-amber-400">{post.authorRole}</div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  TSC Registered Secondary School Educator at Menwe JSS, Meru County. Full-stack PHP/MySQL & M-Pesa developer for StyledKid.co.ke, and educational researcher specializing in CBC Mathematics pedagogy and SPSS quantitative modeling.
                </p>
              </div>
            </div>
          </Card>

          {/* Rate Article Widget */}
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-3 font-mono">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Rate this Educational & Technical Publication</span>
            </h4>
            <p className="text-xs text-slate-400">
              Your feedback helps shape future CBC STEM guides and engineering tutorials:
            </p>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingSubmit(star)}
                  className={`p-2 rounded-xl transition-all ${
                    userRating >= star ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30' : 'text-slate-600 bg-slate-900'
                  }`}
                  aria-label={`Rate ${star} out of 5 stars`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
              {ratingSubmitted && (
                <span className="text-xs text-emerald-400 font-bold ml-2">✓ Verified Rating Submitted!</span>
              )}
            </div>
          </div>

          {/* Previous / Next Article Navigation */}
          {(prevPost || nextPost) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
              {prevPost ? (
                <Card
                  variant="interactive"
                  onClick={() => onSelectPost?.(prevPost)}
                  className="p-4 flex items-center gap-3 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase text-slate-500">Previous Article</div>
                    <div className="text-xs font-bold text-white truncate">{prevPost.title}</div>
                  </div>
                </Card>
              ) : <div />}

              {nextPost ? (
                <Card
                  variant="interactive"
                  onClick={() => onSelectPost?.(nextPost)}
                  className="p-4 flex items-center justify-end gap-3 text-right cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase text-slate-500">Next Article</div>
                    <div className="text-xs font-bold text-white truncate">{nextPost.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-400 shrink-0" />
                </Card>
              ) : <div />}
            </div>
          )}

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Related Research & Tutorials</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Card
                    key={rel.id}
                    variant="interactive"
                    onClick={() => onSelectPost?.(rel)}
                    className="p-4 space-y-2 cursor-pointer"
                  >
                    <Badge variant="amber" className="text-[10px]">{rel.category.replace('-', ' ')}</Badge>
                    <h5 className="text-sm font-bold text-white hover:text-amber-400 transition-colors line-clamp-2">
                      {rel.title}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2">{rel.excerpt}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-mono">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Discussion & Peer Reviews ({post.comments.length})</span>
            </h4>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={currentUser ? `Commenting as ${currentUser.name}...` : "Type a comment or question as visitor..."}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={!commentInput.trim()}
                >
                  <span>Post Comment</span>
                </Button>
              </div>
            </form>

            {/* Comments List */}
            {post.comments.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono italic py-4">
                No comments yet. Be the first to start the engineering or educational discussion!
              </p>
            ) : (
              <div className="space-y-3 pt-2">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-2 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-400">{comment.authorName}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">{comment.authorRole}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">{comment.createdAt}</span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
