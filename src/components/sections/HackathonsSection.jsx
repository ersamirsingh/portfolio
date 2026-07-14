import { motion } from 'framer-motion';
import { FiAward, FiPlay, FiBookOpen, FiActivity } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function HackathonsSection() {
  const hackathons = portfolioData.hackathons;

  return (
    <section id="hackathons" className="py-32 md:py-36 relative overflow-hidden bg-theme">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Hackathons" 
          subtitle="Prototyping functional product architectures under 36-hour timelines."
          label="Competitions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {hackathons.map((hack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-3xl glass-card transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                {/* Visual Accent Banner Block */}
                <div className="h-36 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden mb-6">
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 bg-grid opacity-[0.1] pointer-events-none" />
                  <span className="p-4 rounded-full bg-white/5 text-3xl text-accent shadow-lg">
                    🏆
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="font-display font-extrabold text-xl text-body">{hack.title}</h3>
                  <span className="px-3 py-1 text-[10px] font-mono font-bold rounded-full bg-accent/10 text-accent flex items-center gap-1">
                    <FiAward />
                    {hack.achievement}
                  </span>
                </div>

                {/* Problem & Role */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 text-xs">
                    <span className="font-mono text-[9px] uppercase text-muted block mb-1">Problem Solved</span>
                    <p className="text-body leading-relaxed">{hack.problem}</p>
                  </div>

                  <div className="flex gap-6 items-center text-xs">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-muted block mb-0.5">My Role</span>
                      <span className="font-semibold text-body">{hack.role}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-muted block mb-0.5">Team Size</span>
                      <span className="font-semibold text-body">4 Developers</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <span className="font-mono text-[9px] uppercase text-muted block mb-2">Technologies Used</span>
                  <div className="flex flex-wrap gap-2">
                    {hack.tech.map((t, idx) => (
                      <span key={idx} className="badge-tech text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex gap-4 mt-6">
                {hack.certificateUrl && hack.certificateUrl !== '#' && (
                  <a
                    href={hack.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-accent hover:text-body flex items-center gap-1.5 transition-colors"
                  >
                    <FiAward className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                )}
                {hack.presentationLink && hack.presentationLink !== '#' && (
                  <a
                    href={hack.presentationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-muted hover:text-body flex items-center gap-1.5 transition-colors"
                  >
                    <FiBookOpen className="w-3.5 h-3.5" />
                    Presentation
                  </a>
                )}
                {hack.demoLink && hack.demoLink !== '#' && (
                  <a
                    href={hack.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-muted hover:text-body flex items-center gap-1.5 transition-colors"
                  >
                    <FiPlay className="w-3.5 h-3.5" />
                    Live Prototype
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
