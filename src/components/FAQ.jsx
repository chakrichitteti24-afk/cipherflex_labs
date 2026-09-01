import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

const faqs = [
  {
    category: 'Company',
    q: 'What is CipherFlux Labs?',
    a: 'CipherFlux Labs is an AI and software technology company founded by Chakri Chitteti. The company builds intelligent software products including AI-powered applications, focusing on delivering practical solutions through modern technology.'
  },
  {
    category: 'Products',
    q: 'What products does CipherFlux Labs build?',
    a: 'CipherFlux Labs currently develops two products: Smith AI, an AI-powered interview preparation platform, and Svanexa AI, an AI-powered women\'s wellness application. Both products are live and publicly accessible.'
  },
  {
    category: 'Products',
    q: 'What is Smith AI?',
    a: 'Smith AI is an AI-powered interview preparation platform designed to help users practice interviews, receive real-time feedback, and improve their overall interview performance. It simulates realistic interview scenarios and provides performance analytics.'
  },
  {
    category: 'Products',
    q: 'What is Svanexa AI?',
    a: 'Svanexa AI is an AI-powered women\'s wellness application designed to help users track wellness patterns, understand cycle-related information, and receive personalized health insights. It is built with a privacy-first approach and end-to-end data protection.'
  },
  {
    category: 'Team',
    q: 'Who is on the CipherFlux Labs team?',
    a: 'CipherFlux Labs was founded by Chakri Chitteti (CEO & Founder). The team includes S. Karthik (Operations Manager), P. Gayani (Product Manager), and S. Harshitha (Product Manager).'
  },
  {
    category: 'Company',
    q: 'What does CipherFlux Labs specialize in?',
    a: 'CipherFlux Labs specializes in artificial intelligence, software engineering, and building modern digital products. The company focuses on combining AI technology with clean, user-centered product design.'
  }
];

const categories = ['All', 'Company', 'Products', 'Team'];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    return faqs.filter(({ category }) => {
      return selectedCategory === 'All' || category === selectedCategory;
    });
  }, [selectedCategory]);

  const toggleFAQ = (index) => {
    triggerHaptic(8);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      // On mobile, single-open accordion for compact screen space
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    } else {
      // On desktop, allow multiple open
      setOpenIndexes((prev) => 
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  const handleExpandAll = () => {
    triggerHaptic(10);
    setOpenIndexes(filteredFaqs.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    triggerHaptic(10);
    setOpenIndexes([]);
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-28 relative border-t border-white/[0.08]"
      aria-labelledby="faq-heading"
    >
      {/* FAQ JSON-LD */}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">
            Common Questions
          </p>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Everything you need to know about CipherFlux Labs and our products.
          </p>
        </motion.div>

        {/* Category Filter Controls */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 pt-1">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none w-full xs:w-auto touch-pan-x">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    triggerHaptic(8);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 font-medium whitespace-nowrap min-h-[32px] flex items-center ${
                    selectedCategory === cat
                      ? 'bg-white/[0.12] text-white border border-white/[0.16]'
                      : 'bg-white/[0.02] text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 self-end xs:self-auto shrink-0">
              <button
                type="button"
                onClick={handleExpandAll}
                className="hover:text-white transition-colors p-1"
              >
                Expand all
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="hover:text-white transition-colors p-1"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2.5 sm:space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(({ q, a, category }, i) => {
              const isOpen = openIndexes.includes(i);
              return (
                <motion.div
                  key={q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                >
                  <div className="glass-card border border-white/[0.08] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(i)}
                      className="w-full flex items-center justify-between p-4 sm:px-6 sm:py-5 text-left focus:outline-none focus:ring-1 focus:ring-[#2563EB]/40 group min-h-[50px]"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <div className="pr-3">
                        <span className="text-[10px] sm:text-xs text-[#2563EB] uppercase tracking-wider font-semibold block mb-0.5">
                          {category}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-white group-hover:text-gray-200 transition-colors leading-snug">
                          {q}
                        </span>
                      </div>
                      <span className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-300 transition-colors group-hover:border-[#2563EB]/40 group-hover:text-white ml-1">
                        {isOpen ? <Minus size={12} aria-hidden="true" /> : <Plus size={12} aria-hidden="true" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          aria-labelledby={`faq-question-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed font-normal border-t border-white/[0.06] pt-3 sm:pt-3.5">
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-10 glass-card p-6 border border-white/[0.08]">
              <p className="text-gray-300 text-xs sm:text-sm mb-3">No matching questions found.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                }}
                className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.1] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
