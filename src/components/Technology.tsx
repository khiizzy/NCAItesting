import { Scan, Camera, Droplet, Printer } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const technologiesData = [
  {
    icon: Camera,
    title: 'Photogrammetry & Digital Design',
    description:
      'Capture facial aesthetics in three dimensions to design smiles that harmonize with your unique features.',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Scan,
    title: 'CBCT Imaging',
    description:
      'Submillimeter precision imaging for surgical planning, anatomical assessment, and risk reduction in complex cases.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplet,
    title: 'PRF Biologics',
    description:
      'Concentrated growth factors from your own blood accelerate healing and enhance tissue regeneration naturally.',
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Printer,
    title: 'SprintRay 3D Printing',
    description:
      'Chairside fabrication of surgical guides and restorations with unmatched speed and precision.',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Technology = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  const technologies = [
    {
      icon: Camera,
      title: t('tech1.title'),
      description: t('tech1.description'),
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Scan,
      title: t('tech2.title'),
      description: t('tech2.description'),
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Droplet,
      title: t('tech3.title'),
      description: t('tech3.description'),
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Printer,
      title: t('tech4.title'),
      description: t('tech4.description'),
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="technology" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-20 space-y-6 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary-azure font-semibold tracking-wider uppercase text-sm">
            {t('nav.technology')}
          </span>
          <h2 className="text-h2 lg:text-5xl text-ncai-phantom font-light leading-tight">
            {t('tech.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('tech.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

            return (
              <div
                key={index}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={`group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-primary-azure shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-80"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary-blue/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-azure/20 group-hover:bg-primary-blue/20 transition-all">
                    <Icon className="w-7 h-7 text-primary-blue" />
                  </div>

                  <h3 className="text-2xl font-semibold text-ncai-phantom">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="mt-20 grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-200"
        >
          <div className={`text-center space-y-3 transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl text-primary-blue font-semibold">100%</div>
            <div className="text-gray-600">Digital Workflow Integration</div>
          </div>
          <div className={`text-center space-y-3 transition-all duration-1000 delay-150 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl text-primary-blue font-semibold">3D</div>
            <div className="text-gray-600">Virtual Treatment Planning</div>
          </div>
          <div className={`text-center space-y-3 transition-all duration-1000 delay-300 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl text-primary-blue font-semibold">Real-Time</div>
            <div className="text-gray-600">Chairside Fabrication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
