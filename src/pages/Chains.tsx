
import { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import radixLogo from '@/assets/radix-logo.jpg';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import Navbar from '@/components/Navbar';

const Chains = () => {
    const [isLaunchTime, setIsLaunchTime] = useState(false);
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        // Target time: 5 PM today (+01:00)
        const targetDate = new Date('2026-02-04T17:00:00+01:00');

        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                setIsLaunchTime(true);
                setCountdown("");
                return true;
            }

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Format: HH:MM:SS or MM:SS if hours is 0
            const hDisplay = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : "";
            const mDisplay = minutes.toString().padStart(2, '0');
            const sDisplay = seconds.toString().padStart(2, '0');

            setCountdown(`${hDisplay}${mDisplay}:${sDisplay}`);
            return false;
        };

        // Initial check
        if (updateCountdown()) return;

        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    const chains = [
        {
            id: 'radix',
            name: 'Radix',
            logo: radixLogo,
            description: 'The Full Stack for DeFi.',
            url: isLaunchTime ? 'https://radix.kards.cards/' : '#',
            available: true
        },
        // Future chains can be added here
    ];

    return (
        <div className="min-h-screen bg-kards-dark text-white selection:bg-kards-accent/30">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center tracking-tight">
                            Supported Chains
                        </h1>
                        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
                            Select a blockchain network to access your specific dashboard.
                        </p>
                    </ScrollReveal>

                    <div className="flex justify-center">
                        {chains.map((chain) => (
                            <ScrollReveal key={chain.id} delay={100} className="w-full max-w-sm">
                                <div className="glass-card p-10 rounded-[2.5rem] group border border-white/5 hover:border-white/10 transition-all duration-500 bg-white/[0.02]">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-8">
                                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-kards-accent/20 transition-all duration-500 shadow-2xl">
                                                <img
                                                    src={chain.logo}
                                                    alt={chain.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            {!isLaunchTime && chain.id === 'radix' && (
                                                <div className="absolute -bottom-2 right-0 bg-kards-accent text-kards-dark p-2 rounded-full shadow-lg animate-pulse">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{chain.name}</h3>
                                        <p className="text-white/40 mb-10 font-light leading-relaxed">{chain.description}</p>

                                        <a
                                            href={chain.id === 'radix' && !isLaunchTime ? '#' : chain.url}
                                            target={chain.id === 'radix' && !isLaunchTime ? '_self' : "_blank"}
                                            rel="noopener noreferrer"
                                            onClick={(e) => {
                                                if (chain.id === 'radix' && !isLaunchTime) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            className={`w-full py-5 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 text-lg ${chain.id === 'radix' && !isLaunchTime
                                                    ? 'bg-white/5 text-white/40 cursor-not-allowed border border-white/5'
                                                    : 'bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95'
                                                }`}
                                        >
                                            {chain.id === 'radix' && !isLaunchTime ? (
                                                <span className="flex items-center gap-2 tabular-nums">
                                                    LAUNCHING IN {countdown}
                                                </span>
                                            ) : (
                                                <>
                                                    Get In
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </a>
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
