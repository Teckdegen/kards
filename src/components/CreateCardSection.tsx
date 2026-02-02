import { MessageCircle, ArrowRight, Check, Zap } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const CreateCardSection = () => {
  return (
    <section id="create" className="relative section-padding">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <div>
              <h2 className="comic-text text-4xl md:text-5xl text-kards-cream mb-6">
                GET YOUR CARD NOW
              </h2>

              <p className="text-kards-cream/70 text-lg mb-8">
                No ID required. No verification. Just reach out on Telegram 
                and start spending crypto in minutes.
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {[
                  'Instant virtual card',
                  '$100,000 monthly limit',
                  'ATM withdrawals supported',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-kards-cream/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal delay={150}>
            <div className="glass-card rounded-3xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-kards-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-kards-accent" />
                </div>

                <h3 className="comic-text text-2xl text-kards-cream mb-4">
                  HOW TO CREATE YOUR CARD
                </h3>

                <p className="text-kards-cream/60 mb-8">
                  Creating your Kards crypto debit card is simple! Just message us on Telegram with:
                </p>

                {/* Steps */}
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-kards-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-kards-accent font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-kards-cream font-medium">Your First Name</p>
                      <p className="text-kards-cream/50 text-sm">As you'd like it on your card</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-kards-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-kards-accent font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-kards-cream font-medium">Your Last Name</p>
                      <p className="text-kards-cream/50 text-sm">For card identification</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-kards-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-kards-accent font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-kards-cream font-medium">Your Email</p>
                      <p className="text-kards-cream/50 text-sm">To receive your card details</p>
                    </div>
                  </div>
                </div>

                {/* Telegram CTA */}
                <a
                  href="https://t.me/kardsdotcards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message Us on Telegram
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-kards-cream/40 text-xs text-center mt-4">
                  We'll set up your card and get you spending in minutes!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CreateCardSection;