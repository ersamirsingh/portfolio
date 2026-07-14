import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { useTiltEffect } from '../hooks/useTiltEffect';
import TechChip from './TechChip';
import Magnetic from './Magnetic';


const certsList = [
  {
    title: 'NIT Delhi Hackathon',
    issuer: 'NIT Delhi',
    date: '2024',
    credentialId: 'NITD-HACK-2024',
    verifyUrl: 'https://drive.google.com/file/d/1jUiziHS2GHLfpOA_qxf3FAQ_vDrJV_dc/view?usp=drive_link',
  },
  {
    title: 'Synergix Hackathon',
    issuer: 'Synergix',
    date: '2024',
    credentialId: 'SYN-HACK-2024',
    verifyUrl: 'https://drive.google.com/file/d/170zOB0-ex8E3kfv14GHyxGak_Iwa_aT/view?usp=drive_link',
  },
  {
    title: 'College Fest Coordinator',
    issuer: 'College Fest',
    date: '2024',
    credentialId: 'FEST-COORD-2024',
    verifyUrl: 'https://drive.google.com/file/d/1ee-p2NwVif5ljQzVkq-49d8ngOwnVhpn/view?usp=drive_link',
  },
];

function CertCard({ cert, cardVariants }) {
  const { tiltStyle, handleMouseMove, handleMouseLeave } = useTiltEffect(6);

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="glass-card bg-theme-surface/40 p-6 flex flex-col justify-between h-52 border border-theme relative group overflow-hidden transition-shadow duration-300 hover:shadow-lg"
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
        <TechChip name={cert.issuer} className="border-none !bg-transparent !p-0 font-bold" />
        <Magnetic strength={0.15}>
          <a
            href={cert.verifyUrl}
            className="px-4 py-1.5 rounded-lg bg-theme-surface border border-theme text-xs font-medium text-body hover:bg-primary hover:border-primary hover:text-on-primary flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100 cursor-none"
          >
            Verify
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </Magnetic>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const issuers = ['All', 'NIT Delhi', 'Synergix', 'College Fest'];
  const shouldReduceMotion = useReducedMotion();

  const filteredCerts = activeFilter === 'All'
    ? certsList
    : certsList.filter((c) => c.issuer === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

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
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map((cert, idx) => (
            <CertCard
              key={`${cert.title}-${idx}`}
              cert={cert}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
