import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Cpu, Zap, Layout, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <BrainCircuit size={20} aria-hidden="true" />, title: "AI Innovation", desc: "Leveraging state-of-the-art machine intelligence models to create autonomous, high-value applications." },
    { icon: <ShieldCheck size={20} aria-hidden="true" />, title: "Cybersecurity First", desc: "Built with zero-trust principles, data encryption, and privacy controls at every architecture layer." },
    { icon: <Cpu size={20} aria-hidden="true" />, title: "Modern Tech Stack", desc: "Engineered using modern frameworks, serverless infrastructure, and high-performance APIs." },
    { icon: <Zap size={20} aria-hidden="true" />, title: "High Performance", desc: "Optimized for speed, responsiveness, zero layout shift, and instant interactions." },
    { icon: <Layout size={20} aria-hidden="true" />, title: "Precision UI/UX", desc: "Crafted with dark glassmorphic surfaces, refined typography, and intuitive motion patterns." },
    { icon: <ArrowUpRight size={20} aria-hidden="true" />, title: "Continuous Evolution", desc: "Rapid iterative release cycles ensuring continuous improvements and software excellence." }
  ];

  return (
    <section className="py-28 relative border-t border-white/[0.08]" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">Core Pillars</p>
          <h2 id="features-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineering Precision.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            The foundational capabilities behind every digital product built at CipherFlux Labs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight text-white">{feature.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed font-normal">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
