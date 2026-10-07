import type { Metadata } from 'next';
import HomeHeader from '@/components/home/HomeHeader';
import styles from '@/components/home/home.module.css';
import { barlow, dmSans, SNAP_URL, HeroTop, Disclosures } from '@/components/home/shared';

// Campaign landing page: the QR code on printed business cards points here, so keep the /apply URL.
// Hidden from search engines; it repeats the homepage hero.
export const metadata: Metadata = {
  title: 'Apply Now',
  description: 'Get your eRide for as low as $18 a week. No credit needed. Apply now with Snap Finance.',
  alternates: { canonical: '/apply' },
  robots: { index: false, follow: true },
};

const POSTER = '/video-banner-poster.jpg';

export default function ApplyPage() {
  return (
    <div className={`${styles.page} ${barlow.variable} ${dmSans.variable}`}>
      <HomeHeader snapUrl={SNAP_URL} />

      <main>
        {/* Muted looping video behind the hero; the poster shows while it loads, if it can't play,
            and (via CSS) for visitors who ask for reduced motion. */}
        <section className={`${styles.hero} ${styles.heroVideo}`} style={{ backgroundImage: `url(${POSTER})` }}>
          <video className={styles.heroVideoBg} autoPlay muted loop playsInline preload="auto" poster={POSTER} aria-hidden="true">
            <source src="/video-banner.webm" type="video/webm" />
            {/* For browsers that can't play WebM (iPhones before iOS 17.4). */}
            <source src="/video-banner-fallback.mp4" type="video/mp4" />
          </video>
          <HeroTop
            photo={false}
            cta={
              <a href={SNAP_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnDark} ${styles.applyBtn}`}>
                Apply Now with Snap Financing
              </a>
            }
          />
        </section>
      </main>

      <Disclosures notes={[1, 2]} />
    </div>
  );
}
