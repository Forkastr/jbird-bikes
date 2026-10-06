'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

export type CarouselBike = { name: string; type: string; img: string; href: string };

const ROTATE_MS = 4000;

export default function BikeCarousel({ bikes }: { bikes: CarouselBike[] }) {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const touchX = useRef(0);
  const count = bikes.length;

  const go = useCallback((dir: number) => setI((n) => (n + dir + count) % count), [count]);

  useEffect(() => {
    if (count < 2) return;
    const timer = setInterval(() => {
      if (!paused.current) go(1);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [count, go]);

  if (count === 0) return null;

  return (
    <section className={styles.carouselSection} aria-roledescription="carousel" aria-label="Bikes available now">
      <div className={`${styles.wrap} ${styles.carouselHead}`}>
        <h2 className={styles.h2}>Available now</h2>
        {count > 1 && (
          <div className={styles.carouselArrows}>
            <button type="button" aria-label="Previous" onClick={() => go(-1)}>←</button>
            <button type="button" aria-label="Next" onClick={() => go(1)}>→</button>
          </div>
        )}
      </div>
      <div className={styles.wrap}>
        <div
          className={styles.carouselFrame}
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
          onTouchStart={(e) => { paused.current = true; touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            paused.current = false;
          }}
        >
          <div className={styles.carouselTrack} style={{ transform: `translateX(${-i * 100}%)` }}>
            {bikes.map((b, n) => (
              <a
                key={b.href}
                href={b.href}
                className={styles.slide}
                aria-hidden={n !== i}
                tabIndex={n === i ? 0 : -1}
              >
                <div className={styles.slideImg}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} loading={n === 0 ? 'eager' : 'lazy'} />
                </div>
                <div className={styles.slideBar}>
                  <div className={styles.slideText}>
                    <span className={styles.slideType}>{b.type}</span>
                    <span className={styles.slideName}>{b.name}</span>
                  </div>
                  <span className={styles.slideView}>View →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        {count > 1 && (
          <div className={styles.dots}>
            {bikes.map((b, n) => (
              <button key={b.href} type="button" aria-label={`Show bike ${n + 1}`} aria-current={n === i} onClick={() => setI(n)}>
                <span className={n === i ? styles.dotActive : styles.dot} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
