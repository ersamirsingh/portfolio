import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(173, 198, 255, 0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span className="section-label mb-3 block">Get In Touch</span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-on-surface mb-4 leading-tight">
            Let's build something
            <br />
            <span className="text-gradient-primary">intelligent</span>
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            Whether you're looking to build something great, discuss a technical challenge, or explore collaboration — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left – Direct Protocol */}
          <div className="glass-card p-8 flex flex-col gap-6 fade-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-on-surface">Direct Protocol</h3>
                <p className="text-xs text-on-surface-variant">For serious inquiries &amp; technical discussions</p>
              </div>
            </div>

            <p className="text-on-surface-variant text-sm leading-relaxed">
              For serious inquiries, technical discussions, or consulting opportunities. Response time is typically within 24 hours on business days.
            </p>

            <a
              href="mailto:samir@example.com"
              className="text-primary hover:text-primary-fixed font-mono text-sm flex items-center gap-2 group transition-colors"
            >
              samir.singh@email.com
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="grid grid-cols-1 gap-3 mt-auto">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
                  label: 'GitHub',
                  href: '#',
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" strokeWidth={1.5} /></>,
                  label: 'LinkedIn',
                  href: '#',
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />,
                  label: 'Twitter / X',
                  href: '#',
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-on-surface-variant hover:text-on-surface group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {link.icon}
                  </svg>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="glass-card p-8 fade-up relative" style={{ transitionDelay: '100ms' }}>
            {/* API endpoint label */}
            <div className="absolute top-4 right-5 font-mono text-xs text-on-surface-variant opacity-60">
              POST /api/v1/contact
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-on-surface-variant mb-2 tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-on-surface-variant mb-2 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs text-on-surface-variant mb-2 tracking-wider uppercase">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-on-surface-variant mb-2 tracking-wider uppercase">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your technical challenges..."
                  required
                  className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  E2E Encrypted
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed transition-all duration-300 glow-primary-hover flex items-center gap-2"
                >
                  {sent ? 'Message Sent!' : 'Initialize Transmit'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
