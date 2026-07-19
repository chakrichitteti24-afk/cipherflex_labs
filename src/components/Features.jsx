import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Cpu, Zap, Layout, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <BrainCircuit size={20} />, title: "AI Innovation", desc: "Leveraging cutting-edge artificial intelligence to build smarter applications." },
    { icon: <ShieldCheck size={20} />, title: "Cybersecurity", desc: "Enterprise-grade security built into the core of every product we develop." },
    { icon: <Cpu size={20} />, title: "Modern Technology", desc: "Built with the latest frameworks and architectures for the modern web." },
    { icon: <Zap size={20} />, title: "High Performance", desc: "Optimized for speed, efficiency, and seamless user experiences." },
    { icon: <Layout size={20} />, title: "User-Centered Design", desc: "Beautiful, intuitive interfaces that delight users and drive engagement." },
    { icon: <ArrowUpRight size={20} />, title: "Continuous Improvement", desc: "Iterative development to keep our solutions ahead of the curve." }
  ];

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why <span className="text-brand-blue">Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Our core strengths that set us apart in the software landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 group"
            >
              <div className="w-10 h-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
