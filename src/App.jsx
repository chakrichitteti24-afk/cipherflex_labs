import { useState, useEffect } from 'react';
import BootScreen from './components/BootScreen';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MobileQuickBar from './components/MobileQuickBar';
import PrivacyModal from './components/PrivacyModal';
import { ToastProvider } from './context/ToastProvider';

function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(true);
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'privacy' });

  // Check URL hash on initial mount and hash changes for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setLegalModal({ isOpen: true, tab: 'privacy' });
      } else if (hash === '#terms') {
        setLegalModal({ isOpen: true, tab: 'terms' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openPrivacyPolicy = () => {
    setLegalModal({ isOpen: true, tab: 'privacy' });
    window.history.pushState(null, '', '#privacy');
  };

  const openTermsOfService = () => {
    setLegalModal({ isOpen: true, tab: 'terms' });
    window.history.pushState(null, '', '#terms');
  };

  const closeLegalModal = () => {
    setLegalModal(prev => ({ ...prev, isOpen: false }));
    if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  };

  const handleBootComplete = () => {
    setIsBooted(true);
    setShowBoot(false);
  };

  return (
    <ToastProvider>
      {/* Minimalist 3.5s Boot Screen */}
      {showBoot && (
        <BootScreen onComplete={handleBootComplete} />
      )}

      {/* Main website layout */}
      <div
        style={{
          opacity: isBooted ? 1 : 0,
          transition: 'opacity 0.35s ease-out',
          willChange: 'opacity',
        }}
        className="bg-[#030712] min-h-screen selection:bg-[#2563EB]/25 selection:text-white overflow-x-hidden relative"
      >
        <TechBackground />
        <Navbar />
        <main id="main-content" className="relative z-10">
          <Hero />
          <About />
          <Products />
          <Stats />
          <Features />
          <Pricing />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer onOpenPrivacy={openPrivacyPolicy} onOpenTerms={openTermsOfService} />
        <BackToTop />
        <MobileQuickBar />
        <PrivacyModal 
          isOpen={legalModal.isOpen} 
          initialTab={legalModal.tab} 
          onClose={closeLegalModal} 
        />
      </div>
    </ToastProvider>
  );
}

export default App;
