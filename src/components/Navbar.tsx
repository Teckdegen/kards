import { Link } from 'react-router-dom';
import kardsLogoNoBg from '@/assets/kards-logo-nobg.png';
import { useParallax3D } from '@/hooks/use-parallax-3d';

const Navbar = () => {
  const { mouse, isReady } = useParallax3D();

  // Subtle nav tilt based on mouse
  const rotateX = isReady ? -mouse.normalizedY * 2 : 0;
  const rotateY = isReady ? mouse.normalizedX * 3 : 0;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="glass-card glass-reflection rounded-2xl px-6 py-3 flex items-center justify-between"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.2s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group" style={{ transform: 'translateZ(10px)' }}>
            <span className="font-comic text-2xl text-kards-cream tracking-wider flex items-center">
              <img
                src={kardsLogoNoBg}
                alt="K"
                className="h-8 w-auto transition-transform group-hover:scale-110 -mr-1"
              />
              ARDS
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8" style={{ transform: 'translateZ(15px)' }}>
            <a href="#features" className="text-kards-cream/70 hover:text-kards-cream transition-all font-medium hover:scale-105">
              Features
            </a>
            <a href="#how-it-works" className="text-kards-cream/70 hover:text-kards-cream transition-all font-medium hover:scale-105">
              How It Works
            </a>
            <a href="#fees" className="text-kards-cream/70 hover:text-kards-cream transition-all font-medium hover:scale-105">
              Fees
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
