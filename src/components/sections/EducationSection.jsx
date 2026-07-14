import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function EducationSection() {
  const { degrees } = portfolioData.education;

  // Let's create an elegant visual sparkline representing the Semester GPA progress
  const btechDegree = degrees.find(d => d.degree.includes("Bachelor"));
  const semesterData = btechDegree ? btechDegree.semesterPerformance : [];
  const getSvgX = (idx) => 30 + idx * 105;
  const getSvgY = (gpa) => 180 - ((gpa - 7.0) / 2.5) * 150;

  return (
    <section id="education" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background, specialized coursework, and performance metrics."
          label="Credentials"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Cards */}
          <div className="lg:col-span-7 space-y-8">
            {degrees.map((deg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-3xl glass-card hover:border-primary/30 transition-all text-left"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-body">{deg.degree}</h3>
                    <p className="text-muted text-sm mt-1 font-medium">{deg.institution}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-xs text-accent font-semibold">{deg.period}</span>
                    <span className="px-3 py-1 mt-2 text-xs font-bold rounded-lg bg-primary/10 text-primary border border-primary/20">
                      {deg.grade}
                    </span>
                  </div>
                </div>

                {/* Coursework block */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs uppercase text-muted tracking-wider mb-2.5">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {deg.coursework.map((course, idx) => (
                      <span key={idx} className="badge-tech text-[10px]">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic accomplishments */}
                <div>
                  <h4 className="font-mono text-xs uppercase text-muted tracking-wider mb-2">Key Academic Wins</h4>
                  <ul className="space-y-2">
                    {deg.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-muted">
                        <span className="text-accent mt-0.5 font-bold">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Semester Performance Visualization */}
          {semesterData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 p-8 rounded-3xl glass-card text-left h-full"
            >
              <h3 className="font-display font-extrabold text-lg text-body mb-2">Semester Performance</h3>
              <p className="text-muted text-xs mb-8">College & Semester Topper maintaining consistent peak standings across B.Tech terms.</p>

              {/* Custom SVG Sparkline Graph */}
              <div className="relative py-4 border-b border-theme/60 mb-6">
                <svg viewBox="0 0 500 200" className="w-full h-44 overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  <line x1="0" y1="170" x2="500" y2="170" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

                  {/* Graph Line */}
                  <motion.path
                    d={semesterData.map((d, idx) => `${idx === 0 ? 'M' : 'L'} ${getSvgX(idx)} ${getSvgY(d.gpa)}`).join(' ')}
                    fill="none"
                    stroke="url(#gpaGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gpaGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>

                  {/* Circular Points and GPA Tooltips */}
                  {semesterData.map((d, idx) => {
                    const x = getSvgX(idx);
                    const y = getSvgY(d.gpa);
                    return (
                      <g key={idx} className="group/dot cursor-pointer">
                        <circle
                          cx={x}
                          cy={y}
                          r="6"
                          className="fill-accent stroke-theme-card stroke-2 animate-pulse"
                        />
                        <text
                          x={x}
                          y={y - 12}
                          className="fill-body text-[10px] font-mono font-bold text-center"
                          textAnchor="middle"
                        >
                          {d.gpa}
                        </text>
                        <text
                          x={x}
                          y="195"
                          className="fill-muted text-[9px] font-mono"
                          textAnchor="middle"
                        >
                          S{idx + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Semester breakdown checklist */}
              <div className="space-y-3.5">
                <span className="font-mono text-[10px] uppercase text-muted tracking-wider block mb-2">GPA Checklist</span>
                <div className="grid grid-cols-2 gap-4">
                  {semesterData.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-theme-surface/50 border border-theme">
                      <span className="text-xs font-mono text-muted">{s.sem}</span>
                      <span className="text-xs font-bold text-accent">{s.gpa} GPA</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
