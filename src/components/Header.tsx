import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header style={{ backgroundColor: 'white', borderBottom: '2px solid #000', padding: '0.75rem 1.5rem', position: 'sticky' as const, top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <a href="/" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: '#2E7D32', fontStyle: 'italic', letterSpacing: '-1px', textDecoration: 'none' }}>
            JBIRD BIKES
          </a>
          
          {/* Desktop Nav (Hidden on Mobile) */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="/repairs.html" style={navStyle}>Repairs</a>
            <a href="/sales.html" style={navStyle}>Bike Sales</a>
            <a href="/assembly.html" style={navStyle}>Assembly</a>
            <a href="/nola-incentive.html" style={navStyle}>Incentive</a>
            <a href="https://square.site/book/your-link" target="_blank" style={testRideBtn}>BOOK TEST-RIDE</a>
          </nav>

          {/* Mobile Menu Toggle (Hidden on Desktop) */}
          <button onClick={toggleMenu} style={hamburgerStyle} aria-label="Menu">
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Side Menu */}
      <div style={{
        position: 'fixed' as const,
        top: 0,
        right: isOpen ? 0 : '-100%',
        width: '250px',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        transition: '0.3s ease-in-out',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1.5rem'
      }}>
        <button onClick={toggleMenu} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>✕</button>
        <a href="/repairs.html" onClick={toggleMenu} style={mobileNavLink}>Repairs & Service</a>
        <a href="/sales.html" onClick={toggleMenu} style={mobileNavLink}>Bike Sales</a>
        <a href="/assembly.html" onClick={toggleMenu} style={mobileNavLink}>eBike Assembly</a>
        <a href="/nola-incentive.html" onClick={toggleMenu} style={mobileNavLink}>NOLA Incentive</a>
        <a href="/about.html" onClick={toggleMenu} style={mobileNavLink}>About Us</a>
        <hr />
        <a href="tel:5045216997" style={{ fontWeight: 800, color: 'black', textDecoration: 'none' }}>(504) 521-6997</a>
        <a href="https://square.site/book/your-link" target="_blank" style={testRideBtn}>BOOK TEST-RIDE</a>
      </div>

      {/* Global CSS for Responsive Behavior */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
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

const mobileNavLink = {
  ...navStyle,
  fontSize: '1.1rem',
  borderBottom: '1px solid #eee',
  paddingBottom: '0.5rem'
};

const hamburgerStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0'
};

const testRideBtn = {
  textDecoration: 'none',
  backgroundColor: '#0000FF',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  fontWeight: 800,
  fontSize: '0.85rem',
  textAlign: 'center' as const
};
