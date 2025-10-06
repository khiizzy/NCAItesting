import { motion } from "framer-motion";
import { Camera, Scan, Printer, Cpu, Workflow, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export function TechnologyIntro() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-azure/5 via-transparent to-primary-blue/5"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-azure/20 mb-4">
              <Cpu className="w-4 h-4 text-primary-azure" />
              <span className="text-sm text-primary-blue font-semibold tracking-wide">
                Digital Excellence
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-4">
              Digital Workflow & <span className="text-primary-blue">Advanced Technology</span>
            </h2>

            <p className="text-lg text-ncai-arsenic leading-relaxed mb-6">
              Our digital ecosystem integrates the most advanced tools in modern dentistry—from photogrammetry and CBCT imaging to chairside 3D printing and virtual treatment planning—to deliver outcomes with unprecedented accuracy.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-azure mt-0.5 flex-shrink-0" />
                <p className="text-ncai-graphite">100% digital workflow integration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-azure mt-0.5 flex-shrink-0" />
                <p className="text-ncai-graphite">Real-time chairside fabrication</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-azure mt-0.5 flex-shrink-0" />
                <p className="text-ncai-graphite">3D virtual treatment planning</p>
              </div>
            </div>

            <a
              href="#technology-tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-azure text-white font-semibold hover:shadow-lg hover:shadow-primary-azure/30 transition-all duration-300 hover:scale-105"
            >
              Explore Technology
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/30 shadow-2xl shadow-primary-azure/10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="3D Printing Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-48 h-48 rounded-3xl bg-primary-azure/20 blur-3xl" />
            <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-primary-blue/15 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const TECHNOLOGIES = [
  {
    icon: Camera,
    title: "Photogrammetry & Digital Design",
    description: "Capture facial aesthetics in three dimensions to design smiles that harmonize with your unique features.",
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["3D facial scanning", "Smile design software", "Virtual previews", "Facial proportion analysis"]
  },
  {
    icon: Scan,
    title: "CBCT Imaging",
    description: "Submillimeter precision imaging for surgical planning, anatomical assessment, and risk reduction in complex cases.",
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["3D bone analysis", "Nerve mapping", "Sinus assessment", "Implant planning"]
  },
  {
    icon: Printer,
    title: "SprintRay 3D Printing",
    description: "Chairside fabrication of surgical guides, temporaries, and restorations with unmatched speed and precision.",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Same-day guides", "Custom trays", "Surgical models", "Provisional crowns"]
  },
  {
    icon: Workflow,
    title: "Intraoral Scanning",
    description: "Digital impressions that eliminate messy materials and provide instant, accurate data for restoration design.",
    image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["No impression trays", "Instant data", "Color mapping", "Treatment simulations"]
  }
];

export function TechnologyTools() {
  return (
    <section id="technology-tools" className="relative w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-semibold text-ncai-phantom mb-4">
            Technology Arsenal
          </h3>
          <p className="text-lg text-ncai-arsenic max-w-3xl mx-auto">
            State-of-the-art equipment and software integrated into a seamless digital workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                {...fadeUp(i)}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl hover:border-primary-azure/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-2xl font-semibold text-ncai-phantom">{tech.title}</h4>
                  <p className="text-ncai-arsenic leading-relaxed">{tech.description}</p>

                  <ul className="space-y-1 pt-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-ncai-graphite">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-azure"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DigitalWorkflow() {
  const steps = [
    { icon: Scan, title: "Capture", desc: "Digital impressions and CBCT imaging" },
    { icon: Cpu, title: "Design", desc: "3D treatment planning and virtual simulations" },
    { icon: Printer, title: "Fabricate", desc: "Chairside 3D printing of guides and temporaries" },
    { icon: Zap, title: "Execute", desc: "Precise, predictable treatment delivery" }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-semibold text-ncai-phantom mb-4">
            The Digital Workflow
          </h3>
          <p className="text-lg text-ncai-arsenic max-w-3xl mx-auto">
            From data capture to treatment execution—every step optimized for precision and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                {...fadeUp(i)}
                className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-azure transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-blue to-primary-azure flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-ncai-phantom mb-2">{step.title}</h4>
                <p className="text-sm text-ncai-graphite leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.6)} className="mt-16 grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary-blue mb-2">100%</div>
            <div className="text-ncai-graphite">Digital Workflow Integration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary-blue mb-2">3D</div>
            <div className="text-ncai-graphite">Virtual Treatment Planning</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary-blue mb-2">Real-Time</div>
            <div className="text-ncai-graphite">Chairside Fabrication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TechnologyCTA() {
  return (
    <section className="relative w-full py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center rounded-3xl border border-primary-blue bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-primary-azure/10 py-12 px-8">
          <motion.h3 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-ncai-phantom mb-4">
            Experience Digital Dentistry
          </motion.h3>
          <motion.p {...fadeUp(0.2)} className="text-lg text-ncai-arsenic max-w-2xl mx-auto mb-8">
            Discover how our advanced technology delivers precision, comfort, and predictable results.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-azure text-white font-semibold hover:shadow-lg hover:shadow-primary-azure/30 transition-all duration-300 hover:scale-105">
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function TechnologySection() {
  return (
    <div>
      <TechnologyIntro />
      <TechnologyTools />
      <DigitalWorkflow />
      <TechnologyCTA />
    </div>
  );
}
