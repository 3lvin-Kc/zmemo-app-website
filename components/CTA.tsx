import React from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 px-6 md:px-12 bg-zinc-50">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Take control of your email search.
          </h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">
            Free to use. No account required. Open source coming soon.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <button className="h-14 px-10 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 mx-auto">
            <Download size={18} />
            <span>Download Now</span>
          </button>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={14} /> Free Limited 
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={14} /> No account required
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
