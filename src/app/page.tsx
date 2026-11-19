import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import styles from '@/components/home/home.module.css';
import { barlow, dmSans } from '@/components/home/shared';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'eBike Shop New Orleans | JBird Bikes on the Lafitte Greenway' },
  description:
    'Neighborhood eBike shop at 2336 St. Louis St. UL-certified eBikes, pro assembly, repair, and lease-to-own from $29.99/week. Mon–Sat 10–5.',
  alternates: { canonical: '/' },
};

const STOREFRONT = '/images/redesign/storefront.jpg';

export default async function HomePage() {
  return (
    <div className={`${styles.page} ${barlow.variable} ${dmSans.variable}`}>
      <LocalBusinessSchema />

      <main>
        {/* 01 Hero */}
        <section className={styles.heroA}>
          <div className={styles.heroBand}>
            <div className={styles.heroImg}>
              <Image src={STOREFRONT} alt="JBird Bikes shop at 2336 St. Louis St., New Orleans" fill priority sizes="100vw" />
            </div>
            <div className={styles.heroShade} />
            <div className={styles.heroContent}>
              <h1 className={styles.heroATitle}><span>Electrify</span> your life</h1>
              <div className={styles.heroPills}>
                <a href="/sales.html?type=eBikes#catalog" className={`${styles.heroPill} ${styles.pillGreen}`}>eBikes</a>
                <a href="/sales.html?type=eScooters#catalog" className={`${styles.heroPill} ${styles.pillBlue}`}>eScooters</a>
                <a href="/sales.html?type=eTrikes#catalog" className={`${styles.heroPill} ${styles.pillRed}`}>eTrikes</a>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <Link href="/sell" className={styles.card}>
              <Image src="/images/redesign/card-cash.jpg" alt="Cash for your eBike at JBird Bikes" fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectPosition: '40% 45%' }} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardWord}>CASH</span>
                <span className={styles.cardSub}>for your <span className={styles.lower}>e</span>Bike</span>
              </div>
            </Link>
            <a href="/sales.html" className={styles.card}>
              <Image src="/images/redesign/card-shop.jpg" alt="New and pre-owned eBikes for sale at JBird Bikes" fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectPosition: '50% 55%' }} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardWord}>SHOP</span>
                <span className={styles.cardSub}>New &amp; Pre-owned</span>
              </div>
            </a>
            <a href="/repairs.html" className={styles.card}>
              <Image src="/images/redesign/card-repair.jpg" alt="eBike repair and assembly at JBird Bikes" fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectPosition: '50% 55%' }} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardWord}>FIX</span>
                <span className={`${styles.cardSub} ${styles.cardSubSmall}`}>Repair or Assemble</span>
              </div>
            </a>
          </div>
        </section>

        {/* 02 Why choose us */}
        <section className={`${styles.wrap} ${styles.why}`}>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <h2 className={`${styles.h2} ${styles.whyTitle}`}>Why choose us?</h2>
              <p>
                We&apos;re a neighborhood shop at 2336 St. Louis St. We build every ride ourselves, and when it needs work,
                you bring it back to us right down the street!
              </p>
              <div className={styles.whyPhoto}>
                <Image src={STOREFRONT} alt="JBird Bikes storefront on St. Louis St." fill sizes="(max-width: 900px) 100vw, 600px" />
              </div>
            </div>
            <ul className={styles.whyList}>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#1f5fc8' }}>21</span>
                <p><strong>Built by pros, not out of a box.</strong>Every vehicle we sell is JBird Bike certified and guaranteed.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#2e8b3e' }}>UL</span>
                <p><strong>Safety certified.</strong>We sell UL-certified rides only.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#d43a2f' }}>NF</span>
                <p><strong>Built for New Orleans streets.</strong>We picked out the right eBike for the city.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#f7d23e', color: '#16140f', border: '2px solid #16140f', fontSize: 20 }}>NOLA</span>
                <p><strong>We&apos;re right here on the Greenway.</strong>Warranty work happens in our shop. We never mail your parts away.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
