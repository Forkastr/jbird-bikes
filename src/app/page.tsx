import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import HomeHeader from '@/components/home/HomeHeader';
import BikeCarousel, { type CarouselBike } from '@/components/home/BikeCarousel';
import styles from '@/components/home/home.module.css';
import { fetchCatalog, type Bike } from '@/lib/catalog';
import { barlow, dmSans, SNAP_URL, Sup, HeroTop, Disclosures, SiteFooter } from '@/components/home/shared';

// Static, rebuilt in the background every 5 minutes so the carousel follows the catalog sheet.
// If a rebuild fails (feed down), the last good page stays live.
export const dynamic = 'force-static';
export const revalidate = 300;

const SNAP_REVIEWS_URL = 'https://snapfinance.com';
const CAROUSEL_SIZE = 6;

const str = (v: unknown) => (v ?? '').toString().trim();

// "Tundra Fat Tire Electric Bike" -> "Tundra Fat Tire": the carousel label is large, so drop the generic suffix.
function shortName(title: string) {
  return title.replace(/\s+(electric\s+(bike|bicycle)|e-?bike)$/i, '').trim() || title;
}

// Available bikes (not accessories) with a photo, priced ones first, in sheet order.
function pickCarouselBikes(catalog: Bike[]): CarouselBike[] {
  const available = catalog.filter(
    (b) =>
      str(b['JBird Status']).toLowerCase() === 'available' &&
      str(b['Category']).toLowerCase() !== 'accessories' &&
      str(b['Image-URL']) &&
      str(b['Slug']),
  );
  const priced = available.filter((b) => str(b['JBird Retail Price']));
  const unpriced = available.filter((b) => !str(b['JBird Retail Price']));
  return [...priced, ...unpriced].slice(0, CAROUSEL_SIZE).map((b) => ({
    name: shortName(str(b['Title'])),
    type: str(b['Category']) ? `${str(b['Category'])} eBike` : 'eBike',
    img: str(b['Image-URL']),
    href: `/product.html?slug=${encodeURIComponent(str(b['Slug']))}`,
  }));
}

export default async function HomePage() {
  const carouselBikes = pickCarouselBikes(await fetchCatalog());

  return (
    <div className={`${styles.page} ${barlow.variable} ${dmSans.variable}`}>
      <LocalBusinessSchema />
      <HomeHeader snapUrl={SNAP_URL} />

      <main>
        {/* 01 Hero */}
        <section className={styles.hero}>
          <HeroTop />
          <div className={`${styles.wrap} ${styles.heroCards}`}>
            <div className={styles.heroCard}>
              <p>
                <strong>Get approved for up to $5,000<Sup n={1} /> in lease-to-own financing.<Sup n={2} /></strong>{' '}
                Apply in minutes, get a decision in seconds.
              </p>
              <a href={SNAP_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnDark} ${styles.heroCardBtn}`}>Apply Now with Snap Finance</a>
            </div>
            <div className={styles.heroCard}>
              <p><strong>Fully assembled, safety certified, ready to ride.</strong> Many brands and models available.</p>
              <a href="/sales.html" className={`${styles.btn} ${styles.btnBlue} ${styles.heroCardBtn}`}>
                <span>Find Your <span className={styles.lower}>e</span>Ride</span>
              </a>
            </div>
          </div>
        </section>

        {/* 02 Carousel */}
        <BikeCarousel bikes={carouselBikes} />

        {/* 03 Why JBird */}
        <section className={`${styles.wrap} ${styles.why}`}>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <h2 className={`${styles.h2} ${styles.whyTitle}`}>Why JBird Bikes</h2>
              <p>
                JBird Bikes is your neighborhood electric ride shop, right on the Lafitte Greenway at 2336 St. Louis St.
                We&apos;re not a website or a warehouse — we build, sell and fix every ride ourselves, and we&apos;re right
                down the street when you need us.
              </p>
              <div className={styles.whyPhoto}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/JBird%20Bikes%20Front.jpg" alt="JBird Bikes storefront on St. Louis St." loading="lazy" />
              </div>
            </div>
            <ul className={styles.whyList}>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#1f5fc8' }}>21</span>
                <p><strong>Built by pros, not out of a box.</strong>Every vehicle we sell gets the JBird Pro-Build — our 21-point professional assembly.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#2e8b3e' }}>UL</span>
                <p><strong>Safety certified.</strong>We sell UL-certified rides only.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#d43a2f' }}>NF</span>
                <p><strong>Built for New Orleans streets.</strong>No-Flat tire sealant pre-installed.</p>
              </li>
              <li className={styles.whyItem}>
                <span className={styles.whyIcon} style={{ background: '#f7d23e', color: '#16140f', border: '2px solid #16140f', fontSize: 20 }}>NOLA</span>
                <p><strong>We&apos;re right here on the Greenway.</strong>On-site service and warranty work — no mailing parts to a warehouse.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* 04 Snap */}
        <section id="snap" className={styles.snap}>
          <div className={`${styles.wrap} ${styles.snapInner}`}>
            <div className={styles.snapIntro}>
              <span className={styles.snapEyebrow}>FLEXIBLE PAYMENT OPTIONS</span>
              <h2 className={styles.snapTitle}>A JBird Exclusive</h2>
              <p className={styles.snapLead}>
                JBird has partnered with Snap Finance to offer lease-to-own financing<Sup n={2} />, no credit needed!<Sup n={1} />
              </p>
            </div>

            <div className={styles.snapBlock}>
              <div>
                <h3 className={styles.snapH3}>Why choose Snap Finance?</h3>
                <p className={styles.snapNote}>You&apos;ll love Snap Finance&apos;s clear and simple terms and convenient payment plans.</p>
              </div>
              <div className={styles.snapCards}>
                <div className={styles.snapCard}>
                  <h4>No credit needed.<Sup n={1} /></h4>
                  <p>Need solutions that think outside the box — and your credit score — to determine your creditworthiness? Snap can help.</p>
                </div>
                <div className={styles.snapCard}>
                  <h4>So quick, so easy.</h4>
                  <p>Apply in minutes, get a decision in seconds. Approvals from $300 to $5,000.<Sup n={1} /></p>
                </div>
                <div className={styles.snapCard}>
                  <h4>90-Day Same as Cash<Sup n={3} /> or low payments for 18 months.</h4>
                  <p>Get it now with lease-to-own financing.<Sup n={2} /></p>
                </div>
              </div>
            </div>

            <div className={styles.snapBlock}>
              <h3 className={styles.snapH3}>Snap Finance at a glance</h3>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statBig}>8.5M+ Customers</span>
                  <span className={styles.statSmall}>Trusted by 8.5 million+ customers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statBig}>Worry-free</span>
                  <span className={styles.statSmall}>No impact to your FICO® score when you apply.<Sup n={1} /></span>
                </div>
                <a href={SNAP_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.stat}>
                  <span className={`${styles.statBig} ${styles.statLink}`}>Excellent rating ↗</span>
                  <span className={styles.statSmall}>Based on verified reviews of Snap Finance.</span>
                </a>
              </div>
            </div>

            <a href={SNAP_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnYellow} ${styles.snapApply}`}>Apply Now with Snap Finance</a>
          </div>
        </section>

        {/* 05 Other services */}
        <section className={`${styles.wrap} ${styles.services}`}>
          <h2 className={styles.h2}>Our other services</h2>
          <div className={styles.serviceGrid}>
            <a href="/repairs.html" className={styles.serviceCard} style={{ background: '#d43a2f' }}>
              <h3>Repair &amp; Maintenance</h3>
              <p>We diagnose every bike of any brand, in any condition.</p>
              <span className={styles.serviceBtn}>Find Out More</span>
            </a>
            <a href="/assembly.html" className={styles.serviceCard} style={{ background: '#2e8b3e' }}>
              <h3>Professional Assembly</h3>
              <p>$135 flat rate, No-Flat tire sealant included.</p>
              <span className={styles.serviceBtn}>Find Out More</span>
            </a>
          </div>
        </section>
      </main>

      {/* 06 Footer */}
      <SiteFooter />

      {/* 07 Disclosures */}
      <Disclosures notes={[1, 2, 3]} />
    </div>
  );
}
