import { NextResponse } from 'next/server';
import { fetchCatalog } from '@/lib/catalog';

// Served from Netlify's CDN cache and refreshed in the background every
// 5 minutes, so sheet edits go live within ~5 minutes.
export const dynamic = 'force-static';
export const revalidate = 300;

export async function GET() {
  // Throwing keeps the last good catalog live: Next.js only replaces the
  // cached response when regeneration succeeds.
  return NextResponse.json(await fetchCatalog());
}
