import type { Metadata } from 'next';
import styles from '@/components/home/home.module.css';
import { barlow, dmSans, APPLY_URL, HeroTop, Disclosures, SocialButtons } from '@/components/home/shared';

export const metadata: Metadata = {
  title: 'Apply Now',
  description: 'Get your eRide for under $29.99/week. No credit needed. Apply now with Snap Finance.',
  alternates: { canonical: '/info' },
  robots: { index: false, follow: true },
};

const POSTER = '/video-banner-poster.jpg';

export default function InfoPage() {
  return (
    <div className={`${styles.page} ${barlow.variable} ${dmSans.variable}`}>
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
              <>
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnDark} ${styles.applyBtn}`}>
                  APPLY FOR THE PROMO
                </a>
                <SocialButtons />
              </>
            }
          />
        </section>
      </main>

      <Disclosures notes={[1, 2]} />
    </div>
  );
}
