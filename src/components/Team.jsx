import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Team() {
  const team = [
    {
      name: "Chakri Chitteti",
      role: "CEO & Founder",
      description: "Leading CipherFlux Labs with a vision to build innovative AI-powered software products, cybersecurity solutions, and modern digital platforms."
    }
  ];

  return (
    <section id="team" className="py-24 relative border-t border-white/5" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Meet Our <span className="text-brand-blue">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            The leadership driving innovation at our AI software company.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {team.map((member) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 text-center group max-w-md w-full"
            >
              <div className="w-24 h-24 mx-auto rounded-full mb-6 bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center relative overflow-hidden group-hover:bg-brand-blue/10 transition-colors">
                <User size={36} className="text-brand-blue" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-bold mb-1 tracking-tight">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
                {member.description}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn Profile`} 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors"
                >
                  <FiLinkedin size={16} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s GitHub Profile`} 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors"
                >
                  <FiGithub size={16} />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s Twitter / X Profile`} 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors"
                >
                  <FiTwitter size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

