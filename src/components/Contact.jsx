import { useState } from 'react';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const socials = [
    { icon: <FiMail className="w-5 h-5" />, label: 'Email', value: 'samirrgpv@email.com', href: 'mailto:samirrgpv@email.com' },
    { icon: <FiGithub className="w-5 h-5" />, label: 'GitHub', value: 'github.com/ersamirsingh', href: 'https://www.github.com/ersamirsingh' },
    { icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'linkedin.com/in/ersamirsingh', href: 'https://www.linkedin.com/in/ersamirsingh' },
    { icon: <FiCode className="w-5 h-5" />, label: 'Codolio', value: 'codolio.com/profile/ersamirsingh', href: 'https://codolio.com/profile/ersamirsingh' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-theme">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-3 block">Get In Touch</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-body mb-3">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Direct Protocol Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 border border-theme bg-theme-surface/30">
              <h3 className="font-display font-bold text-lg text-body mb-2">Direct Protocol</h3>
              <p className="text-sm text-muted mb-6">
                Feel free to reach out via these direct coordinates. I usually respond within 24 business hours.
              </p>

              <div className="space-y-4">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    className="flex items-center gap-4 p-4 rounded-xl border border-theme bg-theme hover:border-primary/45 hover:bg-primary/5 transition-all group cursor-none"
                  >
                    <div className="p-3 rounded-lg bg-theme-surface border border-theme text-muted group-hover:text-primary transition-colors">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-muted uppercase tracking-wider">{s.label}</h4>
                      <p className="text-sm font-medium text-body break-all">{s.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Styled Form with Floating Labels */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border border-theme bg-theme-surface/40 relative">
              {/* Fake API Method Header */}
              <div className="absolute top-4 right-6 font-mono text-[10px] text-muted/60 select-none">
                POST /api/v1/contact
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="floating-input-wrap">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="floating-input"
                    />
                    <label htmlFor="name" className="floating-label">Your Name</label>
                  </div>

                  {/* Email Input */}
                  <div className="floating-input-wrap">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="floating-input"
                    />
                    <label htmlFor="email" className="floating-label">Email Address</label>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="floating-input-wrap">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                    className="floating-input"
                  />
                  <label htmlFor="subject" className="floating-label">Subject</label>
                </div>

                {/* Message TextArea */}
                <div className="floating-input-wrap">
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="floating-input resize-none"
                  />
                  <label htmlFor="message" className="floating-label">Message Details</label>
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-muted/80 flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>Secure socket link</span>
                  </div>

                  <Magnetic strength={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed disabled:opacity-50 transition-all flex items-center gap-2 cursor-none"
                    >
                      {isSubmitting ? (
                        <span className="loading loading-spinner loading-xs" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </form>

              {/* Success Notification Animation overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-theme-surface rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 animate-bounce">
                      <FiSend className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-body mb-2">Message Dispatched!</h3>
                    <p className="text-xs text-muted max-w-xs">
                      Your transmission was initialized successfully. Samir will review your query shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
