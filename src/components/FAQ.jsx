import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is CipherFlux Labs?',
    a: 'CipherFlux Labs is an AI and software technology company founded by Chakri Chitteti. The company builds intelligent software products including AI-powered applications, focusing on delivering practical solutions through modern technology.'
  },
  {
    q: 'What products does CipherFlux Labs build?',
    a: 'CipherFlux Labs currently develops two products: Smith AI, an AI-powered interview preparation platform, and Svanexa AI, an AI-powered women\'s wellness application. Both products are live and publicly accessible.'
  },
  {
    q: 'What is Smith AI?',
    a: 'Smith AI is an AI-powered interview preparation platform designed to help users practice interviews, receive real-time feedback, and improve their overall interview performance. It simulates realistic interview scenarios and provides performance analytics.'
  },
  {
    q: 'What is Svanexa AI?',
    a: 'Svanexa AI is an AI-powered women\'s wellness application designed to help users track wellness patterns, understand cycle-related information, and receive personalized health insights. It is built with a privacy-first approach and end-to-end data protection.'
  },
  {
    q: 'Who is on the CipherFlux Labs team?',
    a: 'CipherFlux Labs was founded by Chakri Chitteti (CEO & Founder). The team includes S. Karthik (Operations Manager), P. Gayani (Product Manager), and S. Harshitha (Product Manager).'
  },
  {
    q: 'What does CipherFlux Labs specialize in?',
    a: 'CipherFlux Labs specializes in artificial intelligence, software engineering, and building modern digital products. The company focuses on combining AI technology with clean, user-centered product design.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-16 sm:py-28 relative border-t border-white/[0.08]"
      aria-labelledby="faq-heading"
    >
      {/* FAQ JSON-LD — inline for guaranteed crawlability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a }
            }))
          })
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">
            Common Questions
          </p>
          <h2 id="faq-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            Everything you need to know about CipherFlux Labs and our products.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-card border border-white/[0.08] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:ring-inset group"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4 leading-snug group-hover:text-[#2563EB] transition-colors">
                    {q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] transition-colors group-hover:bg-[#2563EB]/20">
                    {open === i
                      ? <Minus size={14} aria-hidden="true" />
                      : <Plus size={14} aria-hidden="true" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-6 pb-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal border-t border-white/[0.06] pt-4">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
