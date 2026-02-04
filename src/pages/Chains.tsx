
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import radixLogo from '@/assets/radix-logo.jpg';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import Navbar from '@/components/Navbar';

const Chains = () => {
    const navigate = useNavigate();

    const chains = [
        {
            id: 'radix',
            name: 'Radix',
            logo: radixLogo,
            description: 'The Smart Money Protocol',
            available: true
        },
        // Future chains can be added here
    ];

    return (
        <div className="min-h-screen bg-kards-dark">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                            Supported Chains
                        </h1>
                        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16 text-lg">
                            Select a blockchain network to access your specific dashboard.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {chains.map((chain) => (
                            <ScrollReveal key={chain.id} delay={100}>
                                <div className="glass-card p-8 rounded-3xl group hover:bg-white/[0.05] transition-all duration-300">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover:border-kards-accent/50 transition-colors">
                                            <img
                                                src={chain.logo}
                                                alt={chain.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">{chain.name}</h3>
                                        <p className="text-white/40 mb-8">{chain.description}</p>

                                        <button
                                            onClick={() => navigate(`/chains/${chain.id}`)}
                                            className="w-full py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-kards-accent group-hover:text-black"
                                        >
                                            Get In
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Chains;
