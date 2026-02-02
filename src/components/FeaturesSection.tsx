import { ScrollReveal } from '@/hooks/use-scroll-animation';
import { CreditCard, Shield, Globe, Zap, DollarSign, Users, Smartphone, Landmark } from 'lucide-react';

const features = [
  {
    id: 'virtual-card',
    title: 'Virtual Card',
    description: 'Instant issue, use anywhere online immediately after setup.',
    icon: CreditCard
  },
  {
    id: 'physical-cards',
    title: 'Physical Cards',
    description: 'Coming in Q3 2026! Pre-order yours soon.',
    icon: Landmark
  },
  {
    id: 'atm-withdrawals',
    title: 'ATM Withdrawals',
    description: 'Withdraw cash anywhere worldwide. Virtual cards, real access.',
    icon: Smartphone
  },
  {
    id: 'online-payments',
    title: 'Online Payments',
    description: 'Works at 50M+ merchants worldwide. Use anywhere Visa is accepted.',
    icon: Globe
  },
  {
    id: 'complete-privacy',
    title: 'Complete Privacy',
    description: 'No identity verification. No documents. No ID. No trace.',
    icon: Shield
  },
  {
    id: 'monthly-limit',
    title: '$100K Monthly',
    description: 'Industry-leading spending limits for serious users.',
    icon: DollarSign
  },
  {
    id: 'stablecoin',
    title: 'Stable-Focused',
    description: 'Top up with USDT or USDC. Built for stability and speed.',
    icon: Zap
  },
  {
    id: 'referral',
    title: 'Referral Rewards',
    description: 'Earn 0.5 USD for each card created with your referral code.',
    icon: Users
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative pt-20 pb-20 md:pb-32 px-4 md:px-8">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="comic-text text-4xl md:text-6xl text-kards-cream mb-4">
            POWER FEATURES
          </h2>
          <p className="text-kards-cream/50 max-w-xl mx-auto text-lg leading-relaxed">
            Everything you need. Nothing you don't.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 50}>
              <div className="group relative bg-kards-cream/[0.02] border border-kards-cream/10 p-8 rounded-3xl transition-all duration-300 hover:bg-kards-cream/[0.05] hover:border-kards-accent/30 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-kards-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-kards-accent/20">
                    <feature.icon className="w-6 h-6 text-kards-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-kards-cream mb-2 group-hover:text-kards-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-kards-cream/50 text-sm leading-relaxed group-hover:text-kards-cream/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={400}>
          <p className="text-center text-kards-cream/30 text-sm mt-12">
            Restricted merchants: Airlines, betting & adult sites
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;