import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Sparkles, Shield, ArrowRight, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('automation'); // 'automation' | 'fullstack'
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'

  const automationTiers = [
    {
      id: 'micro',
      name: 'Micro Automation',
      badge: 'Starter',
      popular: false,
      desc: 'Ideal for solopreneurs & small businesses wanting to automate 1 key repetitive task.',
      priceINR: '₹4,500',
      priceUSD: '$59',
      maintenanceINR: '₹1,500 / mo',
      maintenanceUSD: '$20 / mo',
      timeline: '2–4 Days Delivery',
      features: [
        '1 End-to-end custom workflow',
        'Lead Capture -> WhatsApp/Email -> Sheets',
        'Make.com / Zapier / Webhooks setup',
        'Testing & verification handover',
        'Maintenance: Weekly health check & quick bug fixes',
        'Maintenance: 1 minor field/text update per month',
      ],
    },
    {
      id: 'growth',
      name: 'Business Workflow',
      badge: 'Most Popular',
      popular: true,
      desc: 'Full operations automation connecting your CRM, payments, and team notifications.',
      priceINR: '₹14,500',
      priceUSD: '$179',
      maintenanceINR: '₹3,500 / mo',
      maintenanceUSD: '$45 / mo',
      timeline: '1–2 Weeks Delivery',
      features: [
        '2–4 Multi-step conditional workflows',
        'Payment triggers (Razorpay/Stripe) -> Auto-Invoicing',
        'CRM sync (HubSpot / Notion / Airtable)',
        'Error alert channels & automatic fallbacks',
        'Maintenance: Proactive error monitoring & API token refreshes',
        'Maintenance: Up to 3 hours of monthly adjustments',
      ],
    },
    {
      id: 'ai-auto',
      name: 'AI Automation Agent',
      badge: 'Advanced AI',
      popular: false,
      desc: 'Autonomous AI agents for customer support, document parsing, and smart replies.',
      priceINR: '₹28,000',
      priceUSD: '$349',
      maintenanceINR: '₹6,000 / mo',
      maintenanceUSD: '$75 / mo',
      timeline: '2–3 Weeks Delivery',
      features: [
        'Custom AI Agent (OpenAI / Claude / Gemini API)',
        'Website / WhatsApp AI customer support bot',
        'Automated document & PDF data extraction (OCR)',
        'Custom prompt tuning on your company data',
        'Maintenance: Model version updates & prompt fine-tuning',
        'Maintenance: Up to 6 hours of ongoing monthly upgrades',
      ],
    },
  ];

  const fullstackTiers = [
    {
      id: 'web-ai',
      name: 'Web App + AI Tool',
      badge: 'Quick Launch',
      popular: false,
      desc: 'Fast-track web portal or marketing page integrated with a dedicated AI assistant.',
      priceINR: '₹24,000',
      priceUSD: '$299',
      maintenanceINR: '₹3,000 / mo',
      maintenanceUSD: '$39 / mo',
      timeline: '1–2 Weeks Delivery',
      features: [
        'Modern Responsive UI (React / Next.js + Tailwind)',
        'Interactive AI tool or custom chatbot widget',
        'Contact lead capture & auto-notifications',
        'Domain setup, SEO fundamentals & SSL',
        'Maintenance: Server uptime & security patching',
        'Maintenance: 2 minor content updates per month',
      ],
    },
    {
      id: 'mvp-saas',
      name: 'Complete MVP / SaaS',
      badge: 'High Value',
      popular: true,
      desc: 'End-to-end web platform with authentication, database, payment gateway, and AI features.',
      priceINR: '₹48,000',
      priceUSD: '$590',
      maintenanceINR: '₹6,500 / mo',
      maintenanceUSD: '$80 / mo',
      timeline: '3–4 Weeks Delivery',
      features: [
        'Full-stack architecture (Next.js / Node.js / Supabase / PostgreSQL)',
        'User Auth & Roles (Google, Email, Admin Dashboard)',
        'Payment Subscriptions (Razorpay / Stripe)',
        'Core AI functionality (Summarizer / Classifier / Generator)',
        'Maintenance: Database backups & API uptime assurance',
        'Maintenance: Up to 8 hours of monthly feature additions',
      ],
    },
    {
      id: 'custom-system',
      name: 'Custom Enterprise AI',
      badge: 'Scalable System',
      popular: false,
      desc: 'Complex architectures with custom RAG, vector databases, and multi-agent pipelines.',
      priceINR: '₹89,000+',
      priceUSD: '$1,100+',
      maintenanceINR: '₹12,000 / mo',
      maintenanceUSD: '$150 / mo',
      timeline: '4–6 Weeks Delivery',
      features: [
        'Full custom architecture tailored to enterprise workflow',
        'Custom RAG pipeline (search across your internal documents/knowledge base)',
        'Background job queues (Celery/BullMQ) for heavy data workloads',
        'High-performance analytics & audit logging',
        'Maintenance: Priority <24hr SLA on critical issues',
        'Maintenance: Up to 15 hours of ongoing developer support',
      ],
    },
  ];

  const currentTiers = activeTab === 'automation' ? automationTiers : fullstackTiers;

  return (
    <section id="pricing" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="pricing-heading">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">
            Transparent Pricing
          </p>
          <h2 id="pricing-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5 leading-tight">
            Predictable Investments.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Beginner-friendly rates engineered for early founders, fast-moving teams, and growing enterprises.
          </p>
        </motion.div>

        {/* Controls: Category Toggle + Currency Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12">
          {/* Category Tabs */}
          <div className="p-1 bg-white/[0.04] border border-white/[0.1] rounded-full flex items-center shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('automation')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'automation'
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Automations & Bots
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fullstack')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'fullstack'
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Full-Stack + AI Apps
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="p-1 bg-white/[0.04] border border-white/[0.08] rounded-full flex items-center">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                currency === 'INR' ? 'bg-white/10 text-white' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                currency === 'USD' ? 'bg-white/10 text-white' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16"
          >
            {currentTiers.map((tier) => {
              const setupPrice = currency === 'INR' ? tier.priceINR : tier.priceUSD;
              const maintPrice = currency === 'INR' ? tier.maintenanceINR : tier.maintenanceUSD;

              return (
                <div
                  key={tier.id}
                  className={`glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 ${
                    tier.popular
                      ? 'border-[#2563EB]/60 shadow-[0_10px_35px_rgba(37,99,235,0.18)] bg-[#0B1120]/90'
                      : 'border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  {/* Top Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-[#2563EB] to-blue-500 rounded-full text-[11px] font-bold tracking-wider uppercase text-white shadow-lg flex items-center gap-1.5">
                      <Sparkles size={12} />
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        {!tier.popular ? tier.badge : 'Recommended'}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08]">
                        {tier.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 min-h-[36px]">
                      {tier.desc}
                    </p>

                    {/* Price Section */}
                    <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {setupPrice}
                        </span>
                        <span className="text-xs text-[#94A3B8] font-medium">one-time build</span>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] text-xs">
                        <span className="text-[#2563EB] font-semibold">Maintenance:</span>
                        <span className="text-white/90 font-medium">{maintPrice}</span>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        What's Included
                      </p>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-snug">
                          <div className="w-4 h-4 rounded-full bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <span className={feature.startsWith('Maintenance:') ? 'text-white/80 font-medium' : ''}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                      tier.popular
                        ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20'
                        : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1]'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Company Policies Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0B1120]/60 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-[#2563EB]">
                <Shield size={18} />
                <span className="text-xs uppercase tracking-wider font-bold">CipherFlux Commitment</span>
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                Our Transparent Operating Policies
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We believe in 100% clarity. All third-party infrastructure (domain, hosting, OpenAI keys) is billed directly to your accounts with zero markups. Every project includes 2 revision rounds and a 50/50 payment milestone structure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.12] rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all text-center"
              >
                <HelpCircle size={14} />
                <span>Custom Request?</span>
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md text-center"
              >
                <Zap size={14} />
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
