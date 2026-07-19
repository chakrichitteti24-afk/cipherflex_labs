import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

export default function Stats() {
  const stats = [
    { value: 2, suffix: "+", label: "Products" },
    { value: 3, suffix: "", label: "Team Members" },
    { value: 100, suffix: "%", label: "AI Powered" },
    { value: 24, suffix: "/7", label: "Operations" }
  ];

  return (
    <section className="py-16 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-brand-blue text-sm uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
