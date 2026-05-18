"use client";

import React, { useState } from 'react';

const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

const BRANDS = [
  { name: 'All Bikes', href: '/sales.html' },
  { name: 'Gotrax', href: '/gotrax-ebikes-new-orleans' },
  { name: 'Aventon', href: '/aventon-ebikes-new-orleans' },
  { name: 'Lectric', href: '/lectric-ebikes-new-orleans' },
  { name: 'Retrospec', href: '/retrospec-ebikes-new-orleans' },
  { name: 'Mockwheel', href: '/mockwheel-ebikes-new-orleans' },
  { name: 'Vanpowers', href: '/vanpowers-ebikes-new-orleans' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header style={{ backgroundColor: 'white', borderBottom: '2px solid #000', padding: '0.75rem 1.5rem', position: 'sticky' as const, top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <a href="/" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: '#2E7D32', fontStyle: 'italic', letterSpacing: '-1px', textDecoration: 'none' }}>
            JBIRD BIKES
          </a>

          <nav className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="/repairs.html" style={navStyle}>Repairs</a>
            <div
              style={{ position: 'relative' as const }}
              onMouseEnter={() => setSalesOpen(true)}
              onMouseLeave={() => setSalesOpen(false)}
            >
              <a href="/sales.html" style={{ ...navStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Bike Sales <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>▼</span>
              </a>
              {salesOpen && (
                <div style={{ position: 'absolute' as const, top: '100%', left: 0, background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', minWidth: '180px', zIndex: 200, overflow: 'hidden', marginTop: '4px' }}>
                  {BRANDS.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      style={{ display: 'block', padding: '0.6rem 1rem', fontSize: '0.8rem', fontWeight: brand.name === 'All Bikes' ? 700 : 500, color: brand.name === 'All Bikes' ? '#2E7D32' : '#444', textDecoration: 'none', textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderBottom: brand.name === 'All Bikes' ? '1px solid #e5e7eb' : 'none', backgroundColor: 'white', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0fdf4')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'white')}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/assembly.html" style={navStyle}>Assembly</a>
            <a href="/nola-incentive.html" style={navStyle}>Incentive</a>
            <a href={CONTACT_URL} target="_blank" style={testRideBtn}>BOOK TEST-RIDE</a>
          </nav>

          <button onClick={toggleMenu} style={hamburgerStyle} aria-label="Menu" className="hamburger-btn">
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
            <div style={{ width: '25px', height: '3px', background: 'black', margin: '5px 0' }}></div>
          </button>
        </div>
      </header>

      <div style={{ position: 'fixed' as const, top: 0, right: isOpen ? 0 : '-100%', width: '280px', height: '100%', backgroundColor: 'white', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)', zIndex: 1000, transition: '0.3s ease-in-out', padding: '2rem', display: 'flex', flexDirection: 'column' as const, gap: '0', overflowY: 'auto' as const }}>
        <button onClick={toggleMenu} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1rem' }}>✕</button>
        <a href="/repairs.html" onClick={toggleMenu} style={mobileNavLink}>Repairs & Service</a>
        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '0.8rem', marginBottom: '0' }}>
          <div style={{ ...mobileNavLink, borderBottom: 'none', color: '#2E7D32', fontWeight: 800, marginBottom: '0.3rem' }}>Bike Sales</div>
          {BRANDS.map((brand) => (
            <a key={brand.name} href={brand.href} onClick={toggleMenu} style={{ display: 'block', padding: '0.4rem 0 0.4rem 1rem', fontSize: '0.85rem', fontWeight: 500, color: '#444', textDecoration: 'none', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
              {brand.name}
            </a>
          ))}
        </div>
        <a href="/assembly.html" onClick={toggleMenu} style={mobileNavLink}>eBike Assembly</a>
        <a href="/nola-incentive.html" onClick={toggleMenu} style={mobileNavLink}>NOLA Incentive</a>
        <a href="/about.html" onClick={toggleMenu} style={mobileNavLink}>About Us</a>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '10px 0' }} />
        <a href="tel:5045216997" style={{ fontWeight: 800, color: 'black', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>(504) 521-6997</a>
        <a href={CONTACT_URL} target="_blank" style={{ ...testRideBtn, marginTop: '1rem', display: 'block', textAlign: 'center' as const }}>BOOK TEST-RIDE</a>
      </div>

      {isOpen && (
        <div onClick={toggleMenu} style={{ position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 999 }} />
      )}

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .hamburger-btn { display: block !important; } }
        @media (min-width: 901px) { .hamburger-btn { display: none !important; } }
      `}</style>
    </>
  );
}

const navStyle = { textDecoration: 'none', color: '#444', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' as const, letterSpacing: '0.02em' };
const mobileNavLink = { display: 'block', textDecoration: 'none', color: '#222', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderBottom: '1px solid #eee', paddingBottom: '0.8rem', paddingTop: '0.8rem' };
const hamburgerStyle = { background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'none' };
const testRideBtn = { textDecoration: 'none', backgroundColor: '#0000FF', color: 'white', padding: '12px 24px', borderRadius: '4px', fontWeight: 800, fontSize: '0.9rem', textAlign: 'center' as const };
