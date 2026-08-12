import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-subtle-glow" aria-label="Hero">
      {/* Extremely subtle radial ambient blue background lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] sm:h-[550px] bg-[#2563EB]/[0.08] rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      
      {/* Abstract subtle technology lines grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.06] backdrop-blur-md mb-8"
        >
          <Sparkles size={13} className="text-[#2563EB]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-wide text-[#94A3B8]">
            Flagship AI & Software Engineering
          </span>
        </motion.div>
        
        {/* Headline with ONLY 'Future' in CipherFlux blue */}
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-[1.1] sm:leading-[1.08]"
        >
          Build the <span className="text-[#2563EB]">Future</span> with AI.
        </motion.h1>
        
        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 font-normal leading-relaxed"
        >
          We build intelligent software products that solve real-world problems through AI, cybersecurity, and modern technology.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs mx-auto sm:max-w-none"
        >
          <a href="#products" className="btn-pill-primary w-full sm:w-auto justify-center" aria-label="Explore CipherFlux Labs products">
            Explore Products <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-pill-secondary w-full sm:w-auto justify-center" aria-label="Contact CipherFlux Labs">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
