// Pieces shared by the Sell Your eBike and Trade pages.
import styles from './landing.module.css';

export const PHONE_HREF = 'tel:5045216997';
// Where the main Sell / Trade buttons send people: the shop's Google Form.
export const FORM_URL = 'https://forms.gle/RjvmxTR9xL2i1Xxw7';
export const MAP_URL = 'https://share.google/votmFNHcQjONuZMF3';

// Lowercase "e" that survives the uppercase headings and buttons (eBike).
export function E() {
  return <span className={styles.lower}>e</span>;
}

export function CallTextPill() {
  return (
    <a href={PHONE_HREF} className={styles.callPill}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
      </svg>
      Call / Text Us
    </a>
  );
}

const STEP_COLORS = ['#1f5fc8', '#2e8b3e', '#d43a2f'];

// largeTitle: the Sell page's steps heading has a slightly bigger minimum size than the Trade page's.
export function Steps({ title, steps, largeTitle }: { title: React.ReactNode; steps: React.ReactNode[]; largeTitle?: boolean }) {
  return (
    <>
      <h2 className={`${styles.h2} ${largeTitle ? styles.h2Steps : ''}`}>{title}</h2>
      <ol className={styles.stepList}>
        {steps.map((step, i) => (
          <li key={i} className={styles.step}>
            <span className={styles.stepNum} style={{ background: STEP_COLORS[i] }}>{i + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export function MapLink() {
  return (
    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
      2336 St. Louis St. on the Lafitte Greenway
    </a>
  );
}

export function Faq({ items, small }: { items: { q: React.ReactNode; a: string }[]; small?: boolean }) {
  return (
    <section className={styles.faq}>
      <h2 className={`${styles.h2} ${small ? styles.h2Small : ''}`}>FAQ</h2>
      <div className={styles.faqList}>
        {items.map((item, i) => (
          <details key={i} open={i === 0} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
