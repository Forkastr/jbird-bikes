import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TestRideBanner from '@/components/TestRideBanner';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <TestRideBanner />
      <MapSection />
      <Footer />
    </main>
  );
}
