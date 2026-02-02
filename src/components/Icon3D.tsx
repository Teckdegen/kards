import { LucideIcon } from 'lucide-react';
import { useState, useRef, createContext, useContext } from 'react';

// Context to manage which icon is active
const ActiveIconContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>({
  activeId: null,
  setActiveId: () => {},
});

export const ActiveIconProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <ActiveIconContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveIconContext.Provider>
  );
};

interface Icon3DProps {
  icon: LucideIcon;
  id: string;
}

const Icon3D = ({ icon: Icon, id }: Icon3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeId, setActiveId } = useContext(ActiveIconContext);
  
  const isActive = activeId === id;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isActive) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 30;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      setActiveId(null);
      setRotation({ x: 0, y: 0 });
    } else {
      setActiveId(id);
    }
  };

  const handleMouseLeave = () => {
    if (isActive) {
      setRotation({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative perspective-1000 w-20 h-20 cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base shadow - purple glow */}
      <div 
        className="absolute inset-2 rounded-2xl blur-2xl transition-all duration-500"
        style={{
          background: 'hsl(var(--kards-purple) / 0.6)',
          transform: `translateY(${isActive ? 12 : 6}px) scale(0.8)`,
          opacity: isActive ? 0.8 : 0.4,
        }}
      />
      
      {/* 3D Icon container */}
      <div 
        className="relative w-full h-full transition-all duration-300 ease-out"
        style={{
          transform: isActive 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(15px) scale(1.1)`
            : 'rotateX(0) rotateY(0) translateZ(0) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face - gradient navy to purple */}
        <div 
          className="absolute inset-0 rounded-2xl border border-kards-cream/20 flex items-center justify-center overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--kards-navy-light)) 0%, hsl(var(--kards-purple) / 0.4) 100%)',
            boxShadow: isActive 
              ? `0 0 40px hsl(var(--kards-purple) / 0.6), inset 0 1px 0 rgba(255,255,255,0.15)`
              : `0 0 15px hsl(var(--kards-purple) / 0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
        >
          {/* Shine effect */}
          <div 
            className="absolute top-0 left-0 w-full h-1/2 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
              borderRadius: 'inherit',
              opacity: isActive ? 1 : 0.5,
            }}
          />
          
          {/* Icon - cream colored */}
          <Icon 
            className="w-10 h-10 relative z-10 transition-all duration-300"
            style={{ 
              color: 'hsl(var(--kards-cream))',
              filter: isActive ? `drop-shadow(0 0 15px hsl(var(--kards-cream) / 0.8))` : 'none',
            }}
          />
        </div>
        
        {/* Active ring */}
        {isActive && (
          <div 
            className="absolute -inset-1 rounded-2xl border-2 border-kards-purple animate-pulse-glow pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

export default Icon3D;
