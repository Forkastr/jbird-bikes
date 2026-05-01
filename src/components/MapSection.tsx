export default function MapSection() {
  return (
    <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'var(--primary-green)',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Visit Us On The Greenway
        </h2>
        <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '8px solid var(--neutral-gray)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4573444586567!2d-90.08376382609781!3d29.966283822272693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5bd54333c35%3A0x53d82eb12f09b98b!2sJBird%20Bike%20Shop!5e0!3m2!1sen!2sus!4v1776541031107!5m2!1sen!2sus"
            width="100%"
            style={{ border: 0, minHeight: '400px', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
