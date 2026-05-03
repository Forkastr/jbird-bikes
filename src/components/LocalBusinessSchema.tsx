export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BikeStore', 'LocalBusiness'],
        '@id': 'https://jbirdbikes.com/#localbusiness',
        name: 'JBird Bikes',
        url: 'https://jbirdbikes.com',
        telephone: '+15045216997',
        priceRange: '$$',
        image: 'https://jbirdbikes.com/hero-bike.jpg',
        logo: 'https://jbirdbikes.com/hero-bike.jpg',
        description:
          'Authorized dealer for Gotrax, Aventon, Lectric, Retrospec, Mockwheel, and Vanpowers eBikes in New Orleans. Every bike sold fully assembled with a 21-point safety check and No-Flat tire treatment. Located on the Lafitte Greenway.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2336 St. Louis Street',
          addressLocality: 'New Orleans',
          addressRegion: 'LA',
          postalCode: '70119',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.9678,
          longitude: -90.0811,
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 29.9678,
            longitude: -90.0811,
          },
          geoRadius: '48280',
        },
        sameAs: [
          'https://jbirdbikes.com',
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '10:00',
            closes: '17:00',
          },
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Professional eBike Assembly',
            description:
              'Full professional eBike assembly with a 21-point safety check. Every bike is tuned and tested before you ride.',
            price: '135.00',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            name: 'No-Flat Tire Sealant Treatment',
            description:
              'Proprietary No-Flat tire sealant treatment applied to all new bike sales. Prevents flats on NOLA streets.',
            price: '30.00',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            name: '30-Day Shakeout Tune-Up',
            description:
              'Free 30-day local tune-up included with every new bike purchase. We adjust, tighten, and re-check everything after your first month of riding.',
            price: '0.00',
            priceCurrency: 'USD',
          },
        ],
      },
      {
        '@type': 'Product',
        '@id': 'https://jbirdbikes.com/#product-ebikes',
        name: 'Professional Assembled eBikes — Aventon, Lectric, Retrospec, Gotrax, Mockwheel, Vanpowers',
        description:
          'Authorized dealer stock of Aventon, Lectric, Retrospec, Gotrax, Mockwheel, and Vanpowers eBikes. Every unit sold includes professional 21-point assembly, No-Flat tire treatment, and a 30-day shakeout tune-up. Available for in-store pickup in New Orleans.',
        brand: [
          { '@type': 'Brand', name: 'Aventon' },
          { '@type': 'Brand', name: 'Lectric' },
          { '@type': 'Brand', name: 'Gotrax' },
          { '@type': 'Brand', name: 'Retrospec' },
          { '@type': 'Brand', name: 'Mockwheel' },
          { '@type': 'Brand', name: 'Vanpowers' },
        ],
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '350',
          highPrice: '950',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStore',
          seller: {
            '@type': 'LocalBusiness',
            name: 'JBird Bikes',
          },
        },
        image: 'https://jbirdbikes.com/hero-bike.jpg',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
