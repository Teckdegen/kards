import { Link } from 'react-router-dom';
import kardsLogoNoBg from '@/assets/kards-logo-nobg.png';
import { ScrollReveal } from '@/hooks/use-scroll-animation';

const Footer = () => {
  return (
    <div className="relative section-padding pt-12 pb-8">
      <footer className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer */}
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <Link to="/" className="flex items-center mb-4 group transition-transform hover:scale-105">
                  <span className="font-display font-bold text-2xl text-kards-cream flex items-center">
                    <img src={kardsLogoNoBg} alt="K" className="h-8 w-auto -mr-1" />
                    ARDS
                  </span>
                </Link>
                <p className="text-kards-cream/60 text-sm mb-6">
                  Spend Without Being Seen. Privacy-focused crypto debit cards
                  for the modern age.
                </p>
                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://x.com/kardsdotcards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-kards-cream/10 flex items-center justify-center hover:bg-kards-accent/30 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-kards-cream/70 group-hover:text-kards-cream" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/kardsdotcards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-kards-cream/10 flex items-center justify-center hover:bg-kards-accent/30 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-kards-cream/70 group-hover:text-kards-cream" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-kards-cream font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#features" className="text-kards-cream/60 hover:text-kards-cream transition-colors text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-kards-cream/60 hover:text-kards-cream transition-colors text-sm">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#fees" className="text-kards-cream/60 hover:text-kards-cream transition-colors text-sm">
                      Fees
                    </a>
                  </li>
                  <li>
                    <Link to="/chains" className="text-kards-cream/60 hover:text-kards-cream transition-colors text-sm">
                      Chains
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-kards-cream font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li className="text-kards-cream/60 text-sm">
                    X: <a href="https://x.com/kardsdotcards" target="_blank" rel="noopener noreferrer" className="text-kards-cream hover:text-kards-accent transition-colors">@kardsdotcards</a>
                  </li>
                  <li className="text-kards-cream/60 text-sm">
                    Telegram: <a href="https://t.me/kardsdotcards" target="_blank" rel="noopener noreferrer" className="text-kards-cream hover:text-kards-accent transition-colors">@kardsdotcards</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="text-center text-kards-cream/40 text-sm">
          <p>© {new Date().getFullYear()} Kards. All rights reserved.</p>
          <p className="mt-1">Spend Without Being Seen.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;