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
    <section id="contact" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">Connect</p>
          <h2 id="contact-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Get in Touch.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            Have an inquiry regarding our AI products, custom software engineering, or technical partnerships? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-7 sm:p-10 h-full flex flex-col justify-between border border-white/[0.08]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Mail size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hello@cipherfluxlabs.com" className="text-sm sm:text-base text-white hover:text-[#2563EB] transition-colors focus:outline-none focus:underline font-medium">
                        hello@cipherfluxlabs.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Phone size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+919876543210" className="text-sm sm:text-base text-white hover:text-[#2563EB] transition-colors focus:outline-none focus:underline font-medium">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="text-sm sm:text-base text-white font-medium">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">
                  Response SLA: Our team typically responds to inquiries within 24 business hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Glass Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form className="glass-card p-8 sm:p-10 space-y-6 border border-white/[0.08]" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  id="contact-name"
                  type="text" 
                  required
                  autoComplete="name"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white/[0.05] transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  id="contact-email"
                  type="email" 
                  required
                  autoComplete="email"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white/[0.05] transition-all"
                  placeholder="name@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white/[0.05] transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <button 
                type="submit"
                className="btn-pill-primary w-full py-3.5 mt-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} className="text-white" /> Message Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} aria-hidden="true" />
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
