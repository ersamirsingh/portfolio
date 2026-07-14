import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function JourneySection() {
  const journey = portfolioData.journey;

  return (
    <section id="journey" className="py-32 md:py-36 relative overflow-hidden bg-theme">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="My Journey" 
          subtitle="A roadmap of learning, startup operations, and professional roles."
          label="Milestones"
        />

        <div className="relative border-l border-theme/80 max-w-4xl mx-auto mt-16 pl-6 sm:pl-10 space-y-12">
          {/* Central Vertical Line accent */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent" />

          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group text-left"
            >
              {/* Timeline Bullet node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-primary bg-theme-surface transition-all duration-300 group-hover:scale-130 group-hover:bg-accent glow-primary" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl glass-card transition-all duration-300 shadow-sm relative overflow-hidden">
                {/* Shiny accent line on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-primary transition-all duration-300" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.type}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-body group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-accent font-semibold">
                    {item.year}
                  </span>
                </div>

                <h4 className="font-display text-sm font-semibold text-body/90 mb-3 flex items-center gap-1.5">
                  <span className="text-muted/60">at</span> {item.company}
                </h4>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Subtag pills */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="badge-tech text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future Goals Node */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group text-left"
          >
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-secondary bg-theme-surface animate-ping" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-secondary" />
            </div>

            <div className="p-6 rounded-2xl glass-card relative">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 text-[10px] font-mono rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  Horizon
                </span>
                <span className="font-mono text-xs text-secondary font-semibold">2026 & Beyond</span>
              </div>
              <h3 className="font-display font-bold text-lg text-body">Scaling Distribution & AI Pipelines</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                Looking to join high-performing engineering teams working on cloud scale microservices, distributed query processing, and AI workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
