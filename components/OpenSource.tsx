import React from 'react';
import { Code, CheckCircle, Github, ExternalLink } from 'lucide-react';

export const OpenSource: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs text-zinc-700 font-medium mb-6">
              <Code size={12} />
              Open source
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Transparency you can verify
            </h2>
            <p className="text-lg text-zinc-600 mb-6">
              We believe trust is earned through transparency. That's why Zmemo will be open source — 
              anyone can inspect our code, verify our claims, and contribute to making it better.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600">Code available for security audits</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600">Community-driven development</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600">Free for everyone to use</span>
              </li>
            </ul>
            <button className="inline-flex items-center gap-2 text-zinc-900 font-medium hover:gap-3 transition-all">
              <Github size={18} />
              <span>View on GitHub</span>
              <ExternalLink size={14} />
            </button>
          </div>
          <div className="relative">
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Github size={24} className="text-white" />
                <div className="text-sm font-medium text-white">zmemo</div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">+</span>
                  <span className="text-zinc-300">src/index.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">+</span>
                  <span className="text-zinc-300">src/search/engine.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">+</span>
                  <span className="text-zinc-300">src/indexer/parser.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-300">package.json</span>
                </div>
                <div className="text-zinc-500 text-xs mt-4">
                  127 commits · 12 contributors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
