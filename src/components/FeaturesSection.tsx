import { ScrollReveal } from '@/hooks/use-scroll-animation';

const features = [
  {
    id: 'virtual-card',
    title: 'Virtual Card',
    description: 'Instant issue, use anywhere online immediately after setup.',
  },
  {
    id: 'physical-cards',
    title: 'Physical Cards',
    description: 'Coming in Q3 2026! Pre-order yours soon.',
  },
  {
    id: 'atm-withdrawals',
    title: 'ATM Withdrawals',
    description: 'Withdraw cash anywhere worldwide. Virtual cards, real access.',
  },
  {
    id: 'online-payments',
    title: 'Online Payments',
    description: 'Works at 50M+ merchants worldwide. Use anywhere Visa is accepted.',
  },
  {
    id: 'complete-privacy',
    title: 'Complete Privacy',
    description: 'No identity verification. No documents. No ID. No trace.',
  },
  {
    id: 'monthly-limit',
    title: '$100K Monthly',
    description: 'Industry-leading spending limits for serious users.',
  },
  {
    id: 'stablecoin',
    title: 'Stable-Focused',
    description: 'Top up with USDT or USDC. Built for stability and speed.',
  },
  {
    id: 'referral',
    title: 'Referral Rewards',
    description: 'Earn 0.5 USD for each card created with your referral code.',
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative pt-24 pb-24 md:pb-32 px-4 md:px-8 bg-black">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter uppercase">
            POWER FEATURES
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto mb-6" />
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed font-light">
            Engineered for privacy. Built for global scale.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 50}>
              <div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-kards-accent transition-colors duration-300 font-mono tracking-tight uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300 font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Minimalist Accents */}
                <div className="mt-8">
                  <div className="w-6 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-white/20 transition-all duration-700" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={400}>
          <p className="text-center text-white/10 text-[10px] mt-16 font-mono uppercase tracking-[0.3em]">
            Restricted: Airlines, Betting, Adult Content
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;