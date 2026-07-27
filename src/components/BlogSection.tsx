import React, { useState } from 'react';
import { BookOpen, Plus, Search, Filter, Star, Heart, Eye, MessageSquare, Download, Sparkles, UserCheck, Lock, Edit3, Trash2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BlogPost, User, UserRating } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  ratings: UserRating[];
  currentUser: User | null;
  onOpenAuth: () => void;
  onOpenWriter: (postToEdit?: BlogPost | null) => void;
  onOpenReader: (post: BlogPost) => void;
  onOpenRateModal: () => void;
  onDeletePost: (postId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  ratings,
  currentUser,
  onOpenAuth,
  onOpenWriter,
  onOpenReader,
  onOpenRateModal,
  onDeletePost
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'articles' | 'ratings'>('articles');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'cbc-math', name: '📐 CBC STEM & Math' },
    { id: 'web-dev', name: '💻 Web Dev & M-Pesa' },
    { id: 'spss-research', name: '📊 SPSS Data Research' },
    { id: 'edtech', name: '🏫 EdTech Portals' },
    { id: 'insights', name: '💡 Leadership' }
  ];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const avgPortfolioRating =
    ratings.length > 0
      ? (ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length).toFixed(1)
      : '5.0';

  return (
    <section id="blog" className="py-20 bg-slate-900 border-t border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications & Research Articles</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              EdTech Software, CBC STEM & Analytics Articles
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore Teacher Kelly's published technical guides, CBC Mathematics pedagogy frameworks, M-Pesa web integration tutorials, and empirical statistical research methodology.
            </p>
          </div>
        </div>

        {/* Navigation Tabs (Articles vs Ratings Wall) */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div className="flex gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-4 py-2 rounded-xl border transition-all flex items-center gap-2 font-bold ${
                activeTab === 'articles'
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Published Blog Articles ({posts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('ratings')}
              className={`px-4 py-2 rounded-xl border transition-all flex items-center gap-2 font-bold ${
                activeTab === 'ratings'
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Star className="w-4 h-4 fill-current" />
              <span>User Ratings & Reviews ({ratings.length})</span>
            </button>
          </div>

          {activeTab === 'articles' && (
            <div className="relative max-w-xs w-full hidden sm:block">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          )}
        </div>

        {/* ARTICLES TAB */}
        {activeTab === 'articles' && (
          <div className="space-y-8">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl border font-mono text-xs transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Post Cards Grid */}
            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center bg-slate-950 rounded-3xl border border-slate-800 space-y-3">
                <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No blog articles match your filter</h3>
                <p className="text-xs text-slate-400 font-mono">Try searching with different keywords or create a new blog post!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => {
                  const postAvgRating = post.ratingCount > 0 ? (post.ratingSum / post.ratingCount).toFixed(1) : '5.0';
                  
                  return (
                    <article
                      key={post.id}
                      className="group bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Cover image & category badge */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                          
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-amber-400 font-mono text-[10px] font-bold uppercase">
                              {post.category}
                            </span>
                          </div>

                          {/* Admin Edit/Delete Actions */}
                          {currentUser?.role === 'admin' && (
                            <div className="absolute top-3 right-3 flex items-center gap-1">
                              <button
                                onClick={(e) => { e.stopPropagation(); onOpenWriter(post); }}
                                className="p-1.5 rounded-lg bg-slate-900/90 text-amber-400 hover:bg-slate-800 border border-amber-500/30"
                                title="Edit Article"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); onDeletePost(post.id); }}
                                className="p-1.5 rounded-lg bg-slate-900/90 text-red-400 hover:bg-slate-800 border border-red-500/30"
                                title="Delete Article"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Article Info */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>{post.publishedAt}</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3
                            onClick={() => onOpenReader(post)}
                            className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer"
                          >
                            {post.title}
                          </h3>

                          <p className="text-xs text-slate-400 font-sans line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {post.tags.slice(0, 3).map((tag, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px]">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Metrics & Read Action */}
                      <div className="p-6 pt-0 border-t border-slate-900 mt-4 flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-3 text-slate-400">
                          <span className="flex items-center gap-1 text-red-400">
                            <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1 text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-current" /> {postAvgRating}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MessageSquare className="w-3.5 h-3.5" /> {post.comments.length}
                          </span>
                        </div>

                        <button
                          onClick={() => onOpenReader(post)}
                          className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-bold border border-amber-500/30 flex items-center gap-1 transition-all text-[11px]"
                        >
                          <span>Read Full Article</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </article>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* RATINGS & REVIEWS TAB */}
        {activeTab === 'ratings' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-amber-400">{avgPortfolioRating}</span>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
                <h4 className="text-white font-bold text-sm">Overall Client & Educator Satisfaction</h4>
                <p className="text-xs text-slate-400 font-mono">Based on {ratings.length} verified submissions from school heads, e-commerce founders, and students.</p>
              </div>

              <button
                onClick={onOpenRateModal}
                className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-2xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Star className="w-4 h-4 fill-slate-950" />
                <span>Submit Your 5-Star Rating</span>
              </button>
            </div>

            {/* Reviews Wall Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ratings.map((rev) => (
                <div key={rev.id} className="p-6 bg-slate-950 border border-slate-800 rounded-3xl space-y-3 font-mono">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= rev.rating ? 'fill-current' : 'text-slate-800'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">{rev.createdAt}</span>
                  </div>

                  <h4 className="text-sm font-extrabold text-white font-sans">{rev.reviewTitle}</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{rev.reviewText}</p>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px]">
                    <span className="text-amber-400 font-bold">{rev.userName}</span>
                    <span className="text-slate-500">{rev.userRole}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
