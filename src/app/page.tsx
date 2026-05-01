"use client";

import React from 'react';
import { Wrench, ShoppingCart, MapPin, ArrowRight, Phone } from "lucide-react";

export default function HomePage() {
  const items = [
    { id: 'service', icon: Wrench, title: 'Repairs & Maintenance', sub: 'Free Diagnostic', url: '/repairs.html' },
    { id: 'sales', icon: ShoppingCart, title: 'Quality eBikes', sub: 'Authorized Gotrax Dealer', url: '/sales.html' },
    { id: 'assembly', icon: ArrowRight, title: 'eBike Assembly', sub: 'Professional Flat Rate', url: '/assembly.html' },
    { id: 'incentive', icon: MapPin, title: 'NOLA Incentive', sub: 'Up to $1,200 Off', url: '/nola-incentive.html' }
  ];

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '100px' }}>
      <main style={{ maxWidth: '450px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        
        {/* Hero Image */}
        <div style={{ marginBottom: '32px', width: '100%' }}>
          <img 
            src="/JBird Bikes Front.jpg" 
            alt="JBird Bikes Front" 
            style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', border: '4px solid rgba(0,0,0,0.05)' }} 
          />
        </div>

        {/* Branding */}
        <h1 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.05em', margin: '0 0 8px 0', lineHeight: '1' }}>JBird Bikes</h1>
        <p style={{ fontSize: '20px', fontWeight: '500', fontStyle: 'italic', marginBottom: '32px', opacity: '0.6', lineHeight: '1.2' }}>
          Sales & Service <br /> On the Lafitte Greenway
        </p>

        {/* Contact CTA */}
        <a href="tel:5045216997" style={{ marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '20px', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <Phone size={24} color="white" />
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 4px 0', opacity: '0.7' }}>Call or Text</p>
            <p style={{ fontSize: '20px', fontWeight: '900', margin: '0' }}>(504) 521-6997</p>
          </div>
        </a>

        {/* Navigation Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          {items.map((item) => (
            <a key={item.id} href={item.url} style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ backgroundColor: 'white', border: '2px solid rgba(0,0,0,0.05)', borderRadius: '20px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.2s' }}>
                <div style={{ flexGrow: 1 }}>
                  <item.icon style={{ marginBottom: '12px', opacity: '0.8' }} size={28} />
                  <h2 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 2px 0' }}>{item.title}</h2>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: 'rgba(0,0,0,0.4)', margin: '0' }}>{item.sub}</p>
                </div>
                <div style={{ backgroundColor: 'black', color: 'white', padding: '10px 16px', borderRadius: '8px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Find Out More
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Location Footer */}
        <footer style={{ marginTop: '80px', opacity: '0.3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '900', marginBottom: '4px' }}>
            <MapPin size={20} /> 
            <span>2336 St. Louis Street</span>
          </div>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em', margin: '0' }}>Directly on the Greenway</p>
        </footer>

      </main>
    </div>
  );
}
