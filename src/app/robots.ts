import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/print.html'],
      },
    ],
    sitemap: 'https://jbirdbikes.com/sitemap.xml',
    host: 'https://jbirdbikes.com',
  };
}
