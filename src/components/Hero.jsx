import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-36 pb-12 sm:pb-24 overflow-hidden px-4" 
      aria-label="Hero"
    >
      {/* Subtle ambient radial gradient — non-neon */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[800px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#2563EB]/[0.04] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      
      {/* Subtle grid background mask */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Refined Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md mb-6 sm:mb-8 max-w-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-medium tracking-wide text-gray-300 truncate">
            CipherFlux Labs — Flagship AI &amp; Software Engineering
          </span>
        </motion.div>
        
        {/* Headline with responsive fluid typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5 sm:mb-8 text-white leading-[1.15] sm:leading-[1.1]"
        >
          <span className="sr-only">CipherFlux Labs — </span>Build the <span className="text-[#2563EB]">Future</span> with AI.
        </motion.h1>
        
        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed px-2"
        >
          At CipherFlux Labs (CipherFlux), we engineer intelligent software products that solve real-world problems through artificial intelligence, cybersecurity, and modern computing.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs mx-auto sm:max-w-none px-4 sm:px-0"
        >
          <a 
            href="#products" 
            className="btn-pill-primary justify-center w-full sm:w-auto" 
            aria-label="Explore CipherFlux Labs products"
          >
            Explore Products <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a 
            href="#contact" 
            className="btn-pill-secondary justify-center w-full sm:w-auto" 
            aria-label="Contact CipherFlux Labs"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
