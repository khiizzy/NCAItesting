import { Layers, Smile, ActivitySquare, Boxes } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Procedures = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const procedures = [
    {
      icon: Layers,
      title: t('service1.title'),
      description: t('service1.body'),
      features: [t('service1.bullet1'), t('service1.bullet2'), t('service1.bullet3'), t('service1.bullet4')],
    },
    {
      icon: Smile,
      title: t('service2.title'),
      description: t('service2.body'),
      features: [t('service2.bullet1'), t('service2.bullet2'), t('service2.bullet3'), t('service2.bullet4')],
    },
    {
      icon: ActivitySquare,
      title: t('service3.title'),
      description: t('service3.body'),
      features: [t('service3.bullet1'), t('service3.bullet2'), t('service3.bullet3'), t('service3.bullet4')],
    },
    {
      icon: Boxes,
      title: t('service4.title'),
      description: t('service4.body'),
      features: [t('service4.bullet1'), t('service4.bullet2'), t('service4.bullet3'), t('service4.bullet4')],
    },
  ];

  return (
    <section id="procedures" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-20 space-y-6 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary-blue font-semibold tracking-wider uppercase text-sm">
            {t('procedures.tag')}
          </span>
          <h2 className="text-h2 lg:text-5xl text-ncai-phantom font-light leading-tight">
            {t('procedures.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('procedures.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon;
            const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

            return (
              <div
                key={index}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={`group bg-white rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-1000 border border-gray-100 hover:border-primary-azure/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-azure/10 to-primary-azure/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl text-gray-900 font-semibold">
                      {procedure.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {procedure.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-primary-blue font-semibold text-sm hover:text-primary-azure transition-colors flex items-center group/btn">
                    {t('services.learnMore')}
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
