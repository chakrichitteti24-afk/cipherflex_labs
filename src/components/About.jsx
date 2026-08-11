import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About <span className="text-brand-blue">CipherFlux Labs</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            CipherFlux Labs is an <strong className="font-normal text-white">AI software company</strong> focused on building innovative AI-powered software products, cybersecurity solutions, intelligent automation tools, and modern digital platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity text-brand-blue pointer-events-none">
              <Target size={120} aria-hidden="true" />
            </div>
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
              <Target size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight text-white">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
              Deliver high-performance artificial intelligence solutions and innovative software products that empower individuals and organizations. We build tools that amplify potential and solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity text-brand-blue pointer-events-none">
              <Lightbulb size={120} aria-hidden="true" />
            </div>
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
              <Lightbulb size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight text-white">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
              Establish CipherFlux Labs as a global leader in software development and AI products. We set new benchmarks in modern web design, privacy-first cybersecurity, and intelligent software engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

