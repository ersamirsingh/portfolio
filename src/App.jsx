import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import { AnimatePresence } from 'framer-motion';

function MainApp() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Intersection Observer to trace which section is in view
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
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
          <Navbar activeSection={activeSection} />

          {/* Core Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
          </main>

          {/* Footer & Back to top widget */}
          <Footer />
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
