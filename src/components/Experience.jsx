import { motion, useReducedMotion } from 'framer-motion';
import TechChip from './TechChip';
import { FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    role: 'R&D Engineering Intern',
    company: 'IEEE',
    duration: "Jun 2025 – Jul 2025",
    bullets: [
      'Authored research findings and analysed IEEE publications, contributing to technical standardization studies.',
      'Implemented performance-critical backend algorithms and compiled benchmarking reports for high-performance networks.',
      'Coordinated with local chapter engineers to support technical webinars and research workshops.',
    ],
    tags: ['Linux Shell', 'Python', 'Git & GitHub', 'AWS'],
    verifyUrl: 'https://drive.google.com/file/d/1gjptHGkEgrY0Ko8GsOLXkpIuYEmx5Yz1/view?usp=drive_link',
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'EduTech (Virtual)',
    duration: "Apr 2025 – Jun 2025",
    bullets: [
      'Designed and developed modular full-stack educational dashboard portals using the MERN stack.',
      'Integrated RESTful backend API layers in Node.js and scaled MongoDB enrollment schemas.',
      'Styled clean, responsive frontend layouts using Tailwind CSS and React.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Express'],
    verifyUrl: 'https://drive.google.com/file/d/1JJCxPZ8uFSH9hm2DYu_CrOU1hwLUl0rK/view?usp=drive_link',
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-theme-surface">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-3 block">Career Path</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary/40 to-transparent" />

          {/* Staggered Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex gap-8 relative"
              >
                {/* Timeline Node/Dot */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-theme border-2 border-theme flex items-center justify-center shadow-lg">
                    <div className="timeline-dot bg-primary border-primary animate-pulse" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-card bg-theme/40 p-6 sm:p-8 border border-theme flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-body">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-primary font-semibold font-mono">
                          {exp.company}
                        </p>
                        {exp.verifyUrl && (
                          <a
                            href={exp.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono text-muted bg-theme hover:text-primary hover:bg-primary/10 border border-theme px-2 py-0.5 rounded transition-all flex items-center gap-1 cursor-none"
                          >
                            Verify Certificate
                            <FiExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted bg-theme-surface border border-theme px-3 py-1.5 rounded-full flex-shrink-0 self-start">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 mb-6 text-muted text-sm leading-relaxed">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <TechChip key={tag} name={tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
