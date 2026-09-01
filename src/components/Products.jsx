import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Bot, HeartPulse, CheckCircle2, Mic, Activity, ShieldCheck, LineChart } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

const smithQuestions = [
  {
    role: "Senior Systems Engineer",
    topic: "System Architecture",
    question: "How do you design a high-throughput microservices architecture to handle 100k concurrent requests per second?",
    clarity: "96%",
    confidence: "High",
    pacing: "Optimal",
    time: "00:14:28"
  },
  {
    role: "Staff AI Engineer",
    topic: "LLM Infrastructure",
    question: "Explain the trade-offs between speculative decoding and KV cache quantization for latency-critical inference.",
    clarity: "98%",
    confidence: "Very High",
    pacing: "Optimal",
    time: "00:08:42"
  },
  {
    role: "Engineering Manager",
    topic: "Behavioral Leadership",
    question: "Describe a situation where you aligned competing product priorities across cross-functional engineering teams.",
    clarity: "92%",
    confidence: "High",
    pacing: "Steady",
    time: "00:11:15"
  }
];

const svanexaPhases = [
  {
    id: "follicular",
    name: "Follicular Phase",
    day: "Day 12",
    tag: "Peak Energy",
    summary: "Estrogen levels are rising. Optimal time for strength training and high-focus projects.",
    bars: [40, 65, 85, 92, 78, 60, 82, 95]
  },
  {
    id: "ovulatory",
    name: "Ovulatory Phase",
    day: "Day 14",
    tag: "Maximum Vitality",
    summary: "Luteinizing hormone peak. Social energy, communication clarity, and endurance at monthly highs.",
    bars: [60, 80, 95, 100, 90, 85, 92, 98]
  },
  {
    id: "luteal",
    name: "Luteal Phase",
    day: "Day 22",
    tag: "Restorative Focus",
    summary: "Progesterone dominance. Prioritize moderate recovery routines, balanced nutrition, and deep sleep.",
    bars: [85, 70, 55, 60, 50, 45, 60, 50]
  },
  {
    id: "menstrual",
    name: "Menstrual Phase",
    day: "Day 3",
    tag: "Renewal & Rest",
    summary: "Hormone baseline. Focus on hydration, restorative stretching, and replenishing vital micro-nutrients.",
    bars: [30, 35, 45, 50, 40, 35, 30, 40]
  }
];

export default function Products() {
  const [smithIndex, setSmithIndex] = useState(0);
  const [svanexaPhaseIndex, setSvanexaPhaseIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeSmith = smithQuestions[smithIndex];
  const activeSvanexa = svanexaPhases[svanexaPhaseIndex];

  const handleSmithSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      setSmithIndex((prev) => (prev + 1) % smithQuestions.length);
      triggerHaptic(8);
    } else if (diff < -45) {
      setSmithIndex((prev) => (prev - 1 + smithQuestions.length) % smithQuestions.length);
      triggerHaptic(8);
    }
  };

  const handleSvanexaSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      setSvanexaPhaseIndex((prev) => (prev + 1) % svanexaPhases.length);
      triggerHaptic(8);
    } else if (diff < -45) {
      setSvanexaPhaseIndex((prev) => (prev - 1 + svanexaPhases.length) % svanexaPhases.length);
      triggerHaptic(8);
    }
  };

  return (
    <section id="products" className="py-14 sm:py-28 relative border-t border-white/[0.08]" aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2 sm:mb-3">Product Portfolio</p>
          <h2 id="products-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            Flagship Software Solutions.
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Purpose-built applications engineered with modern AI models, robust security, and seamless glassmorphic interfaces.
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-20">
          {/* ========================================================================= */}
          {/* PRODUCT 1: SMITH AI */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-5 sm:p-8 md:p-10 border border-white/[0.08] relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left: Text & Info Column */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-center min-w-0">
                {/* Header Title with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                    <Bot size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#2563EB] uppercase tracking-wider font-semibold block leading-none mb-1">Product 01</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">SMITH AI</h3>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-200 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  AI Interview Copilot
                </div>

                {/* Description */}
                <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                  An intelligent AI interview platform that helps users practice, evaluate, and improve their interview performance with real-time feedback.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  {[
                    "Real-time Audio Feedback",
                    "Behavioral Evaluation",
                    "Custom Role Simulation",
                    "Performance Score Analytics"
                  ].map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-gray-300 font-medium"
                    >
                      <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit CTA Button */}
                <div className="pt-2">
                  <a 
                    href="https://smith-ai-five.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerHaptic(10)}
                    className="btn-pill-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold active:scale-[0.98]"
                    aria-label="Visit Smith AI web application"
                  >
                    <span>Visit Product</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right: Interactive Product Mockup */}
              <div 
                className="lg:col-span-6 w-full min-w-0"
                onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX; }}
                onTouchEnd={(e) => { touchEndX.current = e.changedTouches[0].screenX; handleSmithSwipe(); }}
              >
                <div className="bg-[#0B1120] border border-white/[0.08] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-2xl relative select-none">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono px-2.5 py-0.5 bg-white/[0.04] rounded-md border border-white/[0.05] truncate max-w-[130px] sm:max-w-none">
                      smith-ai-five.vercel.app
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shrink-0">Live</span>
                  </div>

                  {/* Interactive Question Topic Selector (Touch scrollable) */}
                  <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-none touch-pan-x w-full">
                    {smithQuestions.map((q, i) => (
                      <button
                        key={q.topic}
                        type="button"
                        onClick={() => {
                          setSmithIndex(i);
                          triggerHaptic(8);
                        }}
                        className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap font-medium min-h-[34px] flex items-center shrink-0 ${
                          smithIndex === i
                            ? 'bg-white/[0.12] text-white border border-white/[0.16]'
                            : 'bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                        }`}
                      >
                        {q.topic}
                      </button>
                    ))}
                  </div>

                  {/* Mockup Dashboard Content */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeSmith.topic}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5 sm:space-y-3"
                    >
                      {/* Header bar */}
                      <div className="flex items-center justify-between bg-white/[0.03] p-2.5 sm:p-3 rounded-xl border border-white/[0.06]">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                            <Mic size={14} />
                          </div>
                          <div className="truncate">
                            <div className="text-[11px] sm:text-xs font-semibold text-white truncate">Live Mock Interview</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 truncate">{activeSmith.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-300 font-mono shrink-0 pl-2">
                          <div className="flex items-center gap-[2px] h-2.5 mr-0.5">
                            <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }} className="w-[2px] bg-emerald-400 rounded-full" />
                            <motion.div animate={{ height: ["20%", "80%", "20%"] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className="w-[2px] bg-emerald-400 rounded-full" />
                            <motion.div animate={{ height: ["60%", "100%", "60%"] }} transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }} className="w-[2px] bg-emerald-400 rounded-full" />
                            <motion.div animate={{ height: ["30%", "70%", "30%"] }} transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }} className="w-[2px] bg-emerald-400 rounded-full" />
                          </div>
                          {activeSmith.time}
                        </div>
                      </div>

                      {/* Question Card - Stable height to prevent layout shifts */}
                      <div className="bg-white/[0.02] p-3 sm:p-3.5 rounded-xl border border-white/[0.05] h-[92px] sm:h-[96px] flex flex-col justify-center">
                        <div className="text-[9px] sm:text-[10px] text-[#2563EB] font-semibold uppercase tracking-wider mb-1 shrink-0">AI Interviewer Prompt</div>
                        <p className="text-[11px] sm:text-xs text-gray-200 font-normal leading-relaxed line-clamp-3">
                          {activeSmith.question}
                        </p>
                      </div>

                      {/* Metric Bars — Perfectly aligned equal height */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 items-stretch">
                        <div className="bg-white/[0.02] p-2 sm:p-2.5 rounded-xl border border-white/[0.05] text-center flex flex-col justify-center items-center h-full">
                          <div className="text-[9px] sm:text-[10px] text-gray-400">Clarity</div>
                          <div className="text-sm sm:text-base font-bold text-white mt-0.5">{activeSmith.clarity}</div>
                        </div>
                        <div className="bg-white/[0.02] p-2 sm:p-2.5 rounded-xl border border-white/[0.05] text-center flex flex-col justify-center items-center h-full">
                          <div className="text-[9px] sm:text-[10px] text-gray-400">Confidence</div>
                          <div className="text-sm sm:text-base font-bold text-[#2563EB] mt-0.5">{activeSmith.confidence}</div>
                        </div>
                        <div className="bg-white/[0.02] p-2 sm:p-2.5 rounded-xl border border-white/[0.05] text-center flex flex-col justify-center items-center h-full">
                          <div className="text-[9px] sm:text-[10px] text-gray-400">Pacing</div>
                          <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">{activeSmith.pacing}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="text-[10px] text-gray-500 text-center pt-2 sm:hidden font-mono">
                    ← Swipe to switch question topics →
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* ========================================================================= */}
          {/* PRODUCT 2: SVANEXA AI */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-5 sm:p-8 md:p-10 border border-white/[0.08] relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left on Desktop (Order 2 on Mobile, Order 1 on Desktop): Mockup Column */}
              <div 
                className="lg:col-span-6 order-2 lg:order-1 w-full min-w-0"
                onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX; }}
                onTouchEnd={(e) => { touchEndX.current = e.changedTouches[0].screenX; handleSvanexaSwipe(); }}
              >
                <div className="bg-[#0B1120] border border-white/[0.08] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-2xl relative select-none">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono px-2.5 py-0.5 bg-white/[0.04] rounded-md border border-white/[0.05] truncate max-w-[130px] sm:max-w-none">
                      svanexa-ai.vercel.app
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shrink-0">Live</span>
                  </div>

                  {/* Interactive Phase Selector (Touch scrollable) */}
                  <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-none touch-pan-x w-full">
                    {svanexaPhases.map((phase, i) => (
                      <button
                        key={phase.id}
                        type="button"
                        onClick={() => {
                          setSvanexaPhaseIndex(i);
                          triggerHaptic(8);
                        }}
                        className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap font-medium min-h-[34px] flex items-center shrink-0 ${
                          svanexaPhaseIndex === i
                            ? 'bg-white/[0.12] text-white border border-white/[0.16]'
                            : 'bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                        }`}
                      >
                        {phase.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Mockup Wellness Dashboard Content */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeSvanexa.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5 sm:space-y-3"
                    >
                      {/* Cycle Header */}
                      <div className="bg-white/[0.03] p-2.5 sm:p-3 rounded-xl border border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                            <Activity size={14} />
                          </div>
                          <div className="truncate">
                            <div className="text-[11px] sm:text-xs font-semibold text-white truncate">{activeSvanexa.name}</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 truncate">{activeSvanexa.day}</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-200 font-medium bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/[0.08] shrink-0 ml-2">
                          {activeSvanexa.tag}
                        </span>
                      </div>

                      {/* Summary Insight */}
                      <div className="bg-white/[0.02] p-2.5 sm:p-3 rounded-xl border border-white/[0.05] text-[11px] sm:text-xs text-gray-300 font-normal leading-relaxed min-h-[44px] flex items-center">
                        {activeSvanexa.summary}
                      </div>

                      {/* Wellness Chart */}
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wider">Symptom Trends &amp; Energy</span>
                          <LineChart size={13} className="text-[#2563EB]" />
                        </div>
                        <div className="h-12 sm:h-14 flex items-end justify-between gap-1 sm:gap-1.5 pt-1">
                          {activeSvanexa.bars.map((val, i) => (
                            <div key={i} className="w-full bg-white/[0.04] rounded-t-sm overflow-hidden relative h-full flex items-end">
                              <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: `${val}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="w-full bg-[#2563EB] rounded-t-sm" 
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Privacy & Safety Note */}
                      <div className="bg-white/[0.02] p-2 sm:p-2.5 rounded-xl border border-white/[0.05] flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                        <div className="text-[10px] text-gray-400 truncate">
                          Strict end-to-end data encryption &amp; privacy architecture.
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="text-[10px] text-gray-500 text-center pt-2 sm:hidden font-mono">
                    ← Swipe to switch cycle phases →
                  </div>
                </div>
              </div>

              {/* Right on Desktop (Order 1 on Mobile, Order 2 on Desktop): Text Column */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-5 flex flex-col justify-center min-w-0">
                {/* Header Title with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#2563EB] shrink-0">
                    <HeartPulse size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#2563EB] uppercase tracking-wider font-semibold block leading-none mb-1">Product 02</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">SVANEXA AI</h3>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-200 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  AI Women's Wellness
                </div>

                {/* Description */}
                <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                  An AI-powered women's wellness companion that helps users understand their cycles, track wellness patterns, and receive personalized health insights.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  {[
                    "Intelligent Cycle Tracking",
                    "Personalized Pattern Insights",
                    "Wellness Analytics",
                    "Privacy-First Encryption"
                  ].map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-gray-300 font-medium"
                    >
                      <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit CTA Button */}
                <div className="pt-2">
                  <a 
                    href="https://hersync-ai.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerHaptic(10)}
                    className="btn-pill-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold active:scale-[0.98]"
                    aria-label="Visit Svanexa AI web application"
                  >
                    <span>Visit Product</span>
                    <ExternalLink size={14} aria-hidden="true" />
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
