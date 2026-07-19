import { motion } from 'framer-motion';
import { ExternalLink, Bot, Activity } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "Smith AI",
      description: "An AI-powered intelligent assistant platform designed to improve productivity and provide smart conversations.",
      status: "Live",
      link: "https://smith-ai-five.vercel.app",
      icon: <Bot size={32} className="text-brand-blue" />,
      features: ["AI Assistant", "Intelligent Conversations", "Fast Performance", "Modern UI"],
      gradient: "from-brand-blue/10 to-transparent"
    },
    {
      name: "HerSync AI",
      description: "An AI-powered women's health companion for cycle tracking, wellness insights, and personalized health guidance.",
      status: "Live",
      link: "https://hersync-ai.vercel.app",
      icon: <Activity size={32} className="text-brand-blue" />,
      features: ["Cycle Tracking", "AI Companion", "Wellness Insights", "Health Analytics"],
      gradient: "from-brand-blue/10 to-transparent"
    }
  ];

  return (
    <section id="products" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our <span className="text-brand-blue">Products</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Discover our suite of intelligent software applications designed for the modern web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col group overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-b ${product.gradient} relative flex items-center justify-center border-b border-white/5`}>
                <div className="z-10 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-brand-blue/30 transition-colors">
                  {product.icon}
                </div>
                <div className="absolute top-4 right-4 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                  {product.status}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 tracking-tight">{product.name}</h3>
                <p className="text-gray-400 mb-6 font-light flex-grow">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-400 font-light">
                      <div className="w-1 h-1 rounded-full bg-brand-blue opacity-50"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/[0.03] hover:bg-brand-blue text-white rounded-xl font-medium transition-colors border border-white/10 hover:border-brand-blue flex items-center justify-center gap-2 text-sm"
                >
                  Visit Product <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
