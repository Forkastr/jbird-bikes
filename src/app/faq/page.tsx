import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from './FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | JBird Bikes New Orleans — eBike Questions Answered',
  description: 'Got questions about eBikes in New Orleans? JBird Bikes answers the most common questions about buying, assembly, repair, and the NOLA eBike Incentive Program.',
  keywords: [
    'eBike FAQ New Orleans',
    'where to buy eBike New Orleans',
    'eBike assembly cost New Orleans',
    'eBike repair New Orleans',
    'NOLA eBike incentive questions',
    'Gotrax Aventon Lectric dealer New Orleans',
    'eBike test ride New Orleans',
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
        a: 'Right here at JBird Bikes, located on the Lafitte Greenway at 2336 St. Louis Street. We are an authorized dealer for Gotrax, Aventon, Lectric, Retrospec, Mockwheel, and Vanpowers. Every bike is professionally assembled and ready to ride.',
      },
      {
        q: 'Do you offer test rides?',
        a: 'Yes! We encourage you to test ride before you buy. Come visit us Monday through Saturday, 10am–6pm, and take a ride on the Lafitte Greenway right from our door.',
      },
      {
        q: 'What eBikes do you carry under $1,000?',
        a: 'We carry a full range of eBikes starting at $350. Our catalog includes commuter, folding, mountain, and cargo models from top brands — all priced to compete with online retailers, with the added benefit of professional assembly and local service.',
      },
      {
        q: 'Is financing available?',
        a: 'Yes, financing is available upon purchase. Contact us for details and we will walk you through your options.',
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
        a: 'Our eBike Specialized Tune-Up is $95 and covers 15 points of service including brake adjustment, shifting, electrical inspection, spoke tension, and a full frame clean. We also offer a Safety Check for $35 and a flat tire fix starting at $30.',
      },
    ],
  },
  {
    category: 'NOLA eBike Incentive',
    items: [
      {
        q: 'What is the New Orleans eBike Incentive Program?',
        a: 'The City of New Orleans is launching an Electric Bike Incentive Program funded by a Climate Pollution Reduction Grant from the U.S. Environmental Protection Agency. It will allow eligible New Orleans residents to receive discounts at the register when purchasing a qualified eBike from an authorized local retailer.',
      },
      {
        q: 'Do I qualify for the NOLA eBike incentive?',
        a: "If you live in New Orleans, you may qualify for a standard discount. If you receive government assistance, you may qualify for a larger discount. We are keeping track of the program's progress and will help you through the process. Contact us to find out more.",
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

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-hero { background: #0a0a0a; color: white; padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .faq-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, #2d6a4f33 0%, transparent 70%); }
        .faq-hero-inner { position: relative; max-width: 700px; margin: 0 auto; }
        .faq-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4a261; margin-bottom: 0.8rem; }
        .faq-hero h1 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1; color: white; margin-bottom: 1rem; letter-spacing: 2px; }
        .faq-hero p { font-size: 1rem; line-height: 1.75; color: #d1d5db; max-width: 540px; margin: 0 auto; }
        .faq-cta { background: #2d6a4f; color: white; text-align: center; padding: 3rem 2rem; }
        .faq-cta h2 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; letter-spacing: 2px; margin-bottom: 0.5rem; }
        .faq-cta p { color: #d8f3dc; font-size: 0.95rem; margin-bottom: 1.5rem; }
        .btn-cta { display: inline-block; background: #f4a261; color: #0a0a0a; padding: 0.8rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; margin: 0 0.5rem 0.5rem; }
        .btn-cta-outline { display: inline-block; background: transparent; border: 2px solid white; color: white; padding: 0.8rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; margin: 0 0.5rem 0.5rem; }
      ` }} />

      <Header />

      <div className="faq-hero">
        <div className="faq-hero-inner">
          <div className="faq-eyebrow">Got Questions?</div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about buying, assembling, and servicing eBikes in New Orleans.</p>
        </div>
      </div>

      <FAQAccordion faqs={faqs} />

      <div className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>We're here Monday–Saturday, 10am–6pm. Call, text, or send us a message.</p>
        <a className="btn-cta" href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform" target="_blank">Contact Us</a>
        <a className="btn-cta-outline" href="/sales.html">Browse Our eBikes</a>
      </div>

      <Footer />
    </>
  );
}
