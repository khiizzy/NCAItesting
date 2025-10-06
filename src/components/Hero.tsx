import { ArrowDown, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-azure/20 via-primary-blue/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-primary-blue/15 via-primary-azure/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 opacity-40">
        <img
          src="/src/assets/Asset 6@4x-8 copy copy.png"
          alt="NCAI Emblem"
          className="w-full h-full object-contain animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8 max-w-7xl mx-auto py-24">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary-azure/30 shadow-lg mb-6">
            <div className="w-2 h-2 bg-primary-azure rounded-full animate-pulse"></div>
            <span className="text-sm text-primary-blue font-semibold tracking-wide">
              {t('hero.subtitle')}
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-h1 md:text-7xl lg:text-8xl text-ncai-phantom font-extralight tracking-wide leading-none">
              {t('hero.title').split('. ')[0]}.
              <br />
              <span className="bg-gradient-to-r from-primary-blue via-primary-azure to-primary-blue bg-clip-text text-transparent font-semibold">
                {t('hero.title').split('. ').slice(1).join('. ')}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-ncai-graphite max-w-3xl mx-auto font-light leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-ncai-phantom font-bold text-xl tracking-tight">{t('hero.card1.title')}</h3>
                <p className="text-ncai-arsenic text-sm leading-relaxed">
                  {t('hero.card1.description')}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-azure transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-azure/5 to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-azure to-primary-blue flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-ncai-phantom font-bold text-xl tracking-tight">{t('hero.card2.title')}</h3>
                <p className="text-ncai-arsenic text-sm leading-relaxed">
                  {t('hero.card2.description')}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-azure to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-ncai-phantom font-bold text-xl tracking-tight">{t('hero.card3.title')}</h3>
                <p className="text-ncai-arsenic text-sm leading-relaxed">
                  {t('hero.card3.description')}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-azure transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-8">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-primary-blue to-primary-azure text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary-azure/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-azure to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-5 h-5 text-primary-azure flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ncai-phantom">San Marcos</p>
                  <p className="text-xs text-ncai-graphite leading-relaxed">1903 W San Marcos Blvd #110<br/>San Marcos, CA 92078</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-5 h-5 text-primary-azure flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ncai-phantom">San Diego</p>
                  <p className="text-xs text-ncai-graphite leading-relaxed">12540 Oaks N Dr #A3<br/>San Diego, CA 92128</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
          aria-label="Scroll down"
        >
          <span className="text-ncai-graphite text-sm tracking-wider uppercase font-medium">{t('hero.discoverMore')}</span>
          <ArrowDown className="w-6 h-6 text-ncai-graphite animate-bounce group-hover:text-primary-azure transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
