import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import kardsCard from '@/assets/kards-card.png';

const CardScannerSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardLineRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);
  const velocityRef = useRef(80);
  const directionRef = useRef(-1);
  const isAnimatingRef = useRef(true);
  const lastTimeRef = useRef(0);
  const scannerRef = useRef<any>(null);

  // Use the Kards card image for all cards
  const cardImages = [kardsCard];

  const generateCode = useCallback((width: number, height: number) => {
    const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const pick = (arr: string[]) => arr[randInt(0, arr.length - 1)];

    const library = [
      "// scanner demo",
      "const SCAN_WIDTH = 8;",
      "const FADE_ZONE = 35;",
      "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
      "function lerp(a, b, t) { return a + (b - a) * t; }",
      "class Particle { constructor(x, y) { this.x = x; this.y = y; } }",
      "const scanner = { x: window.innerWidth / 2, width: 8 };",
      "function tick(t) { const dt = 0.016; }",
      "ctx.globalCompositeOperation = 'lighter';",
    ];

    for (let i = 0; i < 20; i++) {
      library.push(`const v${i} = ${randInt(1, 99)} * 0.${randInt(1, 9)};`);
    }

    let flow = library.join(" ").replace(/\s+/g, " ").trim();
    const totalChars = width * height;
    while (flow.length < totalChars + width) {
      flow += " " + pick(library).replace(/\s+/g, " ").trim();
    }

    let out = "";
    let offset = 0;
    for (let row = 0; row < height; row++) {
      let line = flow.slice(offset, offset + width);
      if (line.length < width) line = line + " ".repeat(width - line.length);
      out += line + (row < height - 1 ? "\n" : "");
      offset += width;
    }
    return out;
  }, []);

  const updateCardClipping = useCallback(() => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const scannerX = containerRect.left + containerRect.width / 2;
    const scannerWidth = 8;
    const scannerLeft = scannerX - scannerWidth / 2;
    const scannerRight = scannerX + scannerWidth / 2;

    const wrappers = containerRef.current.querySelectorAll('.card-wrapper-scanner');
    let anyScanningActive = false;

    wrappers.forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const cardLeft = rect.left;
      const cardRight = rect.right;
      const cardWidth = rect.width;

      const normalCard = wrapper.querySelector('.card-normal-scanner') as HTMLElement;
      const asciiCard = wrapper.querySelector('.card-ascii-scanner') as HTMLElement;

      if (normalCard && asciiCard) {
        if (cardLeft < scannerRight && cardRight > scannerLeft) {
          anyScanningActive = true;
          const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
          const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);

          const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
          const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

          normalCard.style.clipPath = `inset(0 0 0 ${normalClipRight}%)`;
          asciiCard.style.clipPath = `inset(0 ${100 - asciiClipLeft}% 0 0)`;
        } else {
          if (cardRight < scannerLeft) {
            normalCard.style.clipPath = 'inset(0 0 0 100%)';
            asciiCard.style.clipPath = 'inset(0 0% 0 0)';
          } else {
            normalCard.style.clipPath = 'inset(0 0 0 0%)';
            asciiCard.style.clipPath = 'inset(0 100% 0 0)';
          }
        }
      }
    });

    if (scannerRef.current) {
      scannerRef.current.scanningActive = anyScanningActive;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !cardLineRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    positionRef.current = containerWidth;

    // Particle Scanner
    class ParticleScanner {
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      w: number;
      h: number;
      particles: any[];
      count: number;
      maxParticles: number;
      intensity: number;
      lightBarX: number;
      lightBarWidth: number;
      fadeZone: number;
      scanningActive: boolean;
      gradientCanvas: HTMLCanvasElement;
      animationId: number;

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.w = containerRef.current?.offsetWidth || 800;
        this.h = 200;
        this.particles = [];
        this.count = 0;
        this.maxParticles = 400;
        this.intensity = 0.8;
        this.lightBarX = this.w / 2;
        this.lightBarWidth = 3;
        this.fadeZone = 40;
        this.scanningActive = false;
        this.animationId = 0;

        this.gradientCanvas = document.createElement('canvas');
        this.setupCanvas();
        this.createGradientCache();
        this.initParticles();
      }

      setupCanvas() {
        this.canvas.width = this.w;
        this.canvas.height = this.h;
      }

      createGradientCache() {
        const ctx = this.gradientCanvas.getContext('2d')!;
        this.gradientCanvas.width = 16;
        this.gradientCanvas.height = 16;
        const half = 8;
        const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(147, 197, 253, 0.8)');
        gradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.4)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(half, half, half, 0, Math.PI * 2);
        ctx.fill();
      }

      createParticle() {
        return {
          x: this.lightBarX + (Math.random() - 0.5) * this.lightBarWidth,
          y: Math.random() * this.h,
          vx: Math.random() * 0.8 + 0.2,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 0.6 + 0.4,
          alpha: Math.random() * 0.4 + 0.6,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.005,
        };
      }

      initParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
          this.particles.push(this.createParticle());
        }
        this.count = this.maxParticles;
      }

      render() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        
        // Draw light bar
        this.ctx.globalCompositeOperation = 'lighter';
        const glowIntensity = this.scanningActive ? 2.5 : 1;
        
        const verticalGradient = this.ctx.createLinearGradient(0, 0, 0, this.h);
        verticalGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        verticalGradient.addColorStop(0.2, 'rgba(255, 255, 255, 1)');
        verticalGradient.addColorStop(0.8, 'rgba(255, 255, 255, 1)');
        verticalGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        // Core glow
        const coreGradient = this.ctx.createLinearGradient(
          this.lightBarX - 4, 0, this.lightBarX + 4, 0
        );
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${glowIntensity})`);
        coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        this.ctx.globalAlpha = 0.8;
        this.ctx.fillStyle = coreGradient;
        this.ctx.beginPath();
        this.ctx.roundRect(this.lightBarX - 4, 0, 8, this.h, 10);
        this.ctx.fill();

        // Outer glow - blue to match background
        const glowGradient = this.ctx.createLinearGradient(
          this.lightBarX - 16, 0, this.lightBarX + 16, 0
        );
        glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        glowGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.4 * glowIntensity})`);
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        this.ctx.globalAlpha = 0.6;
        this.ctx.fillStyle = glowGradient;
        this.ctx.beginPath();
        this.ctx.roundRect(this.lightBarX - 16, 0, 32, this.h, 20);
        this.ctx.fill();

        // Apply vertical fade mask
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = verticalGradient;
        this.ctx.fillRect(0, 0, this.w, this.h);

        // Draw particles
        this.ctx.globalCompositeOperation = 'lighter';
        for (const p of this.particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;

          if (p.x > this.w + 10 || p.life <= 0) {
            Object.assign(p, this.createParticle());
          }

          let fadeAlpha = 1;
          if (p.y < this.fadeZone) fadeAlpha = p.y / this.fadeZone;
          else if (p.y > this.h - this.fadeZone) fadeAlpha = (this.h - p.y) / this.fadeZone;

          this.ctx.globalAlpha = p.alpha * p.life * Math.max(0, fadeAlpha);
          this.ctx.drawImage(
            this.gradientCanvas,
            p.x - p.radius, p.y - p.radius,
            p.radius * 2, p.radius * 2
          );
        }

        // Add more particles when scanning
        if (this.scanningActive && Math.random() < 0.3 && this.count < 600) {
          this.particles.push(this.createParticle());
          this.count++;
        }
      }

      resize(width: number) {
        this.w = width;
        this.lightBarX = width / 2;
        this.setupCanvas();
      }
    }

    const scanner = new ParticleScanner(scannerCanvasRef.current!);
    scannerRef.current = scanner;

    // Animation loop
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (isAnimatingRef.current && cardLineRef.current && containerRef.current) {
        positionRef.current += velocityRef.current * directionRef.current * deltaTime;

        const cardWidth = 280;
        const cardGap = 40;
        const cardCount = 15;
        const cardLineWidth = (cardWidth + cardGap) * cardCount;
        const containerWidth = containerRef.current.offsetWidth;

        if (positionRef.current < -cardLineWidth) {
          positionRef.current = containerWidth;
        } else if (positionRef.current > containerWidth) {
          positionRef.current = -cardLineWidth;
        }

        cardLineRef.current.style.transform = `translateX(${positionRef.current}px)`;
        updateCardClipping();
      }

      scanner.render();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (containerRef.current) {
        scanner.resize(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCardClipping]);

  return (
    <section className="relative py-12 overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full h-[200px] flex items-center justify-center"
      >
        {/* Scanner Canvas */}
        <canvas
          ref={scannerCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Card Stream */}
        <div className="absolute w-full h-[160px] flex items-center overflow-visible">
          <div
            ref={cardLineRef}
            className="flex items-center gap-10 whitespace-nowrap will-change-transform"
            style={{ transform: 'translateX(0px)' }}
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className="card-wrapper-scanner relative w-[280px] h-[175px] flex-shrink-0">
                {/* Normal Card */}
                <div 
                  className="card-normal-scanner absolute inset-0 rounded-xl overflow-hidden shadow-xl z-[2]"
                  style={{ clipPath: 'inset(0 0 0 0%)' }}
                >
                  <img
                    src={cardImages[index % cardImages.length]}
                    alt="Credit Card"
                    className="w-full h-full object-cover brightness-110 contrast-110"
                  />
                </div>
                
                {/* ASCII Card */}
                <div 
                  className="card-ascii-scanner absolute inset-0 rounded-xl overflow-hidden z-[1]"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  <pre 
                    className="w-full h-full text-[9px] leading-[11px] text-blue-400/60 font-mono overflow-hidden whitespace-pre"
                    style={{
                      maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)',
                      WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)',
                    }}
                  >
                    {generateCode(50, 18)}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardScannerSection;
