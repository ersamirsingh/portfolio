import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { getTech } from '../../utils/techMap';
import { portfolioData } from '../../data/portfolioData';

export default function SkillsSection() {
  const allSkills = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Assemble list of all skills labeled with their respective category
  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'devopsCloud', label: 'DevOps & Cloud' },
    { id: 'aiTools', label: 'AI & Engineering Tools' }
  ];

  // Flatten skills with category identifiers
  const flattenedSkills = [];
  Object.keys(allSkills).forEach((catKey) => {
    allSkills[catKey].forEach((skill) => {
      flattenedSkills.push({
        ...skill,
        category: catKey
      });
    });
  });

  // Filter logic
  const filteredSkills = flattenedSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-32 md:py-36 relative overflow-hidden bg-theme">
      {/* Visual accents */}
      <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="My technical stack, proficiency levels, and where they have been deployed in production."
          label="Abilities"
        />

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted pointer-events-none">
              <FiSearch className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search skills (e.g. React, Docker...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-theme bg-theme-surface/50 text-body text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary/10 border-primary text-primary font-bold shadow-md'
                    : 'bg-theme-surface/50 border-theme text-muted hover:text-body hover:bg-theme-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const techConfig = getTech(skill.name);
              const TechIcon = techConfig.icon;
              const iconColor = techConfig.color || '#9CA3AF';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="w-full"
                >
                  <TiltCard className="p-6 rounded-2xl glass-card flex flex-col justify-between h-full select-none text-left">
                    <div>
                      {/* Logo and Name header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span 
                            className="p-2.5 rounded-xl bg-theme-surface border border-theme/80 flex items-center justify-center text-2xl"
                            style={{ color: iconColor }}
                          >
                            {TechIcon ? <TechIcon /> : <span>⚡</span>}
                          </span>
                          <div>
                            <h4 className="font-display font-bold text-base text-body">{skill.name}</h4>
                            <span className="text-[10px] font-mono text-muted uppercase">{skill.category}</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-accent font-semibold">{skill.exp}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-muted/80">Proficiency</span>
                          <span className="text-body font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-theme-surface rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Where used */}
                    {skill.projects && skill.projects.length > 0 && (
                      <div className="mt-auto border-t border-theme/50 pt-3">
                        <span className="text-[9px] uppercase font-mono text-muted tracking-wider block mb-1.5">Projects Used In</span>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.projects.map((proj, pIdx) => (
                            <span key={pIdx} className="px-2 py-0.5 rounded text-[9px] font-medium bg-theme-surface border border-theme/80 text-muted">
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredSkills.length === 0 && (
          <div className="py-20 text-center border border-dashed border-theme rounded-3xl bg-theme-surface/10">
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-lg text-body mt-4">No skills found</h3>
            <p className="text-muted text-sm mt-1">Try searching for another keyword or change your filter selection.</p>
          </div>
        )}
      </div>
    </section>
  );
}
