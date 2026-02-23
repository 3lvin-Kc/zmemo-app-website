import React, { useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
};
