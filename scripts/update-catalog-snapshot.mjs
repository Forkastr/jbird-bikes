// Refreshes src/data/catalog-snapshot.json, the copy of the catalog that builds fall back to
// when Google's feed doesn't answer (see src/lib/catalog.ts).
//
//   npm run catalog:snapshot                                  # from the live site
//   npm run catalog:snapshot -- http://localhost:3000/api/catalog   # from a local dev server
//
// It reads /api/catalog rather than the Google feed itself, so the file only ever holds the
// public fields the website already serves (never costs or other private sheet columns).
import { writeFileSync } from 'node:fs';

const url = process.argv[2] || 'https://jbirdbikes.com/api/catalog';
const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
if (!res.ok) throw new Error(`${url} returned HTTP ${res.status}`);
const items = await res.json();
if (!Array.isArray(items) || items.length === 0) throw new Error(`${url} returned no catalog items`);

// One item per line keeps diffs readable.
const file = new URL('../src/data/catalog-snapshot.json', import.meta.url);
writeFileSync(file, '[\n' + items.map((b) => JSON.stringify(b)).join(',\n') + '\n]\n');
console.log(`Saved ${items.length} catalog items from ${url}`);
