import { ReactNode, useRef, useEffect, useState } from 'react';
import { useParallax3D } from '@/hooks/use-parallax-3d';

interface Parallax3DSectionProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  as?: 'section' | 'div' | 'article';
  id?: string;
}

const Parallax3DSection = ({
  children,
  className = '',
  depth = 0.3,
  as: Component = 'section',
  id,
}: Parallax3DSectionProps) => {
  const { mouse, scroll, isReady } = useParallax3D();
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [centerOffset, setCenterOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    const updateCenterOffset = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      // -1 at top of viewport, 0 at center, 1 at bottom
      const offset = (elementCenter - windowHeight / 2) / (windowHeight / 2);
      setCenterOffset(Math.max(-1, Math.min(1, offset)));
    };

    updateCenterOffset();
    window.addEventListener('scroll', updateCenterOffset, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateCenterOffset);
    };
  }, []);

  if (!isReady) {
    return <Component ref={ref as any} className={className}>{children}</Component>;
  }

  // Subtle section-level parallax based on mouse
  const rotateX = isInView ? -mouse.normalizedY * 2 * depth : 0;
  const rotateY = isInView ? mouse.normalizedX * 2 * depth : 0;

  // Add depth based on scroll position relative to viewport center
  const translateZ = -centerOffset * 20 * depth;

  const transform = `
    perspective(2000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg)
    translateZ(${translateZ}px)
  `;

  return (
    <Component
      ref={ref as any}
      id={id}
      className={className}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </Component>
  );
};

export default Parallax3DSection;
