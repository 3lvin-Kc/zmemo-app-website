import React from 'react';
import { Database, Search, Shield, WifiOff, Cpu, Filter, Zap, RefreshCw } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay} className="group">
    <div className="h-full p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all duration-300 bg-white">
      <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center mb-5">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
          Everything you need. Nothing you don't.
        </h2>
        <p className="text-lg text-zinc-600 text-center max-w-2xl mx-auto mb-16">
          Built with Rust-powered speed and SQLite reliability. No bloat, no tracking, no compromises.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Database size={24} />}
            title="Local Storage"
            description="All data stays on your device. SQLite database with FTS5 full-text search."
            delay={100}
          />
          <FeatureCard 
            icon={<Search size={24} />}
            title="Instant Search"
            description="Full-text search in milliseconds. Powered by Rust + SQLite FTS5."
            delay={200}
          />
          <FeatureCard 
            icon={<Shield size={24} />}
            title="Privacy First"
            description="Read-only Gmail access. Your emails never leave your device."
            delay={300}
          />
          <FeatureCard 
            icon={<WifiOff size={24} />}
            title="Offline-First"
            description="Works without internet after initial sync. Perfect for travel."
            delay={400}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <FeatureCard 
            icon={<Cpu size={24} />}
            title="Rust Powered"
            description="High-performance indexing engine built with Rust and Tauri."
            delay={500}
          />
          <FeatureCard 
            icon={<Filter size={24} />}
            title="Advanced Filters"
            description="Filter by sender, date, or use 'has:attachments' for files."
            delay={600}
          />
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Decision Detection"
            description="Automatically find important approvals, agreements, and commitments."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};
