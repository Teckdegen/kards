import { Parallax3DProvider } from '@/hooks/use-parallax-3d';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhereItWorksSection from '@/components/WhereItWorksSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeesSection from '@/components/FeesSection';
import CardScannerSection from '@/components/CardScannerSection';
import ReferralSection from '@/components/ReferralSection';
import Footer from '@/components/Footer';
import AppShowcaseSection from '@/components/AppShowcaseSection';
import NotificationsSection from '@/components/NotificationsSection';

const Index = () => {
  return (
    <Parallax3DProvider>
      <main className="relative min-h-screen overflow-hidden" style={{ perspective: '1500px', perspectiveOrigin: 'center center' }}>
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Content */}
        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <CardScannerSection />
          <AppShowcaseSection />
          <NotificationsSection />
          <WhereItWorksSection />
          <HowItWorksSection />
          <FeesSection />
          <Footer />
        </div>
      </main>
    </Parallax3DProvider>
  );
};

export default Index;
