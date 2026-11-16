import styles from './SiteChrome.module.css';

// Store hours: single source for the footer. Change here only when the shop's hours change.
const HOURS = [
  { days: 'Mon – Sat:', time: '10:00 AM – 6:00 PM' },
  { days: 'Sundays:', time: 'Closed' },
];

// Social profiles: Facebook and Instagram are the URLs already used on the site (see SocialButtons in components/home/shared.tsx).
const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/JBirdBikeShop',
    bg: '#3b5fa8',
    icon: <path fill="#fff" d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z" />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/jbirdbikes',
    bg: '#c13584',
    icon: <path fill="#fff" d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.9-9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.7 14.7 3.7 12s0-3 .1-4.1C3.9 5.2 5.2 3.9 7.9 3.8 9 3.7 9.3 3.6 12 3.6zM12 2c-2.7 0-3.1 0-4.2.1C4.2 2.2 2.2 4.2 2.1 7.8 2 8.9 2 9.3 2 12s0 3.1.1 4.2c.1 3.6 2.1 5.6 5.7 5.7 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c3.6-.1 5.6-2.1 5.7-5.7.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-3.6-2.1-5.6-5.7-5.7C15.1 2 14.7 2 12 2z" />,
  },
  {
    label: 'Google Business listing',
    href: 'https://share.google/16F9rbAFcqQoo17Cq',
    bg: '#fff',
    icon: (
      <>
        <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.45-1.1 2.68-2.33 3.51v2.93h3.78c2.21-2.04 3.57-5.05 3.57-8.68z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.93l-3.78-2.93c-1.08.72-2.46 1.15-4.15 1.15-3.19 0-5.89-2.15-6.85-5.04H1.25v3.02C3.22 21.17 7.26 24 12 24z" />
        <path fill="#FBBC05" d="M5.15 14.25A7.2 7.2 0 0 1 4.77 12c0-.78.13-1.54.38-2.25V6.73H1.25A12 12 0 0 0 0 12c0 1.93.46 3.76 1.25 5.27l3.9-3.02z" />
        <path fill="#EA4335" d="M12 4.71c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.94 1.14 15.24 0 12 0 7.26 0 3.22 2.83 1.25 6.73l3.9 3.02c.96-2.89 3.66-5.04 6.85-5.04z" />
      </>
    ),
  },
];

const MAP_SRC = 'https://maps.google.com/maps?q=2336%20St.%20Louis%20St,%20New%20Orleans,%20LA%2070119&z=15&output=embed';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Contact Us</h2>
            <a href="tel:5045216997" className={styles.footerPhone}>(504) 521-6997</a>
            <p className={styles.footerAddress}>2336 St. Louis Street<br />New Orleans, LA 70119</p>
            <p className={styles.footerNote}>On the Lafitte Greenway</p>
          </div>

          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Store Hours</h2>
            <dl className={styles.hours}>
              {HOURS.map((h) => (
                <div key={h.days} style={{ display: 'contents' }}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Follow Us for Inventory Updates</h2>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.social} style={{ background: s.bg }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerCol}>
            <h2 className={styles.footerHeading}>Find Us on Google Maps</h2>
            <div className={styles.map}>
              <iframe title="Map to JBird Bikes" src={MAP_SRC} loading="lazy" />
            </div>
          </div>
        </div>

        <nav className={styles.footerNav} aria-label="Policies">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/terms.html">Terms</a>
          <a href="/return-policy.html">Return Policy</a>
        </nav>
        <p className={styles.copy}>© 2026 JBird Bikes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
