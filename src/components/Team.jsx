import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Briefcase } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { triggerHaptic } from '../utils/haptics';

const teamMembers = [
  {
    name: "Chakri Chitteti",
    role: "CEO & Founder",
    badgeIcon: ShieldCheck,
    description: "Leading CipherFlux Labs with a vision to build innovative AI-powered software products, cybersecurity solutions, and modern digital platforms.",
    socials: {
      linkedin: "https://www.linkedin.com/in/chakri-chitteti-a7978b415?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/chakrichitteti24-afk"
    }
  },
  {
    name: "S. Karthik",
    role: "Operations Manager",
    badgeIcon: Briefcase,
    description: "Overseeing operational workflows, project delivery, resource management, and cross-functional coordination to ensure seamless execution.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/s17826320-collab"
    }
  },
  {
    name: "P. Gayani",
    role: "Product Manager",
    badgeIcon: Briefcase,
    description: "Responsible for product planning, feature strategy, user requirements, and coordinating product development.",
    socials: {
      linkedin: "https://www.linkedin.com/in/gayani-perambakam-366a26415?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Gayani-9"
    }
  },
  {
    name: "S. Harshitha",
    role: "Product Manager",
    badgeIcon: Briefcase,
    description: "Responsible for product strategy, product improvements, user experience, and coordinating product development.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sajja-harshitha-b24867428?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/sajjaharshitha2006"
    }
  }
];

export default function Team() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeCardIndex && newIndex >= 0 && newIndex < teamMembers.length) {
      setActiveCardIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveCardIndex(index);
    triggerHaptic(8);
  };

  return (
    <section id="team" className="py-14 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">Our Team</p>
          <h2 id="team-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Driven by Innovation.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            The visionary leadership and product minds guiding engineering precision, user experience, and strategic execution at CipherFlux Labs.
          </p>
        </motion.div>

        {/* Mobile Swipe Carousel + Desktop Grid — Perfectly aligned equal height */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {teamMembers.map((member, index) => {
            const BadgeIcon = member.badgeIcon;
            return (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-5 sm:p-7 text-center border border-white/[0.08] relative group flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center h-full"
              >
                <div className="flex flex-col items-center flex-1">
                  {/* Avatar Badge */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 mx-auto rounded-full mb-4 sm:mb-5 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center relative overflow-hidden group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-all duration-300 shrink-0">
                    <User size={28} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-medium mb-4 shrink-0">
                    <BadgeIcon size={12} className="text-[#2563EB]" aria-hidden="true" />
                    <span>{member.role}</span>
                  </div>

                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-normal mb-5 flex-1">
                    {member.description}
                  </p>
                </div>
                
                {/* Social Connect Links — Perfectly aligned bottom baseline */}
                <div className="flex items-center justify-center gap-2.5 pt-3.5 border-t border-white/[0.06] shrink-0">
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerHaptic(8)}
                    aria-label={`${member.name} LinkedIn Profile`} 
                    className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/50 min-h-[36px] min-w-[36px]"
                  >
                    <FiLinkedin size={15} />
                  </a>
                  <a 
                    href={member.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerHaptic(8)}
                    aria-label={`${member.name} GitHub Profile`} 
                    className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/50 min-h-[36px] min-w-[36px]"
                  >
                    <FiGithub size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Pagination Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 pt-4 md:hidden">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                activeCardIndex === i ? 'w-5 bg-[#2563EB]' : 'w-1.5 bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
