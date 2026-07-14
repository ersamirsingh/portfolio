import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function GallerySection() {
  const galleryItems = portfolioData.gallery;
  const { name } = portfolioData.personalInfo;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
    { id: 'college', label: 'College' },
    { id: 'certificates', label: 'Certificates' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    return activeFilter === 'all' || item.category.toLowerCase() === activeFilter;
  });

  return (
    <section id="gallery" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Moments & Gallery" 
          subtitle="A visual scrapbook of workshops, hackathon presentations, and university events."
          label="Visuals"
        />

        {/* Filter Selection Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-primary/10 border-primary text-primary font-bold shadow-md'
                  : 'bg-theme-surface/50 border-theme text-muted hover:text-body hover:bg-theme-surface'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Pinterest Style Masonry (CSS columns layout) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group rounded-2xl glass-card overflow-hidden cursor-pointer shadow-sm transition-all block mb-6"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-103 ${
                    (item.title.toLowerCase().includes("iit jammu") || item.title.toLowerCase().includes("ies college")) ? "h-auto" : "h-64"
                  }`}
                />

                {/* Overlays on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="p-2.5 rounded-full bg-primary text-white w-fit mb-3 text-sm shadow-md">
                    <FiZoomIn />
                  </span>
                  <span className="font-mono text-[9px] uppercase text-accent tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* LIGHTBOX MODAL                                               */}
        {/* ============================================================ */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute inset-0 bg-black/95 cursor-zoom-out"
              />

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-theme-card border border-theme rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col lg:flex-row relative z-10 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Left Side: Image container */}
                <div className="flex-1 bg-black/50 flex items-center justify-center max-h-[50vh] lg:max-h-none lg:w-3/5">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[50vh] lg:max-h-[80vh] object-contain"
                  />
                </div>

                {/* Right Side: Details pane */}
                <div className="p-8 text-left lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-theme">
                  <span className="px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 rounded-full w-fit mb-4">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-body mb-3">{selectedImage.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{selectedImage.description}</p>
                  
                  <div className="w-full h-px bg-theme/50 mb-6" />
                  
                  <span className="font-mono text-[10px] text-muted">
                    Photo verified in {name}'s engineering logs • 2026
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
