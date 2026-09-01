import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Cpu, Zap, Layout, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <BrainCircuit size={18} aria-hidden="true" />, title: "AI Innovation", desc: "Leveraging state-of-the-art machine intelligence models to create autonomous, high-value applications." },
    { icon: <ShieldCheck size={18} aria-hidden="true" />, title: "Cybersecurity First", desc: "Built with zero-trust principles, data encryption, and privacy controls at every architecture layer." },
    { icon: <Cpu size={18} aria-hidden="true" />, title: "Modern Tech Stack", desc: "Engineered using modern frameworks, serverless infrastructure, and high-performance APIs." },
    { icon: <Zap size={18} aria-hidden="true" />, title: "High Performance", desc: "Optimized for speed, responsiveness, zero layout shift, and instant interactions." },
    { icon: <Layout size={18} aria-hidden="true" />, title: "Precision UI/UX", desc: "Crafted with dark glassmorphic surfaces, refined typography, and intuitive motion patterns." },
    { icon: <ArrowUpRight size={18} aria-hidden="true" />, title: "Continuous Evolution", desc: "Rapid iterative release cycles ensuring continuous improvements and software excellence." }
  ];

  return (
    <section className="py-14 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">Core Pillars</p>
          <h2 id="features-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Engineering Precision.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            The foundational capabilities behind every digital product built at CipherFlux Labs.
          </p>
        </motion.div>

        {/* Feature Cards Grid — Perfectly aligned equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-5 sm:p-7 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center text-[#2563EB] mb-4 sm:mb-5 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5 tracking-tight text-white">{feature.title}</h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-normal flex-1">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
