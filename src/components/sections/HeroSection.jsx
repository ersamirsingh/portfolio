import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDownload, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

export default function HeroSection({ onResumeOpen }) {
  const { name, bio, github, linkedin, codolio, email, availability } = portfolioData.personalInfo;
  const username = github.split('/').pop() || 'samir';
  
  // Typewriter items
  const typewriterRoles = [
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Problem Solver"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter Loop
  useEffect(() => {
    let timer;
    const handleType = () => {
      const activeRole = typewriterRoles[roleIndex];
      if (!isDeleting) {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === activeRole) {
          setTypingSpeed(1500); // Wait on complete
          setIsDeleting(true);
        }
      } else {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typewriterRoles]);

  // Cursor Parallax / Glow Movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor tracking
  const springConfig = { stiffness: 100, damping: 30 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150); // Offset to center 300px glow
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-theme text-body"
    >
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Mouse Tracked Interactive Glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content Side */}
        <div className="lg:col-span-7 flex flex-col justify-center select-none text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-surface/50 border border-theme text-xs font-mono text-muted mb-8 select-none">
              <span className="relative flex h-2 w-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </span>
              <span>{availability}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none mb-4"
          >
            <span className="text-white">Hi, I'm <span className="text-[#d8b4fe] drop-shadow-[0_0_20px_rgba(216,180,254,0.6)]">{name}</span></span>
          </motion.h1>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-10 md:h-12 flex items-center mb-6"
          >
            <span className="font-mono text-lg md:text-3xl font-bold text-accent typewriter-cursor">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-primary/90 flex items-center gap-2 glow-primary shadow-lg shadow-primary/20 active:scale-98"
            >
              View Projects
              <FiArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onResumeOpen}
              className="px-7 py-4 rounded-xl bg-theme-surface border border-theme hover:bg-theme-surface/80 text-body font-bold text-sm tracking-wide transition-all flex items-center gap-2 active:scale-98"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </button>

            <a
              href="#contact"
              className="px-7 py-4 rounded-xl border border-primary/30 text-accent font-bold text-sm hover:bg-primary/5 transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-xl transition-colors hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-xl transition-colors hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-muted hover:text-body text-xl transition-colors hover:scale-110"
              aria-label="Email Contact"
            >
              <FiMail />
            </a>
            <a
              href={codolio}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-xl transition-colors hover:scale-110"
              aria-label="Codolio Profile"
            >
              <FiCode />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Professional Developer Illustration + Animated Analytics Widgets */}
        <div className="lg:col-span-5 relative w-full h-fit flex items-center justify-center">
          {/* Glass dashboard stats panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square bg-theme-surface/40 border border-theme rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            
            {/* Section: Mock Code Window Title */}
            <div className="flex items-center justify-between border-b border-theme/60 pb-4 mb-6">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-muted/80">{username}-sys-stats.json</span>
            </div>

            {/* Dashboard Stats Elements */}
            <div className="flex-1 flex flex-col justify-center gap-6 z-10">
              {portfolioData.heroStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-theme-card/50 border border-theme hover:border-primary/20 transition-all hover:bg-theme-card"
                >
                  <span className="text-muted text-sm font-medium">{stat.label}</span>
                  <span className="font-display font-black text-xl text-accent">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-theme/60 pt-4 text-center">
              <span className="font-mono text-[10px] text-muted">System loaded successfully • Node v19.2</span>
            </div>
          </motion.div>

          {/* Floating decorative nodes */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 p-4 bg-theme-surface border border-theme rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
          >
            <span className="p-2 rounded-lg bg-primary/10 text-primary text-lg">💡</span>
            <div className="flex flex-col text-left">
              <span className="text-xs text-muted">Flagship Startup</span>
              <span className="text-xs font-bold text-body">OmniServe Founder</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 p-4 bg-theme-surface border border-theme rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
          >
            <span className="p-2 rounded-lg bg-secondary/10 text-secondary text-lg">🚀</span>
            <div className="flex flex-col text-left">
              <span className="text-xs text-muted">LeetCode Rank</span>
              <span className="text-xs font-bold text-body">Top 5% Global</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
