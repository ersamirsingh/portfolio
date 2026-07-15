import React from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'contact', label: 'Contact' }
];

export default function FloatingNav({ activeSection }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-nav-container hidden md:flex">
      {sections.map((sect) => (
        <a
          key={sect.id}
          href={`#${sect.id}`}
          onClick={(e) => handleClick(e, sect.id)}
          className="w-6 h-6 flex items-center justify-center relative group cursor-none"
          aria-label={`Scroll to ${sect.label}`}
        >
          {/* Visual Dot */}
          <div
            className={`floating-nav-dot ${activeSection === sect.id ? 'active animate-glow' : ''}`}
          />
          <span className="floating-nav-tooltip">{sect.label}</span>
        </a>
      ))}
    </div>
  );
}
