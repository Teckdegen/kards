import { ScrollReveal } from '@/hooks/use-scroll-animation';

const features = [
  {
    id: 'non-kyc',
    title: 'Non-KYC',
    description: 'No identity verification. No documents. Complete privacy.',
  },
  {
    id: 'monthly-limit',
    title: '$100K Monthly',
    description: 'Industry-leading spending limits for serious users.',
  },
  {
    id: 'transaction-limit',
    title: '$2.5K Per Transaction',
    description: 'High single-transaction limits for your needs.',
  },
  {
    id: 'atm',
    title: 'ATM Support',
    description: 'Withdraw cash anywhere. Virtual cards, real access.',
  },
  {
    id: 'secure',
    title: 'Secure Payments',
    description: 'Top-tier security for all your transactions.',
  },
  {
    id: 'stablecoin',
    title: 'Stable-Focused',
    description: 'Top up with stablecoins. Built for stability.',
  },
  {
    id: 'global',
    title: '50M+ Merchant Acceptance',
    description: 'Works at 50 million plus merchants worldwide.',
  },
  {
    id: 'referral',
    title: 'Referral Rewards',
    description: 'Earn 0.5 USDC for every card created through your referral. Share Kards and get rewarded.',
  },
  {
    id: 'instant',
    title: 'Instant Cards',
    description: 'Get your card in minutes. Start spending immediately.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative pt-8 md:pt-12 pb-20 md:pb-32 px-4 md:px-8">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="comic-text text-4xl md:text-5xl lg:text-6xl text-kards-cream mb-4">
            POWER FEATURES
          </h2>
          <p className="text-kards-cream/50 max-w-xl mx-auto text-lg">
            Everything you need. Nothing you don't.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-kards-cream/10 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 50}>
              <div className="group relative bg-background p-8 md:p-10 transition-all duration-300 hover:bg-kards-cream/[0.03]">
                {/* Subtle hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, hsl(42 33% 92% / 0.03) 0%, transparent 70%)',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Number indicator */}
                  <span className="text-kards-cream/20 text-sm font-mono mb-4 block group-hover:text-kards-cream/30 transition-colors duration-300">
                    0{index + 1}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-kards-cream mb-2 group-hover:text-kards-cream transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-kards-cream/50 text-sm md:text-base leading-relaxed group-hover:text-kards-cream/60 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={400}>
          <p className="text-center text-kards-cream/30 text-sm mt-8">
            Restricted merchants: Airlines, betting & adult sites
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;