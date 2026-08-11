import { Code2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-16 pb-8 relative z-10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="sm:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-6 group inline-flex focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg" aria-label="CipherFlux Labs - Back to top">
              <div className="p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-blue transition-colors group-hover:bg-brand-blue/20">
                <Code2 size={20} aria-hidden="true" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CipherFlux Labs</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-light text-sm">
              An innovative <strong className="font-normal text-gray-300">AI software company</strong> dedicated to building artificial intelligence applications, cybersecurity solutions, and modern digital products that solve real-world problems.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs GitHub Repository" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <FiGithub size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs LinkedIn Page" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <FiLinkedin size={16} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Twitter / X Account" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <FiTwitter size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="CipherFlux Labs Instagram Profile" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <FiInstagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">About Us</a></li>
              <li><a href="#products" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">AI Products</a></li>
              <li><a href="#team" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Leadership Team</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-white mb-6 tracking-wide">Legal & Privacy</h3>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors focus:outline-none focus:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            CipherFlux Labs © 2026. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
            Building Innovative Software in India
          </p>
        </div>
      </div>
    </footer>
  );
}

