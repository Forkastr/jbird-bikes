import type { Metadata } from 'next';
import Image from 'next/image';
import styles from '@/components/landing/landing.module.css';
import { CallTextPill, E, Faq, MapLink, Steps, FORM_URL } from '@/components/landing/shared';

export const metadata: Metadata = {
  title: 'Sell Your eBike',
  description:
    'Get cash for your eBike, eScooter, or eTrike in New Orleans. Free evaluation, free listings, and free storage at JBird Bikes on the Lafitte Greenway.',
  alternates: { canonical: '/sell-your-ebike' },
};

const BENEFITS = [
  { color: '#1f5fc8', text: 'Professional in-depth evaluation to establish the value of your eBike.' },
  { color: '#2e8b3e', text: 'Listings on all of the top-rated local social media marketing platforms until your eBike is sold.' },
  { color: '#d43a2f', text: 'Targeted digital-ad creation including detailed descriptions, professional photography, and videography of your eBike.' },
  { color: '#c99700', text: 'Detailing and cleaning to ensure you receive top dollar for your eBike.' },
  { color: '#1f5fc8', text: 'Covered storage at our bike shop until your eBike is sold.' },
  { color: '#2e8b3e', text: 'On-site full mechanical inspection to ensure confidence for all potential buyers.' },
];

const FAQS = [
  {
    q: <>My <E />Bike doesn&apos;t work, my <E />Bike needs repairs. Can I still sell it?</>,
    a: 'Yes, we include the price of the repair in the selling price, and we only get paid when your bike sells.',
  },
  {
    q: <>What brands and types of <E />Bikes do you accept?</>,
    a: 'We accept all brands and all types, get it checked in our shop!',
  },
];

export default function SellYourEbikePage() {
  return (
    <main className={styles.page}>
      {/* 01 Cash for your eBike */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Get <span className={styles.accent}>Cash</span> for your <E />Bike!</h1>
          <p className={styles.heroLine1}>Fast &amp; Easy Sell Your eBike Program</p>
          <p className={styles.heroLine2}>We accept eBikes, eScooters, and eTrikes</p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaAccent} ${styles.ctaHero}`}><span>I want to sell my <E />Bike</span></a>
          <CallTextPill />
        </div>
      </section>

      {/* 02 Three easy steps */}
      <section className={styles.steps}>
        <Steps
          largeTitle
          title={<>Selling your <E />Bike starts with <span className={styles.accent}>3 easy steps!</span></>}
          steps={[
            <>Call, text, or submit your information. We&apos;ll evaluate your eBike and give you a sales price.</>,
            <>Bring your eBike to our shop at <MapLink /> and your work is done.</>,
            <>Accept the offer, or put it toward a new ride from our shop.</>,
          ]}
        />
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaDark}`}><span>Help me sell my <E />Bike</span></a>
      </section>

      {/* 03 Sell program */}
      <section className={styles.band}>
        <div className={styles.bandInner}>
          <h2 className={`${styles.h2} ${styles.h2Small}`}>Fast &amp; Easy <span className={styles.accent}>Sell Your <E />Bike</span> Program</h2>
          <div className={styles.programGrid}>
            <div className={styles.programPhoto}>
              <Image src="/images/redesign/storefront.jpg" alt="JBird Bikes shop on St. Louis St., New Orleans" fill sizes="(max-width: 900px) 100vw, 600px" />
            </div>
            <div className={styles.programText}>
              <ul className={styles.benefits}>
                {BENEFITS.map((b) => (
                  <li key={b.text}><strong style={{ color: b.color }}>FREE –</strong> {b.text}</li>
                ))}
              </ul>
              <div className={styles.programCta}>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaAccent} ${styles.ctaProgram}`}><span>Let&apos;s sell your <E />Bike</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 FAQ */}
      <Faq items={FAQS} small />
    </main>
  );
}
