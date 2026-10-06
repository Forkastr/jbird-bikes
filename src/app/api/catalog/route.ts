import { NextResponse } from 'next/server';

// Catalog feed (Google Apps Script). Served from Netlify's CDN cache and
// refreshed in the background every 5 minutes, so sheet edits go live within ~5 minutes.
const FEED_URL =
  'https://script.google.com/macros/s/AKfycbxNgtD8K0-yhy505ROQCnRjyyvoim2jVEICq8j81Fbmlm7ko67YOT-BegaByivXlE7aqg/exec';

export const dynamic = 'force-static';
export const revalidate = 300;

// Only these fields reach the website, even if the sheet ever sends more (e.g. costs or margins).
const PUBLIC_FIELDS = [
  'Brand', 'Slug', 'Title', 'Description', 'Image-URL', 'Colors Available',
  'Range', 'Top Speed', 'Tire Size', 'Payload', 'Motor Size',
  'Easy Storage', 'Warranty', 'Safety', 'Category', 'Test Ride Available',
  'JBird Status', 'Battery', 'Battery Size', 'Class', 'Bike Weight',
  'Charge Time', 'Charger', 'Headlight', 'Sensor Type', 'Frame Material',
  'Waterproof Rating', 'Display / Console', 'Gears', 'Suspension', 'Brakes',
  'JBird Retail Price',
];

type Bike = Record<string, unknown>;

export async function GET() {
  const res = await fetch(FEED_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Catalog feed returned HTTP ${res.status}`);

  // Throwing here keeps the last good catalog live: Next.js only replaces the
  // cached response when regeneration succeeds. Google sometimes returns an
  // HTML error page with status 200, which fails to parse as JSON.
  const data: unknown = await res.json();
  if (!Array.isArray(data) || data.length === 0) throw new Error('Catalog feed returned no bikes');

  const bikes = (data as Bike[])
    .filter((b) => b && typeof b === 'object' && String(b['Slug'] ?? '').trim())
    .map((b) => Object.fromEntries(PUBLIC_FIELDS.filter((k) => k in b).map((k) => [k, b[k]])));
  if (bikes.length === 0) throw new Error('Catalog feed returned no bikes with a Slug');

  return NextResponse.json(bikes);
}
