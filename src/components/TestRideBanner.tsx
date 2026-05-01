const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header";

export default function TestRideBanner() {
  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 5rem' }}>
      <div style={{
        backgroundColor: 'var(--accent-yellow)',
        border: '4px solid var(--primary-green)',
        borderRadius: '1.5rem',
        padding: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <div>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--text-dark)',
            marginBottom: '0.5rem'
          }}>
            Test-Ride an eBike
          </h2>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 900,
            color: 'var(--primary-green)',
            marginBottom: '0.5rem'
          }}>
            Get a $20 Voucher
          </p>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--primary-green)',
            opacity: 0.7
          }}>
            Limited Time Offer
          </p>
        </div>
        
          href={CONTACT_URL}
          style={{
            backgroundColor: '#0000FF',
            color: 'white',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '1rem 2.5rem',
            borderRadius: '0.5rem',
            display: 'inline-block',
            whiteSpace: 'nowrap'
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
