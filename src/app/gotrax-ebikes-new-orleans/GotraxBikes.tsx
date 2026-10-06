'use client';

import { useEffect, useState } from 'react';

// Served by the site itself (src/app/api/catalog/route.ts), which caches the Google Sheet feed.
const CATALOG_URL = '/api/catalog';

// eBike categories only; this page is about Gotrax eBikes, not their scooters.
const NON_EBIKE_CATEGORIES = ['escooters', 'etrikes', 'accessories'];

interface Bike {
  Brand?: string;
  Slug: string;
  Title: string;
  'Image-URL': string;
  Range: string;
  Category?: string;
  'JBird Status': string;
}

// Brand comes from the sheet's Brand column; falls back to the Slug prefix (e.g. "Gotrax-ECargo").
function brandOf(b: Bike) {
  const brand = (b.Brand || '').toString().trim();
  return (brand || (b.Slug || '').toString().split('-')[0]).toLowerCase();
}

export default function GotraxBikes() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(CATALOG_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Bike[]) => {
        const gotrax = data.filter(b =>
          brandOf(b) === 'gotrax' &&
          !NON_EBIKE_CATEGORIES.includes((b.Category || '').toString().trim().toLowerCase()) &&
          (b['JBird Status'] || '').toString().trim().toLowerCase() === 'available'
        );
        setBikes(gotrax);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{ height: '300px', background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite', borderRadius: '14px' }} />
        ))}
      </div>
    );
  }

  if (error || bikes.length === 0) {
    return <p style={{ color: '#6b7280', textAlign: 'center', padding: '3rem' }}>No Gotrax bikes currently available. Check back soon or contact us.</p>;
  }

  return (
    <>
      <style>{`
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .g-bike-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.2rem; }
        .g-bike-card { background: white; border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; }
        .g-bike-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(45,106,79,0.13); }
        .g-bike-img { width: 100%; height: 180px; background: #f0f4f0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .g-bike-img img { width: 100%; height: 100%; object-fit: cover; }
        .g-bike-body { padding: 1rem; flex: 1; display: flex; flex-direction: column; }
        .g-bike-status { font-size: 0.65rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #2d6a4f; margin-bottom: 0.4rem; }
        .g-bike-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; letter-spacing: 1px; color: #0a0a0a; margin-bottom: 0.4rem; flex: 1; }
        .g-bike-range { font-size: 0.78rem; color: #6b7280; margin-bottom: 1rem; }
        .g-btn-findout { display: block; text-align: center; background: #2d6a4f; color: white; text-decoration: none; padding: 0.6rem 1rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; transition: background 0.2s; }
        .g-btn-findout:hover { background: #40916c; }
      `}</style>
      <div className="g-bike-grid">
        {bikes.map(bike => {
          return (
            <div className="g-bike-card" key={bike.Slug}>
              <div className="g-bike-img">
                {bike['Image-URL'] ? (
                  <img
                    src={bike['Image-URL']}
                    alt={bike.Title}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <span style={{ fontSize: '0.78rem', color: '#6b7280' }}>Image Coming Soon</span>
                )}
              </div>
              <div className="g-bike-body">
                <div className="g-bike-status">{bike['JBird Status']}</div>
                <div className="g-bike-title">{bike.Title}</div>
                <div className="g-bike-range">{bike.Range ? `Range: ${bike.Range}` : ''}</div>
                <a className="g-btn-findout" href={`/product.html?slug=${encodeURIComponent(bike.Slug)}`}>Find Out More</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
