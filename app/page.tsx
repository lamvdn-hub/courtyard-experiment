import { StickyNav } from '@/components/sticky-nav';
import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { CourtsShowcase } from '@/components/courts-showcase';
import { PrimaryCTA } from '@/components/primary-cta';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';

export default function Home() {
  return (
    <main className="relative">
      <StickyNav />
      <HeroSection />
      <HowItWorks />
      <CourtsShowcase />
      <PrimaryCTA />
      <FAQSection />
      <Footer />
      <MobileBottomCTA />
    </main>
  );
}
