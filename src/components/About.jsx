import { useRef } from 'react';
import { FiAward, FiBookOpen, FiActivity } from 'react-icons/fi';

export default function About() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation angles based on mouse position relative to center
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12; // cap rotation
    const angleY = (x - xc) / 12;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const facts = [
    { emoji: '🍕', label: 'Fuelled by Margherita' },
    { emoji: '🎧', label: 'Lofi & Synthwave' },
    { emoji: '💻', label: 'Dark Mode Enthusiast' },
    { emoji: '📚', label: 'Avid Tech Reader' },
    { emoji: '🎮', label: 'Casual Indie Gamer' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-theme-surface">
      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-16">
        {/* Header */}
        <div className="mb-16 reveal visible">
          <span className="section-label mb-3 block">Profile</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            About Samir Singh
          </h2>
          <div className="w-12 h-1 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-muted">
            <p className="text-base sm:text-lg leading-relaxed">
              I am a software engineer dedicated to building clean, high-performance web products.
              With a background in computer science,
              and efficient in integrating Large Language Models (LLMs) into real-world applications, 
              building AI-powered features such as intelligent chat systems, workflow automation, retrieval-augmented generation (RAG), 
              and AI agents that deliver practical business value.
            </p>
            <p className="text-base leading-relaxed">
              I specialize in working with the JavaScript/TypeScript ecosystem, building scalable backend services in
              <span className="text-body font-semibold"> Node.js </span> and high-quality frontend layers using
              <span className="text-body font-semibold"> React </span> and Next.js.
            </p>

            {/* Fun facts list */}
            <div>
              <h3 className="font-display font-semibold text-body mb-4 flex items-center gap-2">
                <FiActivity className="text-primary w-5 h-5" />
                Interests & Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {facts.map((fact, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-theme border border-theme text-xs flex items-center gap-2 text-muted hover:border-primary/45 transition-colors"
                  >
                    <span>{fact.emoji}</span>
                    <span>{fact.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column – Interactive 3D Tilt Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-sm glass-card p-8 text-center relative transition-all duration-200 ease-out select-none border border-theme"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Inner content with 3D translation */}
              <div style={{ transform: 'translateZ(50px)' }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50 flex items-center justify-center text-3xl font-display font-extrabold text-primary glow-primary">
                  SS
                </div>
                <h3 className="font-display font-bold text-xl text-body mb-1">Samir Singh</h3>
                <p className="text-primary text-xs font-mono mb-6">MERN / AI Engineer</p>

                <div className="w-full h-px bg-theme border-b border-theme/5 mb-6" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <FiBookOpen className="text-primary w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-mono text-muted uppercase tracking-wider">Education</h4>
                      <p className="text-sm font-medium text-body">B.Tech in Computer Science</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiAward className="text-secondary w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-mono text-muted uppercase tracking-wider">Focus</h4>
                      <p className="text-sm font-medium text-body">Distributed Systems & AI Integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full wave-divider text-theme z-20">
        <svg
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 24C120 45.3333 240 56 360 56C480 56 600 24 720 24C840 24 960 56 1080 56C1200 56 1320 45.3333 1440 24V74H0V24Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
