import { useParallax3D } from '@/hooks/use-parallax-3d';

const AnimatedBackground = () => {
  const { mouse, scroll, isReady } = useParallax3D();
  
  // Calculate parallax offsets for background elements
  const layer1X = isReady ? mouse.normalizedX * 40 : 0;
  const layer1Y = isReady ? mouse.normalizedY * 40 : 0;
  const layer2X = isReady ? mouse.normalizedX * 25 : 0;
  const layer2Y = isReady ? mouse.normalizedY * 25 : 0;
  const layer3X = isReady ? mouse.normalizedX * 15 : 0;
  const layer3Y = isReady ? mouse.normalizedY * 15 : 0;
  
  // Scroll-based rotation for depth effect
  const scrollRotate = scroll.progress * 10;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Base gradient background - Deep Navy from Logo */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(212 55% 8%) 0%, hsl(212 50% 12%) 50%, hsl(212 55% 10%) 100%)',
        }}
      />
      
      {/* Animated mesh gradient orbs - Layer 1 (furthest) - Cream tones */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, hsl(42 33% 92% / 0.08) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animationDuration: '15s',
          transform: `translate(${layer1X}px, ${layer1Y}px) rotate(${scrollRotate}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Layer 2 (middle) - Subtle cream accent */}
      <div 
        className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, hsl(42 40% 80% / 0.06) 0%, transparent 60%)',
          filter: 'blur(100px)',
          animationDuration: '20s',
          animationDelay: '-5s',
          transform: `translate(${layer2X}px, ${layer2Y}px) rotate(${-scrollRotate * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Layer 3 (closest) - Warm cream glow */}
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, hsl(42 33% 92% / 0.05) 0%, transparent 50%)',
          filter: 'blur(120px)',
          animationDuration: '25s',
          animationDelay: '-10s',
          transform: `translate(${layer3X}px, ${layer3Y}px) rotate(${scrollRotate * 0.3}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Grid overlay with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--kards-cream)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--kards-cream)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${layer1X * 0.1}px, ${layer1Y * 0.1}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Radial vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(212 55% 6% / 0.6) 80%)',
        }}
      />

      {/* Accent light beams with parallax */}
      <div 
        className="absolute top-0 left-1/4 w-px h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--kards-purple)), transparent)',
          transform: `translateX(${layer2X * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div 
        className="absolute top-0 right-1/3 w-px h-full opacity-5"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--kards-cream)), transparent)',
          transform: `translateX(${layer3X * 0.3}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
