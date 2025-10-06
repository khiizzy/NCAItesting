import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export function ImplantsHero() {
  return (
    <section
      id="implants-hero"
      className="relative w-full pt-32 pb-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary-azure/5 via-gray-50/60 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p {...fadeUp(0)} className="text-sm tracking-[0.2em] uppercase text-ncai-arsenic">
            Surgical Excellence
          </motion.p>
          <motion.h1 {...fadeUp(0.2)} className="mt-3 text-3xl md:text-6xl font-semibold text-ncai-phantom">
            Implants & Full-Arch Solutions
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="mt-4 text-lg leading-relaxed text-ncai-arsenic">
            Digital precision meets biologic integration. Every implant is planned with 3D accuracy for predictable function and aesthetics.
          </motion.p>
          <motion.div {...fadeUp(0.6)} className="mt-6 flex flex-wrap gap-3">
            <a href="#implant-solutions" className="inline-flex items-center px-5 py-3 rounded-full bg-primary-blue text-white font-medium hover:bg-primary-azure transition-colors">
              Explore Solutions
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-primary-blue text-primary-blue font-medium hover:border-primary-azure hover:text-primary-azure transition-colors">
              Book Consultation
            </a>
          </motion.div>
        </div>
        <motion.div {...fadeUp(0.8)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white/70 border border-primary-blue shadow-xl shadow-primary-azure/20 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-sm text-ncai-arsenic">Planning Stack</p>
              <p className="text-2xl font-semibold text-primary-blue">CBCT • IOS • Guided Surgery • PRF</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-48 h-48 rounded-3xl bg-primary-azure/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  {
    k: "single",
    title: "Single-Tooth Implants",
    body:
      "Replace missing teeth with osseointegrated titanium implants that look, feel, and function like natural teeth.",
    bullets: ["Digital planning", "Immediate provisionals", "Custom abutments", "Aesthetic excellence"],
  },
  {
    k: "allonx",
    title: "All-on-X Full-Arch (with Zygomatic Remote Anchorage)",
    body:
      "Complete arch restoration on 4–6 implants using prosthetically driven planning and guided surgery. For severely atrophic maxillae, we offer remote anchorage solutions using zygomatic implants to bypass posterior bone deficits and achieve immediate, fixed support.",
    bullets: ["Same-day teeth", "Guided implant placement", "Fixed restoration", "Zygomatic implants for atrophic jaws"],
  },
  {
    k: "bridge",
    title: "Implant Bridge Systems",
    body:
      "Multi-tooth replacement supported by implants for durable function and natural esthetics.",
    bullets: ["Improved biomechanics", "Long-term stability", "Prosthetic harmony"],
  },
  {
    k: "grafting",
    title: "Bone & Soft-Tissue Regeneration",
    body:
      "Advanced grafting and PRF biologics rebuild deficient sites and optimize implant support.",
    bullets: ["Ridge preservation", "Sinus augmentation", "PRF integration", "Membrane techniques"],
  },
];

export function ImplantSolutions() {
  return (
    <section id="implant-solutions" className="relative w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-3">
          Comprehensive Implant Solutions
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-ncai-arsenic mb-10 max-w-3xl">
          Every case is mapped with CBCT imaging, intraoral scans, and prosthetically driven design. Guided placement reduces complications and enhances long-term integration.
        </motion.p>
        <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
          {SOLUTIONS.map((item, i) => (
            <motion.li key={item.k} {...fadeUp(i)} className="rounded-2xl border border-ncai-steel bg-white backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-blue">{item.title}</h3>
              <p className="mt-3 text-ncai-arsenic leading-relaxed">{item.body}</p>
              <ul className="mt-4 space-y-1 text-ncai-arsenic">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span className="text-primary-azure">•</span> {b}</li>
                ))}
              </ul>
              <div className="mt-5">
                <a href="#contact" className="inline-flex items-center gap-2 text-primary-blue font-medium hover:text-primary-azure transition-colors">Learn More <span className="text-xl">→</span></a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ImmediateLoad() {
  const items = [
    { t: "Same-day function", d: "Immediate temporization when stability and plan permit." },
    { t: "Optimized healing", d: "PRF-supported biologic environment for soft-tissue quality." },
    { t: "Reduced appointments", d: "Streamlined visits with digital workflows." },
    { t: "Enhanced comfort", d: "Minimized chair time via guided protocols." },
  ];
  return (
    <section id="immediate-load" className="relative w-full py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-primary-blue mb-2">Immediate Load Protocols</motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-ncai-arsenic max-w-3xl mb-8">Same-day temporization with carefully planned primary stability and occlusal design.</motion.p>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.li key={it.t} {...fadeUp(i)} className="rounded-2xl bg-white p-6 border border-primary-blue/20 shadow-sm">
              <h4 className="text-lg font-semibold text-ncai-phantom">{it.t}</h4>
              <p className="mt-2 text-ncai-arsenic">{it.d}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ImplantJourney() {
  const steps = [
    { k: "01", t: "Consultation & Imaging", d: "CBCT scan and digital assessment of bone quality and anatomy." },
    { k: "02", t: "Virtual Planning", d: "3D treatment plan with prosthetically driven implant positioning." },
    { k: "03", t: "Guided Surgery", d: "Precision placement using custom guides and PRF integration." },
    { k: "04", t: "Restoration", d: "Custom abutments and crowns designed for function and aesthetics." },
  ];
  return (
    <section id="implant-journey" className="relative w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-10">The Implant Journey</motion.h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li key={s.k} {...fadeUp(i)} className="rounded-2xl p-6 border border-primary-blue/20 bg-white backdrop-blur-sm shadow-sm">
              <p className="text-sm tracking-[0.18em] uppercase text-primary-blue">{s.k}</p>
              <h3 className="mt-2 text-xl font-semibold text-ncai-phantom">{s.t}</h3>
              <p className="mt-2 text-ncai-arsenic">{s.d}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyChooseNCAIImplants() {
  const bullets = [
    "Digital guided surgeries for accuracy and reproducibility",
    "Biologic augmentation (PRF) to enhance healing",
    "CBCT & photogrammetry for prosthetically driven planning",
    "Same-day restorations where indicated",
    "Evidence-based protocols for long-term stability",
  ];
  return (
    <section id="why-ncai-implants" className="relative w-full py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl md:text-4xl font-semibold text-ncai-phantom">Why Choose NCAI</h2>
          <p className="mt-4 text-ncai-arsenic">Surgical precision meets digital design and biologic healing for results that last.</p>
          <ul className="mt-6 space-y-2 text-ncai-arsenic">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary-azure" />{b}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.2)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-primary-azure/40 shadow-xl shadow-primary-azure/20 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="NCAI Implant Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-primary-azure/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function ImplantsCTA() {
  return (
    <section id="implants-cta" className="relative w-full py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center rounded-3xl border border-primary-blue bg-white backdrop-blur-sm shadow-xl shadow-primary-azure/20 py-12">
        <motion.h2 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-ncai-phantom">
          Ready to Restore Your Smile?
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-3 text-ncai-arsenic max-w-2xl mx-auto">
          Explore implant options tailored to your anatomy — from single teeth to zygomatic-anchored full-arch solutions.
        </motion.p>
        <motion.div {...fadeUp(0.4)} className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-blue text-white font-medium hover:bg-primary-azure transition-colors">Book Consultation</a>
          <a href="/technology" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-blue text-primary-blue font-medium hover:border-primary-azure hover:text-primary-azure transition-colors">View Technology</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ImplantsSection() {
  return (
    <div>
      <ImplantsHero />
      <ImplantSolutions />
      <ImmediateLoad />
      <ImplantJourney />
      <WhyChooseNCAIImplants />
      <ImplantsCTA />
    </div>
  );
}
