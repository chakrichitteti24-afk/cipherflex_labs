import { useState } from 'react';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Features from './components/Features';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MobileQuickBar from './components/MobileQuickBar';
import { ToastProvider } from './context/ToastProvider';

function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(true);

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
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Products />
          <Stats />
          <Features />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <MobileQuickBar />
      </div>
    </ToastProvider>
  );
}

export default App;
