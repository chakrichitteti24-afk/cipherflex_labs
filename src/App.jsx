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

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {/* Flagship Boot Screen — lightweight overlay, non-blocking */}
      <BootScreen onComplete={() => setIsBooted(true)} />

      {/*
        Main website — renders immediately in background.
        Only opacity transition on boot complete (GPU-composited).
        NO blur/scale on the entire page — that is expensive and blocks LCP.
      */}
      <div
        style={{
          opacity: isBooted ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          willChange: 'opacity',
        }}
        className="bg-[#030712] min-h-screen selection:bg-[#2563EB]/30 selection:text-white overflow-x-hidden"
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
      </div>
    </>
  );
}

export default App;
