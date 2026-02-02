import { ScrollReveal } from '@/hooks/use-scroll-animation';
import { Shield, Zap, Globe } from 'lucide-react';
import kardsCard from '@/assets/kards-card.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 pb-20 overflow-hidden bg-black">
      {/* Abstract Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-kards-accent/5 rounded-full blur-[120px]" />

        {/* Subtle Node Elements (Inspired by Reference Image) */}
        <div className="absolute top-[30%] left-[15%] flex flex-col items-start opacity-20">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
            <span className="text-[10px] text-white font-mono tracking-widest uppercase">Stealth</span>
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent ml-[3px]" />
        </div>

        <div className="absolute bottom-[30%] right-[15%] flex flex-col items-end opacity-20">
          <div className="w-px h-16 bg-gradient-to-t from-white/40 to-transparent mr-[3px]" />
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-white font-mono tracking-widest uppercase">Privacy</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        {/* Top Branding/Pill */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-12 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-[10px] text-white/60 font-medium tracking-[0.3em] uppercase">Non-KYC Financial Tools</span>
          </div>
        </ScrollReveal>

        {/* Minimalist Heading */}
        <ScrollReveal delay={100}>
          <h1 className="text-[15vw] md:text-[12vw] font-bold text-white leading-none tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            KARDS
          </h1>
        </ScrollReveal>

        {/* Refined Description */}
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light mb-16 px-4">
            Dive into the art of financial freedom, where privacy meets industry-leading technology.
            Spend without limits. Stay invisible.
          </p>
        </ScrollReveal>

        {/* Centered Visual Element */}
        <ScrollReveal delay={400} className="relative max-w-3xl mx-auto px-4">
          <div className="relative group cursor-none">
            <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] blur-[80px] group-hover:bg-kards-accent/10 transition-colors duration-1000" />
            <img
              src={kardsCard}
              alt="Kards Card"
              className="relative z-10 w-full max-w-[500px] mx-auto opacity-90 brightness-110 drop-shadow-[0_0_80px_rgba(255,255,255,0.1)] transition-transform duration-1000 group-hover:scale-[1.02]"
            />

            {/* Status Indicators (Subtle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
              <div className="flex items-center gap-4 text-[10px] text-white/20 font-mono tracking-[0.2em] uppercase">
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> Secure</span>
                <span className="w-1 h-1 rounded-full bg-white/10" />
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-kards-accent" /> Instant</span>
                <span className="w-1 h-1 rounded-full bg-white/10" />
                <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Worldwide</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;