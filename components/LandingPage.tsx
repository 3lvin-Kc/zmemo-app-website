import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Shield, 
  Zap, 
  HardDrive, 
  Mail, 
  Lock, 
  EyeOff,
  WifiOff,
  Server,
  CheckCircle,
  Database,
  ArrowRight,
  Search,
  Play,
  Layers,
  Menu,
  X
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
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

const FeatureCard: React.FC<{ 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay} className="group">
    <div className="h-full p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white">
      <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
        <div className="text-gray-700">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

const Step: React.FC<{
  number: string;
  title: string;
  description: string;
  delay?: number;
}> = ({ number, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="p-6 rounded-2xl border border-gray-200 bg-white">
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
        <span className="text-lg font-bold text-gray-700 font-display">{number}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

const StatCard: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="text-center p-4 rounded-2xl border border-gray-200 bg-white">
      <div className="text-3xl font-bold text-gray-900 mb-1 font-display">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </FadeIn>
);

export const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-700 overflow-x-hidden font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b border-gray-200 py-3' : 'py-5'}`}>
        <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Zmemo" 
              className="w-9 h-9 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-gray-900 font-display">Zmemo</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              <Download size={14} />
              <span>Download</span>
            </button>
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-5 flex flex-col gap-3">
            <a href="#features" className="text-gray-600" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-600" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#download" className="text-gray-600" onClick={() => setMobileMenuOpen(false)}>Download</a>
            <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium mt-2">
              <Download size={14} />
              <span>Download</span>
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Hero Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600 font-medium mb-6">
                100% Local & Offline
              </span>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
                Your emails.<br/>
                <span className="text-gray-500">Searchable. Private. Secure.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Index and search your entire email archive in milliseconds. 
                Zero cloud sync. Zero tracking.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
                <button className="h-12 px-8 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download size={16} />
                  <span>Download for Free</span>
                </button>
                <button className="h-12 px-8 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-colors flex items-center gap-2">
                  <Play size={16} />
                  <span>Watch Demo</span>
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <EyeOff size={14} /> No tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <Server size={14} /> Zero cloud
                </span>
                
                <span className="flex items-center gap-1.5">
                  <WifiOff size={14} /> Offline-first
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="grid grid-cols-3 gap-3 max-w-sm">
                <StatCard value="100K+" label="Emails indexed" delay={600} />
                <StatCard value="<50ms" label="Search latency" delay={700} />
                <StatCard value="0KB" label="Data to cloud" delay={800} />
              </div>
            </FadeIn>
          </div>

          {/* Right - Hero Image */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={200}>
              <div className="relative max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-gray-100 rounded-xl" />
                <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                  <img 
                    src="/zmemo.jpg" 
                    alt="Zmemo App Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

          {/* App Desktop Window UI */}
          <div className="relative max-w-5xl mx-auto mt-16">
             <div className="bg-white rounded-xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 overflow-hidden">
                {/* Window Controls */}
                <div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"/>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"/>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"/>
                    </div>
                    <div className="flex-1 text-center text-xs font-medium text-zinc-400">Zmemo — Desktop</div>
                </div>

                {/* Window Content */}
                <div className="p-6 bg-white min-h-[400px]">
                   <img 
                       src="/image.png" 
                       alt="Zmemo App Interface" 
                       className="w-full h-auto object-contain"
                   />
                </div>
             </div>
          </div>

       {/* Features Section */}
      <section id="features" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-8 text-center">
            Everything locally.<br/>Nothing in the cloud.
          </h2>
          <p className="text-xl text-zinc-600 text-center max-w-3xl mx-auto mb-20">
            Stop waiting for cloud sync. Search 100,000+ emails in milliseconds. 100% private, 0% latency.
          </p>
          
          {/* Striking Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Database className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-zinc-900">01</div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Local Storage</h3>
                <p className="text-zinc-600 leading-relaxed">All data stays on your device. Optional local encryption. No cloud dependencies.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Search className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-zinc-900">02</div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Instant Search</h3>
                <p className="text-zinc-600 leading-relaxed">Full-text search with filters. Find any email instantly. 30ms query time.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-zinc-900">03</div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Privacy First</h3>
                <p className="text-zinc-600 leading-relaxed">Your data never leaves your device. Zero telemetry. Complete control.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <WifiOff className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-zinc-900">04</div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Works Offline</h3>
                <p className="text-zinc-600 leading-relaxed">No internet connection required. Perfect for flights, tunnels, and remote work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Take control of your email search.
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Free, will going to open source soon
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <button className="h-14 px-10 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto">
              <Download size={18} />
              <span>Download Now</span>
            </button>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                Free Limited 
              </span>
              
              <span className="flex items-center gap-1.5">
                 No account required
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Zmemo" 
              className="w-6 h-6 rounded object-contain"
            />
            <span className="text-sm font-medium text-gray-900">Zmemo</span>
              </div>

          
          <div className="text-sm text-gray-500">
            © 2026 Zmemo
          </div>
        </div>
      </footer>
    </div>
  );
};
