import { Award, Microscope } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`space-y-4 transition-all duration-1000 ${
                headerVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-primary-azure font-semibold tracking-wider uppercase text-sm">
                {t('nav.about')}
              </span>
              <h2 className="text-h2 lg:text-5xl text-ncai-phantom font-light leading-tight">
                {t('about.title')}
              </h2>
            </div>

            <div
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className={`space-y-6 text-gray-600 text-lg leading-relaxed transition-all duration-1000 delay-200 ${
                contentVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p>
                {t('about.description')}
              </p>
              <p>
                {t('about.subtitle')}
              </p>
            </div>

            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-300 ${
              contentVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}>
              <div className="space-y-2 text-center">
                <div className="w-16 h-16 bg-primary-azure/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="text-3xl text-gray-900 font-semibold">40+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="w-16 h-16 bg-primary-azure/10 rounded-full flex items-center justify-center mx-auto">
                  <Microscope className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="text-3xl text-gray-900 font-semibold">30+</div>
                <div className="text-sm text-gray-600">Years Serving North County</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="w-16 h-16 bg-primary-azure/10 rounded-full flex items-center justify-center mx-auto">
                  <Microscope className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="text-3xl text-gray-900 font-semibold">100%</div>
                <div className="text-sm text-gray-600">Digital Workflow</div>
              </div>
            </div>
          </div>

          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-1000 delay-400 ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern dental practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-azure/20 rounded-2xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
