const projects = [
  {
    id: '01',
    title: 'Restaurant Management System',
    description:
      'A comprehensive, high-performance dashboard integrating seamlessly with Urban Piper and Petpooja APIs. Engineered to handle real-time order synchronization, complex inventory tracking, and robust analytics across multiple franchise locations.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    accent: 'primary',
    featured: true,
    imgAlt: 'Restaurant Management Dashboard',
    imgGradient: 'from-blue-900/60 via-indigo-900/40 to-purple-900/60',
  },
  {
    id: '02',
    title: 'Karigar – Local Workforce Platform',
    description:
      'A scalable marketplace connecting flexible jobs with local skilled workers. Features geolocation matching, real-time secure messaging, and automated payment gateway integration ensuring trust and transparency.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    accent: 'secondary',
    featured: false,
    imgGradient: 'from-teal-900/60 via-cyan-900/40 to-blue-900/60',
  },
  {
    id: '03',
    title: 'DSA Platform (LeetCode Clone)',
    description:
      'A specialized platform for practicing Data Structures and Algorithms. Built with a highly secure remote code execution environment, user progress tracking, and an intuitive custom code editor interface.',
    tags: ['MERN', 'Docker', 'Redis'],
    accent: 'tertiary',
    featured: false,
    imgGradient: 'from-purple-900/60 via-pink-900/40 to-indigo-900/60',
  },
];

const accentColors = {
  primary: '#adc6ff',
  secondary: '#ddb7ff',
  tertiary: '#4cd7f6',
};

function ProjectImage({ project }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${project.imgGradient} relative flex items-center justify-center overflow-hidden`}>
      {/* Decorative code pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute text-mono text-xs text-primary/60 leading-6"
            style={{ top: `${10 + i * 11}%`, left: `${5 + (i % 3) * 30}%`, opacity: 0.4 - i * 0.04 }}>
            {i % 3 === 0 ? `const api = require('express')` : i % 3 === 1 ? `db.connect({ uri })` : `router.get('/orders', auth)`}
          </div>
        ))}
      </div>
      {/* Central icon */}
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 fade-up">
          <div>
            <span className="section-label mb-3 block">Featured Work</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-3">
              Featured Systems
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              Architecting solutions that process complex logic behind clean interfaces.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-primary-fixed text-sm font-mono flex items-center gap-1 group transition-colors">
            View Archive
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const color = accentColors[project.accent];
            if (project.featured) {
              return (
                <div
                  key={project.id}
                  className="col-span-1 lg:col-span-2 glass-card-hover overflow-hidden group flex flex-col md:flex-row fade-up"
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-surface-container-lowest">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ProjectImage project={project} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-mono text-xs px-2 py-1 rounded border"
                        style={{ color, backgroundColor: `${color}15`, borderColor: `${color}30` }}
                      >
                        {project.id}
                      </span>
                      <div className="flex gap-3">
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge-tech">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="glass-card-hover overflow-hidden group flex flex-col fade-up"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="w-full h-52 relative overflow-hidden bg-surface-container-lowest border-b border-white/5">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                    <ProjectImage project={project} />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm" style={{ color }}>{project.id}</span>
                    <div className="flex gap-2">
                      <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </a>
                      {project.id !== '02' && (
                        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge-tech">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
