import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

interface ScrollPosition {
  y: number;
  progress: number; // 0 to 1 based on page scroll
}

interface Parallax3DContextType {
  mouse: MousePosition;
  scroll: ScrollPosition;
  isReady: boolean;
}

const Parallax3DContext = createContext<Parallax3DContextType>({
  mouse: { x: 0, y: 0, normalizedX: 0, normalizedY: 0 },
  scroll: { y: 0, progress: 0 },
  isReady: false,
});

export const useParallax3D = () => useContext(Parallax3DContext);

interface Parallax3DProviderProps {
  children: ReactNode;
}

export const Parallax3DProvider = ({ children }: Parallax3DProviderProps) => {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const [scroll, setScroll] = useState<ScrollPosition>({ y: 0, progress: 0 });
  const [isReady, setIsReady] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
    
    setMouse({
      x: e.clientX,
      y: e.clientY,
      normalizedX,
      normalizedY,
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    setScroll({ y: scrollY, progress });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll position
    handleScroll();
    setIsReady(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <Parallax3DContext.Provider value={{ mouse, scroll, isReady }}>
      {children}
    </Parallax3DContext.Provider>
  );
};

// Hook for getting 3D transform styles based on mouse position
export const use3DTransform = (
  depth: number = 1, // Multiplier for effect intensity
  rotateIntensity: number = 5, // Max rotation in degrees
  translateIntensity: number = 10 // Max translate in px
) => {
  const { mouse, isReady } = useParallax3D();
  
  if (!isReady) {
    return {
      transform: 'none',
      style: {},
    };
  }
  
  const rotateX = -mouse.normalizedY * rotateIntensity * depth;
  const rotateY = mouse.normalizedX * rotateIntensity * depth;
  const translateX = mouse.normalizedX * translateIntensity * depth;
  const translateY = mouse.normalizedY * translateIntensity * depth;
  
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
    style: {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out',
    },
  };
};

// Hook for scroll-based parallax
export const useScrollParallax = (speed: number = 0.5) => {
  const { scroll } = useParallax3D();
  
  return {
    transform: `translateY(${scroll.y * speed}px)`,
    style: {
      transform: `translateY(${scroll.y * speed}px)`,
    },
  };
};
