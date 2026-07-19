import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Features from './components/Features';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fast, minimal loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl text-brand-blue mb-6">
                <Code2 size={32} />
              </div>
              <div className="text-xl font-bold tracking-tight text-white mb-8">
                CIPHERFLUX LABS
              </div>
              <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-blue"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#030712] min-h-screen selection:bg-brand-blue/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Stats />
          <Features />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
