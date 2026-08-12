import { motion } from 'framer-motion';
import { ExternalLink, Bot, Sparkles, HeartPulse, CheckCircle2, Mic, Activity, ShieldCheck, BarChart3, LineChart, Cpu } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="products-heading">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-3">Product Portfolio</p>
          <h2 id="products-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Flagship Software Solutions.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            Purpose-built applications engineered with modern AI models, robust security, and seamless glassmorphic interfaces.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* PRODUCT 1: SMITH AI (Text -> Product Visual) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 md:p-12 border border-white/[0.08] relative overflow-hidden group"
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
                    <Bot size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-[#2563EB] uppercase tracking-wider font-semibold">Product 01</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SMITH AI</h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  AI Interview Copilot
                </div>

                <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
                  "An intelligent AI interview platform that helps users practice, evaluate, and improve their interview performance."
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-2">
                  {[
                    "Real-time Audio Feedback",
                    "Behavioral Evaluation",
                    "Custom Role Simulation",
                    "Performance Score Analytics"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                      <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <div className="pt-4">
                  <a 
                    href="https://smith-ai-five.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-pill-primary inline-flex"
                    aria-label="Visit Smith AI web application"
                  >
                    Visit Product <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Editorial Product Mockup */}
              <div className="lg:col-span-6">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0B1120] border border-white/[0.08] rounded-2xl p-5 shadow-2xl relative group-hover:border-[#2563EB]/30 transition-all"
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono px-3 py-1 bg-white/[0.04] rounded-md border border-white/[0.05]">
                      smith-ai-five.vercel.app
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">Live</span>
                  </div>

                  {/* Mockup Dashboard Content */}
                  <div className="space-y-4">
                    {/* Header bar */}
                    <div className="flex items-center justify-between bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                          <Mic size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Live Mock Interview</div>
                          <div className="text-[10px] text-gray-400">Senior Systems Engineer Role</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#2563EB] font-mono">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        00:14:28
                      </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                      <div className="text-[11px] text-[#2563EB] font-semibold uppercase tracking-wider mb-1">AI Interviewer Prompt</div>
                      <p className="text-xs text-gray-200 font-light leading-relaxed">
                        "How do you design a high-throughput microservices architecture to handle 100k concurrent requests per second?"
                      </p>
                    </div>

                    {/* Metric Bars */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.05] text-center">
                        <div className="text-[10px] text-gray-400">Clarity Score</div>
                        <div className="text-lg font-bold text-white mt-1">94%</div>
                      </div>
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.05] text-center">
                        <div className="text-[10px] text-gray-400">Confidence</div>
                        <div className="text-lg font-bold text-[#2563EB] mt-1">High</div>
                      </div>
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.05] text-center">
                        <div className="text-[10px] text-gray-400">Pacing</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">Optimal</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>


          {/* PRODUCT 2: SVANEXA AI (Product Visual -> Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 md:p-12 border border-white/[0.08] relative overflow-hidden group"
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column on Desktop: Editorial Product Mockup (Product Visual -> Text layout) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0B1120] border border-white/[0.08] rounded-2xl p-5 shadow-2xl relative group-hover:border-[#2563EB]/30 transition-all"
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono px-3 py-1 bg-white/[0.04] rounded-md border border-white/[0.05]">
                      hersync-ai.vercel.app
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">Live</span>
                  </div>

                  {/* Mockup Wellness Dashboard Content */}
                  <div className="space-y-4">
                    {/* Cycle Header */}
                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                          <Activity size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Cycle Phase Tracker</div>
                          <div className="text-[10px] text-gray-400">Follicular Phase • Day 12</div>
                        </div>
                      </div>
                      <span className="text-xs text-[#2563EB] font-semibold bg-[#2563EB]/10 px-3 py-1 rounded-full border border-[#2563EB]/20">
                        Peak Energy
                      </span>
                    </div>

                    {/* Wellness Chart */}
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[11px] text-gray-300 font-medium">Wellness Insights & Symptom Trends</span>
                        <LineChart size={14} className="text-[#2563EB]" />
                      </div>
                      <div className="h-16 flex items-end justify-between gap-2 pt-2">
                        {[40, 65, 85, 90, 75, 60, 80, 95].map((val, i) => (
                          <div key={i} className="w-full bg-white/[0.05] rounded-t-md overflow-hidden relative h-full flex items-end">
                            <div 
                              className="w-full bg-gradient-to-t from-[#2563EB]/40 to-[#2563EB] rounded-t-md" 
                              style={{ height: `${val}%` }} 
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Privacy & Safety Note */}
                    <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.05] flex items-center gap-3">
                      <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                      <div className="text-[11px] text-gray-400 leading-snug">
                        Strict end-to-end data encryption & privacy-first design standards.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column on Desktop: Text Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
                    <HeartPulse size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-[#2563EB] uppercase tracking-wider font-semibold">Product 02</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SVANEXA AI</h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  AI Women's Wellness
                </div>

                <p className="text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
                  "An AI-powered women's wellness companion designed to help users understand their cycles, track wellness patterns, and receive personalized insights."
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-2">
                  {[
                    "Intelligent Cycle Tracking",
                    "Personalized Pattern Insights",
                    "Wellness Analytics",
                    "Privacy-First Encryption"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                      <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <div className="pt-4">
                  <a 
                    href="https://hersync-ai.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-pill-primary inline-flex"
                    aria-label="Visit Svanexa AI web application"
                  >
                    Visit Product <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
