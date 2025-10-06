import { motion } from "framer-motion";
import { Drill, Sparkles, Droplet, Printer, Cpu } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const SERVICES = [
  {
    icon: Drill,
    title: "Implants & Full-Arch Solutions",
    body:
      "Surgical precision meets digital planning. From single-tooth replacements to complete arch restoration using All-on-X protocols and guided surgery.",
    bullets: [
      "3D Surgical Planning",
      "Same-Day Temporaries",
      "Guided Implant Placement",
      "Bone Regeneration",
    ],
  },
  {
    icon: Sparkles,
    title: "Aesthetic & Cosmetic Dentistry",
    body:
      "Transform your smile with porcelain veneers, minimal-prep restorations, and digital smile design tailored to your facial aesthetics.",
    bullets: [
      "Digital Smile Design",
      "Porcelain Veneers",
      "Tooth Reshaping",
      "Whitening Protocols",
    ],
  },
  {
    icon: Droplet,
    title: "PRF & Regenerative Therapies",
    body:
      "Harness your body's natural healing with platelet-rich fibrin, bone grafting, and biologic-driven protocols for optimal tissue regeneration.",
    bullets: [
      "PRF Therapy",
      "Bone Grafting",
      "Soft Tissue Management",
      "Growth Factor Integration",
    ],
  },
  {
    icon: Printer,
    title: "Digital Workflow & 3D Printing",
    body:
      "Chairside fabrication of surgical guides, temporaries, and final restorations using SprintRay technology for precision and efficiency.",
    bullets: [
      "Intraoral Scanning",
      "CBCT Imaging",
      "Chairside 3D Printing",
      "Virtual Treatment Planning",
    ],
  },
  {
    icon: Cpu,
    title: "Technology — Where Innovation Meets Precision",
    body:
      "Our digital ecosystem integrates the most advanced tools in modern dentistry to deliver outcomes with unprecedented accuracy.",
    bullets: [
      "Photogrammetry & Digital Design",
      "CBCT Imaging",
      "PRF Biologics",
      "SprintRay 3D Printing",
      "100% Digital Workflow Integration",
      "3D Virtual Treatment Planning",
    ],
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Drill,
      title: t('service1.title'),
      body: t('service1.body'),
      bullets: [t('service1.bullet1'), t('service1.bullet2'), t('service1.bullet3'), t('service1.bullet4')],
    },
    {
      icon: Sparkles,
      title: t('service2.title'),
      body: t('service2.body'),
      bullets: [t('service2.bullet1'), t('service2.bullet2'), t('service2.bullet3'), t('service2.bullet4')],
    },
    {
      icon: Droplet,
      title: t('service3.title'),
      body: t('service3.body'),
      bullets: [t('service3.bullet1'), t('service3.bullet2'), t('service3.bullet3'), t('service3.bullet4')],
    },
    {
      icon: Printer,
      title: t('service4.title'),
      body: t('service4.body'),
      bullets: [t('service4.bullet1'), t('service4.bullet2'), t('service4.bullet3'), t('service4.bullet4')],
    },
    {
      icon: Cpu,
      title: t('service5.title'),
      body: t('service5.body'),
      bullets: [
        t('service5.bullet1'),
        t('service5.bullet2'),
        t('service5.bullet3'),
        t('service5.bullet4'),
        t('service5.bullet5'),
        t('service5.bullet6'),
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-ncai-phantom">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-xl text-ncai-arsenic">
            {t('services.subtitle')}
          </p>
          <p className="mt-3 max-w-3xl mx-auto text-ncai-graphite">
            {t('services.description')}
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm p-8 hover:border-primary-azure hover:shadow-2xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20% 0%" }}
                transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary-blue to-primary-azure text-white group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="mb-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary-blue">
                    {service.title}
                  </h3>
                </div>
              <p className="text-ncai-arsenic mb-4 leading-relaxed">
                {service.body}
              </p>
              <ul className="mb-4 space-y-1 text-ncai-graphite">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-primary-azure">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary-blue font-medium hover:text-primary-azure transition-colors"
              >
                {t('services.learnMore')} <span className="text-xl">→</span>
              </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
