import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jbirdbikes.com'),
  title: {
    default: 'JBird Bikes | Authorized Dealer: Gotrax, Aventon, Lectric eBikes New Orleans',
    template: '%s | JBird Bikes New Orleans',
  },
  description:
    'Buy Gotrax, Aventon, Lectric & Retrospec eBikes fully assembled with local service on the Lafitte Greenway in New Orleans. In-store pickup today!',
  keywords: [
    'Aventon eBikes New Orleans',
    'Lectric eBike dealer NOLA',
    'Gotrax eBike shop',
    'Mockwheel eBike New Orleans',
    'Retrospec eBike dealer',
    'Vanpowers eBike NOLA',
    'buy eBike fully assembled New Orleans',
    'local eBike repair Lafitte Greenway',
    'eBikes under 1000 New Orleans',
    'authorized eBike dealer New Orleans',
    'eBike assembly service New Orleans',
    'electric bike shop NOLA',
  ],
  authors: [{ name: 'JBird Bikes', url: 'https://jbirdbikes.com' }],
  creator: 'JBird Bikes',
  publisher: 'JBird Bikes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jbirdbikes.com',
    siteName: 'JBird Bikes New Orleans',
    title: 'JBird Bikes | Authorized Dealer: Gotrax, Aventon, Lectric eBikes New Orleans',
    description:
      'Buy Gotrax, Aventon, Lectric & Retrospec eBikes fully assembled with local service on the Lafitte Greenway in New Orleans. In-store pickup today!',
    images: [
      {
        url: '/hero-bike.jpg',
        width: 1200,
        height: 630,
        alt: 'JBird Bikes — Authorized eBike Dealer on the Lafitte Greenway, New Orleans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JBird Bikes | Authorized eBike Dealer — New Orleans',
    description:
      'Buy Gotrax, Aventon, Lectric & Retrospec eBikes fully assembled with local service on the Lafitte Greenway in New Orleans. In-store pickup today!',
    images: ['/hero-bike.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jbirdbikes.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
