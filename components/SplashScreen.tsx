import React, { useEffect, useState } from 'react';

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
      setTimeout(onComplete, 1200);
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden ${
        phase === 'entering' ? 'opacity-0' : phase === 'visible' ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.8s ease-in-out' }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-2xl flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Zmemo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-5xl font-bold text-gray-900 tracking-wider font-display">
            <span className="inline-block animate-[slideDown_0.4s_ease-out]">Z</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.1s]">m</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.2s]">e</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.3s]">m</span>
            <span className="inline-block animate-[slideDown_0.4s_ease-out_0.4s]">o</span>
          </h1>
          <p className="text-gray-500 text-sm mt-3 tracking-[0.4em] uppercase animate-[fadeIn_1s_ease-out_0.6s] opacity-0 font-medium" style={{ animationFillMode: 'forwards' }}>
            Local Email Indexer
          </p>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-[bounce_1.4s_ease-in-out_infinite]"
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
