import { Helmet } from 'react-helmet-async';
import { BUSINESS_DATA } from '../config/businessData';

interface StructuredDataProps {
  type?: 'home' | 'service' | 'about' | 'contact';
  serviceName?: string;
  serviceDescription?: string;
}

export default function StructuredData({ type = 'home', serviceName, serviceDescription }: StructuredDataProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${BUSINESS_DATA.url}/#organization`,
    "name": BUSINESS_DATA.name,
    "legalName": BUSINESS_DATA.legalName,
    "description": BUSINESS_DATA.description,
    "url": BUSINESS_DATA.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`,
      "width": 600,
      "height": 60
    },
    "image": {
      "@type": "ImageObject",
      "url": `${BUSINESS_DATA.url}${BUSINESS_DATA.image}`,
      "width": 1200,
      "height": 630
    },
    "telephone": BUSINESS_DATA.contact.phoneFormatted,
    "email": BUSINESS_DATA.contact.email,
    "priceRange": BUSINESS_DATA.priceRange,
    "paymentAccepted": BUSINESS_DATA.paymentAccepted.join(", "),
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DATA.address.streetAddress,
      "addressLocality": BUSINESS_DATA.address.addressLocality,
      "addressRegion": BUSINESS_DATA.address.addressRegion,
      "postalCode": BUSINESS_DATA.address.postalCode,
      "addressCountry": BUSINESS_DATA.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DATA.location.latitude,
      "longitude": BUSINESS_DATA.location.longitude
    },
    "hasMap": `https://www.google.com/maps?q=${BUSINESS_DATA.location.latitude},${BUSINESS_DATA.location.longitude}`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "areaServed": BUSINESS_DATA.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "medicalSpecialty": BUSINESS_DATA.specialties,
    "availableService": BUSINESS_DATA.services.map(service => ({
      "@type": "MedicalProcedure",
      "name": service
    })),
    "founder": {
      "@type": "Person",
      "name": BUSINESS_DATA.founder.name,
      "jobTitle": "Founder & Lead Dentist"
    },
    "foundingDate": BUSINESS_DATA.yearEstablished.toString(),
    "sameAs": [
      BUSINESS_DATA.social.facebook,
      BUSINESS_DATA.social.instagram,
      BUSINESS_DATA.social.linkedin
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BUSINESS_DATA.url
      },
      ...(serviceName ? [{
        "@type": "ListItem",
        "position": 2,
        "name": serviceName,
        "item": `${BUSINESS_DATA.url}${window.location.pathname}`
      }] : [])
    ]
  };

  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": serviceName,
    "description": serviceDescription || "",
    "provider": {
      "@id": `${BUSINESS_DATA.url}/#organization`
    },
    "availableAt": {
      "@type": "MedicalClinic",
      "name": BUSINESS_DATA.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_DATA.address.streetAddress,
        "addressLocality": BUSINESS_DATA.address.addressLocality,
        "addressRegion": BUSINESS_DATA.address.addressRegion,
        "postalCode": BUSINESS_DATA.address.postalCode
      }
    }
  } : null;

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_DATA.name,
    "url": BUSINESS_DATA.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BUSINESS_DATA.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {type === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
}
