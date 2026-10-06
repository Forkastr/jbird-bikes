'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

const MENU_LINKS = [
  { href: '/sales.html', label: 'Bike Sales' },
  { href: '/repairs.html', label: 'Repairs & Service' },
  { href: '/assembly.html', label: 'eBike Assembly' },
  { href: '/about.html', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

const LOGO = [
  [['j', '#d43a2f'], ['-', undefined], ['b', '#1f5fc8'], ['i', '#2e8b3e'], ['r', '#d43a2f'], ['d', '#c99700']],
  [['b', '#1f5fc8'], ['i', '#c99700'], ['k', '#b3263a'], ['e', '#2e8b3e'], ['s', '#d43a2f']],
] as const;

export default function HomeHeader({ snapUrl }: { snapUrl: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
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
        <div className={styles.headerActions} ref={wrapRef}>
          <a href="tel:5045216997" className={styles.headerPhone}>(504) 521-6997</a>
          <a href={snapUrl} target="_blank" rel="noopener noreferrer" className={styles.headerApply}>Apply Now</a>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="home-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
          {open && (
            <nav id="home-menu" className={styles.menuPanel}>
              {MENU_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
