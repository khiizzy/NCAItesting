import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), href: '#about', isHash: true },
    { label: t('nav.dentistry'), href: '/dentistry', isHash: false },
    { label: t('nav.implants'), href: '/implants', isHash: false },
    { label: t('nav.facialAesthetics'), href: '/prf-aesthetics', isHash: false },
    { label: t('nav.gallery'), href: '#gallery', isHash: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group relative">
            <img
              src="/src/assets/Asset 6@4x-8 copy copy copy.png"
              alt="North County Aesthetics & Implants"
              className="h-12 lg:h-14 w-auto transition-all duration-500"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-ncai-graphite hover:text-primary-blue hover:bg-primary-azure/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-ncai-graphite hover:text-primary-blue hover:bg-primary-azure/10"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="ml-2 text-ncai-graphite">
              <LanguageToggle />
            </div>
            <a
              href="#contact"
              className="ml-4 bg-gradient-to-r from-primary-blue to-primary-azure text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary-azure/30 transition-all duration-300 hover:scale-105"
            >
              {t('nav.consultation')}
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-ncai-phantom" />
            ) : (
              <Menu className="w-6 h-6 text-ncai-phantom" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium transition-colors rounded-lg text-ncai-graphite hover:text-primary-blue hover:bg-primary-azure/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-2 text-base font-medium transition-colors rounded-lg text-ncai-graphite hover:text-primary-blue hover:bg-primary-azure/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="px-4 text-ncai-graphite">
              <LanguageToggle />
            </div>
            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-primary-blue to-primary-azure text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.consultation')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
