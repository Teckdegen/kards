import { Check, Info } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const FeesSection = () => {
  return (
    <section id="fees" className="relative section-padding">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="comic-text text-4xl md:text-5xl lg:text-6xl text-kards-cream mb-4">
            SIMPLE FEES
          </h2>
          <p className="text-kards-cream/60 max-w-xl mx-auto text-lg leading-relaxed">
            One fee. No surprises. No hidden charges.
          </p>
        </ScrollReveal>

        {/* Main Fee Cards */}
        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* $2 Flat Fee Card */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-kards-accent/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-kards-accent font-medium">$15 - $200</span>
              </div>

              <div className="text-6xl md:text-7xl font-bold text-kards-cream mb-4">
                $2
              </div>

              <p className="text-kards-cream/70 text-lg">
                Flat fee on top-ups
              </p>
            </div>

            {/* 3% Fee Card */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-kards-accent/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-kards-accent font-medium">$200+</span>
              </div>

              <div className="text-6xl md:text-7xl font-bold text-kards-cream mb-4">
                3%
              </div>

              <p className="text-kards-cream/70 text-lg">
                On larger top-ups
              </p>
            </div>
          </div>

          {/* What's included */}
          <div className="glass-card rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                'Unlimited transactions',
                'No monthly fees',
                'No annual fees',
                'No inactivity fees',
                'Variable FX Fees',
                '$10 Card Creation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-kards-cream/80">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Info Note */}
        <ScrollReveal delay={200}>
          <div className="flex items-start gap-3 glass-card rounded-2xl p-4">
            <Info className="w-5 h-5 text-kards-accent flex-shrink-0 mt-0.5" />
            <p className="text-kards-cream/60 text-sm">
              $2 flat fee on top-ups from $15 - $200. 3% fee on top-ups over $200.
              There are no additional fees when you make purchases or withdraw from ATMs.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeesSection;