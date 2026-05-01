import React from 'react';

export default function Header() {
  return (
    <header style={{ backgroundColor: 'white', borderBottom: '2px solid #000', position: 'sticky' as const, top: 0, zIndex: 100 }}>
      {/* Top Bar: Main Services */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: '#2E7D32', fontStyle: 'italic', letterSpacing: '-1px', textDecoration: 'none' }}>
            JBIRD BIKES
          </a>
          
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="/repairs.html" style={navStyle}>Repairs & Service</a>
            <a href="/sales.html" style={navStyle}>Bike Sales</a>
            <a href="/assembly.html" style={navStyle}>eBike Assembly</a>
            <a href="/nola-incentive.html" style={navStyle}>NOLA Incentive</a>
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="https://square.site/book/your-link" target="_blank" style={testRideBtn}>
            BOOK TEST-RIDE
          </a>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#6b7280', margin: 0, textTransform: 'uppercase' }}>Call / Text</p>
            <a href="tel:5045216997" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000', textDecoration: 'none' }}>(504) 521-6997</a>
          </div>
        </div>
      </div>

      {/* Sub Bar: About & Legal */}
      <div style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', padding: '0.4rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'flex-end', gap: '1.5rem' }}>
          <a href="/about.html" style={subNavLink}>About Us</a>
          <a href="/privacy.html" style={subNavLink}>Privacy & Terms</a>
        </div>
      </div>
    </header>
  );
}

const navStyle = {
  textDecoration: 'none',
  color: '#444',
  fontWeight: 700,
  fontSize: '0.8rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.02em'
};

const subNavLink = {
  textDecoration: 'none',
  color: '#888',
  fontWeight: 500,
  fontSize: '0.7rem',
  textTransform: 'uppercase' as const
};

const testRideBtn = {
  textDecoration: 'none',
  backgroundColor: '#0000FF',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '4px',
  fontWeight: 800,
  fontSize: '0.8rem'
};
