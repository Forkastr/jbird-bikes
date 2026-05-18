const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--neutral-gray)', borderTop: '1px solid #d1d5db', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, fontStyle: 'italic', color: 'var(--primary-green)', marginBottom: '2rem' }}>
          JBird Bikes
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6b7280', marginBottom: '0.5rem' }}>
            Call / Text
          </p>
          <a href="tel:5045216997" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, color: '#0000FF' }}>
            (504) 521-6997
          </a>
        </div>

        <div style={{ color: '#4b5563', fontWeight: 600 }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>On the Lafitte Greenway, New Orleans</p>
          <p style={{ fontSize: '0.9rem', marginBottom: '2rem', color: '#6b7280' }}>Mon–Sat: 10am–6pm</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            <a href="/privacy" style={{ color: '#4b5563' }}>Privacy Policy</a>
            <a href="/return-policy" style={{ color: '#4b5563' }}>Return Policy</a>
            <a href="/faq" style={{ color: '#4b5563' }}>FAQ</a>
            <a href={CONTACT_URL} style={{ color: 'var(--primary-green)' }}>Contact Us</a>
          </div>
          <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>© 2026 JBird Bikes. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
