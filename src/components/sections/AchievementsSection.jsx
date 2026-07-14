import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp, FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function AchievementsSection() {
  const { stats, startupHonors } = portfolioData.achievements;
  const { codolio } = portfolioData.personalInfo;

  const getProfileLink = (name) => {
    const n = name.toLowerCase();
    if (n.includes('codolio')) return codolio;
    if (n.includes('leetcode')) return "https://leetcode.com/u/ersamirsingh/";
    if (n.includes('geeksforgeeks')) return "https://www.geeksforgeeks.org/user/ersamirsingh/";
    return "#";
  };

  return (
    <section id="achievements" className="py-32 md:py-36 relative overflow-hidden bg-theme">
      {/* Visual background lights */}
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Achievements & Coding Profiles" 
          subtitle="Compiling algorithmic solve metrics, competitive standing, and enterprise honors."
          label="Accolades"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Column: Coding Profile Stats */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="p-2 rounded-lg bg-white/5 text-accent text-lg">
                      <FiCode />
                    </span>
                    <span className="text-[10px] font-mono text-muted uppercase">Verified Status</span>
                  </div>

                  <h4 className="font-display font-bold text-sm text-muted mb-1">{stat.name}</h4>
                  <span className="text-2xl font-black text-body font-display block mb-3">{stat.value}</span>
                  <p className="text-xs text-muted leading-relaxed">{stat.description}</p>
                </div>

                <div className="pt-3 mt-6 flex justify-end">
                  <a
                    href={getProfileLink(stat.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-mono text-accent hover:text-body flex items-center gap-1 transition-colors"
                  >
                    View Profile
                    <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Startup & Academic Honors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Startup Honors card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-card text-left flex-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-2xl bg-primary/10 text-primary text-xl">
                  💼
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-body">Startup Incubation</h3>
                  <span className="text-[10px] font-mono text-muted uppercase">Surplus Operations</span>
                </div>
              </div>

              <ul className="space-y-4">
                {startupHonors.map((h, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-muted">
                    <span className="text-primary font-bold">▪</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Micro Leetcode heat progress visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-3xl glass-card text-left flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🔥</span>
                <div>
                  <span className="font-display font-bold text-sm text-body block">Continuous Streak</span>
                  <span className="text-[10px] font-mono text-muted">Daily engineering commits logged</span>
                </div>
              </div>
              <span className="font-mono text-2xl font-extrabold text-accent">142 Days</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
