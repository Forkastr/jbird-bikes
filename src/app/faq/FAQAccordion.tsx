'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
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
      <style>{`
        .faq-body { max-width: 860px; margin: 0 auto; padding: 3rem 1.5rem; }
        .faq-category { margin-bottom: 3rem; }
        .faq-category-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 2px;
          color: #0a0a0a;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #d8f3dc;
        }
        .faq-item { border: 1px solid #e5e7eb; border-radius: 12px; margin-bottom: 0.8rem; overflow: hidden; background: white; }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.2rem 1.5rem;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #0a0a0a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: background 0.15s;
        }
        .faq-question:hover { background: #f0fdf4; }
        .faq-question.open { background: #f0fdf4; color: #2d6a4f; }
        .faq-chevron { font-size: 0.9rem; color: #2d6a4f; flex-shrink: 0; transition: transform 0.2s; }
        .faq-chevron.open { transform: rotate(180deg); }
        .faq-answer { padding: 1rem 1.5rem 1.2rem; font-size: 0.95rem; line-height: 1.8; color: #374151; border-top: 1px solid #e5e7eb; }
        @media (max-width: 600px) {
          .faq-question { font-size: 0.9rem; padding: 1rem; }
          .faq-answer { padding: 0.8rem 1rem 1rem; }
        }
      `}</style>

      <div className="faq-body">
        {faqs.map((cat, ci) => (
          <div className="faq-category" key={ci}>
            <div className="faq-category-title">{cat.category}</div>
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`;
              const isOpen = openIndex === key;
              return (
                <div className="faq-item" key={ii}>
                  <button
                    className={`faq-question${isOpen ? ' open' : ''}`}
                    onClick={() => toggle(key)}
                  >
                    {item.q}
                    <span className={`faq-chevron${isOpen ? ' open' : ''}`}>▼</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
