import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowUp } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

export default function MobileQuickBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 300px and not at the very bottom
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    triggerHaptic(12);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-1.5 p-1.5 rounded-full bg-[#0B1120]/90 backdrop-blur-xl border border-white/[0.14] shadow-2xl"
          aria-label="Quick mobile navigation"
        >
          <a
            href="#products"
            onClick={() => triggerHaptic(8)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all"
          >
            <Sparkles size={13} className="text-[#2563EB]" />
            <span>Products</span>
          </a>

          <div className="w-[1px] h-3.5 bg-white/10" aria-hidden="true" />

          <a
            href="#contact"
            onClick={() => triggerHaptic(8)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all"
          >
            <MessageSquare size={13} className="text-emerald-400" />
            <span>Contact</span>
          </a>

          <div className="w-[1px] h-3.5 bg-white/10" aria-hidden="true" />

          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
