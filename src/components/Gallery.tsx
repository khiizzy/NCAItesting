import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryItem {
  id: number;
  before: string;
  after: string;
  category: string;
  description: string;
  procedure: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    before: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Veneers',
    description: 'Complete smile transformation with porcelain veneers',
    procedure: 'Porcelain Veneers'
  },
  {
    id: 2,
    before: 'https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Implants',
    description: 'Full arch restoration with dental implants',
    procedure: 'All-on-4 Dental Implants'
  },
  {
    id: 3,
    before: 'https://images.pexels.com/photos/6502309/pexels-photo-6502309.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/6529056/pexels-photo-6529056.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Whitening',
    description: 'Professional teeth whitening results',
    procedure: 'Professional Whitening'
  },
  {
    id: 4,
    before: 'https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cosmetic',
    description: 'Smile enhancement with cosmetic bonding',
    procedure: 'Cosmetic Bonding & Contouring'
  },
  {
    id: 5,
    before: 'https://images.pexels.com/photos/3845633/pexels-photo-3845633.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Veneers',
    description: 'Dramatic transformation with minimal prep veneers',
    procedure: 'Minimal-Prep Veneers'
  },
  {
    id: 6,
    before: 'https://images.pexels.com/photos/6627373/pexels-photo-6627373.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/6502304/pexels-photo-6502304.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Implants',
    description: 'Single tooth implant restoration',
    procedure: 'Single Tooth Implant'
  }
];

const categories = ['All', 'Veneers', 'Implants', 'Whitening', 'Cosmetic', 'Full Mouth'];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setCurrentImage(item);
    setLightboxOpen(true);
    setShowBefore(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!currentImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === currentImage.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentImage(filteredItems[newIndex]);
    setShowBefore(true);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-ncai-phantom mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t('gallery.description')}
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('gallery.witnessText')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const translatedCategory = category === 'All' ? t('gallery.filters.all') :
              category === 'Veneers' ? t('gallery.filters.veneers') :
              category === 'Implants' ? t('gallery.filters.implants') :
              category === 'Whitening' ? t('gallery.filters.whitening') :
              category === 'Cosmetic' ? t('gallery.filters.cosmetic') : category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                  ? 'bg-primary-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {translatedCategory}
            </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 bg-gray-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Before
                    </div>
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover grayscale-[30%] group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 right-3 z-10 bg-primary-blue text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      After
                    </div>
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-azure/10 text-primary-blue text-xs font-semibold rounded-full mb-3">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.procedure}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && currentImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-t-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary-azure/10 text-primary-blue text-xs font-semibold rounded-full mb-2">
                      {currentImage.category}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {currentImage.procedure}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {currentImage.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-900 rounded-b-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3]">
                    <div className="absolute top-4 left-4 z-10 bg-gray-900/80 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Before
                    </div>
                    <img
                      src={currentImage.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <div className="absolute top-4 right-4 z-10 bg-primary-blue text-white text-sm font-semibold px-4 py-2 rounded-full">
                      After
                    </div>
                    <img
                      src={currentImage.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {t('gallery.readyTransform')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-blue text-white rounded-xl font-semibold hover:bg-primary-azure transition-colors shadow-lg hover:shadow-xl"
          >
            {t('gallery.scheduleCta')}
          </a>
        </div>
      </div>
    </section>
  );
}
