import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import appTransactions from '@/assets/app-transactions.png';
import appInbox from '@/assets/app-inbox.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "ARDS";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === fullText) {
      // Finished typing, wait 4 seconds before starting deletion
      timeout = setTimeout(() => setIsDeleting(true), 4000);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, small pause before typing again
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 100 : 200;
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 pb-20 overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Real-time App Images in Background - Increased Visibility */}
        <div className="absolute top-[15%] left-[5%] w-48 md:w-64 opacity-50 rotate-[-12deg] blur-[1px] animate-float">
          <img src={appTransactions} alt="" className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-1000" />
        </div>

        <div className="absolute bottom-[20%] right-[5%] w-48 md:w-64 opacity-50 rotate-[12deg] blur-[1px] animate-float" style={{ animationDelay: '-3s' }}>
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
        {/* Branding with Logo > Text and Typing Effect */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-8">
              {/* Branding with Typing Animation */}
              <h1 className="text-[12vw] md:text-[10vw] font-bold text-white leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 underline decoration-white/30 decoration-[6px] underline-offset-[12px] md:underline-offset-[20px]">
                K{displayText}
                <span className="inline-block w-[3px] h-[0.8em] bg-white ml-2 animate-pulse align-middle no-underline" />
              </h1>
            </div>

            <ScrollReveal delay={800}>
              <Link
                to="/chains"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-sm font-light tracking-[0.2em] uppercase">Dive In</span>
                <div className="w-1.5 h-1.5 rounded-full bg-kards-accent shadow-[0_0_10px_#39FF14] group-hover:scale-125 transition-transform" />
              </Link>
            </ScrollReveal>
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