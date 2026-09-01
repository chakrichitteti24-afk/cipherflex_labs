import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const stats = [
    { number: "2+", label: "Flagship Products", subtext: "Smith AI & Svanexa AI" },
    { number: "100%", label: "AI Powered", subtext: "State-of-the-Art Intelligence" },
    { number: "0-Trust", label: "Security First", subtext: "End-to-End Encryption" },
    { number: "Global", label: "Deployment", subtext: "Built in India • Worldwide" }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 relative border-t border-white/[0.08] bg-[#0B1120]/30" aria-label="Key Statistics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-4 sm:p-6 text-center border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-center items-center h-full"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-1 font-sans">
                <span className="text-[#2563EB]">{stat.number}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-white tracking-wide uppercase mb-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#94A3B8] font-normal">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
