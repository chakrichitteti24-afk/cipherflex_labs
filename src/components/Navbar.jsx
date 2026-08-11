import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <nav 
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2.5 group rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" aria-label="CipherFlux Labs - Home">
            <div className="p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-blue group-hover:bg-brand-blue/20 transition-colors">
              <Code2 size={20} aria-hidden="true" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">CipherFlux Labs</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:text-brand-blue py-1"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-brand-blue/10 hover:bg-brand-blue border border-brand-blue/30 text-white rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            type="button"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full glass border-t border-white/5 md:hidden"
            >
              <div className="flex flex-col p-6 gap-4 bg-[#030712]/95 backdrop-blur-2xl shadow-2xl">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-brand-blue transition-colors text-base font-medium py-2 px-1 border-b border-white/5 last:border-none"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="mt-2 text-center py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-medium transition-colors text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

