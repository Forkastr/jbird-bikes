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
  'Subcategory', 'Fits',
];

export type Bike = Record<string, unknown>;

// The sheet tabs don't spell categories the same way (e.g. ETrikes uses "ETrike");
// the website expects the plural forms.
const CATEGORY_ALIASES: Record<string, string> = { etrike: 'ETrikes', escooter: 'EScooters', accessory: 'Accessories' };

function normalizeCategory(b: Bike): Bike {
  // Accessories-tab rows use Category for their own grouping (e.g. "Bags & Storage");
  // the website files them all under Accessories and keeps that grouping as Subcategory.
  if (String(b['Tab'] ?? '').trim().toLowerCase() === 'accessories') {
    return { ...b, Category: 'Accessories', Subcategory: String(b['Category'] ?? '').trim() };
  }
  const alias = CATEGORY_ALIASES[String(b['Category'] ?? '').trim().toLowerCase()];
  return alias ? { ...b, Category: alias } : b;
}

// Google's feed occasionally hangs for ~20s and then returns an error page, so
// each attempt is time-limited and retried. The build waits longer (it falls back to
// the saved copy if the feed stays down); background refreshes on Netlify must finish
// within the function time limit, and a failed refresh just keeps the last good version live.
const IS_BUILD = process.env.NEXT_PHASE === 'phase-production-build';
const ATTEMPTS = 2;
const ATTEMPT_TIMEOUT_MS = IS_BUILD ? 20000 : 4500;

async function fetchOnce(): Promise<Bike[]> {
  const res = await fetch(FEED_URL, { cache: 'no-store', signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`Catalog feed returned HTTP ${res.status}`);

  // Google sometimes returns an HTML error page with status 200, which fails to parse as JSON.
  const data: unknown = await res.json();
  if (!Array.isArray(data) || data.length === 0) throw new Error('Catalog feed returned no bikes');

  const bikes = (data as Bike[])
    .filter((b) => b && typeof b === 'object' && String(b['Slug'] ?? '').trim())
    .map(normalizeCategory)
    .map((b) => Object.fromEntries(PUBLIC_FIELDS.filter((k) => k in b).map((k) => [k, b[k]])));
  if (bikes.length === 0) throw new Error('Catalog feed returned no bikes with a Slug');
  return bikes;
}

// If every attempt fails during a build, the build uses the saved copy in src/data/catalog-snapshot.json
// (refresh it with `npm run catalog:snapshot`) so a slow Google feed can't block a deploy; the live site
// then refreshes from the feed within 5 minutes. Outside a build it throws, which callers rely on so
// Next.js keeps the last good cached version.
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
  if (IS_BUILD) {
    console.warn('Catalog feed unavailable during the build; using the saved copy in src/data/catalog-snapshot.json.');
    return (await import('@/data/catalog-snapshot.json')).default as Bike[];
  }
  throw lastError;
}
