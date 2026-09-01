import { motion } from 'framer-motion';
import { Target, Eye, Cpu, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target size={20} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Our Mission",
      description: "Engineer practical, high-impact AI software systems that empower individuals and organizations to solve complex challenges with unmatched speed and accuracy."
    },
    {
      icon: <Eye size={20} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Our Vision",
      description: "Set the benchmark in next-generation AI product engineering, human-centered design, and zero-trust cybersecurity standards across the digital ecosystem."
    },
    {
      icon: <Cpu size={20} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Technical Excellence",
      description: "Combine state-of-the-art machine intelligence models with resilient serverless cloud architectures and ultra-responsive glassmorphic interfaces."
    }
  ];

  const highlights = [
    {
      icon: <Sparkles size={16} className="text-[#2563EB]" />,
      title: "Intelligent AI Products",
      desc: "Developing autonomous platforms like Smith AI (AI Interview Copilot) and Svanexa AI (Women's Wellness Companion)."
    },
    {
      icon: <ShieldCheck size={16} className="text-[#2563EB]" />,
      title: "Zero-Trust Cybersecurity",
      desc: "Architecting end-to-end data encryption, privacy-preserving machine learning, and enterprise security layers."
    },
    {
      icon: <Layers size={16} className="text-[#2563EB]" />,
      title: "Modern Full-Stack Engineering",
      desc: "Building high-throughput, low-latency applications designed for scale, high reliability, and intuitive user experiences."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Heading & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">About CipherFlux Labs</p>
          <h2 id="about-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Technology with Purpose.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Founded in 2026 by Chakri Chitteti, <strong className="text-white font-medium">CipherFlux Labs</strong> is an advanced AI and software technology studio dedicated to building transformative digital products, cybersecurity architectures, and intelligent software platforms.
          </p>
        </motion.div>

        {/* Pillars: Mission, Vision, Innovation — Perfectly aligned equal height grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 items-stretch">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-5 sm:p-7 flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 sm:mb-6 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-colors shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-normal flex-1">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Grid — Perfectly aligned equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-2 items-stretch">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 h-full"
            >
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="flex flex-col h-full justify-center">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
