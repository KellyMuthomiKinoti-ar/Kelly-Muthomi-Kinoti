import { BlogPost, BlogComment } from '../types';
import { INITIAL_BLOG_POSTS } from '../data/blogData';

/**
 * ArticleService - Lightweight data abstraction layer for the Knowledge Hub.
 * Serves Kelly Muthomi Kinoti's professional engineering, research, and educational publications
 * from curated local article data.
 */
class ArticleService {
  private articles: BlogPost[] = [...INITIAL_BLOG_POSTS];

  /**
   * Fetch all published articles.
   */
  async getAllArticles(): Promise<BlogPost[]> {
    return this.articles.filter(a => !a.status || a.status === 'published');
  }

  /**
   * Retrieve a single article by its SEO slug or ID.
   */
  async getArticleBySlug(slug: string): Promise<BlogPost | null> {
    const all = await this.getAllArticles();
    return all.find(a => a.slug === slug || a.id === slug) || null;
  }

  /**
   * Get featured articles for priority display.
   */
  async getFeaturedArticles(): Promise<BlogPost[]> {
    const all = await this.getAllArticles();
    return all.filter(a => a.isFeatured);
  }

  /**
   * Get related articles by explicit slug list or matching categories/tags.
   */
  async getRelatedArticles(currentSlug: string, limit = 3): Promise<BlogPost[]> {
    const all = await this.getAllArticles();
    const current = all.find(a => a.slug === currentSlug || a.id === currentSlug);
    if (!current) return [];

    // Prioritize explicit relatedSlugs if present
    if (current.relatedSlugs && current.relatedSlugs.length > 0) {
      const explicit = all.filter(
        a => current.relatedSlugs?.includes(a.slug) && a.slug !== currentSlug && a.id !== currentSlug
      );
      if (explicit.length >= limit) {
        return explicit.slice(0, limit);
      }
    }

    // Otherwise match category or shared tags
    const related = all
      .filter(a => a.slug !== currentSlug && a.id !== current.id)
      .map(a => {
        let score = 0;
        if (a.category === current.category) score += 3;
        const sharedTags = a.tags.filter(t => current.tags.includes(t));
        score += sharedTags.length;
        return { article: a, score };
      })
      .sort((a, b) => b.score - a.score)
      .map(item => item.article);

    return related.slice(0, limit);
  }

  /**
   * Search and filter articles across title, excerpt, content, category, and tags.
   */
  async searchArticles(
    query: string,
    category?: string,
    tag?: string
  ): Promise<BlogPost[]> {
    const all = await this.getAllArticles();
    const q = query.toLowerCase().trim();

    return all.filter(article => {
      const matchesCategory = !category || category === 'all' || article.category === category;
      const matchesTag = !tag || article.tags.includes(tag);
      const matchesQuery = !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.content.toLowerCase().includes(q) ||
        article.tags.some(t => t.toLowerCase().includes(q)) ||
        article.authorName.toLowerCase().includes(q);

      return matchesCategory && matchesTag && matchesQuery;
    });
  }

  /**
   * Get all unique tags across published articles with their counts.
   */
  async getAllTags(): Promise<{ name: string; count: number }[]> {
    const all = await this.getAllArticles();
    const tagCounts = new Map<string, number>();

    for (const art of all) {
      for (const tag of art.tags) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }

    return Array.from(tagCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Increment article view count.
   */
  async incrementViews(slug: string): Promise<number> {
    const article = this.articles.find(a => a.slug === slug || a.id === slug);
    if (article) {
      article.views += 1;
      return article.views;
    }
    return 0;
  }

  /**
   * Like an article.
   */
  async likeArticle(slug: string): Promise<number> {
    const article = this.articles.find(a => a.slug === slug || a.id === slug);
    if (article) {
      article.likes += 1;
      return article.likes;
    }
    return 0;
  }

  /**
   * Add a comment to an article.
   */
  async addComment(
    slug: string,
    commentData: { authorName: string; authorRole: string; content: string }
  ): Promise<BlogComment | null> {
    const article = this.articles.find(a => a.slug === slug || a.id === slug);
    if (!article) return null;

    const newComment: BlogComment = {
      id: `c-${Date.now()}`,
      postId: article.id,
      authorName: commentData.authorName,
      authorRole: commentData.authorRole,
      content: commentData.content,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0
    };

    article.comments = [newComment, ...article.comments];
    return newComment;
  }
}

export const articleService = new ArticleService();
export default articleService;
