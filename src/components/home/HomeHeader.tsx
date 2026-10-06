'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

// Same menu as the slide-in panel on /sales.html; keep the two in sync.
const MENU_LINKS = [
  { href: '/repairs.html', label: 'Repairs & Services' },
  { href: '/sales.html', label: 'eRides for Sale' },
  { href: '/assembly.html', label: 'eBike Assembly' },
  { href: '/about.html', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

// Keeps the lowercase "e" in eBike / eRides while the rest of the label is uppercase.
function MenuLabel({ text }: { text: string }) {
  const m = text.match(/^e(?=[A-Z])/);
  return m ? <><span className={styles.lower}>e</span>{text.slice(1)}</> : <>{text}</>;
}

const LOGO = [
  [['j', '#d43a2f'], ['-', undefined], ['b', '#1f5fc8'], ['i', '#2e8b3e'], ['r', '#d43a2f'], ['d', '#c99700']],
  [['b', '#1f5fc8'], ['i', '#c99700'], ['k', '#b3263a'], ['e', '#2e8b3e'], ['s', '#d43a2f']],
] as const;

export default function HomeHeader({ snapUrl }: { snapUrl: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="/" aria-label="JBird Bikes home" className={styles.logo}>
          {LOGO.map((word, w) => (
            <span key={w} className={styles.logoWord}>
              {word.map(([ch, color], i) => (
                <span key={i} style={color ? { color } : undefined}>{ch}</span>
              ))}
            </span>
          ))}
        </a>
        <div className={styles.headerActions}>
          <a href="tel:5045216997" className={styles.headerPhone}>(504) 521-6997</a>
          <a href={snapUrl} target="_blank" rel="noopener noreferrer" className={styles.headerApply}>Apply Now</a>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <span className={styles.burger} aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>
      {open && (
        <>
          <div className={styles.menuOverlay} onClick={() => setOpen(false)} />
          <nav id="site-menu" aria-label="Main" className={styles.menuDrawer}>
            <button ref={closeRef} type="button" aria-label="Close menu" className={styles.menuClose} onClick={() => setOpen(false)}>✕</button>
            {MENU_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.menuLink} onClick={() => setOpen(false)}><MenuLabel text={l.label} /></a>
            ))}
            <a href="tel:5045216997" className={styles.menuPhone}>(504) 521-6997</a>
          </nav>
        </>
      )}
    </header>
  );
}
