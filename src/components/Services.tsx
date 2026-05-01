import React from 'react';
const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

function ContactButton({ dark }: { dark?: boolean }) {
  return (
    
      href={CONTACT_URL}
      style={{
        display: 'inline-block',
        marginTop: '2rem',
        padding: '0.875rem 2rem',
        backgroundColor: dark ? '#0000FF' : 'var(--accent-yellow)',
        color: dark ? 'white' : 'var(--primary-green)',
        fontFamily: 'Barlow Condensed, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderRadius: '0.5rem',
      }}
    >
      Contact Us
    </a>
  );
}

function Card({ children, bg, text }: { children: React.ReactNode; bg: string; text?: string }) {
  return (
    <div style={{ backgroundColor: bg, color: text || 'var(--text-dark)', padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {children}
    </div>
  );
}

function AccordionItem({ label, items, light }: { label: string; items: string[]; light?: boolean }) {
  return (
    <div style={{ borderTop: `1px solid ${light ? 'rgba(255,255,255,0.3)' : '#9ca3af'}`, paddingTop: '1rem', marginTop: '1rem' }}>
      <details>
        <summary style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
          {label} <span>↓</span>
        </summary>
        <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
          {items.map((item, i) => (
            <li key={i} style={{ listStyleType: 'disc' }}>{item}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

        {/* Repair & Maintenance */}
        <Card bg="var(--neutral-gray)">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--primary-green)', marginBottom: '1rem' }}>
              Repair & Maintenance for All Bikes
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              Whether it's a vintage cruiser or a stubborn eBike with issues, our expert technicians provide surgical-level precision to keep you rolling.
            </p>
            <p style={{ fontWeight: 700, fontStyle: 'italic', marginBottom: '1rem' }}>Free Diagnostic</p>
            <AccordionItem
              label="View Rates"
              items={['Single Repair: $65 + parts', 'Flat: $30 + parts', 'Full Tune-Up: $95', 'Other Services Available']}
            />
          </div>
          <ContactButton />
        </Card>

        {/* eBike Sales */}
        <Card bg="var(--primary-blue)" text="white">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
              Quality eBikes Sales<br />Affordable Prices
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Engineered for NOLA streets. Durable, stylish, and powerful. Affordable quality without the compromise.
            </p>
            <AccordionItem
              label="See Features"
              light
              items={['Financing Available', 'Ready to Ride', 'Our Exclusive JBird Build', 'UL Listed', 'Many Extra Features Included', 'Professional Service & Maintenance']}
            />
          </div>
          <ContactButton dark />
        </Card>

        {/* Buy Online */}
        <Card bg="var(--neutral-gray)">
