import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, User, Search, Mail, X } from 'lucide-react';

interface BlogViewProps {
  posts: BlogPost[];
}

export const BlogView: React.FC<BlogViewProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { label: 'All Categories', count: 24 },
    { label: 'Career Guidance', count: 6 },
    { label: 'Legal Insights', count: 8 },
    { label: 'Study Tips', count: 5 },
    { label: 'Case Law Updates', count: 3 },
    { label: 'Internship Advice', count: 2 },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Blog Page Banner */}
      <div className="bg-navy-950 text-white py-12 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold font-serif mb-2">Legal Blog & Insights</h1>
          <p className="text-slate-300 text-sm">
            Expert commentaries, landmark case summaries, and career advice for law students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Blog Posts Column */}
          <div className="lg:col-span-8 space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group"
              >
                <div className="md:w-5/12 h-52 md:h-auto bg-slate-900 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-extrabold text-gold-600 tracking-wider uppercase">
                      {post.category}
                    </span>

                    <h2
                      onClick={() => setSelectedPost(post)}
                      className="text-lg font-bold text-slate-900 group-hover:text-gold-600 transition-colors font-serif cursor-pointer mt-1 mb-2 leading-snug"
                    >
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
                      <span className="text-[10px] text-slate-400">• {post.date}</span>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-xs font-bold text-slate-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-serif">Categories</h3>
              <div className="space-y-1">
                {categories.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(c.label)}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
                  >
                    <span>{c.label}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 font-bold text-slate-600">
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="bg-navy-950 p-6 rounded-2xl border border-slate-800 text-white shadow-xl space-y-3">
              <Mail className="w-8 h-8 text-gold-400" />
              <h3 className="text-base font-bold font-serif">Subscribe to Newsletter</h3>
              <p className="text-xs text-slate-300">
                Get weekly legal case analysis and study notes delivered to your inbox.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-semibold">
                  Thank you! You are subscribed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gold-gradient-bg text-navy-950 rounded-xl text-xs font-bold shadow-gold-glow"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl relative border border-slate-200 my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">{selectedPost.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">{selectedPost.title}</h2>

              <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-200">
                <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="w-8 h-8 rounded-full" />
                <div>
                  <span className="font-bold text-slate-900 block">{selectedPost.author.name}</span>
                  <span>{selectedPost.author.role} • {selectedPost.date}</span>
                </div>
              </div>

              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-2xl" />

              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 pt-2">
                <p className="font-semibold text-slate-800 text-sm leading-relaxed">{selectedPost.summary}</p>
                <div className="whitespace-pre-line text-slate-700">{selectedPost.content}</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
