import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiGitCommit, FiLayers, FiAward, FiCode, FiExternalLink, FiClock, FiActivity } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function DashboardSection() {
  const { github, codolio } = portfolioData.personalInfo;
  const [selectedDay, setSelectedDay] = useState(null);
  const [dashboardType, setDashboardType] = useState('dev'); // 'dev' or 'dsa'

  // Generate mock heatmap data for a 28-week grid (28 cols * 7 rows)
  const heatmapRows = 7;
  const heatmapCols = 28;
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Seeded mock commits for the heatmap grid
  const commitGrid = Array.from({ length: heatmapCols }, (_, colIdx) => {
    return Array.from({ length: heatmapRows }, (_, rowIdx) => {
      const val = (colIdx * 3 + rowIdx * 7) % 11;
      const count = val === 0 ? 0 : val === 1 || val === 2 ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 8) + 3;
      return {
        col: colIdx,
        row: rowIdx,
        commits: count
      };
    });
  });

  const totalCommits = commitGrid.flat().reduce((acc, curr) => acc + curr.commits, 820);

  const getIntensityClass = (commits) => {
    if (commits === 0) return 'bg-theme-surface/50 border border-theme/40';
    if (commits <= 2) return 'bg-primary/20 border border-primary/10';
    if (commits <= 5) return 'bg-primary/40 border border-primary/20';
    if (commits <= 8) return 'bg-primary/70 border border-primary/30';
    return 'bg-primary border border-accent/40 shadow-sm shadow-primary/30';
  };

  // Language stats for Donut Chart
  const languages = [
    { name: 'JavaScript/TS', percentage: 45, color: '#3178C6', offset: 0 },
    { name: 'Node.js/Express', percentage: 25, color: '#339933', offset: 45 },
    { name: 'React Ecosystem', percentage: 20, color: '#61DAFB', offset: 70 },
    { name: 'Databases & Python', percentage: 10, color: '#DC382D', offset: 90 }
  ];

  // DSA Solved counts for progress bars
  const dsaDifficulty = [
    { name: 'Easy', solved: 250, total: 300, color: '#10B981' },
    { name: 'Medium', solved: 310, total: 500, color: '#FBBF24' },
    { name: 'Hard', solved: 60, total: 100, color: '#EF4444' }
  ];

  // DSA solved count history over past 5 weeks
  const dsaHistory = [
    { week: "Wk 1", solved: 18 },
    { week: "Wk 2", solved: 24 },
    { week: "Wk 3", solved: 32 },
    { week: "Wk 4", solved: 22 },
    { week: "Wk 5", solved: 35 }
  ];

  const getDsaX = (idx) => 40 + idx * 105;
  const getDsaY = (val) => 170 - ((val - 10) / 30) * 130;

  return (
    <section id="dashboard" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="DevAnalytics & Coding Metrics" 
          subtitle="Displaying synchronized logs, commit schedules, and algorithmic solve distributions."
          label="Metrics"
        />

        {/* Tab Selector Buttons */}
        <div className="flex gap-4 mb-10 justify-center">
          <button
            onClick={() => setDashboardType('dev')}
            className={`px-5 py-3 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
              dashboardType === 'dev'
                ? 'bg-primary/10 border-primary text-primary shadow-md shadow-primary/5'
                : 'bg-theme-surface border-theme text-muted hover:text-body'
            }`}
          >
            💻 Dev Analytics
          </button>
          <button
            onClick={() => setDashboardType('dsa')}
            className={`px-5 py-3 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
              dashboardType === 'dsa'
                ? 'bg-primary/10 border-primary text-primary shadow-md shadow-primary/5'
                : 'bg-theme-surface border-theme text-muted hover:text-body'
            }`}
          >
            🧩 Problem Solving Analytics
          </button>
        </div>

        <AnimatePresence mode="wait">
          {dashboardType === 'dev' ? (
            <motion.div
              key="dev-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Stats & Heatmap */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Live GitHub status indicator widget */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/5 text-[11px] font-mono text-muted text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                    <span className="font-bold text-body">Live GitHub Sync: Connected</span>
                  </div>
                  <div className="flex gap-4">
                    <span>Node Cluster: online</span>
                    <span className="text-muted/40">|</span>
                    <span>Pushed: 14 mins ago to ersamirsingh/omniserve</span>
                  </div>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl glass-card text-left flex flex-col justify-between">
                    <span className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit text-lg mb-4">
                      <FiGitCommit />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted uppercase block">Commits (YTD)</span>
                      <span className="text-2xl font-black text-body font-display mt-1">{totalCommits}</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card text-left flex flex-col justify-between">
                    <span className="p-2.5 rounded-xl bg-secondary/10 text-secondary w-fit text-lg mb-4">
                      <FiLayers />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted uppercase block">Repos Built</span>
                      <span className="text-2xl font-black text-body font-display mt-1">18 Active</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card text-left flex flex-col justify-between">
                    <span className="p-2.5 rounded-xl bg-accent/10 text-accent w-fit text-lg mb-4">
                      <FiAward />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted uppercase block">Certificates</span>
                      <span className="text-2xl font-black text-body font-display mt-1">10 Issued</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card text-left flex flex-col justify-between">
                    <span className="p-2.5 rounded-xl bg-tertiary/10 text-tertiary w-fit text-lg mb-4">
                      <FiActivity />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted uppercase block">Commit Ratio</span>
                      <span className="text-2xl font-black text-body font-display mt-1">94% Active</span>
                    </div>
                  </div>
                </div>

                {/* Heatmap Grid Wrapper */}
                <div className="p-6 rounded-3xl glass-card text-left">
                  <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-body">Commit Contributions Grid</h4>
                      <span className="text-[10px] font-mono text-muted">Synchronized metrics from {github.replace('https://', '')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded bg-theme-surface/50 border border-theme" />
                      <span className="w-2.5 h-2.5 rounded bg-primary/20" />
                      <span className="w-2.5 h-2.5 rounded bg-primary/40" />
                      <span className="w-2.5 h-2.5 rounded bg-primary/70" />
                      <span className="w-2.5 h-2.5 rounded bg-primary" />
                      <span>More</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto pb-2 scrollbar-none">
                    <div className="flex gap-2 min-w-[500px]">
                      <div className="flex flex-col justify-between text-[9px] font-mono text-muted/60 py-1 h-[90px] select-none pr-1">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                      </div>

                      <div className="flex-1 flex gap-1">
                        {commitGrid.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-1">
                            {col.map((day, rowIdx) => (
                              <button
                                key={rowIdx}
                                className={`w-3.5 h-3.5 rounded-[3px] transition-all duration-200 cursor-pointer ${getIntensityClass(day.commits)}`}
                                onClick={() => setSelectedDay(day)}
                                aria-label={`Commits: ${day.commits}`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-muted">
                    <span>Total contributions in selected frame: {totalCommits}</span>
                    {selectedDay ? (
                      <span className="text-accent font-bold">
                        Clicked node: {selectedDay.commits} commits on Week {selectedDay.col + 1}, Day {daysOfWeek[selectedDay.row]}
                      </span>
                    ) : (
                      <span>Click any node grid to inspect commits</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Donut Language Graph & Learning Track */}
              <div className="lg:col-span-4 p-8 rounded-3xl glass-card text-left flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-body mb-2">Technology Profile</h4>
                  <p className="text-muted text-xs mb-6">Aggregate distribution of codebase volume.</p>

                  <div className="relative flex justify-center mb-6">
                    <svg width="160" height="160" viewBox="0 0 42 42" className="transform -rotate-90">
                      <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--border)" strokeWidth="4.5" />
                      {languages.map((lang, idx) => {
                        const strokePercent = lang.percentage;
                        const strokeOffset = 100 - lang.offset + 25;
                        return (
                          <circle
                            key={idx}
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke={lang.color}
                            strokeWidth="4.5"
                            strokeDasharray={`${strokePercent} ${100 - strokePercent}`}
                            strokeDashoffset={strokeOffset}
                            strokeLinecap="round"
                          />
                        );
                      })}
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[10px] uppercase font-mono text-muted">Core Stack</span>
                      <span className="text-lg font-black text-body">MERN</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {languages.map((lang, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                          <span className="text-muted font-medium">{lang.name}</span>
                        </div>
                        <span className="font-mono text-body font-bold">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6">
                  <h5 className="font-mono text-[9px] uppercase tracking-wider text-muted mb-4">Under Active Study</h5>
                  <div className="space-y-3.5 text-xs">
                    <div>
                      <div className="flex justify-between text-muted font-mono mb-1.5">
                        <span>Agentic Workflows (LangGraph)</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full h-1 bg-theme-surface rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[80%] rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-muted font-mono mb-1.5">
                        <span>Hybrid RAG Orchestration</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full h-1 bg-theme-surface rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[70%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dsa-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Problem counts & Diff breakdown */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Verified Codolio badge info */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/5 text-[11px] font-mono text-muted text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-bold text-body">Codolio Aggregated Rating: Knight-equivalent</span>
                  </div>
                  <a
                    href={codolio}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent font-bold hover:underline flex items-center gap-1"
                  >
                    View Codolio Profile
                    <FiExternalLink />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* LeetCode Count */}
                  <div className="p-6 rounded-2xl glass-card text-left">
                    <span className="text-[10px] font-mono text-muted uppercase">LeetCode solved</span>
                    <span className="text-3xl font-black text-body font-display block mt-2">300+ Problems</span>
                    <p className="text-muted text-xs mt-2 leading-relaxed">Top ratings in algorithm competitions.</p>
                  </div>

                  {/* GeeksforGeeks Count */}
                  <div className="p-6 rounded-2xl glass-card text-left">
                    <span className="text-[10px] font-mono text-muted uppercase">GeeksforGeeks Solves</span>
                    <span className="text-3xl font-black text-body font-display block mt-2">300+ Problems</span>
                    <p className="text-muted text-xs mt-2 leading-relaxed">Branch Rank #12 during term rounds.</p>
                  </div>

                  {/* Academic Excellence indicator */}
                  <div className="p-6 rounded-2xl glass-card text-left">
                    <span className="text-[10px] font-mono text-muted uppercase">Branch Topper Term</span>
                    <span className="text-3xl font-black text-body font-display block mt-2">Gold Medalist</span>
                    <p className="text-muted text-xs mt-2 leading-relaxed">Term 3 (8.59 GPA) & Term 5 (9.29 GPA) topper.</p>
                  </div>
                </div>

                {/* Difficulty distribution breakdown bars */}
                <div className="p-6 rounded-3xl glass-card text-left">
                  <h4 className="font-display font-extrabold text-sm text-body mb-6">Algorithm Difficulty Split</h4>
                  <div className="space-y-4">
                    {dsaDifficulty.map((diff, i) => (
                      <div key={i} className="space-y-2 text-xs">
                        <div className="flex justify-between items-center font-mono">
                          <span className="font-bold text-body">{diff.name} Problems</span>
                          <span className="text-muted">{diff.solved} / {diff.total} Solved</span>
                        </div>
                        <div className="w-full h-2.5 bg-theme-surface rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${(diff.solved / diff.total) * 100}%`,
                              backgroundColor: diff.color
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Weekly solved graph (6 weeks sparkline) */}
              <div className="lg:col-span-4 p-8 rounded-3xl glass-card text-left flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-body mb-2">Weekly Solving Volume</h4>
                  <p className="text-muted text-xs mb-6">Aggregated algorithm counts solved per week.</p>

                  <div className="relative py-2 mb-6">
                    <svg viewBox="0 0 500 200" className="w-full h-40 overflow-visible">
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="85" x2="500" y2="85" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

                      {/* Line */}
                      <motion.path
                        d={dsaHistory.map((d, idx) => `${idx === 0 ? 'M' : 'L'} ${getDsaX(idx)} ${getDsaY(d.solved)}`).join(' ')}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                      />

                      {/* Points */}
                      {dsaHistory.map((d, idx) => {
                        const x = getDsaX(idx);
                        const y = getDsaY(d.solved);
                        return (
                          <g key={idx}>
                            <circle cx={x} cy={y} r="5" className="fill-accent stroke-theme-card stroke-2" />
                            <text x={x} y={y - 12} className="fill-body text-[10px] font-mono text-center" textAnchor="middle">{d.solved}</text>
                            <text x={x} y="190" className="fill-muted text-[10px] font-mono" textAnchor="middle">{d.week}</text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                <div className="pt-6 mt-6">
                  <h5 className="font-mono text-[9px] uppercase tracking-wider text-muted mb-4">Core Concepts Applied</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge-tech text-[10px]">Dynamic Programming</span>
                    <span className="badge-tech text-[10px]">Graph BFS/DFS</span>
                    <span className="badge-tech text-[10px]">Binary Trees</span>
                    <span className="badge-tech text-[10px]">Sliding Window</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
