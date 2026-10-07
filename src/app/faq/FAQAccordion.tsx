'use client';

import { useState } from 'react';
import styles from './faq.module.css';

interface FAQItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function FAQAccordion({ faqs }: { faqs: FAQCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(prev => prev === key ? null : key);
  };

  return (
    <>
      {faqs.map((cat, ci) => (
        <div className={styles.category} key={ci}>
          <h2 className={styles.categoryTitle}>{cat.category}</h2>
          {cat.items.map((item, ii) => {
            const key = `${ci}-${ii}`;
            const isOpen = openIndex === key;
            return (
              <div className={styles.item} key={ii}>
                <button
                  type="button"
                  className={`${styles.question}${isOpen ? ` ${styles.questionOpen}` : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => toggle(key)}
                >
                  {item.q}
                  <span className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ''}`} aria-hidden="true">▼</span>
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    {item.a}
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer" className={styles.answerLink}>{item.link.label}</a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
