import { useState, useRef, useEffect } from 'react';
import { Wifi, Infinity } from 'lucide-react';
import kardsLogo from '@/assets/kards-logo-nobg.png';

// Sparkle component
const Sparkle = ({ style, delay }: { style: React.CSSProperties; delay: number }) => (
  <div 
    className="absolute w-1 h-1 rounded-full pointer-events-none"
    style={{
      ...style,
      background: 'radial-gradient(circle, hsl(var(--kards-cream)) 0%, transparent 70%)',
      boxShadow: '0 0 6px 2px hsl(var(--kards-cream) / 0.6)',
      animation: `sparkle 2s ease-in-out ${delay}s infinite`,
    }}
  />
);

const Card3DVisual = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Auto-rotation animation
  useEffect(() => {
    let time = 0;
    const animate = () => {
      if (!isHovered) {
        time += 0.02;
        setAutoRotation({
          x: Math.sin(time * 0.5) * 8,
          y: Math.sin(time * 0.7) * 12,
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 20;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const currentRotation = isHovered ? rotation : autoRotation;

  // Generate sparkle positions
  const sparkles = [
    { top: '-5%', left: '10%' },
    { top: '15%', right: '-8%' },
    { bottom: '20%', right: '-5%' },
    { bottom: '-8%', left: '30%' },
    { top: '40%', left: '-10%' },
    { top: '-10%', right: '25%' },
    { bottom: '10%', left: '-8%' },
    { top: '60%', right: '-12%' },
  ];

  return (
    <div 
      ref={containerRef}
      className="perspective-2000 cursor-pointer select-none relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sparkle particles */}
      {sparkles.map((pos, i) => (
        <Sparkle key={i} style={pos} delay={i * 0.3} />
      ))}
      
      {/* Glow shadow beneath card - grey and brand colors */}
      <div 
        className="absolute inset-0 rounded-3xl blur-3xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--kards-purple) / 0.6), hsl(220 10% 50% / 0.4), hsl(var(--kards-cream) / 0.2))',
          transform: `translateY(${isHovered ? 40 : 20}px) scale(${isHovered ? 1.1 : 0.9})`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
      
      {/* 3D Card Container */}
      <div 
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg) translateZ(${isHovered ? 50 : 0}px) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card Base */}
        <div className="relative aspect-[1.6/1] rounded-2xl overflow-hidden border border-kards-cream/20 shadow-2xl">
          {/* Logo glow effect */}
          <div 
            className="absolute inset-0 blur-2xl"
            style={{
              backgroundImage: `url(${kardsLogo})`,
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.6,
              filter: 'blur(30px) brightness(1.5)',
            }}
          />
          
          {/* Background with logo */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${kardsLogo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-kards-navy/50 via-kards-navy/30 to-kards-purple/20" />
          
          {/* Holographic shine layer - grey and brand colors */}
          <div 
            className="absolute inset-0 opacity-60 transition-opacity duration-300"
            style={{
              background: `linear-gradient(
                ${110 + currentRotation.y * 2}deg,
                transparent 0%,
                hsl(220 10% 40% / 0.4) 15%,
                hsl(var(--kards-purple) / 0.35) 30%,
                hsl(var(--kards-cream) / 0.25) 45%,
                hsl(220 10% 50% / 0.4) 55%,
                hsl(var(--kards-purple) / 0.35) 70%,
                hsl(220 10% 35% / 0.3) 85%,
                transparent 100%
              )`,
              opacity: isHovered ? 0.8 : 0.5,
            }}
          />
          
          {/* Moving light reflection */}
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-200"
            style={{
              background: `radial-gradient(
                circle at ${50 + currentRotation.y * 2}% ${50 - currentRotation.x * 2}%,
                hsl(var(--kards-cream) / ${isHovered ? 0.4 : 0.2}) 0%,
                transparent 50%
              )`,
            }}
          />
          
          {/* Top edge highlight */}
          <div 
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, hsl(var(--kards-cream) / 0.5), transparent)`,
            }}
          />
          
          {/* Card content */}
          <div 
            className="relative h-full p-6 flex flex-col justify-between"
            style={{
              transform: 'translateZ(10px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <span 
                className="font-comic text-2xl md:text-3xl text-kards-cream drop-shadow-lg"
                style={{ transform: 'translateZ(20px)' }}
              >
                KARDS
              </span>
              <div 
                className="relative"
                style={{ transform: 'translateZ(15px)' }}
              >
                <div className="absolute inset-0 blur-md bg-kards-cream/30" />
                <Wifi className="relative w-8 h-8 text-kards-cream/80" />
              </div>
            </div>

            {/* Chip */}
            <div 
              className="relative w-14 h-10 rounded-md overflow-hidden"
              style={{ transform: 'translateZ(25px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Chip lines */}
              <div className="absolute inset-1 border border-yellow-600/30 rounded-sm" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-yellow-600/30" />
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-yellow-600/30" />
              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-yellow-600/30" />
            </div>

            {/* Card Number */}
            <div 
              className="font-mono text-lg md:text-xl text-kards-cream/90 tracking-[0.3em] drop-shadow-md"
              style={{ transform: 'translateZ(15px)' }}
            >
              •••• •••• •••• ••••
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
              <div style={{ transform: 'translateZ(12px)' }}>
                <div className="text-[10px] text-kards-cream/50 mb-0.5 uppercase tracking-wider">Cardholder</div>
                <div className="text-kards-cream font-semibold tracking-wide">ANONYMOUS</div>
              </div>
              <div className="text-right" style={{ transform: 'translateZ(12px)' }}>
                <div className="text-[10px] text-kards-cream/50 mb-0.5 uppercase tracking-wider">Valid Thru</div>
                <div className="text-kards-cream font-medium flex items-center justify-end">
                  <Infinity className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Visa logo with 3D depth */}
            <div 
              className="absolute bottom-6 right-6"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="relative">
                <span className="text-3xl font-bold italic text-kards-cream drop-shadow-lg">
                  VISA
                </span>
                <div 
                  className="absolute inset-0 blur-sm -z-10"
                  style={{ color: 'hsl(var(--kards-cream) / 0.5)' }}
                >
                  <span className="text-3xl font-bold italic">VISA</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom edge shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          
          {/* Shimmer animation overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                105deg,
                transparent 40%,
                hsl(var(--kards-cream) / 0.1) 45%,
                hsl(var(--kards-cream) / 0.2) 50%,
                hsl(var(--kards-cream) / 0.1) 55%,
                transparent 60%
              )`,
              backgroundSize: '200% 100%',
              animation: isHovered ? 'none' : 'shimmer 4s ease-in-out infinite',
            }}
          />
        </div>
        
        {/* Active border glow - grey and brand colors */}
        <div 
          className="absolute -inset-1 rounded-3xl transition-all duration-500 pointer-events-none"
          style={{
            background: isHovered 
              ? 'linear-gradient(135deg, hsl(var(--kards-purple) / 0.5), hsl(220 10% 50% / 0.4), hsl(var(--kards-cream) / 0.3), hsl(220 10% 45% / 0.4), hsl(var(--kards-purple) / 0.5))'
              : 'transparent',
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default Card3DVisual;
