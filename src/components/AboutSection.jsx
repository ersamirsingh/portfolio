export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at top center, rgba(76, 215, 246, 0.08) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span className="section-label mb-3 block">About Me</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface mb-3">
            Engineering Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left – Text */}
          <div className="lg:col-span-3 space-y-6 fade-up">
            <p className="text-on-surface-variant leading-relaxed text-base">
              I'm <span className="text-on-surface font-semibold">Samir Singh</span>, a MERN Stack Developer with 3+ years of experience building
              scalable web applications. My passion lies at the intersection of elegant code and seamless user experiences.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-base">
              I specialize in architecting robust backend services and crafting high-performance frontends. Whether it's optimizing database
              queries, building real-time systems with WebSockets, or designing clean component hierarchies in React — I approach every
              problem with a systems-thinking mindset.
            </p>
            <p className="text-on-surface-variant leading-relaxed text-base">
              When I'm not building, I'm solving algorithmic problems on LeetCode, contributing to open-source projects, or exploring
              the latest in AI and distributed systems architecture.
            </p>

            {/* Education */}
            <div className="glass-card p-6 mt-4">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <span className="section-label">Education</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-on-surface">B.Tech in Computer Science</h4>
                <p className="text-on-surface-variant text-sm font-mono">XYZ University · 2019 – 2023</p>
                <p className="text-on-surface-variant text-sm mt-1">CGPA: 8.4 / 10.0</p>
              </div>
            </div>
          </div>

          {/* Right – Profile Card */}
          <div className="lg:col-span-2 fade-up" style={{ transitionDelay: '150ms' }}>
            <div className="glass-card p-8 text-center relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ background: 'radial-gradient(circle, #adc6ff 0%, #ddb7ff 100%)' }} />

              {/* Avatar */}
              <div className="w-24 h-24 rounded-full mx-auto mb-5 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 border-2 border-primary/50 flex items-center justify-center text-3xl font-display font-extrabold text-primary glow-primary">
                  SS
                </div>
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-surface" />
              </div>

              <h3 className="font-display font-bold text-xl text-on-surface mb-1">Samir Singh</h3>
              <p className="text-on-surface-variant text-sm font-mono mb-4">MERN Stack Developer</p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              {/* Info */}
              <div className="space-y-3 text-left">
                {[
                  { icon: '📍', label: 'Location', value: 'India' },
                  { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
                  { icon: '🎓', label: 'Degree', value: 'B.Tech CS' },
                  { icon: '⚡', label: 'Specialty', value: 'Full Stack Development' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <span className="text-xs text-on-surface-variant">{item.label}: </span>
                      <span className="text-sm text-on-surface">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
