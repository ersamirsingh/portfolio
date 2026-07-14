import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiLinkedin } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function TestimonialsSection() {
  const testimonials = portfolioData.testimonials;
  const [index, setIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-32 md:py-36 relative overflow-hidden bg-theme">
      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <SectionHeader 
          title="Testimonials" 
          subtitle="Mentorship, co-founder, and team reports regarding collaboration."
          label="Endorsements"
        />

        {/* Carousel slide container */}
        <div className="relative min-h-[300px] flex items-center justify-center mt-12 px-4 sm:px-12">
          
          {/* Controls: Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-3.5 rounded-full border border-theme bg-theme-card text-body hover:bg-theme-surface transition-all z-10 cursor-pointer hidden sm:block"
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide item wrapping with framer-motion */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl bg-theme-card border border-theme relative flex flex-col items-center text-center shadow-xl"
              >
                {/* Quote Accent graphic */}
                <span className="text-primary/10 text-8xl font-serif absolute -top-4 left-6 select-none pointer-events-none">
                  “
                </span>

                <p className="text-body text-base sm:text-lg italic leading-relaxed mb-8 max-w-2xl relative z-10">
                  "{activeTestimonial.review}"
                </p>

                {/* Avatar portrait */}
                <img
                  src={activeTestimonial.photo}
                  alt={activeTestimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-primary object-cover mb-4 shadow-md"
                />

                <h4 className="font-display font-extrabold text-base text-body">{activeTestimonial.name}</h4>
                
                <p className="text-muted text-xs font-semibold mt-1">
                  {activeTestimonial.role} at <span className="text-accent">{activeTestimonial.company}</span>
                </p>

                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 p-2 rounded-lg bg-theme-surface border border-theme text-muted hover:text-body text-sm transition-colors flex items-center justify-center"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-3.5 rounded-full border border-theme bg-theme-card text-body hover:bg-theme-surface transition-all z-10 cursor-pointer hidden sm:block"
            aria-label="Next Testimonial"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel indicators (dots) */}
        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === idx ? 'bg-primary w-6 shadow-sm shadow-primary/30' : 'bg-border'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
