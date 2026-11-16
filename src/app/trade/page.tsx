import type { Metadata } from 'next';
import styles from '@/components/landing/landing.module.css';
import { CallTextPill, E, Faq, FORM_URL, MapLink, PHONE_HREF, Steps } from '@/components/landing/shared';

export const metadata: Metadata = {
  title: 'Trade In Your eBike',
  description:
    'Trade in your eBike, eScooter, or eTrike at JBird Bikes in New Orleans. Put the value toward a new ride or take it as store credit.',
  alternates: { canonical: '/trade' },
};

const FAQS = [
  {
    q: <>What brands and types of <E />Bikes can I trade in?</>,
    a: 'We accept all brands and all types, get it checked in our shop!',
  },
  {
    q: <>Do you accept broken <E />Bikes?</>,
    a: 'Yes, we do.',
  },
];

export default function TradePage() {
  return (
    <main className={`${styles.page} ${styles.trade}`}>
      {/* 01 Trade in your eBike */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}><span className={styles.accent}>Trade</span> in your <E />Bike!</h1>
          <p className={styles.heroLine1}>Upgrade to a new ride or get store credit</p>
          <p className={styles.heroLine2}>We accept eBikes, eScooters, and eTrikes</p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaAccent} ${styles.ctaHero}`}><span>I want to trade in my <E />Bike</span></a>
          <CallTextPill />
        </div>
      </section>

      {/* 02 Three easy steps */}
      <section className={styles.steps}>
        <Steps
          title={<>Trading in your <E />Bike takes <span className={styles.accent}>3 easy steps!</span></>}
          steps={[
            <>Call, text, or stop by. We&apos;ll check out your eBike and tell you what it&apos;s worth in trade.</>,
            <>Bring your eBike to our shop at <MapLink />.</>,
            <>Put your trade-in value toward a new ride, or take it as store credit.</>,
          ]}
        />
      </section>

      {/* 03 Two ways to use it */}
      <section className={styles.band}>
        <div className={styles.bandInner}>
          <h2 className={styles.h2}>Two ways to use your <span className={styles.accent}>trade-in</span></h2>
          <div className={styles.options}>
            <div className={`${styles.option} ${styles.optionBlue}`}>
              <span className={styles.optionLabel}>Option 1</span>
              <h3>New ride</h3>
              <p>Apply your trade-in value to a new or pre-owned eBike, eScooter, or eTrike from our shop.</p>
              <a href="/sales.html" className={styles.optionBtn}>Shop rides</a>
            </div>
            <div className={`${styles.option} ${styles.optionYellow}`}>
              <span className={styles.optionLabel}>Option 2</span>
              <h3>Store credit</h3>
              <p>Not ready to pick a new ride? Take your trade-in value as credit at JBird Bikes.</p>
              <a href={PHONE_HREF} className={styles.optionBtn}>Ask about credit</a>
            </div>
          </div>
        </div>
      </section>

      {/* 04 FAQ */}
      <Faq items={FAQS} />
    </main>
  );
}
