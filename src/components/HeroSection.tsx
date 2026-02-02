import { ScrollReveal } from '@/hooks/use-scroll-animation';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import kardsCard from '@/assets/kards-card.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center section-padding pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-kards-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-kards-muted/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[15%] w-px h-64 bg-gradient-to-b from-transparent via-kards-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Content */}
          <div className="text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8 border border-kards-cream/10 bg-white/5">
                <span className="flex h-2 w-2 rounded-full bg-kards-accent animate-ping" />
                <span className="text-sm text-kards-cream/90 font-medium tracking-wide flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-kards-accent" />
                  NON-KYC • NO ID REQUIRED
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="comic-text text-5xl md:text-7xl lg:text-8xl text-kards-cream leading-[0.9] mb-6 tracking-tight">
                VIRTUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-kards-accent to-kards-cream">POWER,</span><br />
                REAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-kards-cream to-kards-accent">FREEDOM.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-kards-cream/70 max-w-xl mb-10 leading-relaxed font-light">
                Our virtual cards give you everything you need. <span className="text-kards-cream font-medium">ATM withdrawals</span>, <span className="text-kards-cream font-medium">online payments</span>, and complete privacy—all from your phone.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#features" className="btn-hero text-lg px-8 py-4 flex items-center gap-3 group">
                  View Features
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Stats/Trust Badges */}
            <ScrollReveal delay={400}>
              <div className="mt-12 flex items-center gap-8 border-t border-kards-cream/5 pt-8">
                <div className="flex items-center gap-2 text-kards-cream/40">
                  <Zap className="w-4 h-4 text-kards-accent" />
                  <span className="text-sm font-mono tracking-tighter">$100K LIMITS</span>
                </div>
                <div className="flex items-center gap-2 text-kards-cream/40">
                  <Globe className="w-4 h-4 text-kards-accent" />
                  <span className="text-sm font-mono tracking-tighter">GLOBAL USE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Component */}
          <ScrollReveal delay={200} className="hidden lg:block relative">
            <div className="relative perspective-1000 group">
              {/* Floating Card Visual */}
              <div className="relative transition-all duration-700 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-12 cursor-pointer">
                <div className="absolute inset-0 bg-kards-accent/20 rounded-[2.5rem] blur-[60px] transform group-hover:scale-110 transition-transform duration-700" />
                <img
                  src={kardsCard}
                  alt="Kards Premium Card"
                  className="relative z-10 w-full max-w-[500px] mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-[2rem]"
                />

                {/* Floating Elements Around Card */}
                <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border border-kards-accent/30 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-kards-cream/40 font-bold uppercase tracking-wider">Status</p>
                      <p className="text-sm text-kards-cream font-mono">INSTANT ISSUE</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border border-white/10 animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-kards-cream/40 font-bold uppercase tracking-wider">Privacy</p>
                      <p className="text-sm text-kards-cream font-mono">ENCRYPTED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;