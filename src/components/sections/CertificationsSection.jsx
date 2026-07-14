import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { portfolioData } from '../../data/portfolioData';

export default function CertificationsSection() {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Certifications" 
          subtitle="Cloud credentials, vendor qualifications, and specialized skill validations."
          label="Qualifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full"
            >
              <TiltCard className="p-6 rounded-2xl glass-card flex flex-col justify-between h-full select-none text-left">
                <div>
                  {/* Card Header Icon & Date */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="p-2.5 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                      <FiFileText />
                    </span>
                    <span className="font-mono text-xs text-muted/80">{cert.issueDate}</span>
                  </div>

                  {/* Name and Issuer */}
                  <h4 className="font-display font-extrabold text-lg text-body mb-1">{cert.name}</h4>
                  <p className="text-accent text-xs font-semibold mb-4">{cert.issuer}</p>

                  <div className="p-3 rounded-lg bg-white/5 mb-6">
                    <span className="font-mono text-[9px] uppercase text-muted block mb-0.5">Credential ID</span>
                    <span className="font-mono text-[10px] text-body select-all">{cert.credentialId}</span>
                  </div>

                  {/* Skills Block */}
                  <div className="mb-6">
                    <span className="font-mono text-[9px] uppercase text-muted block mb-2">Validated Skills</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, idx) => (
                        <span key={idx} className="badge-tech text-[9px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action links */}
                <div className="border-t border-theme/50 pt-4 flex gap-4 mt-auto">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-muted hover:text-body flex items-center gap-1.5 transition-colors"
                  >
                    <FiExternalLink />
                    Verify ID
                  </a>
                  <a
                    href={cert.verificationUrl}
                    className="text-xs font-mono text-muted hover:text-body flex items-center gap-1.5 transition-colors"
                  >
                    <FiDownload />
                    PDF Copy
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
