import { useState, useRef, ReactNode, createContext, useContext } from 'react';

// Context to manage which card is active
const ActiveCardContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>({
  activeId: null,
  setActiveId: () => {},
});

export const ActiveCardProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <ActiveCardContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveCardContext.Provider>
  );
};

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  id: string;
}

const Card3D = ({ children, className = '', intensity = 15, glowColor, id }: Card3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeId, setActiveId } = useContext(ActiveCardContext);
  
  const isActive = activeId === id;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isActive) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * intensity;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleClick = () => {
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
      className={`perspective-1000 cursor-pointer select-none ${className}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shadow layer */}
      <div 
        className="absolute inset-0 rounded-3xl blur-2xl transition-all duration-500"
        style={{
          background: glowColor || 'hsl(var(--kards-purple) / 0.3)',
          transform: `translateY(${isActive ? 20 : 5}px) scale(${isActive ? 0.95 : 0.9})`,
          opacity: isActive ? 0.7 : 0.2,
        }}
      />
      
      {/* 3D Card */}
      <div 
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: isActive 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(30px) scale(1.05)`
            : 'rotateX(0) rotateY(0) translateZ(0) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        
        {/* Active indicator ring */}
        <div 
          className={`absolute -inset-1 rounded-3xl border-2 transition-all duration-300 pointer-events-none ${
            isActive ? 'opacity-100 border-kards-purple' : 'opacity-0 border-transparent'
          }`}
          style={{
            boxShadow: isActive ? `0 0 20px hsl(var(--kards-purple) / 0.5)` : 'none',
          }}
        />
        
        {/* Reflection highlight */}
        {isActive && (
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `linear-gradient(
                ${105 + rotation.y}deg, 
                rgba(255,255,255,0.2) 0%, 
                transparent 50%
              )`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card3D;
