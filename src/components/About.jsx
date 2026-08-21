import { motion } from 'framer-motion';
import { Target, Eye, Cpu, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Our Mission",
      description: "Engineer practical, high-impact AI software systems that empower individuals and organizations to solve complex challenges with unmatched speed and accuracy."
    },
    {
      icon: <Eye size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Our Vision",
      description: "Set the benchmark in next-generation AI product engineering, human-centered design, and zero-trust cybersecurity standards across the digital ecosystem."
    },
    {
      icon: <Cpu size={22} className="text-[#2563EB]" aria-hidden="true" />,
      title: "Technical Excellence",
      description: "Combine state-of-the-art machine intelligence models with resilient serverless cloud architectures and ultra-responsive glassmorphic interfaces."
    }
  ];

  const highlights = [
    {
      icon: <Sparkles size={18} className="text-[#2563EB]" />,
      title: "Intelligent AI Products",
      desc: "Developing autonomous platforms like Smith AI (AI Interview Copilot) and Svanexa AI (Women's Wellness Companion)."
    },
    {
      icon: <ShieldCheck size={18} className="text-[#2563EB]" />,
      title: "Zero-Trust Cybersecurity",
      desc: "Architecting end-to-end data encryption, privacy-preserving machine learning, and enterprise security layers."
    },
    {
      icon: <Layers size={18} className="text-[#2563EB]" />,
      title: "Modern Full-Stack Engineering",
      desc: "Building high-throughput, low-latency applications designed for scale, high reliability, and intuitive user experiences."
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
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">About CipherFlux Labs</p>
          <h2 id="about-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Technology with Purpose.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            Founded in 2026 by Chakri Chitteti, <strong className="text-white font-medium">CipherFlux Labs</strong> is an advanced AI and software technology studio dedicated to building transformative digital products, cybersecurity architectures, and intelligent software platforms.
          </p>
        </motion.div>

        {/* Pillars: Mission, Vision, Innovation */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
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

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-3 gap-5 pt-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-4 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
