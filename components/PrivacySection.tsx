import React from 'react';
import { Fingerprint, CheckCircle, Lock } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="p-10 rounded-3xl bg-zinc-900 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 mb-6">
                <Fingerprint size={12} />
                Your data, your device
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Zero-knowledge architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Zmemo operates on a fundamental principle: your emails are your business. 
                We don't collect, store, or transmit any of your data. Everything stays 
                locally on your machine with optional encryption.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-zinc-300">No account required</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-zinc-300">No telemetry or analytics</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-zinc-300">No cloud dependencies</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-zinc-300">Optional local encryption</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center">
                    <Lock size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Local Encryption</div>
                    <div className="text-xs text-zinc-400">AES-256</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-zinc-700">
                    <div className="h-full w-full rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Data encrypted locally</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
