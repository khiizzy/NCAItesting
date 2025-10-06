export interface Page {
  id: string;
  title: string;
  url: string;
  metaDescription?: string;
  parent?: string;
  priority: number;
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface InternalLink {
  fromPage: string;
  toPage: string;
  anchorText: string[];
  context: string;
  importance: 'high' | 'medium' | 'low';
}

export const sitePages: Page[] = [
  {
    id: 'home',
    title: 'North County Aesthetics & Implants - Premium Dental Care',
    url: '/',
    priority: 1.0,
    changeFreq: 'weekly',
    metaDescription: 'Excellence in digitally integrated dentistry. Precision implants, aesthetic dentistry, and regenerative care.',
  },
  {
    id: 'about',
    title: 'About NCAI - Expert Implant & Aesthetic Dentistry',
    url: '/about',
    priority: 0.9,
    changeFreq: 'monthly',
  },
  {
    id: 'about-hafeez',
    title: 'Dr. Khizer Hafeez - Implant Dentistry Specialist',
    url: '/about/dr-hafeez',
    parent: 'about',
    priority: 0.7,
    changeFreq: 'monthly',
  },
  {
    id: 'about-ayazi',
    title: 'Dr. Dariyan Ayazi - Aesthetic Dentistry Expert',
    url: '/about/dr-ayazi',
    parent: 'about',
    priority: 0.7,
    changeFreq: 'monthly',
  },
  {
    id: 'procedures',
    title: 'Dental Procedures - Implants, Cosmetics & Regenerative Care',
    url: '/procedures',
    priority: 0.9,
    changeFreq: 'monthly',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants - Permanent Tooth Replacement',
    url: '/procedures/dental-implants',
    parent: 'procedures',
    priority: 0.8,
    changeFreq: 'monthly',
  },
  {
    id: 'full-arch',
    title: 'Full-Arch Restoration - All-on-X Treatment',
    url: '/procedures/full-arch-restoration',
    parent: 'procedures',
    priority: 0.8,
    changeFreq: 'monthly',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry - Veneers & Smile Design',
    url: '/procedures/cosmetic-dentistry',
    parent: 'procedures',
    priority: 0.8,
    changeFreq: 'monthly',
  },
  {
    id: 'prf-therapy',
    title: 'PRF Therapy - Regenerative Dental Care',
    url: '/procedures/prf-therapy',
    parent: 'procedures',
    priority: 0.7,
    changeFreq: 'monthly',
  },
  {
    id: 'technology',
    title: 'Dental Technology - CBCT, 3D Printing & Digital Workflow',
    url: '/technology',
    priority: 0.8,
    changeFreq: 'monthly',
  },
  {
    id: 'cbct-imaging',
    title: 'CBCT Imaging - 3D Dental Scanning Technology',
    url: '/technology/cbct-imaging',
    parent: 'technology',
    priority: 0.6,
    changeFreq: 'yearly',
  },
  {
    id: '3d-printing',
    title: 'SprintRay 3D Printing - Chairside Dental Fabrication',
    url: '/technology/3d-printing',
    parent: 'technology',
    priority: 0.6,
    changeFreq: 'yearly',
  },
  {
    id: 'gallery',
    title: 'Before & After Gallery - Smile Transformations',
    url: '/gallery',
    priority: 0.8,
    changeFreq: 'weekly',
  },
  {
    id: 'experience',
    title: 'Patient Experience - Comfort-First Dental Care',
    url: '/experience',
    priority: 0.7,
    changeFreq: 'monthly',
  },
  {
    id: 'contact',
    title: 'Contact Us - Schedule Your Consultation',
    url: '/contact',
    priority: 0.9,
    changeFreq: 'monthly',
  },
];

export const internalLinks: InternalLink[] = [
  {
    fromPage: 'home',
    toPage: 'dental-implants',
    anchorText: ['dental implants', 'implant dentistry', 'permanent tooth replacement'],
    context: 'hero-cta',
    importance: 'high',
  },
  {
    fromPage: 'home',
    toPage: 'full-arch',
    anchorText: ['full-arch restoration', 'All-on-X treatment', 'complete smile reconstruction'],
    context: 'procedures-section',
    importance: 'high',
  },
  {
    fromPage: 'about',
    toPage: 'about-hafeez',
    anchorText: ['Dr. Khizer Hafeez', 'meet Dr. Hafeez', 'our implant specialist'],
    context: 'team-section',
    importance: 'high',
  },
  {
    fromPage: 'about',
    toPage: 'about-ayazi',
    anchorText: ['Dr. Dariyan Ayazi', 'meet Dr. Ayazi', 'our aesthetic dentistry expert'],
    context: 'team-section',
    importance: 'high',
  },
  {
    fromPage: 'dental-implants',
    toPage: 'cbct-imaging',
    anchorText: ['CBCT imaging', 'advanced 3D imaging', 'precise surgical planning'],
    context: 'technology-mention',
    importance: 'medium',
  },
  {
    fromPage: 'dental-implants',
    toPage: 'prf-therapy',
    anchorText: ['PRF therapy', 'regenerative biologics', 'enhanced healing'],
    context: 'complementary-treatment',
    importance: 'medium',
  },
  {
    fromPage: 'full-arch',
    toPage: '3d-printing',
    anchorText: ['3D printing technology', 'chairside fabrication', 'same-day temporaries'],
    context: 'technology-mention',
    importance: 'medium',
  },
  {
    fromPage: 'cosmetic',
    toPage: 'gallery',
    anchorText: ['view before and after photos', 'see smile transformations', 'explore our gallery'],
    context: 'social-proof',
    importance: 'high',
  },
  {
    fromPage: 'technology',
    toPage: 'dental-implants',
    anchorText: ['implant procedures', 'surgical applications', 'learn about implants'],
    context: 'application-example',
    importance: 'medium',
  },
  {
    fromPage: 'procedures',
    toPage: 'about-hafeez',
    anchorText: ['Dr. Hafeez', 'our implant specialist'],
    context: 'expert-mention',
    importance: 'medium',
  },
  {
    fromPage: 'procedures',
    toPage: 'about-ayazi',
    anchorText: ['Dr. Ayazi', 'our aesthetic dentistry expert'],
    context: 'expert-mention',
    importance: 'medium',
  },
  {
    fromPage: 'experience',
    toPage: 'contact',
    anchorText: ['schedule a consultation', 'book your visit', 'contact us today'],
    context: 'conversion-cta',
    importance: 'high',
  },
];

export const relatedContentMap: Record<string, string[]> = {
  'dental-implants': ['full-arch', 'prf-therapy', 'cbct-imaging', 'about-hafeez'],
  'full-arch': ['dental-implants', '3d-printing', 'gallery', 'about-hafeez'],
  'cosmetic': ['gallery', 'about-ayazi', 'experience'],
  'prf-therapy': ['dental-implants', 'full-arch', 'technology'],
  'cbct-imaging': ['dental-implants', 'full-arch', '3d-printing'],
  '3d-printing': ['full-arch', 'cbct-imaging', 'technology'],
  'about-hafeez': ['dental-implants', 'full-arch', 'technology'],
  'about-ayazi': ['cosmetic', 'gallery', 'experience'],
};

export const findPageById = (id: string): Page | undefined => {
  return sitePages.find((page) => page.id === id);
};

export const getRelatedPages = (pageId: string): Page[] => {
  const relatedIds = relatedContentMap[pageId] || [];
  return relatedIds.map(findPageById).filter((page): page is Page => page !== undefined);
};

export const getBreadcrumbs = (pageId: string): Array<{ label: string; href: string }> => {
  const page = findPageById(pageId);
  if (!page) return [];

  const breadcrumbs: Array<{ label: string; href: string }> = [];

  if (page.parent) {
    const parentPage = findPageById(page.parent);
    if (parentPage) {
      breadcrumbs.push({ label: parentPage.title, href: parentPage.url });
    }
  }

  breadcrumbs.push({ label: page.title, href: page.url });

  return breadcrumbs;
};
