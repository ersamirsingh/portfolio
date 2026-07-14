import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiCalendar, FiArrowRight, FiX } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function WritingsSection() {
  const blogs = portfolioData.writings;
  const { name, title } = portfolioData.personalInfo;
  const [activeBlog, setActiveBlog] = useState(null);

  // Quick Markdown Helper to convert headings, code blocks and text to styled HTML
  const renderMarkdown = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h4 key={i} className="font-display font-extrabold text-lg text-body mt-6 mb-3">{line.substring(4)}</h4>;
      }
      if (line.startsWith('## ')) {
        return <h3 key={i} className="font-display font-extrabold text-xl text-body mt-8 mb-4">{line.substring(3)}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-muted text-sm leading-relaxed ml-4 list-disc mb-1">{line.substring(2)}</li>;
      }
      if (line.startsWith('\`\`\`javascript') || line.startsWith('\`\`\`')) {
        return null; // Handle code lines inside code containers if we want, or keep it basic
      }
      if (line.includes('\`')) {
        // Simplified code line matching
        const isCodeBlock = line.trim().startsWith('db.') || line.trim().startsWith('const') || line.trim().startsWith('x.set');
        if (isCodeBlock) {
          return (
            <pre key={i} className="p-4 rounded-xl bg-theme-surface border border-theme text-accent font-mono text-xs overflow-x-auto my-4 select-all">
              <code>{line.replace(/\`/g, '')}</code>
            </pre>
          );
        }
      }
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return <p key={i} className="text-muted text-sm leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <section id="writings" className="py-24 relative overflow-hidden bg-theme">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Technical Writings" 
          subtitle="Articles breaking down database query optimizations, animation physics, and event architectures."
          label="Publications"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col h-full rounded-2xl border border-theme bg-theme-card overflow-hidden cursor-pointer hover:border-primary/20 transition-all text-left"
              onClick={() => setActiveBlog(blog)}
            >
              {/* Image Block */}
              <div className="h-44 overflow-hidden relative border-b border-theme/60 bg-black/10">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <span className="absolute top-4 left-4 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-theme-surface/90 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Contents block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 items-center text-[10px] font-mono text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-body group-hover:text-primary transition-colors leading-snug mb-3">
                    {blog.title}
                  </h3>

                  {/* Subtag pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className="badge-tech text-[9px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-theme/50 pt-4 flex justify-between items-center text-xs font-semibold text-accent group-hover:text-primary transition-colors">
                  <span>Read Article</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* EXPANDED BLOG READER OVERLAY                                */}
        {/* ============================================================ */}
        <AnimatePresence>
          {activeBlog && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveBlog(null)}
                className="absolute inset-0 bg-black/90 cursor-zoom-out"
              />

              {/* Reader Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-theme-card border border-theme rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto z-10 shadow-2xl text-left"
              >
                {/* Banner image inside reader */}
                <div className="h-60 relative w-full bg-black/10">
                  <img
                    src={activeBlog.thumbnail}
                    alt={activeBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-card via-black/30 to-black/60" />
                  
                  {/* Actions inside Banner */}
                  <button
                    onClick={() => setActiveBlog(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-colors"
                    aria-label="Close Reader"
                  >
                    <FiX className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-8 right-8">
                    <span className="px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-theme-surface/90 rounded-full w-fit mb-3 block">
                      {activeBlog.category}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-3xl text-white leading-tight">
                      {activeBlog.title}
                    </h3>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 sm:p-10">
                  {/* Metadata header */}
                  <div className="flex gap-6 items-center text-xs font-mono text-muted border-b border-theme/60 pb-4 mb-6">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar />
                      Published on {activeBlog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock />
                      {activeBlog.readTime}
                    </span>
                    <span className="font-semibold text-accent ml-auto">Author: {name}</span>
                  </div>

                  {/* Rendered content */}
                  <div className="prose prose-invert max-w-none">
                    {renderMarkdown(activeBlog.markdown)}
                  </div>

                  <div className="w-full h-px bg-theme/50 my-8" />

                  {/* Sign off */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-theme bg-theme-surface/30">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-body block">Written by {name}</span>
                      <span className="text-muted">{title}.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
