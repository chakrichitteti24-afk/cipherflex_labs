import { motion } from 'framer-motion';
import { ExternalLink, Bot, Activity } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "Smith AI",
      description: "An AI-powered intelligent assistant platform designed to improve productivity, automate workflow tasks, and provide smart conversational capabilities.",
      status: "Live Application",
      link: "https://smith-ai-five.vercel.app",
      icon: <Bot size={32} className="text-brand-blue" aria-hidden="true" />,
      features: ["AI Assistant", "Smart Automation", "Instant Intelligence", "Modern Glass UI"],
      gradient: "from-brand-blue/15 to-transparent"
    },
    {
      name: "Svanexa AI",
      description: "An AI-powered women's health companion offering personalized cycle tracking, intelligent wellness insights, and privacy-focused health guidance.",
      status: "Live Application",
      link: "https://svanexa-ai.vercel.app",
      icon: <Activity size={32} className="text-brand-blue" aria-hidden="true" />,
      features: ["Cycle Tracking", "AI Companion", "Wellness Analytics", "Personalized Insights"],
      gradient: "from-brand-blue/15 to-transparent"
    }
  ];

  return (
    <section id="products" className="py-24 relative border-t border-white/5" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="products-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our <span className="text-brand-blue">AI Products</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Discover our suite of innovative software products designed to enhance daily productivity and health through artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col group overflow-hidden border border-white/10 hover:border-brand-blue/40"
            >
              <div className={`h-44 bg-gradient-to-b ${product.gradient} relative flex items-center justify-center border-b border-white/5`}>
                <div className="z-10 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 transition-all duration-300">
                  {product.icon}
                </div>
                <div className="absolute top-4 right-4 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse"></span>
                  {product.status}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{product.name}</h3>
                <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm sm:text-base flex-grow">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8" aria-label={`Key features of ${product.name}`}>
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${product.name} web application (opens in new tab)`}
                  className="w-full py-3.5 bg-white/[0.04] hover:bg-brand-blue text-white rounded-xl font-medium transition-all duration-300 border border-white/10 hover:border-brand-blue flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
                >
                  Visit Web App <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

