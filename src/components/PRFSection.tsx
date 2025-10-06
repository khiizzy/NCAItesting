import React from "react";
import { motion } from "framer-motion";

const TOKENS = {
  blue: "#0051C6",
  azure: "#48A8FF",
  white: "#FFFFFF",
  cloud: "#EDEFF7",
  steel: "#BCBFCC",
  graphite: "#6E7180",
  arsenic: "#40424D",
  phantom: "#1E1E24",
  black: "#000000",
};

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export function PRFIntro() {
  return (
    <section
      id="prf-intro"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{
        fontFamily: "Manrope, ui-sans-serif, system-ui",
        ["--ncai-blue" as any]: TOKENS.blue,
        ["--ncai-azure" as any]: TOKENS.azure,
        ["--ncai-phantom" as any]: TOKENS.phantom,
        ["--ncai-arsenic" as any]: TOKENS.arsenic,
        background:
          "linear-gradient(180deg, rgba(72,168,255,0.06) 0%, rgba(237,239,247,0.6) 45%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p {...fadeUp(0)} className="text-sm tracking-[0.2em] uppercase text-[color:var(--ncai-arsenic)]">
            Regenerative Medicine & Aesthetics
          </motion.p>
          <motion.h2 {...fadeUp(0.2)} className="mt-3 text-3xl md:text-5xl font-semibold text-[color:var(--ncai-phantom)]">
            The Power of Natural Healing
          </motion.h2>
          <motion.p {...fadeUp(0.4)} className="mt-4 text-lg leading-relaxed text-[color:var(--ncai-arsenic)]">
            Our comprehensive <strong>Platelet-Rich Fibrin (PRF)</strong> protocols harness your body's natural healing power for facial rejuvenation, enhanced surgical outcomes, and tissue regeneration. From aesthetic treatments to implant site enhancement, PRF accelerates healing and optimizes results — all using your own biology. No synthetic materials. Just elegant, natural outcomes.
          </motion.p>
          <motion.div {...fadeUp(0.6)} className="mt-6 flex flex-wrap gap-3">
            <a href="#prf-applications" className="inline-flex items-center px-5 py-3 rounded-full bg-[color:var(--ncai-blue)] text-white font-medium hover:bg-[color:var(--ncai-azure)] transition-colors">
              Explore Treatments
            </a>
            <a href="#prf-science" className="inline-flex items-center px-5 py-3 rounded-full border border-[color:var(--ncai-blue)] text-[color:var(--ncai-blue)] font-medium hover:border-[color:var(--ncai-azure)] hover:text-[color:var(--ncai-azure)] transition-colors">
              The Science
            </a>
          </motion.div>
        </div>
        <motion.div {...fadeUp(0.8)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white/70 border border-[color:var(--ncai-blue)] shadow-[0_20px_60px_rgba(0,81,198,0.12)] flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-sm text-[color:var(--ncai-arsenic)]">PRF Workflow</p>
              <p className="text-2xl font-semibold text-[color:var(--ncai-blue)]">Draw → Spin → Fibrin Matrix → Rejuvenate</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 -top-10 -right-10 w-48 h-48 rounded-3xl bg-[color:var(--ncai-azure)]/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

const AESTHETIC_APPLICATIONS = [
  {
    title: "PRF Under-Eye Rejuvenation",
    body: "Tightens, brightens, and reduces hollowing naturally by stimulating collagen and microcirculation.",
  },
  {
    title: "PRF Microneedling & Injections",
    body: "Fine-line smoothing and texture refinement with autologous growth factors.",
  },
  {
    title: "Bio-Fillers (i-PRF)",
    body: "100% autologous volume restoration for soft, natural contouring.",
  },
  {
    title: "Laser + PRF Integration",
    body: "Synergistic resurfacing and accelerated healing when paired with energy-based treatments.",
  },
  {
    title: "PRF for Hair Regrowth",
    body: "Supports follicular activity and density in appropriate candidates.",
  },
];

const SURGICAL_APPLICATIONS = [
  {
    title: "Dental Implant Site Enhancement",
    body: "Accelerates osseointegration and soft tissue healing around implants for optimal long-term success.",
  },
  {
    title: "Bone Grafting & Sinus Lifts",
    body: "Mixed with bone graft material to enhance regeneration and reduce healing time.",
  },
  {
    title: "Socket Preservation",
    body: "Placed after extractions to maintain alveolar ridge volume and promote faster healing.",
  },
  {
    title: "Soft Tissue Grafting",
    body: "Improves graft integration and reduces post-operative inflammation and discomfort.",
  },
  {
    title: "Ridge Augmentation",
    body: "Enhances bone and tissue regeneration for complex reconstructive cases.",
  },
];

export function PRFApplications() {
  return (
    <section id="prf-applications" className="relative w-full py-24 md:py-32" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui", ["--ncai-blue" as any]: TOKENS.blue, ["--ncai-azure" as any]: TOKENS.azure, ["--ncai-steel" as any]: TOKENS.steel, ["--ncai-arsenic" as any]: TOKENS.arsenic, ["--ncai-phantom" as any]: TOKENS.phantom }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-[color:var(--ncai-phantom)] mb-4">
          PRF Applications
        </motion.h3>
        <motion.p {...fadeUp(0.1)} className="text-[color:var(--ncai-arsenic)] mb-10 max-w-3xl">
          PRF therapy harnesses your body's natural healing power for both aesthetic enhancement and surgical regeneration.
        </motion.p>

        <div className="mb-12">
          <motion.h4 {...fadeUp(0.2)} className="text-xl md:text-2xl font-semibold text-[color:var(--ncai-blue)] mb-6">
            Aesthetic & Facial Rejuvenation
          </motion.h4>
          <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
            {AESTHETIC_APPLICATIONS.map((item, i) => (
              <motion.li key={item.title} {...fadeUp(0.3 + i * 0.1)} className="rounded-2xl border border-[color:var(--ncai-steel)] bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-lg md:text-xl font-semibold text-[color:var(--ncai-blue)]">{item.title}</h5>
                <p className="mt-2 text-[color:var(--ncai-arsenic)]">{item.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <motion.h4 {...fadeUp(0.8)} className="text-xl md:text-2xl font-semibold text-[color:var(--ncai-blue)] mb-6">
            Surgical & Regenerative Medicine
          </motion.h4>
          <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
            {SURGICAL_APPLICATIONS.map((item, i) => (
              <motion.li key={item.title} {...fadeUp(0.9 + i * 0.1)} className="rounded-2xl border border-[color:var(--ncai-steel)] bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-lg md:text-xl font-semibold text-[color:var(--ncai-blue)]">{item.title}</h5>
                <p className="mt-2 text-[color:var(--ncai-arsenic)]">{item.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PRFWhyNCAI() {
  const bullets = [
    "Evidence-based PRF & Biologics (c-PRF, e-PRF, i-PRF)",
    "Advanced centrifugation systems & protocol calibration",
    "FDA-cleared equipment & clean lab workflow",
    "Physician-led, research-informed practice",
    "Natural-looking results with surgical precision",
  ];
  return (
    <section id="prf-why" className="relative w-full py-24 md:py-28" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui", ["--ncai-blue" as any]: TOKENS.blue, ["--ncai-azure" as any]: TOKENS.azure, ["--ncai-cloud" as any]: TOKENS.cloud, ["--ncai-arsenic" as any]: TOKENS.arsenic, ["--ncai-phantom" as any]: TOKENS.phantom }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp(0)}>
          <h3 className="text-2xl md:text-4xl font-semibold text-[color:var(--ncai-phantom)]">Why Choose NCAI</h3>
          <p className="mt-4 text-[color:var(--ncai-arsenic)]">We translate years of biologic and surgical experience into aesthetic mastery, guided by data and refined by design.</p>
          <ul className="mt-6 space-y-2 text-[color:var(--ncai-arsenic)]">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--ncai-azure)]" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.2)} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-[color:var(--ncai-cloud)] border border-[color:var(--ncai-azure)]/40 shadow-[0_16px_48px_rgba(72,168,255,0.18)]" />
          <div className="pointer-events-none absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-[color:var(--ncai-azure)]/25 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function PRFGallery() {
  const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1, label: `Case ${i + 1} — PRF Bio-Filler · 6 Weeks` }));
  return (
    <section id="prf-gallery" className="relative w-full py-24 md:py-32" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui", ["--ncai-steel" as any]: TOKENS.steel, ["--ncai-graphite" as any]: TOKENS.graphite, ["--ncai-phantom" as any]: TOKENS.phantom }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-[color:var(--ncai-phantom)] mb-10">Before & After</motion.h3>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.li key={it.id} {...fadeUp(i)} className="group relative rounded-xl overflow-hidden border border-[color:var(--ncai-steel)] bg-white/80">
              <div className="aspect-square bg-[color:var(--ncai-graphite)]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">{it.label}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PRFScience() {
  const steps = [
    { k: "Draw", d: "A small sample is collected using sterile technique." },
    { k: "Spin", d: "Gentle centrifugation concentrates regenerative cells and growth factors." },
    { k: "Matrix", d: "A fibrin scaffold forms for sustained release over days to weeks." },
    { k: "Rejuvenate", d: "Injected or applied to stimulate collagen and healing." },
  ];
  return (
    <section id="prf-science" className="relative w-full py-24 md:py-32" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui", ["--ncai-blue" as any]: TOKENS.blue, ["--ncai-arsenic" as any]: TOKENS.arsenic, ["--ncai-cloud" as any]: TOKENS.cloud }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-[color:var(--ncai-blue)]">The Science Behind PRF</motion.h3>
        <motion.p {...fadeUp(0.2)} className="mt-4 max-w-3xl text-[color:var(--ncai-arsenic)]">
          PRF (Platelet-Rich Fibrin) is an autologous biomaterial that releases growth factors gradually, promoting collagen synthesis and tissue regeneration. It differs from PRP by using lower centrifugation speeds and no anticoagulants, creating a fibrin matrix for sustained healing.
        </motion.p>
        <ul className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li key={s.k} {...fadeUp(i)} className="rounded-2xl bg-[color:var(--ncai-cloud)] p-6 border border-[color:var(--ncai-blue)]/20">
              <p className="text-sm tracking-[0.18em] uppercase text-[color:var(--ncai-blue)]">{String(i + 1).padStart(2, "0")}</p>
              <h4 className="mt-2 text-xl font-semibold">{s.k}</h4>
              <p className="mt-2 text-[color:var(--ncai-arsenic)]">{s.d}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PRFCTA() {
  return (
    <section id="prf-cta" className="relative w-full py-20 md:py-24" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui", ["--ncai-blue" as any]: TOKENS.blue, ["--ncai-azure" as any]: TOKENS.azure, ["--ncai-phantom" as any]: TOKENS.phantom }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center rounded-3xl border border-[color:var(--ncai-blue)] bg-white/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,81,198,0.12)] py-12">
        <motion.h3 {...fadeUp(0)} className="text-2xl md:text-4xl font-semibold text-[color:var(--ncai-phantom)]">
          Discover Biologic Rejuvenation
        </motion.h3>
        <motion.p {...fadeUp(0.2)} className="mt-3 text-[color:var(--ncai-arsenic)] max-w-2xl mx-auto">
          Book a consultation to explore PRF therapies tailored to your goals — elegant, natural outcomes powered by your own biology.
        </motion.p>
        <motion.div {...fadeUp(0.4)} className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[color:var(--ncai-blue)] text-white font-medium hover:bg-[color:var(--ncai-azure)] transition-colors">Book Consultation</a>
          <a href="#prf-science" className="inline-flex items-center px-6 py-3 rounded-full border border-[color:var(--ncai-blue)] text-[color:var(--ncai-blue)] font-medium hover:border-[color:var(--ncai-azure)] hover:text-[color:var(--ncai-azure)] transition-colors">Learn the Science</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function PRFSection() {
  return (
    <div>
      <PRFIntro />
      <PRFApplications />
      <PRFWhyNCAI />
      <PRFGallery />
      <PRFScience />
      <PRFCTA />
    </div>
  );
}
