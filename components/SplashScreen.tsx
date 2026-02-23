import React, { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'visible' | 'exiting'>('entering');

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setPhase('visible');
    }, 100);

    const exitTimer = setTimeout(() => {
      setPhase('exiting');
      setTimeout(onComplete, 1000);
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-zinc-900 flex flex-col items-center justify-center overflow-hidden ${
        phase === 'entering' ? 'opacity-0' : phase === 'visible' ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.6s ease-in-out' }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
            <img 
              src="/logo.png" 
              alt="Zmemo" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-white tracking-wider">
            <span className="inline-block animate-[slideDown_0.4s_ease-out]">Z</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.1s]">m</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.2s]">e</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.3s]">m</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.4s]">o</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-zinc-500 text-xs tracking-[0.3em] uppercase animate-[fadeIn_1s_ease-out_0.6s] opacity-0 font-medium" style={{ animationFillMode: 'forwards' }}>
            <Lock size={10} />
            <span>Local Email Indexer</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-zinc-600 rounded-full animate-[bounce_1.4s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
