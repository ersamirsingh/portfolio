import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-theme border-t border-theme">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-6">
        {/* Left copyright info */}
        <div className="font-mono text-xs sm:text-sm text-muted flex items-center gap-2 select-none">
          <span className="text-primary font-bold">&lt;/&gt;</span>
          <span>
            Designed &amp; Developed by{' '}
            <span className="text-body font-semibold hover:text-primary transition-colors">
              Samir Singh
            </span>
          </span>
          <span className="text-muted/40">|</span>
          <span className="text-muted/60">&copy; {currentYear}</span>
        </div>

        {/* Right social list */}
        <div className="flex items-center gap-4">
          {[
            { icon: <FiMail className="w-4 h-4" />, label: 'Email', href: 'mailto:samir.singh@email.com' },
            { icon: <FiGithub className="w-4 h-4" />, label: 'GitHub', href: '#' },
            { icon: <FiLinkedin className="w-4 h-4" />, label: 'LinkedIn', href: '#' },
            { icon: <FiTwitter className="w-4 h-4" />, label: 'Twitter', href: '#' },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              aria-label={link.label}
              className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-muted hover:text-primary hover:border-primary/45 transition-all flex items-center justify-center cursor-none"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
