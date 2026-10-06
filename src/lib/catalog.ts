// Shared catalog loader for /api/catalog and the homepage carousel.
// Fetches the Google Apps Script feed and keeps only public fields.
const FEED_URL =
  'https://script.google.com/macros/s/AKfycbxNgtD8K0-yhy505ROQCnRjyyvoim2jVEICq8j81Fbmlm7ko67YOT-BegaByivXlE7aqg/exec';

// Only these fields reach the website, even if the sheet ever sends more (e.g. costs or margins).
const PUBLIC_FIELDS = [
  'Brand', 'Slug', 'Title', 'Description', 'Image-URL', 'Colors Available',
  'Range', 'Top Speed', 'Tire Size', 'Payload', 'Motor Size',
  'Easy Storage', 'Warranty', 'Safety', 'Category', 'Test Ride Available',
  'JBird Status', 'Battery', 'Battery Size', 'Class', 'Bike Weight',
  'Charge Time', 'Charger', 'Headlight', 'Sensor Type', 'Frame Material',
  'Waterproof Rating', 'Display / Console', 'Gears', 'Suspension', 'Brakes',
  'JBird Retail Price', 'Cash Price', 'Lease to Own Weekly', 'Same-As-Cash',
];

export type Bike = Record<string, unknown>;

// Google's feed occasionally hangs for ~20s and then returns an error page, so
// each attempt is time-limited and retried. The build has no time limit, so it
// tries harder; background refreshes on Netlify must finish within the function
// time limit, and a failed refresh just keeps the last good version live.
const IS_BUILD = process.env.NEXT_PHASE === 'phase-production-build';
const ATTEMPTS = IS_BUILD ? 3 : 2;
const ATTEMPT_TIMEOUT_MS = IS_BUILD ? 30000 : 4500;

async function fetchOnce(): Promise<Bike[]> {
  const res = await fetch(FEED_URL, { cache: 'no-store', signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`Catalog feed returned HTTP ${res.status}`);

  // Google sometimes returns an HTML error page with status 200, which fails to parse as JSON.
  const data: unknown = await res.json();
  if (!Array.isArray(data) || data.length === 0) throw new Error('Catalog feed returned no bikes');

  const bikes = (data as Bike[])
    .filter((b) => b && typeof b === 'object' && String(b['Slug'] ?? '').trim())
    .map((b) => Object.fromEntries(PUBLIC_FIELDS.filter((k) => k in b).map((k) => [k, b[k]])));
  if (bikes.length === 0) throw new Error('Catalog feed returned no bikes with a Slug');
  return bikes;
}

// Throws if every attempt fails; callers rely on that so Next.js keeps the last good cached version.
export async function fetchCatalog(): Promise<Bike[]> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      return await fetchOnce();
    } catch (err) {
      lastError = err;
      console.warn(`Catalog feed attempt ${attempt}/${ATTEMPTS} failed:`, err instanceof Error ? err.message : err);
    }
  }
  throw lastError;
}
