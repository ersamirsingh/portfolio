import { motion, useReducedMotion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiTrendingUp, FiZap } from 'react-icons/fi';
import TechChip from './TechChip';
import TechMarquee from './TechMarquee';
import { getTech } from '../utils/techMap';

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
    skills: ['OpenAI API', 'Google Gemini', 'LangChain', 'LangGraph', 'RAG', 'AI Agents'],
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

const gridItems = [
  { name: 'React', label: 'FRONTEND', key: 'react' },
  { name: 'Node', label: 'BACKEND', key: 'node.js' },
  { name: 'Redis', label: 'CACHING', key: 'redis' },
  { name: 'Mongo', label: 'DATABASE', key: 'mongodb' },
  { name: 'WS', label: 'REAL-TIME', key: 'websockets' },
  { name: 'Bus', label: 'EVENTS', key: 'microservices' },
  { name: 'Vector', label: 'VECTORDB', key: 'sql & nosql databases' },
  { name: 'Graph', label: 'GRAPHDB', key: 'langgraph' },
  { name: 'RAG', label: 'RAG ENGINE', key: 'rag' }
];


export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-theme">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">Technical Arsenal</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Engineering & Stack
          </h2>
          <div className="w-12 h-1 bg-secondary rounded" />
        </div>

        {/* Horizontal Infinite Marquee */}
        <div className="mb-16">
          <TechMarquee />
        </div>

        {/* 3D CSS Flip Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
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
                    <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3 pb-2 border-b border-theme">
                      Core Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 max-h-[160px] overflow-y-auto">
                      {cat.skills.map((skill) => (
                        <TechChip key={skill} name={skill} className="text-[10px] px-2 py-0.5" />
                      ))}
                    </div>
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
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Grid Card modeled after the mock image */}
        <div className="glass-card p-8 bg-theme-surface/30 border border-theme relative overflow-hidden select-none">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-muted/90 text-sm sm:text-base font-medium leading-relaxed">
              Our technology grid delivers sub-second synchronization and offline fail-safes.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 items-start justify-center">
            {gridItems.map((item, idx) => {
              const tech = getTech(item.key);
              const Icon = tech.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                  {/* Tile */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-theme/50 border border-theme flex flex-col items-center justify-center p-3 transition-all duration-300 relative overflow-hidden cursor-none shadow-md"
                    style={{
                      borderColor: `rgba(${parseInt((tech.color.startsWith('#') ? tech.color : '#ffffff').slice(1, 3), 16) || 120}, ${parseInt((tech.color.startsWith('#') ? tech.color : '#ffffff').slice(3, 5), 16) || 120}, ${parseInt((tech.color.startsWith('#') ? tech.color : '#ffffff').slice(5, 7), 16) || 120}, 0.15)`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glowing effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: tech.color }}
                    />
                    
                    {Icon && (
                      <Icon 
                        className="w-6 h-6 sm:w-8 sm:h-8 mb-2 transition-transform duration-300"
                        style={{ color: tech.color }}
                      />
                    )}
                    <span 
                      className="text-xs sm:text-sm font-display font-bold"
                      style={{ color: tech.color }}
                    >
                      {item.name}
                    </span>
                  </motion.div>

                  {/* Subtitle Label */}
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-muted/60 tracking-wider text-center">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
