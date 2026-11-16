'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SiteChrome.module.css';

const PHONE_HREF = 'tel:5045216997';

// Primary pill nav. /sales.html and /repairs.html are static pages in public/, so they use plain links.
const NAV = [
  { href: '/sales.html', label: 'Buy', className: styles.pillBuy },
  { href: '/sell-your-ebike', label: 'Sell', className: styles.pillSell },
  { href: '/trade', label: 'Trade', className: styles.pillTrade },
  { href: '/repairs.html', label: 'Repair', className: styles.pillRepair },
];

const MENU_LINKS = [
  { href: '/sell-your-ebike', label: 'Sell Your eBike' },
  { href: '/repairs.html', label: 'Repairs & Services' },
  { href: '/sales.html', label: 'Rides for Sale' },
  { href: '/assembly.html', label: 'eBike Assembly' },
  { href: '/about.html', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

const LOGO = [
  [['j', '#d43a2f'], ['-', undefined], ['b', '#1f5fc8'], ['i', '#2e8b3e'], ['r', '#d43a2f'], ['d', '#c99700']],
  [['b', '#1f5fc8'], ['i', '#c99700'], ['k', '#b3263a'], ['e', '#2e8b3e'], ['s', '#d43a2f']],
] as const;

// Keeps the lowercase "e" in eBike while the rest of the label is uppercase.
function MenuLabel({ text }: { text: string }) {
  const parts = text.split(/\be(?=Bike)/);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className={styles.lower}>e</span>}
          {part}
        </span>
      ))}
    </>
  );
}

// Next routes get client-side navigation; the static .html pages need a full page load.
function SiteLink({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return href.endsWith('.html') ? <a href={href} {...rest} /> : <Link href={href} {...rest} />;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

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

  // Sticky on inner pages only; the homepage header scrolls away with the hero.
  const sticky = pathname !== '/';

  return (
    <header className={`${styles.header} ${sticky ? styles.sticky : ''}`}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="JBird Bikes home" className={styles.logo}>
          {LOGO.map((word, w) => (
            <span key={w} className={styles.logoWord}>
              {word.map(([ch, color], i) => (
                <span key={i} style={color ? { color } : undefined}>{ch}</span>
              ))}
            </span>
          ))}
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          {NAV.map((item) => (
            <SiteLink key={item.href} href={item.href} className={`${styles.pill} ${item.className}`}>{item.label}</SiteLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={PHONE_HREF} className={styles.call} aria-label="Call us at (504) 521-6997">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            Call Us
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className={styles.menuOverlay} onClick={() => setOpen(false)} />
          <nav id="site-menu" aria-label="Main" className={styles.menuDrawer}>
            <button ref={closeRef} type="button" aria-label="Close menu" className={styles.menuClose} onClick={() => setOpen(false)}>✕</button>
            {MENU_LINKS.map((l) => (
              <SiteLink key={l.href} href={l.href} className={styles.menuLink} onClick={() => setOpen(false)}>
                <MenuLabel text={l.label} />
              </SiteLink>
            ))}
            <a href={PHONE_HREF} className={styles.menuPhone}>(504) 521-6997</a>
          </nav>
        </>
      )}
    </header>
  );
}
