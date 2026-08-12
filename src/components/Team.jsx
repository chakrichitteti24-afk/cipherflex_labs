import { motion } from 'framer-motion';
import { User, ShieldCheck } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Team() {
  const leader = {
    name: "Chakri Chitteti",
    role: "CEO & Founder",
    description: "Leading CipherFlux Labs with a vision to build innovative AI-powered software products, cybersecurity solutions, and modern digital platforms."
  };

  return (
    <section id="team" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="team-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">Leadership</p>
          <h2 id="team-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Driven by Innovation.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            The visionary leadership guiding product design, technical development, and strategic execution at CipherFlux Labs.
          </p>
        </motion.div>

        {/* Single Premium Founder Profile Showcase */}
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 sm:p-10 text-center border border-white/[0.08] relative group"
          >
            {/* Ambient Profile Glow */}
            <div className="absolute inset-0 bg-[#2563EB]/[0.03] rounded-3xl pointer-events-none -z-10 group-hover:bg-[#2563EB]/[0.06] transition-colors" />

            {/* Avatar Badge */}
            <div className="w-24 h-24 mx-auto rounded-full mb-6 bg-[#2563EB]/10 border border-[#2563EB]/25 flex items-center justify-center relative overflow-hidden group-hover:border-[#2563EB]/50 transition-colors shadow-[0_0_25px_rgba(37,99,235,0.15)]">
              <User size={40} className="text-[#2563EB]" aria-hidden="true" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{leader.name}</h3>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold mb-6">
              <ShieldCheck size={14} />
              {leader.role}
            </div>

            <p className="text-[#94A3B8] text-sm sm:text-base mb-8 leading-relaxed font-normal">
              {leader.description}
            </p>
            
            {/* Social Connect Links */}
            <div className="flex items-center justify-center gap-4 pt-2 border-t border-white/[0.06]">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chakri Chitteti LinkedIn Profile" 
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chakri Chitteti GitHub Profile" 
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chakri Chitteti Twitter / X Profile" 
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
