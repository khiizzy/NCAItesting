export interface ImageMetadata {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  caption?: string;
  license?: string;
}

export interface ImageSEOConfig {
  url: string;
  alt: string;
  title?: string;
  caption?: string;
  geoLocation?: string;
  license?: string;
}

export const generateImageSEOFileName = (description: string): string => {
  return description
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
};

export const generateStructuredImageData = (image: ImageSEOConfig) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: image.url,
    name: image.title || image.alt,
    description: image.caption || image.alt,
    license: image.license,
    acquireLicensePage: image.license,
  };
};

export const generateImageSitemap = (images: ImageSEOConfig[]): string => {
  const imageEntries = images
    .map(
      (img) => `
    <url>
      <loc>${img.url}</loc>
      <image:image>
        <image:loc>${img.url}</image:loc>
        <image:caption>${img.caption || img.alt}</image:caption>
        <image:title>${img.title || img.alt}</image:title>
      </image:image>
    </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imageEntries}
</urlset>`;
};

export const getResponsiveSizes = (
  type: 'hero' | 'card' | 'thumbnail' | 'full'
): string => {
  const sizeMap = {
    hero: '100vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px',
    full: '100vw',
  };
  return sizeMap[type];
};

export const generateSrcSet = (
  baseUrl: string,
  widths: number[] = [400, 800, 1200, 1600, 2000]
): string => {
  if (baseUrl.includes('pexels.com')) {
    return widths.map((w) => `${baseUrl}&w=${w} ${w}w`).join(', ');
  }
  return widths.map((w) => `${baseUrl}?w=${w} ${w}w`).join(', ');
};

export const imageAltTextGuidelines = {
  good: [
    'Dental implant procedure showing titanium post placement',
    'Before and after porcelain veneers transformation',
    'Dr. Smith performing smile makeover consultation',
    'Modern dental technology 3D scanner in use',
  ],
  bad: [
    'image1.jpg',
    'dental',
    'picture of teeth',
    'IMG_20231015_001',
  ],
  rules: [
    'Be specific and descriptive (10-125 characters)',
    'Include relevant keywords naturally',
    'Describe what is shown, not what you want to rank for',
    'Avoid "image of" or "picture of"',
    'Include procedure names and contexts',
    'For decorative images, use empty alt=""',
  ],
};

export const compressImageRecommendations = {
  formats: {
    webp: 'Best modern format - 25-35% smaller than JPEG',
    avif: 'Next-gen format - 50% smaller than JPEG (limited support)',
    jpeg: 'Good for photographs with quality 80-85',
    png: 'Use only for images requiring transparency',
    svg: 'Perfect for logos and icons',
  },
  tools: [
    'TinyPNG (https://tinypng.com) - Free online compression',
    'Squoosh (https://squoosh.app) - Google web app',
    'ImageOptim - Mac application',
    'Sharp - Node.js library for automation',
  ],
  targetSizes: {
    hero: '< 200KB',
    card: '< 100KB',
    thumbnail: '< 50KB',
    logo: '< 20KB',
  },
};
