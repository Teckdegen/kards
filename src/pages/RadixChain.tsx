
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/hooks/use-scroll-animation';
import Navbar from '@/components/Navbar';
import appTransactions from '@/assets/app-transactions.png';
import appInbox from '@/assets/app-inbox.png';

const RadixChain = () => {
    return (
        <div className="min-h-screen bg-kards-dark">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-kards-accent/10 border border-kards-accent/20 text-kards-accent text-sm font-mono mb-6">
                                PREVIEW MODE
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Radix Preview
                            </h1>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Experience the power of KARDS on the Radix network.
                                Secure, fast, and built for DeFi.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* App Preview Section */}
                    <div className="relative mb-24">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Image 1 */}
                            <ScrollReveal delay={100} className="relative z-10">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                        <p className="text-white font-medium">Real-time Transactions</p>
                                    </div>
                                    <img
                                        src={appTransactions}
                                        alt="Radix Transactions Interface"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Image 2 */}
                            <ScrollReveal delay={200} className="relative z-10 md:mt-16">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                        <p className="text-white font-medium">Secure Inbox</p>
                                    </div>
                                    <img
                                        src={appInbox}
                                        alt="Radix Inbox Interface"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-kards-accent/5 blur-[100px] -z-10 rounded-full" />
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal delay={300}>
                        <div className="glass-card p-12 rounded-3xl text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ready to dive in?
                            </h2>
                            <p className="text-white/60 mb-8 max-w-lg mx-auto">
                                Visit the official Radix Kards site to connect your wallet and start using your card today.
                            </p>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-kards-accent text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-kards-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                            >
                                Visit Radix Kards Site
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </div>
    );
};

export default RadixChain;
