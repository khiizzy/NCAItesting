import { Helmet } from 'react-helmet-async';
import { BUSINESS_DATA } from '../config/businessData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description = BUSINESS_DATA.description,
  keywords = BUSINESS_DATA.keywords,
  canonical,
  ogType = 'website',
  ogImage = `${BUSINESS_DATA.url}${BUSINESS_DATA.image}`,
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${BUSINESS_DATA.name}`
    : `${BUSINESS_DATA.name} - Premier Dental Implants & Aesthetic Dentistry in San Marcos, CA`;

  const canonicalUrl = canonical || `${BUSINESS_DATA.url}${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BUSINESS_DATA.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content={BUSINESS_DATA.address.addressLocality} />
      <meta name="geo.position" content={`${BUSINESS_DATA.location.latitude};${BUSINESS_DATA.location.longitude}`} />
      <meta name="ICBM" content={`${BUSINESS_DATA.location.latitude}, ${BUSINESS_DATA.location.longitude}`} />

      <meta name="theme-color" content="#0051C6" />
      <meta name="msapplication-TileColor" content="#0051C6" />

      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
}
