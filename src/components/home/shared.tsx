// Pieces shared by the homepage and the /apply campaign landing page, so the hero
// offer and the Snap disclosures it relies on stay identical on both.
import { Barlow_Condensed, DM_Sans } from 'next/font/google';
import styles from './home.module.css';

export const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
});
export const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-dm-sans' });

export const SNAP_URL =
  'https://bk.snapfinance.com/origination?paramId=3w%2FEWVFzVGcQioSdKn1vuqdr2hNr3A1xiMt4CtG%2BqOXv5CWpL9qV%2Bq2lEkK1hZ0tog9ZSjNG2GyQln5HQrzShOzYiaK%2FnFnEZXfXtyBXVEw%3D';

export function SocialButtons() {
  return (
    <section className={styles.socialCta} aria-labelledby="social-cta-title">
      <h2 id="social-cta-title" className={styles.socialTitle}>Follow &amp; Review Us</h2>
      <nav className={styles.socialLinks} aria-label="Follow and review JBird Bikes">
        <a href="https://facebook.com/JBirdBikeShop" target="_blank" rel="noopener noreferrer" className={`${styles.socialButton} ${styles.socialFacebookButton}`}>
          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.1h2.8v8h3.4z" />
          </svg>
          Facebook
        </a>
        <a href="https://instagram.com/jbirdbikes" target="_blank" rel="noopener noreferrer" className={`${styles.socialButton} ${styles.socialInstagramButton}`}>
          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </a>
        <a href="https://www.google.com/search?kgmid=/g/11z5pgpn_8&q=JBird+Bike+Shop" target="_blank" rel="noopener noreferrer" className={`${styles.socialButton} ${styles.socialGoogleButton}`}>
          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.45-1.1 2.68-2.33 3.51v2.93h3.78c2.21-2.04 3.57-5.05 3.57-8.68z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.93l-3.78-2.93c-1.08.72-2.46 1.15-4.15 1.15-3.19 0-5.89-2.15-6.85-5.04H1.25v3.02C3.22 21.17 7.26 24 12 24z" />
            <path fill="#FBBC05" d="M5.15 14.25A7.2 7.2 0 0 1 4.77 12c0-.78.13-1.54.38-2.25V6.73H1.25A12 12 0 0 0 0 12c0 1.93.46 3.76 1.25 5.27l3.9-3.02z" />
            <path fill="#EA4335" d="M12 4.71c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.94 1.14 15.24 0 12 0 7.26 0 3.22 2.83 1.25 6.73l3.9 3.02c.96-2.89 3.66-5.04 6.85-5.04z" />
          </svg>
          Google
        </a>
      </nav>
    </section>
  );
}

export function Sup({ n }: { n: number }) {
  return <sup><a href={`#d${n}`}>{n}</a></sup>;
}

// Headline, offer and shop photo. cta renders under the chips; photo={false} drops the shop photo.
export function HeroTop({ cta, photo = true }: { cta?: React.ReactNode; photo?: boolean }) {
  return (
    <div className={`${styles.wrap} ${styles.heroTop}`}>
      <div className={styles.heroText}>
        <div className={styles.heroBadges}>
          <span className={styles.heroBadge}>No credit needed.<Sup n={1} /></span>
          <span className={styles.shopLocalBadge}>Shop Local!</span>
        </div>
        <h1 className={styles.heroTitle}>
          Get your <span className={styles.lower}>e</span>Ride for under{' '}
          <span className={styles.heroPrice}>$29<sup>.99</sup>/week!</span>
        </h1>
        <p className={styles.heroSub}>
          eBikes - eScooters - ETrikes
        </p>
        <div className={styles.chips}>
          <span className={styles.chip}>Fully Assembled</span>
          <span className={styles.chip}>Local Shop Pickup</span>
          <span className={styles.chip}>Local Warranty</span>
        </div>
        {cta}
      </div>
      {photo && (
        <div className={styles.heroPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-bike.jpg" alt="JBird Bikes shop at 2336 St. Louis St., New Orleans" />
        </div>
      )}
    </div>
  );
}

const HOURS_URL = 'https://share.google/votmFNHcQjONuZMF3';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${styles.footerInner}`}>
        <p className={styles.footerTitle}>JBird Bikes · 2336 St. Louis St., New Orleans — on the Lafitte Greenway</p>
        <div className={styles.footerBtns}>
          <a href={HOURS_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnDark} ${styles.footerHours}`}>See Our Hours</a>
          <a href="tel:5045216997" className={`${styles.btn} ${styles.btnOutline} ${styles.footerPhone}`}>(504) 521-6997</a>
        </div>
        <nav className={styles.footerNav} aria-label="Policies">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/terms.html">Terms</a>
          <a href="/return-policy.html">Return Policy</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}

const DISCLOSURES: Record<number, React.ReactNode> = {
  1: <>Not all applicants are approved. While no credit history is required, Snap obtains information from consumer reporting agencies in connection with submitted applications, and your score with those agencies may be affected.</>,
  2: <>Lease-to-own agreement provided by Snap RTO LLC.</>,
};
const SUPERSCRIPTS: Record<number, string> = { 1: '¹', 2: '²', 3: '³' };
const DISCLOSURE_3_FIRST = 'To exercise the Initial Promotional Period option, consumers must make all scheduled payments on time and either (1) ensure the required amount is paid within the applicable timeframe through the customer portal, or (2) contact Customer Care at 1-877-557-3769 to schedule payments to ensure the required amount is paid within the applicable timeframe.';
const DISCLOSURE_3_REST = 'The cost and duration of the Initial Promotional Period may vary based on merchant location and product offering. Additional charges above the merchandise price may apply. Consumers may still reduce the overall cost by exercising available early payoff or buyout options after the Initial Promotional Period, where applicable. See your agreement for details and limitations.';

// Pass the footnote numbers the page actually uses.
export function Disclosures({ notes }: { notes: number[] }) {
  return (
    <section className={styles.disclosures} aria-labelledby="disclosures-title">
      <div className={`${styles.wrap} ${styles.disclosuresInner}`}>
        <h2 id="disclosures-title">Disclosures</h2>
        {notes.map((n) => (
          n === 3 ? (
            <div key={n} id="d3" className={styles.disclosure}>
              <strong>{SUPERSCRIPTS[n]}</strong> {DISCLOSURE_3_FIRST}
              <details>
                <summary>Full terms</summary>
                <p>{DISCLOSURE_3_REST}</p>
              </details>
            </div>
          ) : (
            <p key={n} id={`d${n}`}><strong>{SUPERSCRIPTS[n]}</strong> {DISCLOSURES[n]}</p>
          )
        ))}
        <p className={styles.copyright}>© 2026 JBird Bikes. All Rights Reserved.</p>
      </div>
    </section>
  );
}
