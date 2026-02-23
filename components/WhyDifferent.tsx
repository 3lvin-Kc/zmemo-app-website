import React from 'react';
import { Lock, Heart, Globe } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-zinc-900 mb-1">{title}</h4>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  </FadeIn>
);

export const WhyDifferent: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
          Fundamentally different
        </h2>
        <p className="text-lg text-zinc-600 text-center max-w-2xl mx-auto mb-16">
          We believe privacy isn't a feature — it's a core principle. Here's what makes Zmemo different.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PrincipleCard 
            icon={<Lock size={20} />}
            title="Privacy by default"
            description="Most apps treat privacy as an afterthought. We built Zmemo from the ground up with privacy as the default."
            delay={100}
          />
          <PrincipleCard 
            icon={<Heart size={20} />}
            title="No ads, no tracking"
            description="We don't sell your data. We don't show ads. Our only goal is helping you find your emails faster."
            delay={200}
          />
          <PrincipleCard 
            icon={<Globe size={20} />}
            title="Your data, your rules"
            description="Unlike cloud services, your emails never leave your device. You control where they go."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
