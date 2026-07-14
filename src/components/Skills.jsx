import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiTrendingUp, FiZap } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FiLayout className="w-6 h-6 text-primary" />,
    description: 'Creating interactive, highly performant client interfaces.',
    skills: ['React.js', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    proficiency: 82,
    accent: 'primary',
  },
  {
    title: 'Backend Engineering',
    icon: <FiServer className="w-6 h-6 text-secondary" />,
    description: 'Designing high-throughput API microservices and secure layers.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST & GraphQL', 'Microservices'],
    proficiency: 94,
    accent: 'secondary',
  },
  {
    title: 'AI & LLM Integration',
    icon: <FiZap className="w-6 h-6 text-accent" />,
    description: 'Building AI-powered applications with LLMs, RAG, and intelligent automation.',
    skills: ['OpenAI API', 'Google Gemini', 'LangChain','RAG','AI Agents'],
    proficiency: 92,
    accent: 'accent',
  },
  {
    title: 'Database Architecture',
    icon: <FiDatabase className="w-6 h-6 text-tertiary" />,
    description: 'Modeling, scaling, and managing relational & non-relational data.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Mongoose'],
    proficiency: 85,
    accent: 'tertiary',
  },
  {
    title: 'DevOps & Systems',
    icon: <FiCpu className="w-6 h-6 text-primary" />,
    description: 'Automating pipelines, containerizing, and cloud orchestration.',
    skills: ['Git & GitHub', 'Docker', 'AWS (EC2, S3)', 'CI/CD Pipelines', 'Linux Shell'],
    proficiency: 78,
    accent: 'primary',
  },
];

const accentColors = {
  primary: 'rgba(173, 198, 255, 0.4)',
  secondary: 'rgba(221, 183, 255, 0.4)',
  tertiary: 'rgba(76, 215, 246, 0.4)',
  accent: 'rgba(99, 102, 241, 0.4)'
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-theme">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-3 block">Technical Arsenal</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Engineering & Stack
          </h2>
          <div className="w-12 h-1 bg-secondary rounded" />
        </div>

        {/* 3D CSS Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="flip-card h-80 w-full"
            >
              <div className="flip-card-inner w-full h-full">
                {/* Front Side */}
                <div className="flip-card-front glass-card p-6 flex flex-col justify-between border border-theme bg-theme-surface/40">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-theme-surface border border-theme flex items-center justify-center mb-5">
                      {cat.icon}
                    </div>
                    <h3 className="font-display font-bold text-base text-body mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted/80 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-mono font-medium">
                    <FiTrendingUp className="w-3.5 h-3.5" />
                    <span>Hover to inspect</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back glass-card p-6 flex flex-col justify-between border border-theme bg-theme-surface shadow-xl">
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4 pb-2 border-b border-theme">
                      Core Stack
                    </h4>
                    <ul className="space-y-2">
                      {cat.skills.slice(0, 4).map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-xs text-body font-medium">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: accentColors[cat.accent].replace('0.4', '1') }}
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-muted">PROFICIENCY</span>
                      <span className="text-body font-bold">{cat.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-theme rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${cat.proficiency}%`,
                          backgroundColor: accentColors[cat.accent].replace('0.4', '1'),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll-fill Proficiency Bar Section */}
        <div className="glass-card p-8 bg-theme-surface/30">
          <h3 className="font-display font-bold text-lg text-body mb-6">
            Ecosystem Comfort
          </h3>
          <div className="space-y-6">
            {[
              { name: 'Node.js & Express Backend', level: 94, color: 'var(--secondary)' },
              { name: 'LLM Integration & RAG Systems', level: 92, color: 'var(--tertiary)' },
              { name: 'React & Next.js Development', level: 90, color: 'var(--primary)' },
              { name: 'SQL & NoSQL Databases', level: 88, color: 'var(--tertiary)' },
              { name: 'Docker & AWS Deployment', level: 80, color: 'var(--primary)' },
            ].map((bar, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="text-muted font-medium">{bar.name}</span>
                  <span className="text-body font-bold">{bar.level}%</span>
                </div>
                <div className="h-2 bg-theme rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                    style={{ backgroundColor: bar.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
