import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiClock, FiCalendar, FiSend } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function ContactSection() {
  const { name, email, location, availability } = portfolioData.personalInfo;

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Booking Scheduler State
  const [bookingType, setBookingType] = useState('30m'); // 30m, 60m
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime) return;
    setBookingSuccess(true);
  };

  return (
    <section id="contact" className="py-32 md:py-36 relative overflow-hidden bg-theme-surface/30">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Contact & Schedule" 
          subtitle="Get in touch via message or schedule an interview slot on my calendar."
          label="Communication"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Column: Direct Info & Booking widget */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Info */}
            <div className="p-6 rounded-2xl glass-card text-left space-y-4">
              <h4 className="font-display font-extrabold text-lg text-body mb-4">Availability Details</h4>
              
              <div className="flex gap-3 items-center text-xs text-muted">
                <span className="p-2.5 rounded-lg bg-primary/10 text-primary text-base"><FiMail /></span>
                <div>
                  <span className="text-[9px] uppercase font-mono block">Direct Mail</span>
                  <a href={`mailto:${email}`} className="font-bold text-body hover:underline">{email}</a>
                </div>
              </div>

              <div className="flex gap-3 items-center text-xs text-muted">
                <span className="p-2.5 rounded-lg bg-secondary/10 text-secondary text-base"><FiMapPin /></span>
                <div>
                  <span className="text-[9px] uppercase font-mono block">Location</span>
                  <span className="font-bold text-body">{location}</span>
                </div>
              </div>

              <div className="flex gap-3 items-center text-xs text-muted">
                <span className="p-2.5 rounded-lg bg-tertiary/10 text-tertiary text-base"><FiClock /></span>
                <div>
                  <span className="text-[9px] uppercase font-mono block">Availability Status</span>
                  <span className="font-bold text-body">{availability}</span>
                </div>
              </div>
            </div>

            {/* Booking / Scheduling module */}
            <div className="p-6 rounded-2xl glass-card text-left flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-extrabold text-lg text-body mb-2 flex items-center gap-2">
                  <FiCalendar className="text-primary" /> Meet & Schedule
                </h4>
                <p className="text-muted text-xs mb-6">Select a meeting slot to talk about project development or roles.</p>

                <AnimatePresence mode="wait">
                  {!bookingSuccess ? (
                    <motion.form
                      key="booking-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-4 text-xs"
                    >
                      {/* Meeting Type */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setBookingType('30m')}
                          className={`p-2.5 rounded-lg border text-center font-semibold transition-all cursor-pointer ${
                            bookingType === '30m' ? 'bg-primary/20 border-primary text-primary shadow-md' : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-muted hover:text-body'
                          }`}
                        >
                          30m Intro Chat
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingType('60m')}
                          className={`p-2.5 rounded-lg border text-center font-semibold transition-all cursor-pointer ${
                            bookingType === '60m' ? 'bg-primary/20 border-primary text-primary shadow-md' : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-muted hover:text-body'
                          }`}
                        >
                          60m Technical Chat
                        </button>
                      </div>

                      {/* Date & Time Selection */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-mono text-muted uppercase block mb-1">Select Date</label>
                          <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            required
                            className="w-full p-2.5 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-body focus:outline-none focus:border-[#06b6d4] focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-muted uppercase block mb-1">Select Time</label>
                          <select
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            required
                            className="w-full p-2.5 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-body focus:outline-none focus:border-[#06b6d4] focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all"
                          >
                            <option value="" className="bg-theme-surface text-body">Time Slot</option>
                            <option value="10:00 AM" className="bg-theme-surface text-body">10:00 AM</option>
                            <option value="11:30 AM" className="bg-theme-surface text-body">11:30 AM</option>
                            <option value="02:00 PM" className="bg-theme-surface text-body">02:00 PM</option>
                            <option value="04:30 PM" className="bg-theme-surface text-body">04:30 PM</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-primary/10 mt-6"
                      >
                        <FiCalendar /> Confirm Slot
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="booking-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 text-center"
                    >
                      <span className="text-3xl">🗓️</span>
                      <h4 className="font-display font-extrabold text-sm text-body mt-3">Slot reserved!</h4>
                      <p className="text-muted text-xs mt-1.5">
                        Your {bookingType === '30m' ? '30 Mins Intro' : '60 Mins Technical'} call is set for {bookingDate} at {bookingTime}. Meeting link sent to inbox.
                      </p>
                      <button
                        onClick={() => {
                          setBookingSuccess(false);
                          setBookingDate('');
                          setBookingTime('');
                        }}
                        className="mt-6 px-4 py-2 text-xs font-mono text-accent hover:text-body border border-theme rounded-lg bg-theme-surface hover:bg-theme-surface/85 transition-all"
                      >
                        Reset Calendar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-card text-left flex flex-col justify-between">
            <h4 className="font-display font-extrabold text-lg text-body mb-2">Send Message</h4>
            <p className="text-muted text-xs mb-6">Have an idea or role? Send a message directly to my console.</p>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div className="floating-input-wrap">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                      className="floating-input"
                    />
                    <label className="floating-label">Your Name</label>
                    {errors.name && <span className="text-[10px] font-mono text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="floating-input-wrap">
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleInputChange}
                      className="floating-input"
                    />
                    <label className="floating-label">Email Address</label>
                    {errors.email && <span className="text-[10px] font-mono text-red-500 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Subject */}
                  <div className="floating-input-wrap">
                    <input
                      type="text"
                      name="subject"
                      placeholder=" "
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="floating-input"
                    />
                    <label className="floating-label">Subject</label>
                    {errors.subject && <span className="text-[10px] font-mono text-red-500 mt-1 block">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="floating-input-wrap">
                    <textarea
                      name="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="floating-input h-32 resize-none pt-4"
                    />
                    <label className="floating-label">Message Content</label>
                    {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-primary text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-primary/95 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex-1 flex flex-col justify-center items-center"
                >
                  <span className="text-5xl mb-4 animate-bounce">🚀</span>
                  <h3 className="font-display font-extrabold text-2xl text-body mb-2">Message Transmitted!</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm mb-8">
                    Your packet has bypassed the load balancer and resolved in {name}'s inbox. I'll get back to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 rounded-xl border border-theme bg-theme-surface hover:bg-theme-surface/90 text-accent font-semibold text-xs tracking-wide transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
