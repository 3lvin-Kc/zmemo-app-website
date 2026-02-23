import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Zmemo" 
                className="w-8 h-8 rounded object-contain"
              />
              <span className="text-lg font-bold text-zinc-900">Zmemo</span>
            </div>
            <p className="text-sm text-zinc-500">
              Your emails, your device. 100% private, 100% local.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#features" className="hover:text-zinc-900 transition-colors">Features</a></li>
              <li><a href="#privacy" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
              <li><a href="#download" className="hover:text-zinc-900 transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500">
            © 2026 Zmemo. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
