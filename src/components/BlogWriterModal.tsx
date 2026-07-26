import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Image, Tag, Send, CheckCircle2, FileText, Code } from 'lucide-react';
import { BlogPost, User } from '../types';

interface BlogWriterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onSaveBlogPost: (post: BlogPost) => void;
  editingPost?: BlogPost | null;
}

const PRESET_COVERS = [
  { label: 'CBC Math Algebra', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80' },
  { label: 'E-Commerce Code', url: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80' },
  { label: 'SPSS Data Research', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { label: 'School & Classroom', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Tech & Laptops', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80' }
];

export const BlogWriterModal: React.FC<BlogWriterModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSaveBlogPost,
  editingPost
}) => {
  const [title, setTitle] = useState(editingPost?.title || '');
  const [excerpt, setExcerpt] = useState(editingPost?.excerpt || '');
  const [content, setContent] = useState(editingPost?.content || '');
  const [category, setCategory] = useState<'edtech' | 'web-dev' | 'cbc-math' | 'spss-research' | 'insights'>(
    editingPost?.category || 'cbc-math'
  );
  const [tagsInput, setTagsInput] = useState(editingPost?.tags.join(', ') || 'CBC STEM, Mathematics, Education');
  const [coverImage, setCoverImage] = useState(
    editingPost?.coverImage || PRESET_COVERS[0].url
  );
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const tagsList = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const wordCount = content.split(/\s+/).length;
    const estRead = Math.max(1, Math.ceil(wordCount / 180)) + ' min read';

    const newPost: BlogPost = {
      id: editingPost?.id || 'post-' + Date.now(),
      title: title.trim(),
      slug,
      excerpt: excerpt.trim() || title.slice(0, 100) + '...',
      content,
      authorName: currentUser?.name || 'Kelly Muthomi Kinoti',
      authorRole: currentUser?.role === 'admin' ? 'TSC Registered Educator & Developer' : 'Guest Contributor',
      category,
      tags: tagsList,
      coverImage,
      publishedAt: editingPost?.publishedAt || new Date().toISOString().split('T')[0],
      readTime: estRead,
      views: editingPost?.views || 1,
      likes: editingPost?.likes || 0,
      ratingCount: editingPost?.ratingCount || 1,
      ratingSum: editingPost?.ratingSum || 5,
      comments: editingPost?.comments || [],
      isFeatured: true
    };

    onSaveBlogPost(newPost);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden max-h-[90vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                {editingPost ? 'Edit Blog Article' : 'Write & Publish New Blog Article'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Author: <strong className="text-amber-400">{currentUser?.name || 'Kelly Muthomi Kinoti'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 font-mono text-xs flex">
              <button
                type="button"
                onClick={() => setActiveTab('write')}
                className={`px-3 py-1 rounded-lg transition-all ${activeTab === 'write' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                Editor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg transition-all ${activeTab === 'preview' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                Preview
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono flex items-center gap-2 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Blog article published successfully to portfolio homepage!</span>
          </div>
        )}

        {/* Content Body */}
        {activeTab === 'write' ? (
          <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-2 font-mono text-xs">
            
            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-8 space-y-1">
                <label className="text-slate-400 font-bold block">Article Title: *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modernizing CBC Secondary STEM Instruction with React Simulators"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-sm font-sans font-bold"
                />
              </div>

              <div className="sm:col-span-4 space-y-1">
                <label className="text-slate-400 font-bold block">Category: *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="cbc-math">📐 CBC STEM & Mathematics</option>
                  <option value="web-dev">💻 Full-Stack & E-Commerce</option>
                  <option value="spss-research">📊 SPSS Academic Data Research</option>
                  <option value="edtech">🏫 School Portals & EdTech</option>
                  <option value="insights">💡 Educational Leadership</option>
                </select>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-1">
              <label className="text-slate-400 font-bold block">Short Excerpt / Summary:</label>
              <input
                type="text"
                placeholder="Brief summary paragraph displayed on blog post cards..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-amber-500 font-sans"
              />
            </div>

            {/* Cover Image Selector */}
            <div className="space-y-2">
              <label className="text-slate-400 font-bold block">Cover Image URL or Presets:</label>
              <div className="flex flex-wrap gap-2">
                {PRESET_COVERS.map((preset, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setCoverImage(preset.url)}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all ${
                      coverImage === preset.url ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    🖼️ {preset.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="Or paste custom image URL..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-300 focus:outline-none focus:border-amber-500 text-[11px]"
              />
            </div>

            {/* Tags */}
            <div className="space-y-1">
              <label className="text-slate-400 font-bold block">Tags (Comma-separated):</label>
              <input
                type="text"
                placeholder="e.g. CBC Pedagogy, Mathematics, M-Pesa, SPSS"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            {/* Markdown Body Content */}
            <div className="space-y-1">
              <label className="text-slate-400 font-bold block">Article Body Content (Supports Markdown / Text): *</label>
              <textarea
                rows={8}
                required
                placeholder="Write your article here... You can use headings (#), bullet points (-), code blocks (```), and blockquotes (>)."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-500 font-mono text-xs leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Publish Article to Blog Engine</span>
              </button>
            </div>

          </form>
        ) : (
          /* Live Article Preview */
          <div className="overflow-y-auto space-y-4 pr-2 font-sans">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800">
              <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider">
                    {category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mt-2">
                    {title || 'Untitled Article'}
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              By <strong className="text-white">{currentUser?.name || 'Kelly Muthomi Kinoti'}</strong> • {new Date().toISOString().split('T')[0]}
            </p>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 whitespace-pre-wrap font-sans text-xs text-slate-300 leading-relaxed">
              {content || 'Article preview text will appear here as you type...'}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
