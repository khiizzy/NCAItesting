import { sitePages, type Page } from '../config/siteStructure';

const BASE_URL = 'https://www.ncai.com';

export const generateSitemap = (): string => {
  const urlEntries = sitePages
    .map((page) => {
      return `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas if any
User-agent: *
Disallow: /api/
Disallow: /admin/

# Crawl-delay for polite crawling
Crawl-delay: 1
`;
};

export const generateStructuredData = (page: Page) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'North County Aesthetics & Implants',
    description: 'Excellence in digitally integrated dentistry, combining surgical precision with aesthetic mastery.',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    telephone: '+1-760-555-1234',
    email: 'info@ncai.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Aesthetic Boulevard',
      addressLocality: 'North County',
      addressRegion: 'CA',
      postalCode: '92008',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.1',
      longitude: '-117.2',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
    },
  };

  return baseSchema;
};

export const generateServiceSchema = (serviceName: string, description: string, url: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: serviceName,
    description: description,
    url: `${BASE_URL}${url}`,
    medicalSpecialty: 'Dentistry',
    procedureType: 'Therapeutic',
  };
};
