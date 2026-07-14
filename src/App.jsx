import React, { useEffect, useState, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import FloatingNav from './components/FloatingNav';
import ResumeModal from './components/ResumeModal';
import ChatbotWidget from './components/ChatbotWidget';
import SkeletonLoader from './components/ui/SkeletonLoader';
import { AnimatePresence } from 'framer-motion';

// Lazy Loaded Sections
const AboutSection = React.lazy(() => import('./components/sections/AboutSection'));
const JourneySection = React.lazy(() => import('./components/sections/JourneySection'));
const EducationSection = React.lazy(() => import('./components/sections/EducationSection'));
const SkillsSection = React.lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSection = React.lazy(() => import('./components/sections/ProjectsSection'));
const HackathonsSection = React.lazy(() => import('./components/sections/HackathonsSection'));
const CertificationsSection = React.lazy(() => import('./components/sections/CertificationsSection'));
const AchievementsSection = React.lazy(() => import('./components/sections/AchievementsSection'));
const GallerySection = React.lazy(() => import('./components/sections/GallerySection'));
const DashboardSection = React.lazy(() => import('./components/sections/DashboardSection'));
const TestimonialsSection = React.lazy(() => import('./components/sections/TestimonialsSection'));
const ContactSection = React.lazy(() => import('./components/sections/ContactSection'));
const FooterSection = React.lazy(() => import('./components/sections/FooterSection'));

function MainApp() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer to trace which section is in view
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Animated Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-theme text-body min-h-screen relative">
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navbar activeSection={activeSection} onResumeOpen={() => setResumeOpen(true)} />

          {/* Floating Navigation Dots */}
          <FloatingNav activeSection={activeSection} />

          {/* Resume Action Options Modal */}
          <AnimatePresence>
            {resumeOpen && <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />}
          </AnimatePresence>

          {/* Core Sections */}
          <main>
            {/* 1. HeroSection (Static / Eager Loaded) */}
            <HeroSection onResumeOpen={() => setResumeOpen(true)} />

            {/* Granular Lazy Loaded Sections with custom loading skeletons */}
            <Suspense fallback={<SkeletonLoader rows={3} height="h-44" />}>
              {/* 2. About */}
              <AboutSection />

              {/* 3. Journey */}
              <JourneySection />

              {/* 4. Education */}
              <EducationSection />

              {/* 5. Skills */}
              <SkillsSection />

              {/* 6. Projects */}
              <ProjectsSection />

              {/* 7. Hackathons */}
              <HackathonsSection />

              {/* 8. Certifications */}
              <CertificationsSection />

              {/* 9. Achievements */}
              <AchievementsSection />

              {/* 10. Gallery */}
              <GallerySection />

              {/* 11. Dashboard */}
              <DashboardSection />

              {/* 12. Testimonials */}
              <TestimonialsSection />

              {/* 13. Contact */}
              <ContactSection />
            </Suspense>
          </main>

          {/* 15. Footer Section (Lazy Loaded) */}
          <Suspense fallback={<div className="h-24 bg-theme-surface" />}>
            <FooterSection />
          </Suspense>

          {/* 16. Chatbot AI Widget */}
          <ChatbotWidget />

          {/* Back to top widget */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
