import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/[0.08] pt-20 pb-12 relative z-10" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-full" aria-label="CipherFlux Labs - Back to top">
              <div className="w-9 h-9 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/25 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                <span className="text-[#2563EB] font-bold text-[10px] leading-none tracking-tighter select-none">&lt;/&gt;</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">CipherFlux Labs</span>
            </a>
            <p className="text-[#94A3B8] text-sm font-normal leading-relaxed max-w-sm">
              An innovative AI software company dedicated to building artificial intelligence applications, cybersecurity solutions, and modern digital products that solve real-world problems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs GitHub Repository" 
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiGithub size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs LinkedIn Page" 
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiLinkedin size={16} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Twitter / X Account" 
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiTwitter size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Instagram Profile" 
                className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] hover:bg-[#2563EB]/20 transition-all duration-300"
              >
                <FiInstagram size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-[#94A3B8] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-sm text-[#94A3B8] hover:text-white transition-colors">AI Products</a></li>
              <li><a href="#team" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#contact" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Products & Legal */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Products & Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://smith-ai-five.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5">
                  Smith AI — Interview Copilot
                </a>
              </li>
              <li>
                <a href="https://hersync-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5">
                  Svanexa AI — Women's Wellness
                </a>
              </li>
              <li><a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#94A3B8]/80 font-normal">
            © 2026 CipherFlux Labs. All rights reserved.
          </p>
          <p className="text-xs text-[#94A3B8]/80 font-normal">
            Precision AI & Digital Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
