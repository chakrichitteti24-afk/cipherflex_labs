import { motion } from 'framer-motion';
import { User, ShieldCheck, Briefcase } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const teamMembers = [
  {
    name: "Chakri Chitteti",
    role: "CEO & Founder",
    badgeIcon: ShieldCheck,
    description: "Leading CipherFlux Labs with a vision to build innovative AI-powered software products, cybersecurity solutions, and modern digital platforms.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "S. Karthik",
    role: "Operations Manager",
    badgeIcon: Briefcase,
    description: "Overseeing operational workflows, project delivery, resource management, and cross-functional coordination to ensure seamless execution.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "P. Gayani",
    role: "Product Manager",
    badgeIcon: Briefcase,
    description: "Responsible for product planning, feature strategy, user requirements, and coordinating product development.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    name: "S. Harshitha",
    role: "Product Manager",
    badgeIcon: Briefcase,
    description: "Responsible for product strategy, product improvements, user experience, and coordinating product development.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">Our Team</p>
          <h2 id="team-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Driven by Innovation.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            The visionary leadership and product minds guiding engineering precision, user experience, and strategic execution at CipherFlux Labs.
          </p>
        </motion.div>

        {/* Responsive Team Grid: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const BadgeIcon = member.badgeIcon;
            return (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 sm:p-7 text-center border border-white/[0.08] relative group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Ambient Profile Glow */}
                <div className="absolute inset-0 bg-[#2563EB]/[0.03] rounded-3xl pointer-events-none -z-10 group-hover:bg-[#2563EB]/[0.07] transition-colors duration-300" />

                <div>
                  {/* Avatar Badge */}
                  <div className="w-20 h-20 mx-auto rounded-full mb-6 bg-[#2563EB]/10 border border-[#2563EB]/25 flex items-center justify-center relative overflow-hidden group-hover:border-[#2563EB]/50 group-hover:bg-[#2563EB]/15 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.15)]">
                    <User size={36} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold mb-6">
                    <BadgeIcon size={14} aria-hidden="true" />
                    <span>{member.role}</span>
                  </div>

                  <p className="text-[#94A3B8] text-sm leading-relaxed font-normal mb-8">
                    {member.description}
                  </p>
                </div>
                
                {/* Social Connect Links */}
                <div className="flex items-center justify-center gap-3.5 pt-5 border-t border-white/[0.06]">
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`} 
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                  >
                    <FiLinkedin size={17} />
                  </a>
                  <a 
                    href={member.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub Profile`} 
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                  >
                    <FiGithub size={17} />
                  </a>
                  <a 
                    href={member.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter / X Profile`} 
                    className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                  >
                    <FiTwitter size={17} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
