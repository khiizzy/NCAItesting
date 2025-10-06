import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, ArrowRight } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export default function TechnologyHighlight() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)} className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/30 shadow-xl shadow-primary-azure/10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -z-10 -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary-blue/15 blur-2xl" />
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-azure/20 mb-4">
              <Cpu className="w-4 h-4 text-primary-azure" />
              <span className="text-sm text-primary-blue font-semibold tracking-wide">
                Digital Excellence
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-4">
              <span className="text-primary-blue">Digital Workflow</span> & Technology
            </h2>

            <p className="text-lg text-ncai-arsenic leading-relaxed mb-6">
              Our digital ecosystem integrates advanced imaging, CBCT technology, 3D printing, and virtual planning for unprecedented precision.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">100% digital workflow integration</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">Chairside 3D printing</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-azure mt-2"></div>
                <p className="text-ncai-graphite">3D virtual treatment planning</p>
              </div>
            </div>

            <Link
              to="/technology"
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
