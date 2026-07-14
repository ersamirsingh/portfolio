import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBookmark, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { getTech } from '../../utils/techMap';
import { portfolioData } from '../../data/portfolioData';

// Modular child component for each featured project to isolate local tab states
function FeaturedProjectCard({ project }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview & Features' },
    { id: 'architecture', label: 'Architecture & Role' },
    { id: 'caseStudy', label: 'Case Study & Metrics' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="p-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/35 shadow-2xl mb-12 shadow-[0_0_50px_rgba(37,99,235,0.08)]"
    >
      <div className="glass-card rounded-[22px] p-6 sm:p-10 overflow-hidden text-left relative">
        {/* Corner badge */}
        <div className="absolute top-0 right-0 bg-primary text-white font-mono text-[10px] tracking-widest font-extrabold uppercase px-6 py-2 rounded-bl-2xl">
          Flagship Production
        </div>

        {/* Title & Tagline */}
        <div className="mb-8">
          <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold block mb-2">Featured Project</span>
          <h3 className="font-display font-black text-3xl sm:text-5xl text-body mb-2">{project.title}</h3>
          <p className="text-muted text-sm sm:text-base max-w-2xl">{project.tagline}</p>
        </div>

        {/* Grid: Image and Details Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Visual Graphic Representation */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-theme shadow-md">
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[10px] font-mono text-white/80">Enterprise Infrastructure Mock</span>
            </div>
          </div>

          {/* Tabbed Info Pane */}
          <div className="lg:col-span-7 flex flex-col h-full justify-between">
            {/* Tab Selector */}
            <div className="flex mb-6 gap-4 overflow-x-auto pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-b-2 border-primary text-primary font-bold'
                      : 'text-muted hover:text-body border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[220px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-sm"
                  >
                    <p className="text-muted leading-relaxed">{project.description}</p>
                    <div>
                      <span className="font-mono text-xs uppercase text-accent font-semibold block mb-2">Core Features</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="text-primary font-bold">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-sm"
                  >
                    <div>
                      <span className="font-mono text-xs uppercase text-accent font-semibold block mb-1">Architecture Overview</span>
                      <p className="text-muted leading-relaxed text-xs">{project.architecture}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase text-accent font-semibold block mb-2">My Responsibilities</span>
                      <ul className="space-y-2 text-xs text-muted">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="text-primary font-bold">▪</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'caseStudy' && (
                  <motion.div
                    key="caseStudy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-sm"
                  >
                    <p className="text-muted text-xs leading-relaxed">{project.caseStudy}</p>
                    <div className="p-4 rounded-xl bg-white/5">
                      <span className="font-mono text-xs text-secondary font-semibold block mb-1">The Challenge & Solution</span>
                      <p className="text-xs text-body leading-relaxed">
                        <strong>Challenge:</strong> {project.challenges}<br/>
                        <strong>Solution:</strong> {project.solutions}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions & Tech stack footer */}
            <div className="mt-8 pt-6 flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => {
                  const techCfg = getTech(t);
                  const TIcon = techCfg.icon;
                  return (
                    <span key={idx} className="badge-tech text-[10px] flex items-center gap-1">
                      {TIcon && <TIcon className="text-xs" style={{ color: techCfg.color }} />}
                      {t}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-body text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <FiGithub />
                  Source
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold flex items-center gap-1.5 hover:bg-primary/95 transition-all shadow-md shadow-primary/20"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 mt-6">
          {Object.keys(project.metrics).map((mKey, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 text-left">
              <span className="text-xs text-muted block mb-1 capitalize">
                {mKey.replace(/([A-Z])/g, ' $1')}
              </span>
              <span className="text-2xl font-black text-accent font-display">
                {project.metrics[mKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { featured, others } = portfolioData.projects;

  return (
    <section id="projects" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Projects & Productions" 
          subtitle="A collection of full-stack services, real-time sync systems, and open source toolkits."
          label="Portfolio"
        />

        {/* ============================================================ */}
        {/* FEATURED PROJECTS SHOWCASE                                  */}
        {/* ============================================================ */}
        <div className="mb-20">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ============================================================ */}
        {/* SECONDARY PROJECTS GRID                                     */}
        {/* ============================================================ */}
        {others && others.length > 0 && (
          <>
            <h3 className="font-display font-extrabold text-2xl text-body mb-8 text-left">Additional Productions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((proj, i) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-full"
                >
                  <TiltCard className="p-6 rounded-2xl bg-theme-card/75 backdrop-blur-xl border border-primary/25 hover:border-accent/40 shadow-[0_0_30px_rgba(96,165,250,0.03)] hover:shadow-[0_0_50px_rgba(37,99,235,0.15)] flex flex-col justify-between h-full select-none text-left transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="p-2 rounded-lg bg-theme-surface border border-theme flex items-center justify-center text-accent">
                          <FiBookmark />
                        </span>
                        <div className="flex items-center gap-3">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-body transition-colors"
                            aria-label="Source code"
                          >
                            <FiGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={proj.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-body transition-colors"
                            aria-label="Live preview"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <h4 className="font-display font-extrabold text-xl text-body mb-1">{proj.title}</h4>
                      {proj.subtitle && <span className="font-mono text-[9px] text-accent font-semibold block mb-2">{proj.subtitle}</span>}
                      <p className="text-muted text-xs leading-relaxed mb-6">{proj.description}</p>
                    </div>

                    <div>
                      {/* Performance Index metric wrapper */}
                      <div className="p-3.5 rounded-xl border border-theme/60 bg-theme-surface/50 mb-4 text-xs">
                        <span className="font-mono text-[9px] uppercase text-muted block mb-1">Performance Index</span>
                        <div className="flex justify-between items-center text-body font-mono">
                          {Object.keys(proj.metrics).map((mKey, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="text-[9px] text-muted">{mKey.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="font-bold text-accent">{proj.metrics[mKey]}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="badge-tech text-[9px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
