import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const projectsList = [
  {
    id: '01',
    title: 'Restaurant Management System',
    shortDesc: 'High-performance sync gateway linking Petpooja and UrbanPiper APIs with live franchise tracking dashboards.',
    longDesc: 'A comprehensive franchise management interface designed to synchronize real-time orders, menu configurations, and inventory levels. It features automated alerts, historical analytics, role-based authorization, and instant socket connections for order updates.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'TailwindCSS'],
    gradient: 'from-blue-600/50 to-indigo-900/80',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: '02',
    title: 'Karigar - Local Gig Economy Platform',
    shortDesc: 'A localized workforce matching system with real-time location-based clusters and unified payments.',
    longDesc: 'An on-demand gig economy platform connecting local workers with short-term manual labor opportunities. Includes geographical radius filters, live chat routing, in-app billing, and worker review/rating profiles.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe'],
    gradient: 'from-teal-600/50 to-cyan-900/80',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: '03',
    title: 'DSA Platform (LeetCode Clone)',
    shortDesc: 'Competitive coding judge deploying secure Docker containers to evaluate user-submitted scripts.',
    longDesc: 'An online compiler platform for coding practice. Leverages isolated sandboxed Docker containers running Node/Python compiler instances. Uses Redis job queues to process tasks and score execution time/memory footprints.',
    tags: ['React', 'Node.js', 'Docker', 'Redis', 'MongoDB'],
    gradient: 'from-purple-600/50 to-indigo-950/80',
    liveUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 15;
    const angleY = (x - xc) / 15;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-theme-surface">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-3 block">Portfolio</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Featured Systems
          </h2>
          <div className="w-12 h-1 bg-tertiary rounded" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-card bg-theme border border-theme rounded-2xl overflow-hidden cursor-none flex flex-col h-full transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cover Card */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-4 border-b border-theme`}>
                <span className="text-white/20 font-mono font-bold text-7xl absolute left-4 bottom-2 select-none">
                  {project.id}
                </span>
                <span className="text-white font-display font-bold text-lg text-center tracking-wide drop-shadow-md">
                  {project.title}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-muted/90 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="badge-tech">{t}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="badge-tech">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-theme-surface border border-theme rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              {/* Image banner */}
              <div className={`h-48 w-full bg-gradient-to-br ${selectedProject.gradient} relative flex items-center justify-center p-6 border-b border-theme flex-shrink-0`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/35 hover:bg-black/50 text-white transition-colors cursor-none"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <h3 className="text-white font-display font-extrabold text-2xl text-center tracking-wide drop-shadow-md">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Scrollable details */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="badge-tech">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-theme">
                  <a
                    href={selectedProject.liveUrl}
                    className="flex-1 py-3 px-4 rounded-xl bg-primary text-on-primary text-center font-bold text-sm hover:bg-primary-fixed transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    See Live
                  </a>
                  <a
                    href={selectedProject.codeUrl}
                    className="flex-1 py-3 px-4 rounded-xl border border-theme bg-theme text-body text-center font-semibold text-sm hover:bg-theme-surface transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
                  >
                    <FiGithub className="w-4 h-4" />
                    Check Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
