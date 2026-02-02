import { ScrollReveal } from '@/hooks/use-scroll-animation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kards-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-kards-muted/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 border border-kards-cream/10">
              <span className="w-2 h-2 bg-kards-accent rounded-full animate-pulse" />
              <span className="text-sm text-kards-cream/80 font-medium">Non-KYC • No Verification Required</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal delay={100}>
            <div className="mb-6">
              <h1 className="comic-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-kards-cream tracking-tight">
                VIRTUAL POWER,
              </h1>
              <h1 className="comic-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-kards-cream tracking-tight">
                REAL FREEDOM.
              </h1>
            </div>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={200}>
            <div className="relative max-w-2xl mx-auto mb-10">
              <p className="text-xl md:text-2xl text-kards-cream/80 leading-relaxed">
                Crypto debit cards with $100K monthly limits.
                <br className="hidden md:block" />
                <span className="text-kards-accent font-semibold">No ID. No trace.</span> Just freedom.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;