import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Minimal subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-8"
        >
          <Sparkles size={14} className="text-brand-blue" />
          <span className="text-xs sm:text-sm text-brand-blue font-medium tracking-wide">Building Intelligent Software for the Future</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
        >
          Build the <span className="text-brand-blue">Future</span> <br/> with AI.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          We create intelligent software products that solve real-world problems using Artificial Intelligence, Cybersecurity, and Modern Web Technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#products" className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-blue-600 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm">
            Explore Products <ArrowRight size={16} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-colors text-sm">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
