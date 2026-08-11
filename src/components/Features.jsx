import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Cpu, Zap, Layout, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <BrainCircuit size={20} aria-hidden="true" />, title: "AI Innovation", desc: "Leveraging cutting-edge artificial intelligence to build smarter AI software solutions." },
    { icon: <ShieldCheck size={20} aria-hidden="true" />, title: "Cybersecurity Solutions", desc: "Enterprise-grade security and privacy built into the core architecture of every product." },
    { icon: <Cpu size={20} aria-hidden="true" />, title: "Modern Technology Stack", desc: "Built with modern frameworks, cloud infrastructure, and lightning-fast architectures." },
    { icon: <Zap size={20} aria-hidden="true" />, title: "High Performance", desc: "Optimized for extreme speed, Lighthouse efficiency, and zero core web vitals delay." },
    { icon: <Layout size={20} aria-hidden="true" />, title: "User-Centered Design", desc: "Beautiful, intuitive dark glassmorphic interfaces designed for effortless user engagement." },
    { icon: <ArrowUpRight size={20} aria-hidden="true" />, title: "Continuous Evolution", desc: "Iterative software development ensuring our digital products remain state of the art." }
  ];

  return (
    <section className="py-24 relative border-t border-white/5" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why <span className="text-brand-blue">Choose Us</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Our core technical strengths that set CipherFlux Labs apart in artificial intelligence and software engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-5 group-hover:bg-brand-blue/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

