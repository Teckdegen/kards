import { ReactNode, useRef, useEffect, useState } from 'react';
import { useParallax3D } from '@/hooks/use-parallax-3d';

interface Parallax3DLayerProps {
  children: ReactNode;
  className?: string;
  depth?: number; // 0 = no effect, 1 = normal, 2 = double, -1 = reverse
  rotateIntensity?: number;
  translateIntensity?: number;
  scrollSpeed?: number; // Parallax scroll speed
  floatAnimation?: boolean; // Enable subtle floating animation
  tiltOnScroll?: boolean; // Tilt based on scroll position
}

const Parallax3DLayer = ({
  children,
  className = '',
  depth = 1,
  rotateIntensity = 8,
  translateIntensity = 15,
  scrollSpeed = 0,
  floatAnimation = false,
  tiltOnScroll = false,
}: Parallax3DLayerProps) => {
  const { mouse, scroll, isReady } = useParallax3D();
  const ref = useRef<HTMLDivElement>(null);
  const [elementProgress, setElementProgress] = useState(0);

  useEffect(() => {
    if (!ref.current || !tiltOnScroll) return;

    const updateProgress = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      // -1 when element is below viewport, 0 at center, 1 when above
      const progress = (windowHeight / 2 - elementCenter) / (windowHeight / 2);
      setElementProgress(Math.max(-1, Math.min(1, progress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, [tiltOnScroll]);

  if (!isReady) {
    return <div className={className}>{children}</div>;
  }

  // Calculate transforms
  const rotateX = -mouse.normalizedY * rotateIntensity * depth;
  const rotateY = mouse.normalizedX * rotateIntensity * depth;
  const translateX = mouse.normalizedX * translateIntensity * depth;
  const translateY = mouse.normalizedY * translateIntensity * depth;
  const scrollTranslate = scroll.y * scrollSpeed;

  // Add scroll-based tilt
  const scrollTiltX = tiltOnScroll ? elementProgress * 5 : 0;

  const transform = `
    perspective(1200px) 
    rotateX(${rotateX + scrollTiltX}deg) 
    rotateY(${rotateY}deg) 
    translateX(${translateX}px) 
    translateY(${translateY + scrollTranslate}px)
    translateZ(${depth * 10}px)
  `;

  return (
    <div
      ref={ref}
      className={`${className} ${floatAnimation ? 'animate-float' : ''}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax3DLayer;
