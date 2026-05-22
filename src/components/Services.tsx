import React from 'react';

const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

function FindOutMore({ href }: { href: string }) {
  return (
    <a href={href} style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'var(--primary-green)', color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderRadius: '0.5rem', textDecoration: 'none' }}>
      Find Out More
    </a>
  );
}

function ContactButton({ dark }: { dark?: boolean }) {
  return (
    <a href={CONTACT_URL} style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.75rem', backgroundColor: dark ? '#0000FF' : 'var(--accent-yellow)', color: dark ? 'white' : 'var(--primary-green)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderRadius: '0.5rem', textDecoration: 'none' }}>
      Contact Us
    </a>
  );
}

interface CardProps {
  children: React.ReactNode;
  bg: string;
  text?: string;
}

function Card({ children, bg, text }: CardProps) {
  return (
    <div style={{ backgroundColor: bg, color: text || 'var(--text-dark)', padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between' }}>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <div style={{ background: '#0a0a0a', color: 'white', padding: '0.75rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', color: '#d8f3dc', margin: 0 }}>
          🛡️ Every bike we sell is <strong style={{ color: 'white' }}>UL Certified</strong> — battery, motor, and charger independently tested for safety. &nbsp;
          <a href="/sales.html" style={{ color: '#f4a261', textDecoration: 'none', fontWeight: 700 }}>Browse Our Bikes →</a>
        </p>
      </div>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }
          }
          @media (max-width: 480px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
        `}</style>

        <div className="services-grid">

          {/* REPAIRS */}
          <Card bg="var(--neutral-gray)">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'var(--primary-green)', marginBottom: '1rem' }}>Repair & Maintenance</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>Free diagnostic on every bike — any brand, any condition. Whether it's a flat tire, a brake issue, or a complex electrical problem, our technicians fix it right the first time. No guesswork. No surprises.</p>
            </div>
            <FindOutMore href="/repairs.html" />
          </Card>

          {/* EBIKE SALES */}
          <Card bg="var(--primary-blue)" text="white">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>Quality eBike Sales</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>Affordable eBikes starting at $350, fully assembled and ready to ride the day you buy. We carry only UL-certified brands we believe in — tested for safety, built for NOLA streets, backed by our local team.</p>
            </div>
            <FindOutMore href="/sales.html" />
          </Card>

          {/* ASSEMBLY */}
          <Card bg="var(--neutral-gray)">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'var(--primary-green)', marginBottom: '1rem' }}>Professional Assembly</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>Bought your bike online? Don't wrestle with a box. Bring it in and we'll assemble it professionally, apply our No-Flat tire sealant, and have it tuned and ready to ride — flat rate $135.</p>
            </div>
            <FindOutMore href="/assembly.html" />
          </Card>

          {/* NOLA INCENTIVE */}
          <Card bg="var(--primary-green)" text="white">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>NOLA eBike Incentive</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>The City of New Orleans is launching an eBike incentive program that could put up to $1,200 toward your purchase. Let us know you're interested, and we'll inform you immediately about how to apply.</p>
            </div>
            <ContactButton dark />
          </Card>

          {/* UL CERTIFIED */}
          <Card bg="#0a0a0a" text="white">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#f4a261', marginBottom: '1rem' }}>UL Certified Safety</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#d1d5db' }}>Every bike we sell carries UL Certification — the gold standard of electrical safety. Battery, motor, charger, and electrical system independently tested to prevent overheating and fire hazards. Plug it in with absolute peace of mind.</p>
            </div>
            <FindOutMore href="/sales.html" />
          </Card>

          {/* TEST RIDE */}
          <Card bg="var(--accent-yellow)">
            <div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>Test Ride Available</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>Not sure which eBike is right for you? Come try before you buy. We're right on the Lafitte Greenway — the perfect place to test ride. No pressure, no commitment. Just you and the open trail.</p>
            </div>
            <ContactButton />
          </Card>

        </div>
      </section>
    </>
  );
}
