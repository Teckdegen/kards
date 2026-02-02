import { CreditCard, Clock } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import Parallax3DLayer from './Parallax3DLayer';
import Parallax3DSection from './Parallax3DSection';
import kardsCard from '@/assets/kards-card.png';
import { useParallax3D } from '@/hooks/use-parallax-3d';
import { useEffect, useState } from 'react';

const CardDetailsSection = () => {
  const { mouse, isReady } = useParallax3D();
  const [rotation, setRotation] = useState(0);
  
  // Continuous 360° rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360); // Slow rotation: 0.5 degrees per frame
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);
  
  // Calculate card float based on mouse + continuous rotation
  const cardRotateX = isReady ? -mouse.normalizedY * 10 : 0;
  const cardRotateY = rotation + (isReady ? mouse.normalizedX * 15 : 0);

  return (
    <Parallax3DSection className="relative section-padding overflow-hidden" depth={0.25}>
      <div className="relative z-10 max-w-7xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Card Visual - Made bigger with 3D tilt */}
          <ScrollReveal direction="left" className="relative">
            <Parallax3DLayer depth={1.5} translateIntensity={25} rotateIntensity={12}>
              <div className="relative w-full max-w-xl mx-auto lg:max-w-none" style={{ transformStyle: 'preserve-3d' }}>
                {/* Card container with hover effects */}
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-kards-purple/40 hover:shadow-kards-purple/60 transition-all duration-500"
                  style={{
                    transform: `perspective(1000px) rotateX(${cardRotateX}deg) rotateY(${cardRotateY}deg) scale(1.02)`,
                    transition: 'transform 0.2s ease-out, box-shadow 0.5s ease',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img 
                    src={kardsCard} 
                    alt="Kards Virtual Card" 
                    className="w-full h-auto object-contain"
                    style={{ transform: 'translateZ(20px)' }}
                  />
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      transform: `translateX(${mouse.normalizedX * 100}%) translateY(${mouse.normalizedY * 100}%)`,
                    }}
                  />
                </div>
                
                {/* Glow effect beneath card */}
                <div className="absolute -inset-8 bg-gradient-to-r from-kards-purple/30 via-kards-cream/15 to-kards-purple/30 blur-3xl -z-10 opacity-70" />
              </div>
            </Parallax3DLayer>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200}>
            <Parallax3DLayer depth={0.6} translateIntensity={12} rotateIntensity={5} tiltOnScroll>
              <div className="relative mb-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-kards-purple/30 to-transparent blur-3xl -z-10" />
                <h2 className="comic-text text-4xl md:text-5xl lg:text-6xl text-kards-cream mb-6 relative">
                  VIRTUAL POWER,
                  <br />
                  <span className="text-glow">REAL FREEDOM</span>
                </h2>
              </div>

              <p className="text-kards-cream/70 text-lg mb-8">
                Our virtual cards give you everything you need. ATM withdrawals, 
                online payments, and complete privacy—all from your phone.
              </p>

              {/* Card Features */}
              <div className="space-y-4" style={{ transformStyle: 'preserve-3d' }}>
                <Parallax3DLayer depth={0.4} translateIntensity={6} rotateIntensity={4}>
                  <div className="group feature-card flex items-center gap-4 !p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-kards-purple/20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-kards-purple/30 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 rounded-xl bg-kards-purple/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-kards-purple/30">
                        <CreditCard className="w-6 h-6 text-kards-purple transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-kards-cream font-semibold group-hover:text-kards-cream transition-colors">Virtual Card</h4>
                      <p className="text-kards-cream/60 text-sm group-hover:text-kards-cream/70 transition-colors">Instant issue, use anywhere online</p>
                    </div>
                  </div>
                </Parallax3DLayer>

                <Parallax3DLayer depth={0.5} translateIntensity={8} rotateIntensity={4}>
                  <div className="group feature-card flex items-center gap-4 !p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-kards-cream/15">
                    <div className="relative">
                      <div className="absolute inset-0 bg-kards-cream/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 rounded-xl bg-kards-cream/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-kards-cream/25">
                        <Clock className="w-6 h-6 text-kards-cream/80 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-kards-cream font-semibold group-hover:text-kards-cream transition-colors">Physical Cards</h4>
                      <p className="text-kards-cream/60 text-sm group-hover:text-kards-cream/70 transition-colors">Coming in 2026!</p>
                    </div>
                  </div>
                </Parallax3DLayer>
              </div>
            </Parallax3DLayer>
          </ScrollReveal>
        </div>
      </div>
    </Parallax3DSection>
  );
};

export default CardDetailsSection;
