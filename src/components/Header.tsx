import React from 'react';

export default function Header() {
  return (
   <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 1.5rem', position: 'sticky' as const, top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <a href="/" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, color: 'var(--primary-green)', fontStyle: 'italic', letterSpacing: '-1px', whiteSpace: 'nowrap' as const }}>
          JBird Bikes
        </a>

        <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-end' }}>
          <p style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#6b7280', marginBottom: '0.2rem' }}>
            Call / Text
          </p>
          <a href="tel:5045216997" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.5rem)', fontWeight: 700, color: '#0000FF', whiteSpace: 'nowrap' as const }}>
            (504) 521-6997
          </a>
        </div>

      </div>
    </header>
  );
}
