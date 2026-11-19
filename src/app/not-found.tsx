import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '96px 16px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Page not found</h1>
      <p style={{ marginBottom: 24 }}>That page doesn&apos;t exist. Try one of these instead.</p>
      <p>
        <Link href="/">Home</Link> · <a href="/sales.html">eBikes for sale</a> ·{' '}
        <a href="/repairs.html">Repairs</a> · <Link href="/sell">Sell your eBike</Link>
      </p>
    </main>
  );
}
