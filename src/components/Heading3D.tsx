import { useState, useRef, ReactNode } from 'react';

interface Heading3DProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading3D = ({ children, className = '', as: Component = 'h2' }: Heading3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className="perspective-1000 inline-block cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Shadow text layer */}
        <Component 
          className={`${className} absolute inset-0 select-none`}
          style={{
            transform: 'translateZ(-8px)',
            color: 'hsl(var(--kards-purple) / 0.3)',
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          {children}
        </Component>
        
        {/* Main text */}
        <Component 
          className={`${className} relative`}
          style={{
            transform: 'translateZ(8px)',
            textShadow: `
              2px 2px 0 hsl(var(--kards-navy)),
              4px 4px 0 hsl(var(--kards-navy) / 0.5),
              0 0 30px hsl(var(--kards-purple) / 0.5)
            `,
          }}
        >
          {children}
        </Component>
      </div>
    </div>
  );
};

export default Heading3D;
