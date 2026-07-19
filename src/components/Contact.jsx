import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get in <span className="text-brand-blue">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Have a project in mind or want to learn more about our products? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 lg:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email Us</p>
                    <a href="mailto:hello@cipherfluxlabs.com" className="text-base text-gray-200 hover:text-brand-blue transition-colors">hello@cipherfluxlabs.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-base text-gray-200 hover:text-brand-blue transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <p className="text-base text-gray-200">India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form className="glass-card p-8 lg:p-12 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-blue focus:bg-white/[0.05] transition-all text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1.5 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-blue focus:bg-white/[0.05] transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1.5 font-medium">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-blue focus:bg-white/[0.05] transition-all resize-none text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm mt-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
