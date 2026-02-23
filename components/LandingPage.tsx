import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { TrustIndicators } from './TrustIndicators';
import { HowItWorks } from './HowItWorks';
import { Features } from './Features';
import { PrivacySection } from './PrivacySection';
import { WhyDifferent } from './WhyDifferent';
import { OpenSource } from './OpenSource';
import { CTA } from './CTA';
import { Footer } from './Footer';

export const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-700 overflow-x-hidden font-sans">
      <Navigation scrolled={scrolled} />
      <Hero />
      <TrustIndicators />
      <HowItWorks />
      <Features />
      <PrivacySection />
      <WhyDifferent />
      <OpenSource />
      <CTA />
      <Footer />
    </div>
  );
};
