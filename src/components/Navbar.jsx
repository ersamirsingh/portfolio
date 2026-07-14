import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import useScrollProgress from '../hooks/useScrollProgress';
import { FiSun, FiMoon, FiMonitor, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';


export default function Navbar({ activeSection, onResumeOpen }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const themeOptions = [
    { id: 'light', label: 'Light', icon: <FiSun className="w-4 h-4" /> },
    { id: 'dark', label: 'Dark', icon: <FiMoon className="w-4 h-4" /> },
    { id: 'system', label: 'System', icon: <FiMonitor className="w-4 h-4" /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => setThemeDropdownOpen(false);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-theme/70 backdrop-blur-md border-b border-theme shadow-sm transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-theme-surface z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-transform duration-100 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-lg text-body">
          <span className="text-primary font-mono font-bold">&lt;/&gt;</span>
          <span>Samir Singh</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active text-primary' : 'text-muted hover:text-body'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav Options (Theme & CV) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Dropdown Toggle */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-body hover:bg-theme-surface transition-all flex items-center justify-center"
              aria-label="Theme selection"
            >
              {theme === 'light' && <FiSun className="w-4 h-4 text-primary" />}
              {theme === 'dark' && <FiMoon className="w-4 h-4 text-secondary" />}
              {theme === 'system' && <FiMonitor className="w-4 h-4 text-tertiary" />}
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2.5 w-36 glass-card bg-theme-surface border border-theme p-1 shadow-xl z-50"
                >
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors ${
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
              className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-xs font-mono tracking-wider hover:bg-primary/20 transition-all duration-300 glow-primary-hover flex items-center gap-2 cursor-none"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Resume
            </button>
          </Magnetic>
        </div>

        {/* Mobile Control Buttons (Hamburger + Theme) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Quick toggle theme for mobile */}
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-body hover:bg-theme-surface transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'light' ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4 text-primary" />}
          </button>

          {/* Hamburger button */}
          <button
            className="p-2 text-body"
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
              className="fixed right-0 top-0 bottom-0 w-72 bg-theme-surface border-l border-theme z-[100] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-display font-bold text-body">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-body"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
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
                <div className="w-full h-px bg-theme border-b border-theme/5 mb-6" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onResumeOpen();
                  }}
                  className="w-full py-3.5 rounded-xl bg-primary text-center text-on-primary font-bold text-sm hover:bg-primary-fixed transition-all duration-300 flex items-center justify-center gap-2 font-display cursor-none"
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
