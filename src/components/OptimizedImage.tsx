import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  priority = false,
  objectFit = 'cover',
  onLoad
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const generateSrcSet = (baseSrc: string): string => {
    if (baseSrc.includes('pexels.com')) {
      return `
        ${baseSrc}&w=400 400w,
        ${baseSrc}&w=800 800w,
        ${baseSrc}&w=1200 1200w,
        ${baseSrc}&w=1600 1600w
      `.trim();
    }
    return '';
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const srcSet = generateSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        srcSet={isInView && srcSet ? srcSet : undefined}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectFit }}
      />
    </div>
  );
}
