import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'border-b border-zinc-100 py-3 shadow-sm' : 'py-5'}`}>
      <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Zmemo" 
            className="w-9 h-9 rounded-lg object-contain"
          />
          <span className="text-xl font-bold text-zinc-900">Zmemo</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Features</a>
          <a href="#privacy" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Privacy</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            <Download size={14} />
            <span>Download</span>
          </button>
          <button 
            className="md:hidden p-2 text-zinc-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-5 flex flex-col gap-3">
          <a href="#features" className="text-zinc-600" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#privacy" className="text-zinc-600" onClick={() => setMobileMenuOpen(false)}>Privacy</a>
          <a href="#download" className="text-zinc-600" onClick={() => setMobileMenuOpen(false)}>Download</a>
          <button className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium mt-2">
            <Download size={14} />
            <span>Download</span>
          </button>
        </div>
      )}
    </nav>
  );
};
