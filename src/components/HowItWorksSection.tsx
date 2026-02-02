import { User, Wallet, ShoppingBag, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const steps = [
  {
    icon: User,
    number: '01',
    title: 'Enter Your Info',
    description: 'Just your First Name, Last Name, and Email. That\'s it. No ID, no documents, no verification.',
  },
  {
    icon: Wallet,
    number: '02',
    title: 'Top Up with Crypto',
    description: 'Send your favorite cryptocurrency to fund your card. Fast, secure, and private.',
  },
  {
    icon: ShoppingBag,
    number: '03',
    title: 'Start Spending',
    description: 'Use your card instantly. Online, in-store, ATMs—wherever Visa is accepted.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative section-padding">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="comic-text text-4xl md:text-5xl lg:text-6xl text-kards-cream mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-kards-cream/60 max-w-xl mx-auto text-lg leading-relaxed">
            Three simple steps. No waiting. No verification. Just freedom.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-kards-accent/50 to-transparent -translate-x-1/2 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-kards-accent/50" />
                  </div>
                )}

                <div className="group feature-card relative z-10 h-full transition-all duration-300 hover:border-kards-accent/30">
                  {/* Step number */}
                  <div className="font-display font-bold text-6xl text-kards-accent/20 absolute top-4 right-4 transition-all duration-300 group-hover:text-kards-accent/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 rounded-2xl bg-kards-accent/20 flex items-center justify-center transition-all duration-300 group-hover:bg-kards-accent/30">
                      <step.icon className="w-8 h-8 text-kards-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-kards-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-kards-cream/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;