import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import appInbox from '@/assets/app-inbox.png';

const NotificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startTrigger = windowHeight * 0.8;
      const endTrigger = -rect.height * 0.3;
      
      if (rect.top <= startTrigger && rect.top >= endTrigger) {
        const totalDistance = startTrigger - endTrigger;
        const currentPosition = startTrigger - rect.top;
        const progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneScale = 0.8 + scrollProgress * 0.2;
  const phoneOpacity = 0.5 + scrollProgress * 0.5;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <ScrollReveal className="flex-1 text-center md:text-left">
            <h2 className="comic-text text-3xl md:text-4xl lg:text-5xl text-kards-cream mb-4">
              INSTANT NOTIFICATIONS
            </h2>
            <p className="text-kards-cream/60 text-lg max-w-md">
              Stay informed with real-time alerts. Get notified for every transaction, top-up confirmation, and security update.
            </p>
          </ScrollReveal>

          {/* Phone mockup */}
          <div 
            className="flex-shrink-0 w-48 md:w-64"
            style={{
              transform: `scale(${phoneScale})`,
              opacity: phoneOpacity,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={appInbox} 
                alt="Kards App Notifications" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;