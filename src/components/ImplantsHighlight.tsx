import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, ArrowRight } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export default function ImplantsHighlight() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)} className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/30 shadow-xl shadow-primary-azure/10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental Implants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -z-10 -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary-blue/15 blur-2xl" />
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-blue/5 border border-primary-azure/20 mb-3">
              <Layers className="w-3.5 h-3.5 text-primary-azure" />
              <span className="text-xs text-primary-blue font-semibold tracking-wide">
                Surgical Excellence
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-ncai-phantom mb-3">
              Implants & Full-Arch Solutions
            </h3>

            <p className="text-base text-ncai-arsenic leading-relaxed mb-5">
              From single-tooth replacements to complete arch restoration using All-on-X protocols and guided surgery with 3D planning.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">3D surgical planning & CBCT imaging</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">Same-day temporaries</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-sm text-ncai-graphite">Guided implant placement</p>
              </div>
            </div>

            <Link
              to="/implants"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-azure transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
