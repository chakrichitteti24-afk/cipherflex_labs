import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/[0.08] pt-12 sm:pt-16 pb-10 sm:pb-12 relative z-10" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-10 sm:pb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4 sm:space-y-5">
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-1 focus:ring-[#2563EB] rounded-full min-h-[40px]" aria-label="CipherFlux Labs - Back to top">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-colors">
                <span className="text-[#2563EB] font-bold text-[10px] leading-none tracking-tighter select-none">&lt;/&gt;</span>
              </div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-white">CipherFlux Labs</span>
            </a>
            <p className="text-[#94A3B8] text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              An innovative AI software company dedicated to building artificial intelligence applications, cybersecurity solutions, and modern digital products that solve real-world problems.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs GitHub Repository" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 min-h-[36px] min-w-[36px]"
              >
                <FiGithub size={14} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs LinkedIn Page" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 min-h-[36px] min-w-[36px]"
              >
                <FiLinkedin size={14} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Twitter / X Account" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 min-h-[36px] min-w-[36px]"
              >
                <FiTwitter size={14} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Instagram Profile" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-all duration-200 min-h-[36px] min-w-[36px]"
              >
                <FiInstagram size={14} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="sm:col-span-1 md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">Home</a></li>
              <li><a href="#about" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">About Us</a></li>
              <li><a href="#products" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">AI Products</a></li>
              <li><a href="#team" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">Leadership</a></li>
              <li><a href="#faq" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">FAQ</a></li>
              <li><a href="#contact" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">Contact</a></li>
            </ul>
          </div>
          
          {/* Products & Legal */}
          <div className="sm:col-span-1 md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-2">Products &amp; Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://smith-ai-five.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 py-0.5">
                  Smith AI — Interview Copilot
                </a>
              </li>
              <li>
                <a href="https://hersync-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 py-0.5">
                  Svanexa AI — Women's Wellness
                </a>
              </li>
              <li><a href="#" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">Privacy Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors block py-0.5">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-2.5 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-[#94A3B8]/70 font-normal">
            © 2026 CipherFlux Labs. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-[#94A3B8]/70 font-normal">
            Precision AI &amp; Digital Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
