import { useState } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certsList = [
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'AWS',
    date: 'Dec 2024',
    credentialId: 'AWS-DEV-9812A',
    verifyUrl: '#',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    date: 'Jun 2023',
    credentialId: 'META-FED-77C2',
    verifyUrl: '#',
  },
  {
    title: 'Google Associate Cloud Engineer',
    issuer: 'Google',
    date: 'Oct 2023',
    credentialId: 'GCP-ACE-0041',
    verifyUrl: '#',
  },
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const issuers = ['All', 'AWS', 'Meta', 'Google'];

  const filteredCerts = activeFilter === 'All'
    ? certsList
    : certsList.filter((c) => c.issuer === activeFilter);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-theme">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">Achievements</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-primary rounded" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setActiveFilter(issuer)}
              className={`px-4 py-2 text-xs font-mono rounded-xl border transition-all cursor-none ${
                activeFilter === issuer
                  ? 'bg-primary border-primary text-on-primary font-bold shadow-md'
                  : 'bg-theme-surface border-theme text-muted hover:border-primary/45 hover:text-body'
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card bg-theme-surface/40 p-6 flex flex-col justify-between h-52 border border-theme relative group overflow-hidden"
            >
              {/* Shine Overlay */}
              <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-muted">{cert.date}</span>
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-body mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted/70 font-mono">
                  ID: {cert.credentialId}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-mono font-bold text-primary">{cert.issuer}</span>
                <a
                  href={cert.verifyUrl}
                  className="px-4 py-1.5 rounded-lg bg-theme-surface border border-theme text-xs font-medium text-body hover:bg-primary hover:border-primary hover:text-on-primary flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100 cursor-none"
                >
                  Verify
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
