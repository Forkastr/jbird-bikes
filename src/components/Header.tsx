export default function Header() {
  return (
    <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '1.5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <a href="/" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-green)', fontStyle: 'italic', letterSpacing: '-1px' }}>
          JBird Bikes
        </a>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6b7280', marginBottom: '0.25rem' }}>
            Call / Text
          </p>
          <a href="tel:5045216997" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0000FF' }}>
            (504) 521-6997
          </a>
        </div>

        <div style={{ width: '120px' }} />

      </div>
    </header>
  );
}
