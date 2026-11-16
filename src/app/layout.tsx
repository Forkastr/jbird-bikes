import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { barlow, dmSans } from '@/lib/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jbirdbikes.com'),
  title: {
    default: 'JBird Bikes | Lease-to-Own eBikes in New Orleans',
    template: '%s | JBird Bikes New Orleans',
  },
  description:
    'Flexible lease-to-own options on eBikes. Check your eligibility and terms in minutes. Local shop on the Lafitte Greenway.',
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
    title: 'JBird Bikes | Lease-to-Own eBikes in New Orleans',
    description:
      'Flexible lease-to-own options on eBikes. Check your eligibility and terms in minutes. Local shop on the Lafitte Greenway.',
    images: [
      {
        url: '/hero-bike.jpg',
        width: 1200,
        height: 630,
        alt: 'JBird Bikes — Lease-to-Own eBikes in New Orleans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JBird Bikes | Lease-to-Own eBikes in New Orleans',
    description:
      'Flexible lease-to-own options on eBikes. Check your eligibility and terms in minutes. Local shop on the Lafitte Greenway.',
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
     <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M3FXW67JFV" />
        <Script id="google-tag" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-M3FXW67JFV');`}
        </Script>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2622313938237789');
fbq('track', 'PageView');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${inter.className} ${barlow.variable} ${dmSans.variable}`}>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=2622313938237789&ev=PageView&noscript=1" alt="" />
        </noscript>
        <Header />
        {children}
        <Footer />
        <Script id="meta-lead" strategy="afterInteractive">
          {`document.addEventListener('click', function (e) {
  var a = e.target instanceof Element ? e.target.closest('a') : null;
  if (!a || typeof fbq !== 'function') return;
  if (/kDxn67zHqWbz9AiXA|zWrq6nnSNzs2j9Z69/.test(a.href)) {
    fbq('track', 'Lead', {content_name: 'JBird Apply Form'});
  }
});`}
        </Script>
      </body>
    </html>
  );
}
