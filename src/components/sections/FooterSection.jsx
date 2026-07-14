import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowUp } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

export default function FooterSection() {
  const { name, github, linkedin, codolio, email } = portfolioData.personalInfo;

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' }
  ];

  const secondaryLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Writings', href: '#writings' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme bg-theme-surface/50 pt-16 pb-8 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Info */}
          <div className="md:col-span-5 text-left">
            <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-lg text-body mb-4">
              <span className="text-primary font-mono font-bold">&lt;/&gt;</span>
              <span>{name}</span>
            </a>
            <p className="text-muted text-xs leading-relaxed max-w-sm mb-6">
              Expert full stack engineer specializing in the MERN ecosystem. Incubating social supply chain architectures and scalable database indexes.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
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
                href={`mailto:${email}`}
                className="text-muted hover:text-body text-base transition-colors"
                aria-label="Mail Contact"
              >
                <FiMail />
              </a>
              <a
                href={codolio}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-body text-base transition-colors"
                aria-label="Codolio Profile"
              >
                <FiCode />
              </a>
            </div>
          </div>

          {/* Links col 1 */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-mono text-[10px] uppercase text-muted tracking-wider mb-4">General</h4>
            <ul className="space-y-2.5 text-xs text-muted">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links col 2 */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-mono text-[10px] uppercase text-muted tracking-wider mb-4">Engineering</h4>
            <ul className="space-y-2.5 text-xs text-muted">
              {secondaryLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-[10px] uppercase text-muted tracking-wider mb-4">Stay Synchronized</h4>
            <p className="text-muted text-xs leading-relaxed mb-4">
              Get notified immediately when new engineering blogs or updates are released.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex gap-2">
              <input
                type="email"
                placeholder="developer@gmail.com"
                required
                className="w-full p-2.5 rounded-lg border border-theme bg-theme-surface text-body text-xs placeholder:text-muted/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-3 py-2.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/95 transition-all"
              >
                Sync
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-px bg-theme/60 my-6" />

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-muted gap-4">
          <span>&copy; {new Date().getFullYear()} {name}. All rights reserved.</span>
          
          <div className="flex items-center gap-6">
            <span>Built with React 19 & Tailwind</span>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg border border-theme bg-theme-surface text-body hover:bg-theme-surface/80 hover:text-primary transition-all flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <FiArrowUp /> Back To Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
