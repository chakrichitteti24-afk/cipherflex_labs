import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: "2+", label: "Flagship Products", subtext: "Smith AI & Svanexa AI" },
    { number: "100%", label: "AI Powered", subtext: "State-of-the-Art Intelligence" },
    { number: "0-Trust", label: "Security First", subtext: "End-to-End Encryption" },
    { number: "Global", label: "Deployment", subtext: "Built in India • Worldwide" }
  ];

  return (
    <section className="py-20 relative border-t border-white/[0.08] bg-[#0B1120]/40" aria-label="Key Statistics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 sm:p-8 text-center border border-white/[0.06] hover:border-[#2563EB]/30 transition-all"
            >
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 font-sans">
                <span className="text-[#2563EB]">{stat.number}</span>
              </div>
              <div className="text-sm font-semibold text-white tracking-wide uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#94A3B8] font-normal">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
