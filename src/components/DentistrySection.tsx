import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export function AestheticHero() {
  return (
    <section
      id="aesthetic-hero"
      className="relative w-full pt-32 pb-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary-azure/5 via-gray-50/60 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p {...fadeUp(0)} className="text-sm tracking-[0.2em] uppercase text-ncai-arsenic">
            Smile Transformation
          </motion.p>
          <motion.h1 {...fadeUp(0.2)} className="mt-3 text-3xl md:text-6xl font-semibold text-ncai-phantom">
            Aesthetic & General Dentistry
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="mt-4 text-lg leading-relaxed text-ncai-arsenic">
            Transform your smile with porcelain veneers, minimal-prep restorations, and digital smile design tailored to your facial aesthetics. From cosmetic enhancement to comprehensive care.
          </motion.p>
          <motion.ul {...fadeUp(0.5)} className="mt-4 space-y-1 text-ncai-arsenic">
            <li className="flex items-start gap-2"><span className="text-primary-azure">•</span> Digital smile design with photogrammetry</li>
            <li className="flex items-start gap-2"><span className="text-primary-azure">•</span> Minimal-prep porcelain veneers</li>
            <li className="flex items-start gap-2"><span className="text-primary-azure">•</span> Comprehensive preventive care</li>
          </motion.ul>
          <motion.div {...fadeUp(0.6)} className="mt-6 flex flex-wrap gap-3">
            <a href="#aesthetic-treatments" className="inline-flex items-center px-5 py-3 rounded-full bg-primary-blue text-white font-medium hover:bg-primary-azure transition-colors">
              Explore Services
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-primary-blue text-primary-blue font-medium hover:border-primary-azure hover:text-primary-azure transition-colors">
              Book Consultation
            </a>
          </motion.div>
        </div>
        <motion.div {...fadeUp(0.8)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white/70 border border-primary-blue shadow-xl shadow-primary-azure/20 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-sm text-ncai-arsenic">Design Language</p>
              <p className="text-2xl font-semibold text-primary-blue">Photogrammetry • DSD • Veneers</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-48 h-48 rounded-3xl bg-primary-azure/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

const AESTHETIC = [
  {
    k: "veneers",
    title: "Porcelain Veneers",
    body:
      "Ultra-thin ceramic restorations that transform tooth shape, color, and alignment with minimal preparation.",
    bullets: ["Digital design", "Minimal prep", "Natural aesthetics", "Long-lasting results"],
  },
  {
    k: "dsd",
    title: "Digital Smile Design",
    body:
      "3D photogrammetry and virtual planning to preview your new smile before treatment begins.",
    bullets: ["Facial analysis", "Virtual preview", "Precise planning", "Predictable outcomes"],
  },
  {
    k: "whitening",
    title: "Teeth Whitening",
    body:
      "Professional-grade whitening protocols for dramatic, safe, and lasting brightness.",
    bullets: ["In-office bleaching", "Custom trays", "Sensitivity management", "Shade matching"],
  },
  {
    k: "bonding",
    title: "Cosmetic Bonding",
    body:
      "Same-day composite artistry for chips, gaps, and contour refinement.",
    bullets: ["Single visit", "Conservative", "Color-matched", "Immediate results"],
  },
  {
    k: "gummy",
    title: "Gummy Smile Recontouring",
    body:
      "Laser and biologic-guided tissue sculpting for ideal tooth proportions.",
    bullets: ["PRF-assisted healing", "Laser precision", "Natural gum symmetry"],
  },
];

export function AestheticTreatments() {
  return (
    <section id="aesthetic-treatments" className="relative w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-3">
          Aesthetic Services
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-ncai-arsenic mb-10 max-w-3xl">
          Smile transformations designed with surgical precision and artistic vision.
        </motion.p>
        <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
          {AESTHETIC.map((item, i) => (
            <motion.li key={item.k} {...fadeUp(i)} className="rounded-2xl border border-ncai-steel bg-white backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-blue">{item.title}</h3>
              <p className="mt-3 text-ncai-arsenic leading-relaxed">{item.body}</p>
              <ul className="mt-4 space-y-1 text-ncai-arsenic">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span className="text-primary-azure">•</span> {b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const GENERAL = [
  {
    k: "preventive",
    title: "Preventive Care",
    body:
      "Comprehensive exams, professional cleanings, and diagnostics to maintain oral health and catch issues early.",
    bullets: ["Digital radiographs", "Oral cancer screening", "Periodontal assessment", "Hygiene protocols"],
  },
  {
    k: "restorative",
    title: "Restorative Dentistry",
    body:
      "Crowns, bridges, and fillings using durable materials and precision fabrication.",
    bullets: ["CEREC same-day crowns", "Tooth-colored fillings", "Ceramic onlays", "Biocompatible materials"],
  },
  {
    k: "endodontics",
    title: "Root Canal Therapy",
    body:
      "Modern endodontics with rotary instrumentation and bioceramic sealers to preserve natural teeth.",
    bullets: ["Minimal discomfort", "Single-visit options", "High success rates", "Tooth preservation"],
  },
  {
    k: "periodontics",
    title: "Periodontal Care",
    body:
      "Non-surgical and surgical treatment of gum disease to restore periodontal health.",
    bullets: ["Scaling & root planing", "Laser therapy", "PRF regeneration", "Maintenance programs"],
  },
];

export function GeneralDentistry() {
  return (
    <section id="general-dentistry" className="relative w-full py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-3">
          General Dentistry
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-ncai-arsenic mb-10 max-w-3xl">
          A foundation of health, beauty, and longevity.
        </motion.p>
        <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
          {GENERAL.map((item, i) => (
            <motion.li key={item.k} {...fadeUp(i)} className="rounded-2xl border border-ncai-steel bg-white backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-blue">{item.title}</h3>
              <p className="mt-3 text-ncai-arsenic leading-relaxed">{item.body}</p>
              <ul className="mt-4 space-y-1 text-ncai-arsenic">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span className="text-primary-azure">•</span> {b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SmileDesign() {
  const points = [
    "Photogrammetry-driven facial mapping",
    "Digital wax-up & mockup preview",
    "Morphology, proportion, and symmetry control",
    "Material selection for shade & translucency",
  ];
  return (
    <section id="smile-design" className="relative w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl md:text-4xl font-semibold text-ncai-phantom">The Art of Smile Design</h2>
          <p className="mt-4 text-ncai-arsenic">Every smile is a collaboration between design, biology, and craft. Through digital visualization and mockups, we sculpt ideal proportions before treatment begins.</p>
          <ul className="mt-6 space-y-2 text-ncai-arsenic">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary-azure" />{p}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.2)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/40 shadow-xl shadow-primary-azure/20 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital Smile Design"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-primary-azure/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function WhyChooseNCAI() {
  const bullets = [
    "Digital smile previews with facial harmony mapping",
    "Customized veneer and restorative materials",
    "Seamless collaboration between cosmetic and surgical teams",
    "PRF biologics for soft-tissue quality and healing",
    "Photography-driven case planning and documentation",
  ];
  return (
    <section id="why-ncai-aesthetic" className="relative w-full py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl md:text-4xl font-semibold text-ncai-phantom">Experience the NCAI Difference</h2>
          <p className="mt-4 text-ncai-arsenic">Where technology meets timeless aesthetics.</p>
          <ul className="mt-6 space-y-2 text-ncai-arsenic">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary-azure" />{b}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.2)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/40 shadow-xl shadow-primary-azure/20 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3952071/pexels-photo-3952071.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="NCAI Aesthetic Excellence"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-primary-azure/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function AestheticCTA() {
  return (
    <section id="aesthetic-cta" className="relative w-full py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center rounded-3xl border border-primary-blue bg-white backdrop-blur-sm shadow-xl shadow-primary-azure/20 py-12">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-ncai-phantom">
          Transform Your Smile Today
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-3 text-ncai-arsenic max-w-2xl mx-auto">
          Schedule a consultation to explore aesthetic and general dentistry options tailored to your goals.
        </motion.p>
        <motion.div {...fadeUp(0.4)} className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-blue text-white font-medium hover:bg-primary-azure transition-colors">Book Consultation</a>
          <a href="#gallery" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-blue text-primary-blue font-medium hover:border-primary-azure hover:text-primary-azure transition-colors">View Our Gallery</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function AestheticSection() {
  return (
    <div>
      <AestheticHero />
      <AestheticTreatments />
      <GeneralDentistry />
      <SmileDesign />
      <WhyChooseNCAI />
      <AestheticCTA />
    </div>
  );
}
