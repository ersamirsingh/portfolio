import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    duration: '2023 – Present',
    bullets: [
      'Architected microservice integrations in FastAPI and PostgreSQL backend environments.',
      'Reduced system bottlenecks and queries to achieve a 40% response latency reduction.',
      'Mentored juniors and hosted regular RFC engineering design reviews.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Contractor',
    duration: '2022 – 2023',
    bullets: [
      'Shipped robust full-stack platforms for five international enterprise clients.',
      'Designed dynamic glassmorphic frontend layers integrating Stripe billing gateways.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    role: 'Backend Engineering Intern',
    company: 'StartUp Labs',
    duration: 'Summer 2021',
    bullets: [
      'Authored RESTful services and implemented unit testing achieving 90% codebase coverage.',
      'Assisted in data migration from legacy MySQL monolith platforms to modular systems.',
    ],
    tags: ['Node.js', 'Express', 'Jest', 'MySQL'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
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
                      <p className="text-sm text-primary font-semibold font-mono">
                        {exp.company}
                      </p>
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
                      <span key={tag} className="badge-tech">{tag}</span>
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
