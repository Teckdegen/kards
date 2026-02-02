import { Gift } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const ReferralSection = () => {
  return (
    <section className="relative section-padding">
      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 bg-kards-accent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-kards-accent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-kards-accent/20 flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-kards-accent" />
              </div>

              <h2 className="comic-text text-3xl md:text-4xl lg:text-5xl text-kards-cream mb-4">
                REFERRAL PROGRAM
              </h2>

              <p className="text-kards-cream/70 text-lg max-w-lg mx-auto">
                Earn <span className="text-kards-accent font-semibold">0.5 USDC</span> for every card created through your referral. 
                Share Kards with friends and get rewarded for growing our community.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReferralSection;