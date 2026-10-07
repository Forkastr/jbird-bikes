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

export function Sup({ n }: { n: number }) {
  return <sup><a href={`#d${n}`}>{n}</a></sup>;
}

// Headline, offer and shop photo. cta renders under the chips; photo={false} drops the shop photo.
export function HeroTop({ cta, photo = true }: { cta?: React.ReactNode; photo?: boolean }) {
  return (
    <div className={`${styles.wrap} ${styles.heroTop}`}>
      <div className={styles.heroText}>
        <span className={styles.heroBadge}>No credit needed.<Sup n={1} /></span>
        <h1 className={styles.heroTitle}>
          Get your <span className={styles.lower}>e</span>Ride for as low as{' '}
          <span className={styles.heroPrice}>$18 a week.</span>
        </h1>
        <p className={styles.heroSub}>
          <span className={styles.lower}>e</span>Bikes, <span className={styles.lower}>e</span>Scooters, and{' '}
          <span className={styles.lower}>e</span>Trikes.
        </p>
        <div className={styles.chips}>
          <span className={styles.chip}>Fully Assembled</span>
          <span className={styles.chip}>Pick Up at Our Shop</span>
          <span className={styles.chip}>Local Warranty Service</span>
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
  2: <>Snap-branded product offering includes retail installment contracts, bank installment loans, and lease-to-own financing. Talk with your local Snap merchant for more details on which product qualifies at your store location. For more detailed information, please visit <a href="https://snapfinance.com/legal/products" target="_blank" rel="noopener noreferrer">https://snapfinance.com/legal/products</a></>,
  3: <>To exercise the Initial Promotional Period option, consumers must make all scheduled payments on time and either (1) ensure the required amount is paid within the applicable timeframe through the customer portal, or (2) contact Customer Care at 1-877-557-3769 to schedule payments to ensure the required amount is paid within the applicable timeframe. The cost and duration of the Initial Promotional Period may vary based on merchant location and product offering. Additional charges above the merchandise price may apply. Consumers may still reduce the overall cost by exercising available early payoff or buyout options after the Initial Promotional Period, where applicable. See your agreement for details and limitations.</>,
};
const SUPERSCRIPTS: Record<number, string> = { 1: '¹', 2: '²', 3: '³' };

// Pass the footnote numbers the page actually uses.
export function Disclosures({ notes }: { notes: number[] }) {
  return (
    <section className={styles.disclosures} aria-labelledby="disclosures-title">
      <div className={`${styles.wrap} ${styles.disclosuresInner}`}>
        <h2 id="disclosures-title">Disclosures</h2>
        {notes.map((n) => (
          <p key={n} id={`d${n}`}><strong>{SUPERSCRIPTS[n]}</strong> {DISCLOSURES[n]}</p>
        ))}
        <p className={styles.copyright}>© 2026 JBird Bikes. All Rights Reserved.</p>
      </div>
    </section>
  );
}
