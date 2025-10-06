import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-primary-azure/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-azure/20 text-primary-blue font-semibold text-sm mb-4">
            {t('experience.tag')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-ncai-phantom font-light mb-6 leading-tight">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-ncai-arsenic max-w-3xl mx-auto leading-relaxed">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeUp(0.2)} className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="NCAI Dental Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ncai-phantom/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t('experience.excellenceTitle')}</h3>
                    <p className="text-white/80">{t('experience.threeDoctorstitle')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-azure/20 rounded-3xl blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-blue/20 rounded-3xl blur-2xl -z-10"></div>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="order-1 lg:order-2 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-azure/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-primary-blue mb-2">40+</h4>
                <p className="text-sm text-ncai-graphite">{t('experience.combinedExperience')}</p>
              </div>

              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-azure/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-azure to-primary-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-primary-blue mb-2">100%</h4>
                <p className="text-sm text-ncai-graphite">{t('experience.patientCentered')}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-blue/5 to-primary-azure/5 rounded-2xl p-8 border border-primary-azure/20">
              <h4 className="text-xl font-semibold text-ncai-phantom mb-4">
                {t('experience.meetDoctors')}
              </h4>
              <p className="text-ncai-graphite leading-relaxed mb-6">
                {t('experience.teamDescription')}
              </p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-azure rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">KH</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-ncai-phantom">{t('experience.dr1.name')}</h5>
                      <p className="text-xs text-ncai-graphite">{t('experience.dr1.title')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ncai-graphite leading-relaxed pl-15">
                    {t('experience.dr1.bio')}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-azure to-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">DA</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-ncai-phantom">{t('experience.dr2.name')}</h5>
                      <p className="text-xs text-ncai-graphite">{t('experience.dr2.title')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ncai-graphite leading-relaxed pl-15">
                    {t('experience.dr2.bio')}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-azure rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">NH</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-ncai-phantom">{t('experience.dr3.name')}</h5>
                      <p className="text-xs text-ncai-graphite">{t('experience.dr3.title')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ncai-graphite leading-relaxed pl-15">
                    {t('experience.dr3.bio')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
