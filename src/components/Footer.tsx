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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { href: 'https://jbirdbikes.com/', src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'Facebook' },
            { href: 'https://jbirdbikes.com/', src: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', alt: 'Instagram' },
            { href: 'https://jbirdbikes.com/', src: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', alt: 'TikTok' },
            { href: 'https://jbirdbikes.com/', src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YouTube' },
          ].map((social) => (
            <a key={social.alt} href={social.href} style={{ opacity: 0.7, transition: 'opacity 0.2s' }}>
              <img src={social.src} alt={social.alt} style={{ width: '2.5rem', height: '2.5rem' }} />
            </a>
          ))}
        </div>

        <div style={{ color: '#4b5563', fontWeight: 600 }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>On the Lafitte Greenway, New Orleans</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            <a href="/privacy" style={{ color: '#4b5563' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#4b5563' }}>Terms</a>
            <a href={CONTACT_URL} style={{ color: 'var(--primary-green)' }}>Contact Us</a>
          </div>
          <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>© 2026 JBird Bikes. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
