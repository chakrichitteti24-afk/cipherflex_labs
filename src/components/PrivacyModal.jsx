import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  X, 
  Check, 
  Copy, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  UserCheck, 
  ShieldAlert 
} from 'lucide-react';
import { useToast } from '../hooks/useToast';
import { triggerHaptic } from '../utils/haptics';

export default function PrivacyModal({ isOpen, initialTab = 'privacy', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const modalContentRef = useRef(null);
  const { addToast } = useToast();

  // Sync active tab with initialTab prop when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle section jump within modal
  const scrollToSection = (id) => {
    triggerHaptic(10);
    const element = document.getElementById(id);
    if (element && modalContentRef.current) {
      const topOffset = element.offsetTop - 20;
      modalContentRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleCopyLink = () => {
    triggerHaptic(15);
    const url = `${window.location.origin}${window.location.pathname}#${activeTab}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    addToast(`${activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'} direct link copied!`, 'success', 2500);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyEmail = () => {
    triggerHaptic(15);
    navigator.clipboard.writeText('cipherfluxlabshelp@gmail.com');
    setCopiedEmail(true);
    addToast('Grievance email copied to clipboard!', 'success', 2500);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    triggerHaptic(12);
    window.print();
  };

  const privacySections = [
    { id: 'sec-intro', title: '1. Identity & Overview' },
    { id: 'sec-principles', title: '2. Core Principles & AI Ethics' },
    { id: 'sec-collect', title: '3. Information We Collect' },
    { id: 'sec-products', title: '4. Atlyra & Svanexa AI' },
    { id: 'sec-legal-basis', title: '5. DPDP & GDPR Legal Bases' },
    { id: 'sec-usage', title: '6. How We Use Data' },
    { id: 'sec-security', title: '7. Zero-Trust Security & Storage' },
    { id: 'sec-retention', title: '8. Retention & Purge Schedule' },
    { id: 'sec-processors', title: '9. Third-Party Sub-processors' },
    { id: 'sec-rights', title: '10. Your Statutory Rights' },
    { id: 'sec-grievance', title: '11. Grievance Officer Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-legal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030712]/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0B1120] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 id="modal-legal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                      CipherFlux Labs Legal Center
                    </h2>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      MSME Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    UDYAM-AP-23-0097618 • DPDP Act 2023 &amp; GDPR Compliant • v2.0
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                  title="Copy direct link"
                >
                  {copiedLink ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span className="hidden sm:inline">Share Link</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                  title="Print or Save PDF"
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic(10);
                    onClose();
                  }}
                  className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/[0.08] border border-transparent hover:border-white/[0.08] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center active:scale-95"
                  aria-label="Close legal modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Segmented Tab Bar */}
            <div className="flex items-center justify-start gap-2 px-5 sm:px-7 py-2.5 border-b border-white/[0.06] bg-[#070D18]">
              <button
                type="button"
                onClick={() => {
                  triggerHaptic(10);
                  setActiveTab('privacy');
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'privacy'
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/25'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <ShieldCheck size={15} />
                <span>Privacy Policy</span>
                <span className="text-[10px] opacity-75 font-mono px-1.5 py-0.2 bg-black/20 rounded">Sep 2026</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic(10);
                  setActiveTab('terms');
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'terms'
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/25'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <FileText size={15} />
                <span>Terms of Service</span>
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div 
              ref={modalContentRef}
              className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 custom-scrollbar text-[#CBD5E1] text-xs sm:text-sm leading-relaxed"
            >
              {activeTab === 'privacy' ? (
                <div className="space-y-8 max-w-4xl mx-auto">
                  {/* Executive Privacy Summary Banner */}
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#2563EB]/10 via-[#38BDF8]/10 to-transparent border border-[#2563EB]/25">
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-[#38BDF8] shrink-0 mt-0.5" size={18} />
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white tracking-tight">
                          Executive Privacy Commitment
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-normal">
                          CipherFlux Labs is built upon zero-trust cybersecurity and privacy-by-design. We <strong className="text-white">never sell your personal data</strong>, never trade client intellectual property, and <strong className="text-white">never train public foundation models on private user inputs or health records</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Jump Pills for Desktop/Tablet */}
                  <div className="flex flex-wrap gap-1.5 pt-1 pb-3 border-b border-white/[0.06]">
                    <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold flex items-center pr-2">
                      Jump to:
                    </span>
                    {privacySections.map((sec) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className="text-[11px] text-[#94A3B8] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-2.5 py-1 rounded-md border border-white/[0.05] transition-colors"
                      >
                        {sec.title}
                      </button>
                    ))}
                  </div>

                  {/* Section 1: Intro */}
                  <section id="sec-intro" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">01</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Identity &amp; Governance Overview
                      </h3>
                    </div>
                    <p>
                      Welcome to <strong>CipherFlux Labs</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are a digital product engineering and artificial intelligence laboratory registered as a Micro, Small &amp; Medium Enterprise under the Ministry of MSME, Government of India (Udyam Registration: <code className="text-[#38BDF8] bg-white/[0.04] px-1.5 py-0.5 rounded font-mono">UDYAM-AP-23-0097618</code>).
                    </p>
                    <p>
                      This Privacy Policy governs the processing of personal data collected through our corporate portal at{' '}
                      <a href="https://cipherfluxlabs.com" className="text-[#38BDF8] hover:underline">
                        https://cipherfluxlabs.com
                      </a>
                      , our client engineering engagements, and our proprietary AI applications including <strong>Atlyra</strong> and <strong>Svanexa AI</strong>.
                    </p>
                  </section>

                  {/* Section 2: Core Principles */}
                  <section id="sec-principles" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">02</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Core Principles &amp; AI Ethics
                      </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                          <Lock size={13} className="text-[#2563EB]" />
                          Zero-Trust Architecture
                        </h4>
                        <p className="text-xs text-[#94A3B8]">
                          Continuous identity verification and least-privilege role boundaries applied across every database and microservice.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                          <ShieldCheck size={13} className="text-emerald-400" />
                          Zero Foundation Model Training
                        </h4>
                        <p className="text-xs text-[#94A3B8]">
                          Your confidential prompts, business logic, and health metrics are never exposed to train third-party public AI models.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                          <UserCheck size={13} className="text-[#38BDF8]" />
                          No Third-Party Data Selling
                        </h4>
                        <p className="text-xs text-[#94A3B8]">
                          We have never monetized, traded, or leased customer or user information to advertisers or external data aggregators.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                          <Lock size={13} className="text-purple-400" />
                          End-to-End Encryption
                        </h4>
                        <p className="text-xs text-[#94A3B8]">
                          TLS 1.3 cryptographic protection for data in motion, paired with AES-256 military-grade storage encryption.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Data We Collect */}
                  <section id="sec-collect" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">03</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Information We Collect
                      </h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-[#94A3B8]">
                      <li>
                        <strong className="text-white">Direct Inquiries:</strong> When submitting forms or requesting project quotations, we collect your name, business email, contact number, company name, selected subject category, and project scope details.
                      </li>
                      <li>
                        <strong className="text-white">Client Project Artifacts:</strong> Enterprise contracts, database schemas, API keys, and workflow blueprints provided under Non-Disclosure Agreements (NDAs).
                      </li>
                      <li>
                        <strong className="text-white">Telemetry &amp; Security Logs:</strong> Truncated IP addresses for geo-verification, user-agent strings, referral headers, and network response latencies collected strictly for DDoS mitigation and reliability monitoring.
                      </li>
                      <li>
                        <strong className="text-white">Local Storage &amp; Session Cookies:</strong> Minimal browser storage used to maintain UI state (e.g. dark mode, boot screen skip flags, CSRF tokens). No intrusive tracking or cross-site behavioral cookies are used.
                      </li>
                    </ul>
                  </section>

                  {/* Section 4: Products */}
                  <section id="sec-products" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">04</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Product-Specific Data Handing
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-white">Atlyra — AI Interview Copilot</h4>
                          <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded">
                            Ephemeral Audio
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8]">
                          Audio inputs captured during interview preparation sessions are processed transiently in memory for real-time speech analytics and semantic feedback. Audio buffers are immediately purged post-session; we do not maintain long-term voice prints or audio recordings without explicit user command.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-white">Svanexa AI — Women&apos;s Wellness Platform</h4>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                            Strict Health Isolation
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8]">
                          Hormonal markers, menstrual logs, and symptoms are stored in isolated encrypted tenants. Wellness information is classified as sensitive personal data under the DPDP Act 2023, is safeguarded against third-party analytics scripts, and is never commercialized.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Legal Basis */}
                  <section id="sec-legal-basis" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">05</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        DPDP Act 2023 &amp; GDPR Legal Bases
                      </h3>
                    </div>
                    <p className="text-[#94A3B8]">
                      We collect and process your personal data only when substantiated by valid statutory grounds:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border border-white/[0.08] rounded-lg overflow-hidden">
                        <thead className="bg-white/[0.04] text-white font-semibold">
                          <tr>
                            <th className="p-2.5 border-b border-white/[0.08]">Purpose</th>
                            <th className="p-2.5 border-b border-white/[0.08]">Categories</th>
                            <th className="p-2.5 border-b border-white/[0.08]">Statutory Basis</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.06] text-[#94A3B8]">
                          <tr>
                            <td className="p-2.5 text-white font-medium">Answering Inquiries &amp; Quotations</td>
                            <td className="p-2.5">Name, Email, WhatsApp, Project notes</td>
                            <td className="p-2.5">User Consent &amp; Pre-contractual steps</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-white font-medium">Client Software Engineering</td>
                            <td className="p-2.5">Source code, Database configs, Specs</td>
                            <td className="p-2.5">Contractual Necessity</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-white font-medium">Cybersecurity &amp; Bot Defense</td>
                            <td className="p-2.5">IP address, Request telemetry, Error logs</td>
                            <td className="p-2.5">Legitimate Business Interest</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-white font-medium">Tax &amp; MSME Invoicing</td>
                            <td className="p-2.5">Billing address, GSTIN, Transaction IDs</td>
                            <td className="p-2.5">Legal Obligation (Govt. of India)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 6: Usage */}
                  <section id="sec-usage" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">06</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        How We Use Your Data
                      </h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-[#94A3B8]">
                      <li>Executing software architecture contracts, system integrations, and AI workflow automations.</li>
                      <li>Meeting our 24 business hour SLA for technical assistance and commercial project inquiries.</li>
                      <li>Diagnosing server health, mitigating DDoS attacks, and resolving runtime software bugs.</li>
                      <li>Ensuring compliance with Indian tax legislation, GST invoicing, and CERT-In cybersecurity standards.</li>
                    </ul>
                  </section>

                  {/* Section 7: Security */}
                  <section id="sec-security" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">07</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Zero-Trust Security &amp; Storage Architecture
                      </h3>
                    </div>
                    <p className="text-[#94A3B8]">
                      CipherFlux Labs implements enterprise cybersecurity controls:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-[#94A3B8]">
                      <li><strong className="text-white">Encryption:</strong> Transport Layer Security (TLS 1.3) enforced universally; AES-256 encryption at rest.</li>
                      <li><strong className="text-white">Access Control:</strong> Administrative access mandates Multi-Factor Authentication (MFA) and granular Role-Based Access Control (RBAC).</li>
                      <li><strong className="text-white">Cloud Infrastructure:</strong> Deployed on SOC 2 Type II and ISO 27001 certified global cloud datacenters.</li>
                    </ul>
                  </section>

                  {/* Section 8: Retention */}
                  <section id="sec-retention" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">08</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Data Retention &amp; Purge Schedules
                      </h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-[#94A3B8]">
                      <li><strong className="text-white">General Inquiries:</strong> Retained for 12 months following active communications, then permanently purged.</li>
                      <li><strong className="text-white">Contractual Deliverables:</strong> Retained for the contract lifecycle plus the statutory limitation period (3–5 years).</li>
                      <li><strong className="text-white">Application Accounts:</strong> Account deletion requests are executed within 30 days, with complete backup purge within 90 days.</li>
                      <li><strong className="text-white">Security Logs:</strong> Retained on a rolling 90-day cycle for forensic security auditing.</li>
                    </ul>
                  </section>

                  {/* Section 9: Sub-processors */}
                  <section id="sec-processors" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">09</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Third-Party Sub-processors
                      </h3>
                    </div>
                    <p className="text-[#94A3B8]">
                      We collaborate with trusted cloud and platform providers adhering to strict Data Processing Agreements:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <p className="text-white font-semibold text-xs">Cloud &amp; Hosting</p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">Vercel Inc., Cloudflare Inc., AWS / GCP</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <p className="text-white font-semibold text-xs">Enterprise AI APIs</p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">OpenAI, Google Gemini, Anthropic (Zero-data retention tier)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <p className="text-white font-semibold text-xs">Database &amp; Storage</p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">Supabase, PostgreSQL Cloud (Encrypted)</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 10: Rights */}
                  <section id="sec-rights" className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">10</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Your Statutory Rights (India DPDP &amp; GDPR)
                      </h3>
                    </div>
                    <p className="text-[#94A3B8]">
                      Under applicable data protection frameworks, you have actionable rights over your personal data:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                      <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                        <strong className="text-white block mb-0.5">1. Right to Access &amp; Summary:</strong> Receive an itemized report of your personal data processed by us.
                      </div>
                      <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                        <strong className="text-white block mb-0.5">2. Right to Correction:</strong> Rectify outdated, incorrect, or incomplete personal records.
                      </div>
                      <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                        <strong className="text-white block mb-0.5">3. Right to Erasure:</strong> Demand permanent removal (&quot;Right to be Forgotten&quot;) where no legal obligation supersedes.
                      </div>
                      <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                        <strong className="text-white block mb-0.5">4. Right to Withdraw Consent:</strong> Revoke consent easily at any stage without penalty.
                      </div>
                    </div>
                  </section>

                  {/* Section 11: Grievance Officer */}
                  <section id="sec-grievance" className="p-5 rounded-2xl bg-gradient-to-br from-[#0B1120] to-[#111827] border border-white/[0.12] space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                        <ShieldAlert size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Statutory Grievance Redressal Officer</h4>
                        <p className="text-[11px] text-[#94A3B8]">Information Technology Act, 2000 &amp; DPDP Act, 2023</p>
                      </div>
                    </div>

                    <p className="text-xs text-[#94A3B8]">
                      If you have questions, wish to exercise privacy rights, or submit a grievance, contact our designated officer:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <Mail size={14} className="text-[#2563EB]" />
                          <div>
                            <p className="text-[10px] text-[#94A3B8] uppercase">Email</p>
                            <a href="mailto:cipherfluxlabshelp@gmail.com" className="text-white hover:text-[#38BDF8] font-medium font-mono text-[11px]">
                              cipherfluxlabshelp@gmail.com
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-white/[0.08] transition-colors"
                          title="Copy email"
                        >
                          {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                        </button>
                      </div>

                      <div className="flex items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] gap-2.5">
                        <Phone size={14} className="text-[#2563EB]" />
                        <div>
                          <p className="text-[10px] text-[#94A3B8] uppercase">Direct Phone</p>
                          <a href="tel:+919391356262" className="text-white hover:text-[#38BDF8] font-medium font-mono text-[11px]">
                            +91 93913 56262
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] gap-2.5 sm:col-span-2">
                        <MapPin size={14} className="text-[#2563EB] shrink-0" />
                        <div>
                          <p className="text-[10px] text-[#94A3B8] uppercase">Operating Jurisdiction</p>
                          <p className="text-white font-medium text-[11px]">
                            CipherFlux Labs • Andhra Pradesh, India • Govt. Registered MSME: UDYAM-AP-23-0097618
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#94A3B8]/70 pt-1">
                      Formal grievance requests are acknowledged within 48 hours and resolved within 30 calendar days as per statutory regulations.
                    </p>
                  </section>
                </div>
              ) : (
                /* Terms of Service Content */
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <h3 className="text-sm font-semibold text-white">CipherFlux Labs Terms of Service</h3>
                    <p className="text-xs text-[#94A3B8]">
                      Effective Date: September 27, 2026 • MSME Reg. UDYAM-AP-23-0097618 • Version 2.0
                    </p>
                  </div>

                  <section className="space-y-2">
                    <h4 className="text-sm font-bold text-white">1. Agreement to Terms</h4>
                    <p className="text-[#94A3B8]">
                      By accessing our digital interfaces, contracting custom engineering services, or utilizing software such as Atlyra and Svanexa AI, you agree to comply with and be bound by these Terms of Service.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="text-sm font-bold text-white">2. Engineering Engagements &amp; Payment Milestones</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#94A3B8]">
                      <li>Custom software builds are formally executed under our Quotation and Service Agreement.</li>
                      <li>Standard milestones require a 50% non-refundable advance deposit prior to architecture initiation, with the remaining 50% due before staging handover and production repository transfer.</li>
                      <li>Third-party costs (cloud hosting, custom domain registration, LLM API inference fees) are direct client responsibilities.</li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h4 className="text-sm font-bold text-white">3. Intellectual Property Transfer</h4>
                    <p className="text-[#94A3B8]">
                      Upon complete receipt of contractual payments, ownership of bespoke application code is transferred to the Client. CipherFlux Labs retains rights to proprietary utility scripts, foundational boilerplates, and brand trademarks.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="text-sm font-bold text-white">4. AI Disclaimers &amp; Limitation of Liability</h4>
                    <p className="text-[#94A3B8]">
                      AI-generated outputs from Atlyra and Svanexa AI are for educational, preparatory, and assistive purposes only and do not replace professional medical, legal, or financial consultation. CipherFlux Labs is not liable for indirect or consequential damages resulting from AI inferences.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="text-sm font-bold text-white">5. Governing Law &amp; Jurisdiction</h4>
                    <p className="text-[#94A3B8]">
                      These Terms are governed by the laws of India. Any legal dispute or controversy shall be subject to the exclusive jurisdiction of the competent courts in Andhra Pradesh, India.
                    </p>
                  </section>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-t border-white/[0.08] bg-white/[0.02]">
              <span className="text-[11px] text-[#94A3B8] font-normal text-center sm:text-left">
                © 2026 CipherFlux Labs • All rights reserved • Govt. of India Registered MSME
              </span>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic(10);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold border border-white/[0.1] transition-all active:scale-95 text-center"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
