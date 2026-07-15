import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import useScrollProgress from '../hooks/useScrollProgress';
import { FiSun, FiMoon, FiMonitor, FiMenu, FiX, FiDownload, FiGithub, FiLinkedin, FiCode, FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection, onResumeOpen }) {
  const { name, github, linkedin, codolio } = portfolioData.personalInfo;
  const { theme, setTheme, resolvedTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const themeOptions = [
    { id: 'light', label: 'Light', icon: <FiSun className="w-4 h-4" /> },
    { id: 'cyber-cosmic', label: 'Cyber Cosmic', icon: <FiMoon className="w-4 h-4" /> },
    { id: 'deep-indigo', label: 'Deep Indigo', icon: <FiZap className="w-4 h-4" /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => setThemeDropdownOpen(false);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-theme/70 backdrop-blur-md border-b border-theme shadow-sm transition-all duration-300 select-none">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-theme-surface z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-transform duration-100 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-base sm:text-lg text-body">
          <span className="text-primary font-mono font-bold">&lt;/&gt;</span>
          <span>{name}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-1.5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link text-[11px] px-2.5 py-1.5 ${activeSection === item.id ? 'active text-primary' : 'text-muted hover:text-body'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav Options (Socials, Theme & CV) */}
        <div className="hidden xl:flex items-center gap-4">
          
          {/* Social Links */}
          <div className="flex items-center gap-3 border-r border-theme pr-4">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-base transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-base transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a
              href={codolio}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-body text-base transition-colors"
              aria-label="Codolio Profile"
              title="Codolio Profile"
            >
              <FiCode />
            </a>
          </div>

          {/* Theme Dropdown Toggle */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-body hover:bg-theme-surface transition-all flex items-center justify-center cursor-pointer"
              aria-label="Theme selection"
            >
              {theme === 'light' && <FiSun className="w-4 h-4 text-primary" />}
              {(theme === 'cyber-cosmic' || theme === 'dark') && <FiMoon className="w-4 h-4 text-secondary" />}
              {theme === 'deep-indigo' && <FiZap className="w-4 h-4 text-accent" />}
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2.5 w-36 glass-card bg-theme-surface border border-theme p-1 shadow-xl z-50 text-left"
                >
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                        theme === opt.id
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted hover:bg-theme-surface/80 hover:text-body'
                      }`}
                    >
                      {opt.icon}
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CV Button */}
          <Magnetic strength={0.2}>
            <button
              onClick={(e) => {
                e.preventDefault();
                onResumeOpen();
              }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-xs font-mono tracking-wider hover:bg-primary/20 transition-all duration-300 glow-primary-hover flex items-center gap-1.5 cursor-none"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Resume
            </button>
          </Magnetic>
        </div>

        {/* Mobile Control Buttons (Hamburger + Theme) */}
        <div className="flex xl:hidden items-center gap-3">
          {/* Quick toggle theme for mobile */}
          <button
            onClick={() => {
              if (theme === 'light') {
                setTheme('cyber-cosmic');
              } else if (theme === 'cyber-cosmic') {
                setTheme('deep-indigo');
              } else {
                setTheme('light');
              }
            }}
            className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-body hover:bg-theme-surface transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' && <FiSun className="w-4 h-4 text-primary" />}
            {(theme === 'cyber-cosmic' || theme === 'dark') && <FiMoon className="w-4 h-4 text-secondary" />}
            {theme === 'deep-indigo' && <FiZap className="w-4 h-4 text-accent" />}
          </button>

          {/* Hamburger button */}
          <button
            className="p-2 text-body cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[99]"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-theme-surface border-l border-theme z-[100] p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-display font-bold text-body">Sections</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-body cursor-pointer"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-1.5 text-left">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2.5 px-4 rounded-xl text-xs font-medium transition-colors ${
                          activeSection === item.id
                            ? 'text-primary bg-primary/10 font-bold'
                            : 'text-muted hover:text-body hover:bg-theme-surface/50'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Social icons */}
                <div className="flex gap-4 items-center justify-center my-6">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-body text-lg"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-body text-lg"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href={codolio}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-body text-lg"
                  >
                    <FiCode />
                  </a>
                </div>

                <div className="w-full h-px bg-theme border-b border-theme/5 mb-6" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onResumeOpen();
                  }}
                  className="w-full py-3.5 rounded-xl bg-primary text-center text-white font-bold text-sm hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-2 font-display cursor-none"
                >
                  <FiDownload className="w-4 h-4" />
                  Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
