import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get in <span className="text-brand-blue">Touch</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Have a inquiry about our AI software development, cybersecurity solutions, or modern digital products? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center border border-white/10">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:hello@cipherfluxlabs.com" className="text-base text-gray-200 hover:text-brand-blue transition-colors focus:outline-none focus:underline">hello@cipherfluxlabs.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-base text-gray-200 hover:text-brand-blue transition-colors focus:outline-none focus:underline">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Headquarters</p>
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className="glass-card p-6 sm:p-8 lg:p-12 space-y-5 border border-white/10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2 font-medium">Full Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  required
                  autoComplete="name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white/[0.06] transition-all text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2 font-medium">Email Address</label>
                <input 
                  id="contact-email"
                  type="email" 
                  required
                  autoComplete="email"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white/[0.06] transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2 font-medium">Message</label>
                <textarea 
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:bg-white/[0.06] transition-all resize-none text-sm"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-2 shadow-md hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-[0.98]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} className="text-white" /> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

