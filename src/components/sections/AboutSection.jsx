import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { portfolioData } from '../../data/portfolioData';

export default function AboutSection() {
  const { mission, vision, careerGoal, coreValues, highlights, personalInfo } = portfolioData.about;
  const { name, title, bio } = portfolioData.personalInfo;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <section id="about" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="About Me" 
          subtitle="My mission, engineering philosophy, and values."
          label="Identity"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Card & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative"
            >
              {/* Decorative glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

              {/* Profile Placeholder Image / High Tech SVG Avatar */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-extrabold mb-6 shadow-xl relative overflow-hidden">
                <span className="relative z-10">SS</span>
                {/* Digital circuit look overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-65" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-body mb-1">{name}</h3>
              <p className="text-accent font-mono text-xs mb-4">{title}</p>
              
              <p className="text-muted text-sm leading-relaxed mb-6">
                "Writing modular, highly performance-oriented code that bridges real-world business needs with excellent visual feedback."
              </p>

              <div className="w-full h-px bg-theme/50 mb-6" />

              {/* Micro Stats inside about */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-muted">Specialty</span>
                  <span className="block text-sm font-bold text-body">MERN / API</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-muted">Core Focus</span>
                  <span className="block text-sm font-bold text-body">Scale & Speed</span>
                </div>
              </div>
            </motion.div>

            {/* Highlights Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-card text-left"
            >
              <h4 className="font-display font-bold text-lg text-body mb-4 flex items-center gap-2">
                <span className="text-primary font-mono">&gt;</span> Key Highlights
              </h4>
              <ul className="space-y-3.5">
                {highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Mission, Vision, and Values */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-card"
            >
              <h3 className="font-display font-extrabold text-2xl text-body mb-4">My Story</h3>
              <p className="text-muted text-base leading-relaxed mb-6">
                {bio}
              </p>
              <div className="p-4 rounded-xl bg-white/5">
                <span className="font-mono text-xs text-accent font-semibold block mb-1">Career Goal</span>
                <p className="text-sm text-body">{careerGoal}</p>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TiltCard className="p-8 rounded-3xl glass-card flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4 font-bold">🎯</div>
                  <h4 className="font-display font-bold text-lg text-body mb-2">My Mission</h4>
                  <p className="text-muted text-sm leading-relaxed">{mission}</p>
                </div>
              </TiltCard>

              <TiltCard className="p-8 rounded-3xl glass-card flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-xl mb-4 font-bold">👁️</div>
                  <h4 className="font-display font-bold text-lg text-body mb-2">My Vision</h4>
                  <p className="text-muted text-sm leading-relaxed">{vision}</p>
                </div>
              </TiltCard>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-xl text-body mb-4">Core Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreValues.map((val, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="p-5 rounded-2xl glass-card hover:bg-white/10 transition-all"
                  >
                    <h5 className="font-display font-bold text-sm text-body mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {val.title}
                    </h5>
                    <p className="text-xs text-muted leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
