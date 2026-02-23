import React from 'react';
import { Download, RefreshCw, Search } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface HowItWorksCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step, title, description, icon, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="relative p-8 rounded-2xl border border-zinc-100 bg-white h-full">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">
        {step}
      </div>
      <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-4 text-zinc-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
          Simple. Private. Local.
        </h2>
        <p className="text-lg text-zinc-600 text-center max-w-2xl mx-auto mb-16">
          Get started in seconds. Your emails stay on your machine, always.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HowItWorksCard 
            step={1}
            icon={<Download size={24} />}
            title="Download & Install"
            description="Download Zmemo for free. No account needed. Install on your machine in seconds."
            delay={100}
          />
          <HowItWorksCard 
            step={2}
            icon={<RefreshCw size={24} />}
            title="Index Your Emails"
            description="Point Zmemo to your email files. It creates a local, encrypted index automatically."
            delay={200}
          />
          <HowItWorksCard 
            step={3}
            icon={<Search size={24} />}
            title="Search Instantly"
            description="Search through years of emails in milliseconds. Full-text search with filters."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
