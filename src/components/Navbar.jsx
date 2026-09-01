import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current section in viewport
      const sections = ['home', 'about', 'products', 'team', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 220;

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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[300] px-4 py-2 bg-[#2563EB] text-white font-medium rounded-lg shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Top scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-[#2563EB] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300 pt-2.5 sm:pt-4">
        <nav 
          aria-label="Main Navigation"
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'glass-nav bg-[#030712]/90 backdrop-blur-xl border-white/[0.1] py-1.5 sm:py-2 px-3.5 sm:px-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
              : 'glass-nav bg-[#030712]/60 backdrop-blur-lg border-white/[0.06] py-2 sm:py-2.5 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand mark */}
            <a 
              href="#home" 
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded-full min-h-[40px]" 
              aria-label="CipherFlux Labs - Home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-all duration-200">
                <span className="text-[#2563EB] font-bold text-[10px] sm:text-xs leading-none tracking-tighter select-none">&lt;/&gt;</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold tracking-tight text-white group-hover:text-gray-200 transition-colors">
                CipherFlux Labs
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                      isActive ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.12]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <a 
                href="#contact" 
                className="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full text-xs font-medium transition-all duration-200 active:scale-95 shadow-sm min-h-[34px] flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Toggle (44px min touch target) */}
            <button 
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="md:hidden p-2 text-[#94A3B8] hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation Sheet */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                id="mobile-navigation"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2.5 p-3 sm:p-4 bg-[#0B1120]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl md:hidden space-y-1 relative overflow-hidden shadow-2xl"
              >
                <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-2" />

                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-[0.98] min-h-[44px] ${
                      activeSection === link.id 
                        ? 'bg-white/[0.08] text-white border border-white/[0.1]' 
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={14} className="text-white/30" />
                  </a>
                ))}

                <div className="pt-2 border-t border-white/[0.08]">
                  <a 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="btn-pill-primary w-full py-3 text-xs font-semibold uppercase tracking-wider"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
