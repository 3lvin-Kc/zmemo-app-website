import React from 'react';
import { Download, Play, EyeOff, Server, WifiOff, Lock } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs text-zinc-700 font-medium mb-6">
              <Lock size={12} />
              100% Local & Private
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
              Your emails.<br/>
              <span className="text-zinc-500">Searchable. Private. Secure.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg text-zinc-600 mb-8 max-w-md">
              Index and search your entire Gmail archive in milliseconds. 
              Powered by Rust + SQLite with FTS5. Your emails never leave your device.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
              <button className="h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2">
                <Download size={16} />
                <span>Download for Free</span>
              </button>
              <button className="h-12 px-8 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:border-zinc-400 transition-colors flex items-center gap-2">
                <Play size={16} />
                <span>Watch Demo</span>
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-8">
              <span className="flex items-center gap-1.5">
                <EyeOff size={14} /> No tracking
              </span>
              <span className="flex items-center gap-1.5">
                <Server size={14} /> Zero cloud
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} /> Offline-first
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="grid grid-cols-3 gap-3 max-w-sm">
              <div className="text-center p-4 rounded-2xl border border-zinc-100 bg-white">
                <div className="text-3xl font-bold text-zinc-900 mb-1">100K+</div>
                <div className="text-xs text-zinc-500">Emails indexed</div>
              </div>
              <div className="text-center p-4 rounded-2xl border border-zinc-100 bg-white">
                <div className="text-3xl font-bold text-zinc-900 mb-1">&lt;50ms</div>
                <div className="text-xs text-zinc-500">Search latency</div>
              </div>
              <div className="text-center p-4 rounded-2xl border border-zinc-100 bg-white">
                <div className="text-3xl font-bold text-zinc-900 mb-1">0KB</div>
                <div className="text-xs text-zinc-500">Data to cloud</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative max-w-xs mx-auto">
            <img 
              src="/zmemo.jpg" 
              alt="Zmemo App Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16">
        <div className="bg-white rounded-xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 overflow-hidden">
          <div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"/>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"/>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"/>
            </div>
            <div className="flex-1 text-center text-xs font-medium text-zinc-400">Zmemo — Desktop</div>
          </div>
          <div className="p-6 bg-white min-h-[400px]">
            <img 
              src="/image.png" 
              alt="Zmemo App Interface" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
