import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <Hero />
      <Services />
      <MapSection />
      <Footer />
    </>
  );
}
