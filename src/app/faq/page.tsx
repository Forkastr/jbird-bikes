import type { Metadata } from 'next';
import HomeHeader from '@/components/home/HomeHeader';
import home from '@/components/home/home.module.css';
import { barlow, dmSans, SNAP_URL, SiteFooter, Disclosures } from '@/components/home/shared';
import FAQAccordion from './FAQAccordion';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'FAQ | JBird Bikes New Orleans — eBike Questions Answered',
  description: 'Got questions about eBikes in New Orleans? JBird Bikes answers the most common questions about buying, financing, assembly, and repair.',
  keywords: [
    'eBike FAQ New Orleans',
    'where to buy eBike New Orleans',
    'eBike assembly cost New Orleans',
    'eBike repair New Orleans',
    'eBike financing New Orleans',
    'Gotrax Aventon Lectric dealer New Orleans',
  ],
  openGraph: {
    title: 'FAQ | JBird Bikes New Orleans',
    description: 'Answers to the most common questions about buying, assembling, and repairing eBikes in New Orleans.',
    url: 'https://jbirdbikes.com/faq',
    images: [{ url: '/hero-bike.jpg', width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    category: 'Buying an eBike',
    items: [
      {
        q: 'Where can I buy a Gotrax, Aventon, or Lectric eBike in New Orleans?',
        a: 'Right here at JBird Bikes, located on the Lafitte Greenway at 2336 St. Louis Street. We are an authorized dealer for Gotrax, Aventon, Lectric, Retrospec, Mockwheel, Vanpowers, and Narrak. Every bike is professionally assembled and ready to ride.',
      },
      {
        q: 'What eBikes do you carry under $1,000?',
        a: 'We carry a full range of eBikes starting at $350. Our catalog includes commuter, folding, mountain, and cargo models from top brands — all priced to compete with online retailers, with the added benefit of professional assembly and local service.',
      },
      {
        q: 'Is financing available?',
        a: 'Yes. We offer lease-to-own financing² through Snap Finance, no credit needed.¹ Apply online in minutes and get a decision in seconds. See the disclosures at the bottom of this page.',
        link: { href: SNAP_URL, label: 'Apply Now with Snap Finance' },
      },
    ],
  },
  {
    category: 'Assembly & Service',
    items: [
      {
        q: 'What is included in your professional assembly?',
        a: 'Every bike we sell comes with our JBird Special — a full 21-point professional assembly that covers fasteners, brakes, gears, electrical connections, spoke tension, cable management, and more. We also apply our No-Flat tire sealant and include a 60-day shakeout tune-up.',
      },
      {
        q: 'How much does eBike assembly cost?',
        a: 'Our flat-rate assembly service is $135. This includes full professional assembly, a 21-point safety inspection, packaging disposal, and a 60-day complimentary adjustment period. If you bought your bike online and need it assembled, bring it in.',
      },
      {
        q: 'Do you repair all brands of eBikes?',
        a: "Yes. We service all brands of eBikes and pedal bikes, not just the ones we sell. Whether it's a vintage cruiser or a complex electric system, we offer a free diagnostic and expert repair.",
      },
      {
        q: 'How much does an eBike tune-up cost?',
        a: 'Our eBike Specialized Tune-Up is $95 and covers 15 points of service including brake adjustment, shifting, electrical inspection, spoke tension, and a full frame clean. We also offer a Safety Check for $65 and a flat tire fix starting at $30.',
      },
    ],
  },
  {
    category: 'Visit Us',
    items: [
      {
        q: 'Where is JBird Bikes located?',
        a: 'We are located at 2336 St. Louis Street, New Orleans, LA 70119 — right on the Lafitte Greenway. You can ride in directly from the trail.',
      },
      {
        q: 'What are your hours?',
        a: 'We are open Monday through Saturday, 10am to 6pm. You can also reach us by phone or text at (504) 521-6997.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.flatMap(cat =>
              cat.items.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />

      <div className={`${home.page} ${barlow.variable} ${dmSans.variable}`}>
        <HomeHeader snapUrl={SNAP_URL} />

        <main>
          <section className={styles.hero}>
            <div className={`${home.wrap} ${styles.heroInner}`}>
              <span className={styles.eyebrow}>Got Questions?</span>
              <h1 className={styles.title}>Frequently Asked Questions</h1>
              <p className={styles.sub}>Everything you need to know about buying, assembling, and servicing eBikes in New Orleans.</p>
            </div>
          </section>

          <div className={`${home.wrap} ${styles.body}`}>
            <FAQAccordion faqs={faqs} />
          </div>

          <section className={`${home.wrap} ${styles.ready}`}>
            <div className={styles.readyCard}>
              <div className={styles.readyText}>
                <h2 className={styles.readyTitle}>Still Have Questions?</h2>
                <p>We&apos;re here Monday–Saturday, 10am–6pm. Call, text, or send us a message.</p>
              </div>
              <div className={styles.readyBtns}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform" target="_blank" rel="noopener noreferrer" className={`${home.btn} ${home.btnYellow} ${styles.readyBtn}`}>Contact Us</a>
                <a href="/sales.html" className={`${home.btn} ${styles.readyBtnWhite} ${styles.readyBtn}`}><span>Browse Our <span className={home.lower}>e</span>Bikes</span></a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />

        {/* Footnotes ¹ and ² in the financing answer. */}
        <Disclosures notes={[1, 2]} />
      </div>
    </>
  );
}
