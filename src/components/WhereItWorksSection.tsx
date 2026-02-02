import { Check, X } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const WhereItWorksSection = () => {
  return (
    <section className="relative section-padding">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="comic-text text-4xl md:text-5xl lg:text-6xl text-kards-cream mb-4">
            WHERE IT WORKS
          </h2>
          <p className="text-kards-cream/60 max-w-xl mx-auto text-lg leading-relaxed">
            Everywhere Visa is accepted.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Works Everywhere */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-kards-cream/15 flex items-center justify-center">
                  <Check className="w-6 h-6 text-kards-cream" />
                </div>
                <h3 className="text-2xl font-bold text-kards-cream">Works At</h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Online Shopping (Amazon, eBay, etc.)',
                  'Retail Stores',
                  'Restaurants & Cafes',
                  'Gas Stations',
                  'Subscriptions (Netflix, Spotify, etc.)',
                  'Hotels & Travel',
                  'ATM Withdrawals',
                  'Apple/Google App Stores',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-kards-cream/80">
                    <Check className="w-5 h-5 text-kards-cream/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Restrictions */}
          <ScrollReveal delay={200}>
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-kards-cream/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-kards-cream/50" />
                </div>
                <h3 className="text-2xl font-bold text-kards-cream">Restrictions</h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Airlines & Flight Booking',
                  'Betting & Gambling Sites',
                  'Adult/Porn Sites',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-kards-cream/50">
                    <X className="w-5 h-5 text-kards-cream/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-kards-cream/10">
                <p className="text-kards-cream/50 text-sm">
                  These restrictions are in place to comply with card network policies. 
                  All other Visa-accepting merchants worldwide are supported.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhereItWorksSection;