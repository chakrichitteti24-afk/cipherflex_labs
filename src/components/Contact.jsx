import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../hooks/useToast';
import { triggerHaptic } from '../utils/haptics';

const topics = [
  "General Inquiry",
  "Product Partnership",
  "Smith AI Feedback",
  "Svanexa AI Feedback",
  "Engineering & Careers"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("General Inquiry");
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { addToast } = useToast();

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    triggerHaptic(15);
    addToast(`${fieldName} copied to clipboard!`, 'success', 2500);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    triggerHaptic(25);
    addToast('Thank you! Your message has been sent to the CipherFlux Labs team.', 'success', 4000);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="py-14 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">Connect</p>
          <h2 id="contact-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Get in Touch.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Have an inquiry regarding our AI products, custom software engineering, or technical partnerships? Reach out to us.
          </p>
        </motion.div>

        {/* Contact Info & Form Panels — Perfectly aligned equal height */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="glass-card p-5 sm:p-7 flex flex-col justify-between border border-white/[0.08] h-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 tracking-tight">Direct Contact</h3>
                
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                        <Mail size={15} aria-hidden="true" />
                      </div>
                      <div className="truncate">
                        <p className="text-[#94A3B8] text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">Email</p>
                        <a href="mailto:hello@cipherfluxlabs.com" className="text-xs sm:text-sm text-white hover:text-[#2563EB] transition-colors font-medium truncate block">
                          hello@cipherfluxlabs.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('hello@cipherfluxlabs.com', 'Email address')}
                      className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center active:scale-95"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'Email address' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                        <Phone size={15} aria-hidden="true" />
                      </div>
                      <div className="truncate">
                        <p className="text-[#94A3B8] text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">Phone</p>
                        <a href="tel:+919876543210" className="text-xs sm:text-sm text-white hover:text-[#2563EB] transition-colors font-medium truncate block">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('+91 98765 43210', 'Phone number')}
                      className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center active:scale-95"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'Phone number' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                  
                  {/* Headquarters */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                      <MapPin size={15} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-0.5">Headquarters</p>
                      <p className="text-xs sm:text-sm text-white font-medium">India • Serving Globally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/[0.06]">
                <p className="text-[11px] sm:text-xs text-[#94A3B8] font-normal leading-relaxed">
                  Response SLA: Our team typically responds to inquiries within 24 business hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Glass Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-full flex flex-col"
          >
            <form className="glass-card p-5 sm:p-7 space-y-4 sm:space-y-5 border border-white/[0.08] h-full flex flex-col justify-between" onSubmit={handleSubmit}>
              <div className="space-y-4 sm:space-y-4">
                {/* Inquiry Topic Chips */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                    Topic of Inquiry
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setSelectedTopic(t);
                          triggerHaptic(8);
                        }}
                        className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-200 font-medium min-h-[32px] flex items-center active:scale-95 ${
                          selectedTopic === t
                            ? 'bg-white/[0.12] text-white border border-white/[0.16]'
                            : 'bg-white/[0.02] text-gray-400 hover:text-white border border-transparent'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-gray-300 mb-1">
                    Name
                  </label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoComplete="name"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.05] transition-all min-h-[44px]"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-gray-300 mb-1">
                    Email
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.05] transition-all min-h-[44px]"
                    placeholder="name@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] sm:text-xs font-medium uppercase tracking-wider text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.05] transition-all resize-none"
                    placeholder={`Tell us about your ${selectedTopic.toLowerCase()}...`}
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="btn-pill-primary w-full py-3 sm:py-3.5 mt-2 active:scale-[0.98]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} className="text-white" /> Message Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} aria-hidden="true" />
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
