import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'products', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-500 pt-3 sm:pt-5">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'glass-nav bg-[#030712]/85 backdrop-blur-2xl border-white/[0.14] py-2.5 px-4 sm:px-5 shadow-[0_12px_40px_rgba(0,0,0,0.65)]' 
            : 'glass-nav bg-[#030712]/50 backdrop-blur-xl border-white/[0.08] py-3 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand mark — </> symbol */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 rounded-full" 
            aria-label="CipherFlux Labs - Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#2563EB]/10 border border-[#2563EB]/25 rounded-full flex items-center justify-center group-hover:bg-[#2563EB]/20 group-hover:border-[#2563EB]/40 transition-all duration-300">
              <span className="text-[#2563EB] font-bold text-[10px] sm:text-xs leading-none tracking-tighter select-none">&lt;/&gt;</span>
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white group-hover:text-gray-100 transition-colors">
              CipherFlux Labs
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-300 rounded-full ${
                    isActive ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.12]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="px-5 py-2 bg-[#2563EB]/10 hover:bg-[#2563EB] border border-[#2563EB]/30 hover:border-[#2563EB] text-white rounded-full text-xs font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle (iOS Touch Friendly) */}
          <button 
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 text-[#94A3B8] hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation iOS Glass Sheet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobile-navigation"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 p-4 ios-glass-sheet md:hidden space-y-2 relative overflow-hidden"
            >
              {/* iOS subtle top grab bar indicator */}
              <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-3" />

              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all active:scale-[0.98] ${
                    activeSection === link.id 
                      ? 'bg-[#2563EB]/15 text-white border border-[#2563EB]/30' 
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="text-white/30" />
                </a>
              ))}

              <div className="pt-3 border-t border-white/[0.08]">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-pill-primary w-full py-3.5 text-xs font-semibold uppercase tracking-wider"
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
