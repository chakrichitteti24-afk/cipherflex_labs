import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About <span className="text-brand-blue">CipherFlux Labs</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            CipherFlux Labs is an AI and software company focused on building innovative AI-powered applications, cybersecurity solutions, productivity tools, and modern digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-brand-blue">
              <Target size={120} />
            </div>
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Deliver innovative software solutions that empower people and businesses. We strive to create tools that amplify human potential and streamline complex processes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-brand-blue">
              <Lightbulb size={120} />
            </div>
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Become one of the leading AI software companies in India. We aim to set new standards in software architecture, user experience, and intelligent automation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
