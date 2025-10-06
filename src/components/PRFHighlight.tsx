import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export default function PRFHighlight() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-azure/5 via-transparent to-primary-blue/5"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-azure/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary-azure" />
              <span className="text-sm text-primary-blue font-semibold tracking-wide">
                {t('prf.highlight.tag')}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-4">
              {t('prf.highlight.title').split('PRF Technology')[0]}
              <span className="text-primary-blue">PRF Technology</span>
            </h2>

            <p className="text-lg text-ncai-arsenic leading-relaxed mb-6">
              {t('prf.highlight.description')}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">{t('prf.highlight.benefit1')}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">{t('prf.highlight.benefit2')}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">{t('prf.highlight.benefit3')}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">{t('prf.highlight.benefit4')}</p>
              </div>
            </div>

            <Link
              to="/prf-aesthetics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-azure text-white font-semibold hover:shadow-lg hover:shadow-primary-azure/30 transition-all duration-300 hover:scale-105"
            >
              {t('prf.highlight.cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/30 shadow-2xl shadow-primary-azure/10 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-ncai-arsenic mb-2">PRF Workflow</p>
                <p className="text-xl font-semibold text-primary-blue">
                  Draw → Spin → Matrix → Rejuvenate
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-48 h-48 rounded-3xl bg-primary-azure/20 blur-3xl" />
            <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-primary-blue/15 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
