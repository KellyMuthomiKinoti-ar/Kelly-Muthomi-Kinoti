import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, Star, MessageSquare, 
  ArrowUpRight, Clock, Calendar, Tag, X,
  ShieldCheck
} from 'lucide-react';
import { BlogPost, User, UserRating } from '../types';
import { SectionHeading, Card, Button, Badge } from './ui';
import { articleService } from '../services/articleService';

interface BlogSectionProps {
  posts: BlogPost[];
  ratings: UserRating[];
  currentUser: User | null;
  onOpenAuth: () => void;
  onOpenReader: (post: BlogPost) => void;
  onOpenRateModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  ratings,
  currentUser,
  onOpenAuth,
  onOpenReader,
  onOpenRateModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all-tags');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'articles' | 'ratings'>('articles');

  const categories = [
    { id: 'all', name: 'All Research & Engineering' },
    { id: 'cbc-math', name: '📐 CBC STEM & Pedagogy' },
    { id: 'web-dev', name: '💻 Web Architecture & M-Pesa' },
    { id: 'spss-research', name: '📊 SPSS Quantitative Research' },
    { id: 'edtech', name: '🏫 EdTech Portals & Systems' },
    { id: 'insights', name: '💡 Engineering Leadership' }
  ];

  // Aggregate tags across posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return ['all-tags', ...Array.from(tagSet)];
  }, [posts]);

  // Filter posts using search query, category, and tag selection
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'all-tags' || post.tags.includes(selectedTag);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query)) ||
        post.authorName.toLowerCase().includes(query);

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery]);

  // Featured article (first featured post or first overall post)
  const featuredArticle = useMemo(() => {
    return posts.find(p => p.isFeatured) || posts[0] || null;
  }, [posts]);

  const avgPortfolioRating = useMemo(() => {
    return ratings.length > 0
      ? (ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length).toFixed(1)
      : '5.0';
  }, [ratings]);

  return (
    <section 
      id="blog" 
      aria-labelledby="knowledge-hub-heading"
      className="py-24 bg-slate-900 border-t border-b border-slate-800/80 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Professional Engineering, Research & Pedagogy"
          title="Knowledge Hub & Technical Publications"
          subtitle="Peer-reviewed educational research, PHP/MySQL e-commerce architecture blueprints, CBC Mathematics pedagogy frameworks, and SPSS statistical models."
          align="left"
        />

        {/* Knowledge Hub Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex flex-wrap gap-2 font-mono text-xs" role="tablist">
            <button
              onClick={() => setActiveTab('articles')}
              role="tab"
              aria-selected={activeTab === 'articles'}
              className={`px-4 py-2.5 rounded-xl border transition-all flex items-center gap-2 font-bold ${
                activeTab === 'articles'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Published Articles ({posts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('ratings')}
              role="tab"
              aria-selected={activeTab === 'ratings'}
              className={`px-4 py-2.5 rounded-xl border transition-all flex items-center gap-2 font-bold ${
                activeTab === 'ratings'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span>Verified Educator Reviews ({ratings.length})</span>
            </button>
          </div>

          {activeTab === 'articles' && (
            <div className="relative max-w-sm w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by topic, M-Pesa, SPSS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles in Knowledge Hub"
                className="w-full pl-10 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear article search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* ARTICLES TAB */}
        {activeTab === 'articles' && (
          <div className="space-y-10">
            
            {/* Featured Article Hero Card */}
            {featuredArticle && selectedCategory === 'all' && selectedTag === 'all-tags' && !searchQuery && (
              <Card
                variant="interactive"
                className="p-6 sm:p-8 border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-800">
                    <img
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="amber" className="shadow-lg">Featured Publication</Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredArticle.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticle.readTime}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold uppercase">
                        {featuredArticle.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onOpenReader(featuredArticle)}
                      className="text-2xl sm:text-3xl font-bold text-white hover:text-amber-400 transition-colors cursor-pointer leading-tight"
                    >
                      {featuredArticle.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {featuredArticle.tags.slice(0, 4).map((tag, tIdx) => (
                        <Badge key={tIdx} variant="slate" className="text-[11px]">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={featuredArticle.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'}
                          alt={featuredArticle.authorName}
                          className="w-8 h-8 rounded-full border border-amber-500/40 object-cover"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">{featuredArticle.authorName}</div>
                          <div className="text-[10px] font-mono text-slate-400">{featuredArticle.authorRole}</div>
                        </div>
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onOpenReader(featuredArticle)}
                        aria-label={`Read featured article: ${featuredArticle.title}`}
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Category & Tag Filter Bars */}
            <div className="space-y-3">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Knowledge Hub Categories">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedTag('all-tags');
                    }}
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
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

              {/* Tag Filter Bar */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>Filter Tag:</span>
                </span>
                {allTags.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTag(t)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                      selectedTag === t
                        ? 'bg-slate-200 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {t === 'all-tags' ? 'All Tags' : `#${t}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Article Cards Grid */}
            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center bg-slate-950 rounded-3xl border border-slate-800 space-y-3">
                <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No articles match your criteria</h3>
                <p className="text-xs text-slate-400 font-mono">
                  Try clearing your search query or selecting a different category/tag.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTag('all-tags');
                    setSearchQuery('');
                  }}
                  className="mt-2"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => {
                  const postAvgRating = post.ratingCount > 0 ? (post.ratingSum / post.ratingCount).toFixed(1) : '5.0';
                  
                  return (
                    <Card
                      key={post.id}
                      variant="interactive"
                      className="p-0 overflow-hidden flex flex-col justify-between group"
                    >
                      <div>
                        {/* Cover Image & Badges */}
                        <div className="relative h-48 overflow-hidden bg-slate-950">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                          
                          <div className="absolute top-3 left-3 flex items-center gap-1.5">
                            <Badge variant="amber" className="text-[10px] uppercase font-mono">
                              {post.category.replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-amber-400" />
                              {post.publishedAt}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3
                            onClick={() => onOpenReader(post)}
                            className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                          >
                            {post.title}
                          </h3>

                          <p className="text-xs text-slate-400 font-sans line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Tags Pills */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {post.tags.slice(0, 3).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTag(tag);
                                }}
                                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 font-mono text-[10px] cursor-pointer"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Metrics & Read Action */}
                      <div className="p-6 pt-3 border-t border-slate-900 mt-2 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'}
                              alt={post.authorName}
                              className="w-6 h-6 rounded-full border border-slate-700 object-cover"
                            />
                            <span className="text-[11px] font-bold text-slate-300 truncate max-w-[120px]">
                              {post.authorName}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                            <span className="flex items-center gap-1 text-amber-400">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              {postAvgRating}
                            </span>
                            <span className="flex items-center gap-1 text-slate-400">
                              <MessageSquare className="w-3.5 h-3.5" />
                              {post.comments.length}
                            </span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onOpenReader(post)}
                          className="w-full justify-center"
                          aria-label={`Read article: ${post.title}`}
                        >
                          <span>Read Full Article</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VERIFIED EDUCATOR REVIEWS TAB */}
        {activeTab === 'ratings' && (
          <div className="space-y-6">
            <div className="p-6 sm:p-8 bg-slate-950 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                    {avgPortfolioRating}
                  </span>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
                <h4 className="text-white font-bold text-base">Verified Academic & Engineering Satisfaction</h4>
                <p className="text-xs text-slate-400 font-mono max-w-xl">
                  Based on {ratings.length} verified submissions from school administrators, TSC educators, e-commerce founders, and university researchers.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={onOpenRateModal}
                className="shrink-0"
              >
                <Star className="w-4 h-4 fill-slate-950 mr-1.5" />
                <span>Submit Verified Review</span>
              </Button>
            </div>

            {/* Reviews Wall Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ratings.map((rev) => (
                <Card key={rev.id} className="p-6 space-y-3.5 font-mono">
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

                  <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-amber-400 font-bold">{rev.userName}</span>
                    </div>
                    <span className="text-slate-500">{rev.userRole}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
