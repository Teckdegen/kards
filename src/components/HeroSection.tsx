import { ScrollReveal } from '@/hooks/use-scroll-animation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 pb-20 overflow-hidden">
      {/* Abstract Atmospheric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Node Elements */}
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
        {/* Minimalist Heading ONLY */}
        <ScrollReveal delay={100}>
          <h1 className="text-[20vw] md:text-[15vw] font-bold text-white leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            KARDS
          </h1>
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