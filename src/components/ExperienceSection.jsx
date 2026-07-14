const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2023 – Present',
    description:
      'Architected and deployed scalable microservices using FastAPI and PostgreSQL. Reduced API latency by 40% through query optimization and caching strategies. Led a small team of junior developers.',
    tags: ['FastAPI', 'PostgreSQL', 'AWS'],
    color: '#adc6ff',
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    period: '2022 – 2023',
    description:
      'Delivered end-to-end MERN stack solutions for 5+ international clients. Designed responsive, glassmorphic UIs and integrated secure payment gateways.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#ddb7ff',
  },
  {
    role: 'Backend Engineering Intern',
    company: 'StartUp Labs',
    period: 'Summer 2021',
    description:
      'Developed RESTful APIs and wrote comprehensive unit tests. Assisted in migrating legacy monolithic codebases to modular services.',
    tags: ['Node.js', 'Express', 'Jest'],
    color: '#4cd7f6',
  },
];

const digitalLinks = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" strokeWidth={1.5} />
      </svg>
    ),
    label: 'LinkedIn',
    handle: '@ersamirsingh',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'GitHub',
    handle: '@ersamirsingh',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: 'LeetCode',
    handle: '@ersamirsingh',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Codolio',
    handle: '@ersamirsingh',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(221, 183, 255, 0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span className="section-label mb-3 block">Career Path</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-3">
            Experience & Expertise
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Bridging the gap between complex algorithms and scalable product architecture.
          </p>
        </div>

        {/* Mission + Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card p-8 fade-up">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="section-label text-primary">Mission Statement</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              I build scalable products, consistently solving complex DSA problems to ensure optimal performance.
              My architecture philosophy leans heavily on robust, type-safe environments and high-throughput backend services.
            </p>
            <div className="flex flex-wrap gap-2">
              {['System Design', 'Algorithm Optimization', 'API Architecture'].map((tag) => (
                <span key={tag} className="badge-tech">{tag}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              <span className="section-label text-primary">Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MERN', 'TypeScript', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-mono bg-primary/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div className="mb-16 fade-up">
          <h3 className="font-display font-bold text-2xl text-on-surface mb-10 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Professional Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={exp.role} className="flex gap-6 fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                  {/* Dot */}
                  <div className="flex-shrink-0 mt-4">
                    <div className="timeline-dot" style={{ borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}50` }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card-hover p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-bold text-lg text-on-surface">{exp.role}</h4>
                        <p className="text-sm font-mono" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full border border-white/5 flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="badge-tech">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Footprint */}
        <div className="fade-up">
          <span className="section-label mb-6 block">Digital Footprint</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {digitalLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="glass-card-hover p-6 flex flex-col items-center gap-3 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                  {link.icon}
                </span>
                <div>
                  <div className="font-medium text-on-surface text-sm">{link.label}</div>
                  <div className="font-mono text-xs text-on-surface-variant">{link.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
