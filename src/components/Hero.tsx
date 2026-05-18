import React from 'react';

const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'black', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/hero-bike.jpg"
          alt="JBird Bikes"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.6 }}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', padding: '0 1rem' }}>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900, fontStyle: 'italic', color: 'var(--accent-yellow)', marginBottom: '1rem', textTransform: 'uppercase' }}>
          JBird Bikes
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: 'var(--accent-yellow)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '3rem' }}>
          Sales & Service<br />On the Greenway
        </p>
        <a href={CONTACT_URL} style={{ backgroundColor: 'var(--accent-yellow)', color: 'var(--primary-green)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', fontWeight: 900, padding: '1rem 3rem', borderRadius: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block' }}>
          Contact Us
        </a>
      </div>
    </section>
  );
}
