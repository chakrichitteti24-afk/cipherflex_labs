import { Code2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-blue transition-colors group-hover:bg-brand-blue/20">
                <Code2 size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CipherFlux Labs</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-light text-sm">
              Building Intelligent Software for the Future. We create products that solve real-world problems using Artificial Intelligence and Modern Web Technologies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors"><FiGithub size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors"><FiLinkedin size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors"><FiTwitter size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors"><FiInstagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">About</a></li>
              <li><a href="#products" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Products</a></li>
              <li><a href="#team" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Team</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            CipherFlux Labs © 2026. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Designed with <span className="text-brand-blue">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
