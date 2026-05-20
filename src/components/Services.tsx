import React from 'react';

const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

function ContactButton({ dark }: { dark?: boolean }) {
  return (
    <a href={CONTACT_URL} style={{ display: 'inline-block', marginTop: '1rem', padding: '0.875rem 2rem', backgroundColor: dark ? '#0000FF' : 'var(--accent-yellow)', color: dark ? 'white' : 'var(--primary-green)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.125rem', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderRadius: '0.5rem' }}>
      Contact Us
    </a>
  );
}

function FindOutMore({ href, dark }: { href: string; dark?: boolean }) {
  return (
    <a href={href} style={{ display: 'inline-block', marginTop: '1rem', padding: '0.875rem 2rem', backgroundColor: dark ? 'white' : 'var(--primary-green)', color: dark ? 'var(--primary-green)' : 'white', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.125rem', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderRadius: '0.5rem' }}>
      Find Out More
    </a>
  );
}

function Card({ children, bg, text }: { children: React.ReactNode; bg: string; text?: string }) {
  return (
    <div style={{ backgroundColor: bg, color: text || 'var(--text-dark)', padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between' }}>
      {children}
    </div>
  );
}

export default function Services() {
  return (
  <div style={{ background: '#0a0a0a', color: 'white', padding: '0.75rem 2rem', textAlign: 'center' }}>
      <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', color: '#d8f3dc' }}>
        🛡️ Every bike we sell is <strong style={{ color: 'white' }}>UL Certified</strong> — battery, motor, and charger independently tested for safety. &nbsp;
        <a href="/sales.html" style={{ color: '#f4a261', textDecoration: 'none', fontWeight: 700 }}>Browse Our Bikes →</a>
      </p>
    </div>
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2rem' }}>
        
        <Card bg="var(--neutral-gray)">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--primary-green)', marginBottom: '1rem' }}>Repair & Maintenance for All Bikes</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>Whether it's a vintage cruiser or a stubborn eBike with issues, our expert technicians provide surgical-level precision to keep you rolling.</p>
            <p style={{ fontWeight: 700, fontStyle: 'italic', marginBottom: '1rem' }}>Free Diagnostic</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, marginTop: '1.5rem' }}>
            <FindOutMore href="/repairs.html" />
            <ContactButton />
          </div>
        </Card>

        <Card bg="var(--primary-blue)" text="white">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Quality eBikes Sales<br />Affordable Prices</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>Engineered for NOLA streets. Durable, stylish, and powerful. Affordable quality without the compromise.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, marginTop: '1.5rem' }}>
            <FindOutMore href="/sales.html" dark />
            <ContactButton dark />
          </div>
        </Card>

        <Card bg="var(--neutral-gray)">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--primary-green)', marginBottom: '1rem' }}>Buy Online<br />We Build It</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>Don't struggle with a box in your living room. Order online and pick it up professionally assembled and safety-checked.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, marginTop: '1.5rem' }}>
            <FindOutMore href="/assembly.html" />
            <ContactButton />
          </div>
        </Card>

        <Card bg="var(--primary-green)" text="white">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>NOLA eBike Incentive</h2>
            <p style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, marginBottom: '1rem' }}>Get up to $1,200 to buy an eBike</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, marginTop: '1.5rem' }}>
            <FindOutMore href="/nola-incentive.html" dark />
            <ContactButton dark />
          </div>
        </Card>

      </div>
    </section>
  );
}
