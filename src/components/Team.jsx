import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Team() {
  const team = [
    {
      name: "Chakri Chitteti",
      role: "CEO & Founder",
      description: "Leading CipherFlux Labs with a vision to build innovative AI-powered software products."
    },
    {
      name: "Mavulluru Eswar",
      role: "Chief Technology Officer",
      description: "Leads software architecture, backend development, cloud infrastructure, and technical innovation."
    },
    {
      name: "Kesamsetty Vaishnavi",
      role: "Software Tester",
      description: "Ensures software quality through testing, bug tracking, performance testing, and quality assurance."
    }
  ];

  return (
    <section id="team" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Meet Our <span className="text-brand-blue">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            The visionary minds behind our innovative AI and software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group"
            >
              <div className={`w-24 h-24 mx-auto rounded-full mb-6 bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center relative overflow-hidden group-hover:bg-brand-blue/10 transition-colors`}>
                <User size={32} className="text-brand-blue" />
              </div>
              
              <h3 className="text-lg font-bold mb-1 tracking-tight">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light min-h-[60px]">
                {member.description}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors">
                  <FiLinkedin size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors">
                  <FiGithub size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors">
                  <FiTwitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
