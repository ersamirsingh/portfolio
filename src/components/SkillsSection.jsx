const skills = [
  {
    category: 'Frontend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    accent: '#adc6ff',
  },
  {
    category: 'Backend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices'],
    accent: '#ddb7ff',
  },
  {
    category: 'AI & LLM',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.41 1.41m9.9 9.9l1.41 1.41m0-12.72l-1.41 1.41m-9.9 9.9l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    items: ['OpenAI API', 'Gemini API', 'LangChain', 'RAG', 'AI Agents'],
    accent: '#8b5cf6',
  },
  {
    category: 'Database',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Mongoose'],
    accent: '#4cd7f6',
  },
  {
    category: 'DevOps & Cloud',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: ['Git & GitHub', 'Docker', 'AWS (EC2, S3)', 'CI/CD', 'Linux'],
    accent: '#adc6ff',
  },
];

const proficiencyData = [
  { name: 'Node.js & Express', level: 94, color: '#ddb7ff' },
  { name: 'LLM Integration & RAG', level: 92, color: '#8b5cf6' },
  { name: 'React / Next.js', level: 90, color: '#adc6ff' },
  { name: 'MongoDB / PostgreSQL', level: 88, color: '#4cd7f6' },
  { name: 'Docker / AWS', level: 80, color: '#adb6ff' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-surface-container-lowest relative border-t border-white/5">
      <div className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse at center, rgba(173, 198, 255, 0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span className="section-label mb-3 block">Technical Arsenal</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-3">
            Engineering Stack
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Precision tools engineered for performance across the entire development lifecycle.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, idx) => (
            <div
              key={skill.category}
              className="glass-card-hover p-6 group hover:-translate-y-1 transition-transform duration-300 fade-up"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-white/5 mb-5 group-hover:border-primary/50 transition-colors">
                {skill.icon}
              </div>

              {/* Category */}
              <h3 className="text-mono text-xs text-on-surface uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
                {skill.category}
              </h3>

              {/* Items */}
              <ul className="space-y-2.5">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: skill.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="glass-card p-8 fade-up">
          <h3 className="font-display font-bold text-xl text-on-surface mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {proficiencyData.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-on-surface">{item.name}</span>
                  <span className="text-mono text-xs text-on-surface-variant">{item.level}%</span>
                </div>
                <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${item.level}%`,
                      background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}aa 100%)`,
                      transitionDelay: `${i * 100}ms`,
                    }}
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
