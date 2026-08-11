import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden" aria-label="Hero">
      {/* Minimal subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[350px] bg-brand-blue/15 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/25 bg-brand-blue/10 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.15)]"
        >
          <Sparkles size={14} className="text-brand-blue" aria-hidden="true" />
          <span className="text-xs sm:text-sm text-brand-blue font-medium tracking-wide">Next-Gen AI Software Company</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.1]"
        >
          Build the <span className="text-brand-blue bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-brand-blue">Future</span> <br className="hidden sm:inline" /> with AI Solutions.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          <strong className="font-normal text-white">CipherFlux Labs</strong> creates innovative AI-powered software products, enterprise cybersecurity solutions, and modern digital applications designed to solve real-world problems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <a 
            href="#products" 
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] active:scale-[0.98]"
          >
            Explore AI Products <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-blue/40 text-white rounded-full font-medium transition-all text-sm sm:text-base active:scale-[0.98]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

