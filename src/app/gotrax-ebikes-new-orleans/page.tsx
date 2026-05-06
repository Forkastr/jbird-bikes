import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GotraxBikes from './GotraxBikes';

export const metadata: Metadata = {
  title: 'Gotrax eBikes New Orleans | Authorized Dealer — JBird Bikes',
  description: 'Buy Gotrax eBikes fully assembled in New Orleans. Authorized dealer on the Lafitte Greenway. Test ride today. Professional 21-point assembly included.',
  keywords: [
    'Gotrax eBike New Orleans',
    'Gotrax dealer New Orleans',
    'Gotrax eBike NOLA',
    'buy Gotrax eBike assembled New Orleans',
    'Gotrax authorized dealer Louisiana',
    'Gotrax bike shop Lafitte Greenway',
  ],
  openGraph: {
    title: 'Gotrax eBikes New Orleans | JBird Bikes — Authorized Dealer',
    description: 'Come test-ride a Gotrax eBike on the Lafitte Greenway. Every bike comes with our JBird Special Assembly — 21-point safety check, No-Flat treatment, 60-day tune-up.',
    url: 'https://jbirdbikes.com/gotrax-ebikes-new-orleans',
    images: [{ url: '/hero-bike.jpg', width: 1200, height: 630 }],
  },
};

export default function GotraxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Gotrax eBikes at JBird Bikes New Orleans',
            description: 'Authorized Gotrax eBike dealer in New Orleans. Professional assembly included.',
            url: 'https://jbirdbikes.com/gotrax-ebikes-new-orleans',
          }),
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `

        .brand-hero { background: #0a0a0a; color: white; padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .brand-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, #2d6a4f33 0%, transparent 70%); }
        .brand-hero-inner { position: relative; max-width: 760px; margin: 0 auto; }
        .brand-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4a261; margin-bottom: 0.8rem; }
        .brand-hero h1 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1; color: white; margin-bottom: 1rem; letter-spacing: 2px; }
        .brand-hero h1 span { color: #f4a261; display: block; }
        .brand-hero p { font-size: 1rem; line-height: 1.75; color: #d1d5db; max-width: 580px; margin: 0 auto 2rem; }
        .brand-badges { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .brand-badge { display: flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #d8f3dc; }
        .brand-badge::before { content: '✓'; color: #f4a261; font-weight: 900; }

        .brand-about { max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
        .brand-about-text h2 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; letter-spacing: 2px; color: #0a0a0a; margin-bottom: 1rem; }
        .brand-about-text p { font-size: 0.95rem; line-height: 1.8; color: #374151; margin-bottom: 1rem; }
        .brand-stat-box { background: #f0fdf4; border: 2px solid #2d6a4f; border-radius: 14px; padding: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .brand-stat { text-align: center; }
        .brand-stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; color: #2d6a4f; line-height: 1; }
        .brand-stat-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-top: 0.2rem; }

        .jbird-special { background: #0a0a0a; color: white; padding: 3rem 2rem; }
        .jbird-special-title { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; letter-spacing: 2px; text-align: center; margin-bottom: 2rem; color: white; }
        .jbird-special-inner { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }
        .special-card { background: #1a1a1a; border: 1px solid #2d2d2d; border-radius: 12px; padding: 1.5rem; text-align: center; }
        .special-num { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: #f4a261; line-height: 1; margin-bottom: 0.5rem; }
        .special-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #9ca3af; margin-bottom: 0.5rem; }
        .special-desc { font-size: 0.85rem; line-height: 1.6; color: #d1d5db; }

        .bikes-section { max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem; }
        .bikes-section h2 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; letter-spacing: 2px; color: #0a0a0a; margin-bottom: 0.5rem; }
        .bikes-section-sub { font-size: 0.85rem; color: #6b7280; margin-bottom: 2rem; }

        .brand-cta { background: #2d6a4f; color: white; text-align: center; padding: 3rem 2rem; }
        .brand-cta h2 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; letter-spacing: 2px; margin-bottom: 0.5rem; }
        .brand-cta p { color: #d8f3dc; font-size: 0.95rem; margin-bottom: 1.5rem; }
        .btn-cta { display: inline-block; background: #f4a261; color: #0a0a0a; padding: 0.8rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; margin: 0 0.5rem 0.5rem; }
        .btn-cta-outline { display: inline-block; background: transparent; border: 2px solid white; color: white; padding: 0.8rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; margin: 0 0.5rem 0.5rem; }

        @media (max-width: 680px) {
          .brand-about { grid-template-columns: 1fr; }
          .jbird-special-inner { grid-template-columns: 1fr; }
        }
      ` }} />

      <Header />

      <div className="brand-hero">
        <div className="brand-hero-inner">
          <div className="brand-eyebrow">Authorized Dealer · New Orleans</div>
          <h1>Gotrax eBikes <span>In New Orleans</span></h1>
          <p>Come test-ride a Gotrax eBike on the Lafitte Greenway. Every bike comes fully assembled with our JBird Special — a professional 21-point safety inspection, No-Flat tire treatment, and a 60-day shakeout tune-up. Built for NOLA streets. Built to last.</p>
          <div className="brand-badges">
            <div className="brand-badge">Authorized Dealer</div>
            <div className="brand-badge">Test Rides Available</div>
            <div className="brand-badge">Professional Assembly</div>
            <div className="brand-badge">2-Year Warranty</div>
          </div>
        </div>
      </div>

      <div className="brand-about">
        <div className="brand-about-text">
          <h2>About Gotrax</h2>
          <p>Gotrax is a Texas-based manufacturer that has put over a million riders on the road since 2017. Known for reliable, affordable electric bikes with a 2-year warranty, they offer a wide range of models from folding commuters to fat-tire all-terrain bikes.</p>
          <p>With over 15,000 independent reviews and a presence in major retailers nationwide, Gotrax is one of the most trusted names in affordable eBikes. At JBird Bikes, we carry their best models — fully assembled and ready for NOLA streets.</p>
        </div>
        <div className="brand-stat-box">
          <div className="brand-stat"><div className="brand-stat-num">1M+</div><div className="brand-stat-label">Riders Worldwide</div></div>
          <div className="brand-stat"><div className="brand-stat-num">15K+</div><div className="brand-stat-label">Independent Reviews</div></div>
          <div className="brand-stat"><div className="brand-stat-num">2yr</div><div className="brand-stat-label">Warranty</div></div>
          <div className="brand-stat"><div className="brand-stat-num">2017</div><div className="brand-stat-label">Founded</div></div>
        </div>
      </div>

      <div className="jbird-special">
        <div className="jbird-special-title">The JBird Special</div>
        <div className="jbird-special-inner">
          <div className="special-card">
            <div className="special-num">21</div>
            <div className="special-title">Point Safety Check</div>
            <div className="special-desc">Every bike is professionally assembled and inspected before you ride. Brakes, gears, electricals — all verified.</div>
          </div>
          <div className="special-card">
            <div className="special-num">No</div>
            <div className="special-title">Flat Tire Treatment</div>
            <div className="special-desc">We apply our proprietary No-Flat sealant to every tire. NOLA streets are tough — your tires won't be a problem.</div>
          </div>
          <div className="special-card">
            <div className="special-num">60</div>
            <div className="special-title">Day Shakeout Tune-Up</div>
            <div className="special-desc">Cables stretch. Spokes settle. Come back within 60 days and we'll re-tune everything for free.</div>
          </div>
        </div>
      </div>

      <div className="bikes-section">
        <h2>Our Gotrax eBikes</h2>
        <p className="bikes-section-sub">All models fully assembled with the JBird Special. Stop by and test ride one today.</p>
        <GotraxBikes />
      </div>

      <div className="brand-cta">
        <h2>Ready to Test Ride?</h2>
        <p>Visit us on the Lafitte Greenway. We're here to help you find the right Gotrax eBike for NOLA.</p>
        <a className="btn-cta" href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform" target="_blank">Contact Us</a>
        <a className="btn-cta-outline" href="/sales.html">Browse All Bikes</a>
      </div>

      <Footer />
    </>
  );
}
