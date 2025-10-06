import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smile, ArrowRight } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export default function DentistryHighlight() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-blue/5 border border-primary-azure/20 mb-3">
              <Smile className="w-3.5 h-3.5 text-primary-azure" />
              <span className="text-xs text-primary-blue font-semibold tracking-wide">
                Smile Transformation
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-ncai-phantom mb-3">
              <span className="text-primary-blue">Aesthetic & General</span> Dentistry
            </h3>

            <p className="text-base text-ncai-arsenic leading-relaxed mb-5">
              Transform your smile with porcelain veneers, digital smile design, and comprehensive preventive care tailored to your facial aesthetics.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">Digital smile design & preview</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">Minimal-prep porcelain veneers</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">Comprehensive preventive care</p>
              </div>
            </div>

            <Link
              to="/dentistry"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-azure transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/30 shadow-xl shadow-primary-azure/10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cosmetic Dentistry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-primary-azure/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
