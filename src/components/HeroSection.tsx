import { ScrollReveal } from '@/hooks/use-scroll-animation';
import kardsLogoNoBg from '@/assets/kards-logo-nobg.png';
import appTransactions from '@/assets/app-transactions.png';
import appInbox from '@/assets/app-inbox.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 pb-20 overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Real-time App Images in Background */}
        <div className="absolute top-[15%] left-[5%] w-48 md:w-64 opacity-20 rotate-[-12deg] blur-[2px] animate-float">
          <img src={appTransactions} alt="" className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-1000" />
        </div>

        <div className="absolute bottom-[20%] right-[5%] w-48 md:w-64 opacity-20 rotate-[12deg] blur-[2px] animate-float" style={{ animationDelay: '-3s' }}>
          <img src={appInbox} alt="" className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-1000" />
        </div>

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
        {/* Minimalist Heading with Logo replacing 'K' */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center">
            <h1 className="flex items-center text-[20vw] md:text-[15vw] font-bold text-white leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              <img
                src={kardsLogoNoBg}
                alt="K"
                className="h-[18vw] md:h-[13vw] w-auto -mr-[2vw] mt-[1vw] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse"
              />
              ARDS
            </h1>
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