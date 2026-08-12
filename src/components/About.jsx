import { motion } from 'framer-motion';
import { Target, Eye, Cpu } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Mission",
      description: "Deliver intelligent software solutions and AI systems designed to empower organizations and solve complex real-world challenges."
    },
    {
      icon: <Eye size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Vision",
      description: "Establish new standards in modern AI product development, privacy-first cybersecurity, and minimalist engineering excellence."
    },
    {
      icon: <Cpu size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Innovation",
      description: "Pioneer cutting-edge applications by combining modern web architectures with state-of-the-art machine intelligence."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Heading & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">About CipherFlux Labs</p>
          <h2 id="about-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Technology with Purpose.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            CipherFlux Labs is an AI software company building innovative software products, enterprise-grade cybersecurity solutions, and modern digital experiences designed with surgical precision and lasting impact.
          </p>
        </motion.div>

        {/* Pillars: Mission, Vision, Innovation */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/[0.08] border border-[#2563EB]/20 flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/15 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
