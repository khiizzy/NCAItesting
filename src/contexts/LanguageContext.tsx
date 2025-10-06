import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.technology': 'Technology',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.consultation': 'Book Consultation',
    'nav.dentistry': 'Aesthetic & General Dentistry',
    'nav.implants': 'Implants',
    'nav.facialAesthetics': 'Facial Aesthetics',

    // Hero
    'hero.title': 'Precision. Artistry. Innovation.',
    'hero.subtitle': 'North County Aesthetics & Implants',
    'hero.description': 'Advanced dental solutions powered by digital precision and regenerative science. From single-tooth implants to full-arch restoration, we deliver outcomes that elevate both form and function.',
    'hero.cta': 'Schedule Your Consultation',
    'hero.learn': 'Learn About Our Technology',

    // About
    'about.title': 'A Center for Excellence in Aesthetic & Regenerative Dentistry',
    'about.subtitle': 'We integrate cutting-edge technologies—photogrammetry, CBCT imaging, PRF biologics, and chairside 3D printing—to deliver outcomes that combine longevity with aesthetics. Every treatment plan is rooted in biological principles and tailored to each patient\'s unique vision.',
    'about.description': 'North County Aesthetics & Implants represents the convergence of surgical precision, digital innovation, and artistic mastery. Led by Dr. Khizer Hafeez, Dr. Dariyan Ayazi, and Dr. Nelson Howard, our practice redefines modern dentistry through evidence-based protocols and advanced regenerative therapies.',
    'about.credentials': 'Credentials & Training',
    'about.cred1': 'Fellowship in Implant Dentistry',
    'about.cred2': 'Advanced PRF & Biologics Certification',
    'about.cred3': 'Digital Smile Design Specialist',
    'about.cred4': '3D Surgical Planning & Guided Surgery',
    'about.philosophy': 'Treatment Philosophy',
    'about.phil1': 'Evidence-based protocols backed by research',
    'about.phil2': 'Minimally invasive, biologically-driven approach',
    'about.phil3': 'Patient education and collaborative decision-making',
    'about.phil4': 'Integration of digital tools for precision outcomes',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Care Rooted in Science & Artistry',
    'services.description': 'Each treatment combines evidence-based protocols with advanced technology to deliver predictable, lasting results.',

    'service1.title': 'Implants & Full-Arch Solutions',
    'service1.body': 'Surgical precision meets digital planning. From single-tooth replacements to complete arch restoration using All-on-X protocols and guided surgery.',
    'service1.bullet1': '3D Surgical Planning',
    'service1.bullet2': 'Same-Day Temporaries',
    'service1.bullet3': 'Guided Implant Placement',
    'service1.bullet4': 'Bone Regeneration',

    'service2.title': 'Aesthetic & Cosmetic Dentistry',
    'service2.body': 'Transform your smile with porcelain veneers, minimal-prep restorations, and digital smile design tailored to your facial aesthetics.',
    'service2.bullet1': 'Digital Smile Design',
    'service2.bullet2': 'Porcelain Veneers',
    'service2.bullet3': 'Tooth Reshaping',
    'service2.bullet4': 'Whitening Protocols',

    'service3.title': 'PRF & Regenerative Therapies',
    'service3.body': 'Harness your body\'s natural healing with platelet-rich fibrin, bone grafting, and biologic-driven protocols for optimal tissue regeneration.',
    'service3.bullet1': 'PRF Therapy',
    'service3.bullet2': 'Bone Grafting',
    'service3.bullet3': 'Soft Tissue Management',
    'service3.bullet4': 'Growth Factor Integration',

    'service4.title': 'Digital Workflow & 3D Printing',
    'service4.body': 'Chairside fabrication of surgical guides, temporaries, and final restorations using SprintRay technology for precision and efficiency.',
    'service4.bullet1': 'Intraoral Scanning',
    'service4.bullet2': 'CBCT Imaging',
    'service4.bullet3': 'Chairside 3D Printing',
    'service4.bullet4': 'Virtual Treatment Planning',

    'service5.title': 'Technology — Where Innovation Meets Precision',
    'service5.body': 'Our digital ecosystem integrates the most advanced tools in modern dentistry to deliver outcomes with unprecedented accuracy.',
    'service5.bullet1': 'Photogrammetry & Digital Design',
    'service5.bullet2': 'CBCT Imaging',
    'service5.bullet3': 'PRF Biologics',
    'service5.bullet4': 'SprintRay 3D Printing',
    'service5.bullet5': '100% Digital Workflow Integration',
    'service5.bullet6': '3D Virtual Treatment Planning',

    'services.learnMore': 'Learn More',

    // Technology
    'tech.title': 'Technology That Transforms Outcomes',
    'tech.subtitle': 'Digital Precision at Every Step',
    'tech.description': 'Our integrated digital workflow eliminates guesswork. From scan to surgery to final restoration, every phase is guided by data, precision, and proven protocols.',

    'tech1.title': 'SprintRay 3D Printing',
    'tech1.description': 'Chairside fabrication of surgical guides, models, and temporary restorations with micron-level accuracy.',

    'tech2.title': 'CBCT & Digital Imaging',
    'tech2.description': 'High-resolution 3D imaging for precise diagnosis, treatment planning, and guided implant surgery.',

    'tech3.title': 'PRF Biologics',
    'tech3.description': 'Harnessing your body\'s natural growth factors to accelerate healing and enhance tissue regeneration.',

    'tech4.title': 'Digital Smile Design',
    'tech4.description': 'Virtual mockups and photogrammetric analysis to preview and perfect your smile before treatment begins.',

    // Contact
    'contact.title': 'Schedule Your Consultation',
    'contact.subtitle': 'Experience Precision-Driven Care',
    'contact.description': 'Ready to explore advanced solutions tailored to your unique needs? Contact us today to begin your journey toward optimal oral health and a confident smile.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Tell us about your goals',
    'contact.submit': 'Request Consultation',
    'contact.info': 'Contact Information',
    'contact.address': '123 Medical Plaza Drive',
    'contact.cityState': 'North County, CA 92024',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.hours': 'Office Hours',
    'contact.hours.mon': 'Monday - Thursday: 8am - 5pm',
    'contact.hours.fri': 'Friday: 8am - 2pm',
    'contact.hours.weekend': 'Saturday - Sunday: Closed',

    // Experience
    'experience.tag': 'The NCAI Experience',
    'experience.title': 'Where Precision Meets Tranquility',
    'experience.description': 'Our practice environment reflects our commitment to excellence—a seamless blend of advanced technology, refined aesthetics, and patient-centered care. Every detail is designed to create an experience that is as comfortable as it is transformative.',
    'experience.feature1.title': 'Efficiency Without Compromise',
    'experience.feature1.description': 'Streamlined appointments that respect your time while maintaining meticulous attention to detail.',
    'experience.feature2.title': 'Clinical Excellence',
    'experience.feature2.description': 'State-of-the-art sterilization protocols and the highest standards of care in every procedure.',
    'experience.feature3.title': 'Serene Environment',
    'experience.feature3.description': 'A spa-like atmosphere designed to reduce anxiety and promote healing.',
    'experience.feature4.title': 'Comfort-First Philosophy',
    'experience.feature4.description': 'From noise-canceling headphones to sedation options, your comfort is our priority.',
    'experience.excellenceTitle': 'Excellence in Care',
    'experience.threeDoctorstitle': 'Three Exceptional Doctors',
    'experience.combinedExperience': 'Years Combined Experience',
    'experience.patientCentered': 'Patient-Centered Care',
    'experience.meetDoctors': 'Meet Our Doctors',
    'experience.teamDescription': 'Our team combines advanced training in implantology, cosmetic dentistry, and regenerative techniques with a commitment to personalized care.',
    'experience.dr1.name': 'Dr. Khizer Hafeez',
    'experience.dr1.title': 'DDS, Fellowship in Implant Dentistry, Diplomate ABOI/ID',
    'experience.dr1.bio': 'Board-certified in implant dentistry with advanced training in full-arch reconstruction and digital surgical planning. Dr. Hafeez combines surgical expertise with an unwavering commitment to biological integration and long-term stability.',
    'experience.dr2.name': 'Dr. Dariyan Ayazi',
    'experience.dr2.title': 'DDS, Advanced Aesthetic & Restorative Dentistry',
    'experience.dr2.bio': 'Specializing in aesthetic restorative dentistry and minimally invasive smile design. Dr. Ayazi leverages digital tools and regenerative protocols to create results that honor both function and the natural architecture of each smile.',
    'experience.dr3.name': 'Dr. Nelson Howard',
    'experience.dr3.title': 'DDS, Comprehensive & Cosmetic Dentistry',
    'experience.dr3.bio': 'Expert in comprehensive restorative and cosmetic dentistry with a focus on precision diagnostics and patient-centered care. Dr. Howard brings decades of clinical excellence and a passion for integrating emerging technologies into everyday practice.',

    // About stats
    'about.stat1': 'Years Combined Experience',
    'about.stat2': 'Years Serving North County',
    'about.stat3': 'Digital Workflow',

    // Gallery
    'gallery.tag': 'Before & After',
    'gallery.title': 'Real Results, Real Smiles',
    'gallery.description': 'See the transformative power of precision dentistry. Each case represents a unique journey and a life-changing smile.',
    'gallery.filters.all': 'All',
    'gallery.filters.veneers': 'Veneers',
    'gallery.filters.implants': 'Implants',
    'gallery.filters.whitening': 'Whitening',
    'gallery.filters.cosmetic': 'Cosmetic',

    // Footer
    'footer.tagline': 'Precision. Artistry. Innovation.',
    'footer.description': 'Advanced dental solutions powered by digital precision and regenerative science.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.servicesAll': 'All Services',
    'footer.implants': 'Dental Implants',
    'footer.cosmetic': 'Cosmetic Dentistry',
    'footer.regenerative': 'Regenerative Therapy',
    'footer.rights': 'All rights reserved.',

    // Hero Cards
    'hero.card1.title': 'Surgical Precision',
    'hero.card1.description': 'Digital planning meets microsurgical technique',
    'hero.card2.title': 'Aesthetic Mastery',
    'hero.card2.description': 'Designing smiles with artistic precision',
    'hero.card3.title': 'Regenerative Science',
    'hero.card3.description': 'Biology and technology harmonized',
    'hero.discoverMore': 'Discover More',

    // Locations
    'location.sanMarcos': 'San Marcos',
    'location.sanDiego': 'San Diego',
    'location.twoLocations': 'Two Convenient San Diego Locations',
    'location.subtitle': 'We proudly serve patients throughout San Diego County with exceptional dental implant and aesthetic dentistry services at our San Marcos and Rancho Bernardo offices.',
    'location.primaryLocation': 'Primary Location',
    'location.getDirections': 'Get Directions',
    'location.freeParking': 'Free parking & wheelchair accessible',
    'location.servingTitle': 'Proudly Serving Communities Throughout San Diego County',
    'location.servingDescription': 'With locations in San Marcos and Rancho Bernardo, we provide convenient access to world-class dental care for patients across North County and Greater San Diego.',
    'location.dontSeeCity': 'Don\'t see your city listed? We welcome patients from throughout San Diego County.',
    'location.whyChoose': 'Why Patients Choose NCAI',
    'location.stat1': 'Years Serving San Diego',
    'location.stat2': 'Successful Implant Cases',
    'location.stat3': 'Average Patient Rating',
    'location.officeHours': 'Mon-Thu: 8:00 AM - 5:00 PM',
    'location.fridayHours': 'Fri: 8:00 AM - 3:00 PM',

    // PRF
    'prf.highlight.tag': 'Regenerative Aesthetics',
    'prf.highlight.title': 'Regenerative Healing Through PRF Technology',
    'prf.highlight.description': 'Harness your body\'s own healing power with Platelet-Rich Fibrin (PRF) for facial aesthetics, enhanced surgical healing, and tissue regeneration. No synthetic materials—just natural results that work with your biology.',
    'prf.highlight.benefit1': 'Facial rejuvenation & volume restoration',
    'prf.highlight.benefit2': 'Accelerated surgical & implant healing',
    'prf.highlight.benefit3': 'Bone & soft tissue regeneration',
    'prf.highlight.benefit4': '100% autologous bio-therapy',
    'prf.highlight.cta': 'Explore PRF Treatments',

    // Procedures
    'procedures.tag': 'Our Services',
    'procedures.title': 'Comprehensive Care Rooted in Science & Artistry',
    'procedures.description': 'Each treatment combines evidence-based protocols with advanced technology to deliver predictable, lasting results.',

    // Gallery
    'gallery.witnessText': 'Witness the intersection of surgical precision and aesthetic artistry through our patient outcomes. Each smile represents a unique journey to renewed confidence.',
    'gallery.readyTransform': 'Ready to transform your smile?',
    'gallery.scheduleCta': 'Schedule Your Consultation',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.technology': 'Tecnología',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.consultation': 'Reservar Consulta',
    'nav.dentistry': 'Odontología Estética y General',
    'nav.implants': 'Implantes',
    'nav.facialAesthetics': 'Estética Facial',

    // Hero
    'hero.title': 'Precisión. Arte. Innovación.',
    'hero.subtitle': 'North County Aesthetics & Implants',
    'hero.description': 'Soluciones dentales avanzadas impulsadas por precisión digital y ciencia regenerativa. Desde implantes de un solo diente hasta restauración de arco completo, ofrecemos resultados que elevan tanto la forma como la función.',
    'hero.cta': 'Programe Su Consulta',
    'hero.learn': 'Conozca Nuestra Tecnología',

    // About
    'about.title': 'Un Centro de Excelencia en Odontología Estética y Regenerativa',
    'about.subtitle': 'Integramos tecnologías de vanguardia—fotogrametría, imagenología CBCT, biológicos PRF e impresión 3D en consultorio—para ofrecer resultados que combinan longevidad con estética. Cada plan de tratamiento está arraigado en principios biológicos y adaptado a la visión única de cada paciente.',
    'about.description': 'North County Aesthetics & Implants representa la convergencia de precisión quirúrgica, innovación digital y maestría artística. Dirigida por el Dr. Khizer Hafeez, el Dr. Dariyan Ayazi y el Dr. Nelson Howard, nuestra práctica redefine la odontología moderna a través de protocolos basados en evidencia y terapias regenerativas avanzadas.',
    'about.credentials': 'Credenciales y Capacitación',
    'about.cred1': 'Especialización en Implantología Dental',
    'about.cred2': 'Certificación Avanzada en PRF y Biológicos',
    'about.cred3': 'Especialista en Diseño de Sonrisa Digital',
    'about.cred4': 'Planificación Quirúrgica 3D y Cirugía Guiada',
    'about.philosophy': 'Filosofía de Tratamiento',
    'about.phil1': 'Protocolos basados en evidencia respaldados por investigación',
    'about.phil2': 'Enfoque mínimamente invasivo y biológicamente orientado',
    'about.phil3': 'Educación del paciente y toma de decisiones colaborativa',
    'about.phil4': 'Integración de herramientas digitales para resultados precisos',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Atención Integral Basada en Ciencia y Arte',
    'services.description': 'Cada tratamiento combina protocolos basados en evidencia con tecnología avanzada para ofrecer resultados predecibles y duraderos.',

    'service1.title': 'Implantes y Soluciones de Arco Completo',
    'service1.body': 'Precisión quirúrgica se encuentra con planificación digital. Desde reemplazos de un solo diente hasta restauración de arco completo usando protocolos All-on-X y cirugía guiada.',
    'service1.bullet1': 'Planificación Quirúrgica 3D',
    'service1.bullet2': 'Temporales el Mismo Día',
    'service1.bullet3': 'Colocación Guiada de Implantes',
    'service1.bullet4': 'Regeneración Ósea',

    'service2.title': 'Odontología Estética y Cosmética',
    'service2.body': 'Transforme su sonrisa con carillas de porcelana, restauraciones de preparación mínima y diseño de sonrisa digital adaptado a su estética facial.',
    'service2.bullet1': 'Diseño de Sonrisa Digital',
    'service2.bullet2': 'Carillas de Porcelana',
    'service2.bullet3': 'Remodelación Dental',
    'service2.bullet4': 'Protocolos de Blanqueamiento',

    'service3.title': 'PRF y Terapias Regenerativas',
    'service3.body': 'Aproveche la curación natural de su cuerpo con fibrina rica en plaquetas, injertos óseos y protocolos biológicos para una regeneración tisular óptima.',
    'service3.bullet1': 'Terapia PRF',
    'service3.bullet2': 'Injertos Óseos',
    'service3.bullet3': 'Manejo de Tejidos Blandos',
    'service3.bullet4': 'Integración de Factores de Crecimiento',

    'service4.title': 'Flujo de Trabajo Digital e Impresión 3D',
    'service4.body': 'Fabricación en consultorio de guías quirúrgicas, temporales y restauraciones finales usando tecnología SprintRay para precisión y eficiencia.',
    'service4.bullet1': 'Escaneo Intraoral',
    'service4.bullet2': 'Imagenología CBCT',
    'service4.bullet3': 'Impresión 3D en Consultorio',
    'service4.bullet4': 'Planificación Virtual del Tratamiento',

    'service5.title': 'Tecnología — Donde la Innovación se Encuentra con la Precisión',
    'service5.body': 'Nuestro ecosistema digital integra las herramientas más avanzadas en odontología moderna para ofrecer resultados con precisión sin precedentes.',
    'service5.bullet1': 'Fotogrametría y Diseño Digital',
    'service5.bullet2': 'Imagenología CBCT',
    'service5.bullet3': 'Biológicos PRF',
    'service5.bullet4': 'Impresión 3D SprintRay',
    'service5.bullet5': 'Integración de Flujo de Trabajo 100% Digital',
    'service5.bullet6': 'Planificación Virtual del Tratamiento 3D',

    'services.learnMore': 'Saber Más',

    // Technology
    'tech.title': 'Tecnología que Transforma Resultados',
    'tech.subtitle': 'Precisión Digital en Cada Paso',
    'tech.description': 'Nuestro flujo de trabajo digital integrado elimina las conjeturas. Desde el escaneo hasta la cirugía y la restauración final, cada fase está guiada por datos, precisión y protocolos probados.',

    'tech1.title': 'Fotogrametría y Diseño Digital',
    'tech1.description': 'Capture la estética facial en tres dimensiones para diseñar sonrisas que armonizan con sus características únicas.',

    'tech2.title': 'Imagenología CBCT',
    'tech2.description': 'Imagenología de precisión submilimétrica para planificación quirúrgica, evaluación anatómica y reducción de riesgos en casos complejos.',

    'tech3.title': 'Biológicos PRF',
    'tech3.description': 'Factores de crecimiento concentrados de su propia sangre aceleran la curación y mejoran la regeneración tisular de forma natural.',

    'tech4.title': 'Impresión 3D SprintRay',
    'tech4.description': 'Fabricación en consultorio de guías quirúrgicas y restauraciones con velocidad y precisión incomparables.',

    // Contact
    'contact.title': 'Programe Su Consulta',
    'contact.subtitle': 'Experimente Atención Basada en Precisión',
    'contact.description': '¿Listo para explorar soluciones avanzadas adaptadas a sus necesidades únicas? Contáctenos hoy para comenzar su viaje hacia una salud oral óptima y una sonrisa segura.',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.message': 'Cuéntenos sobre sus objetivos',
    'contact.submit': 'Solicitar Consulta',
    'contact.info': 'Información de Contacto',
    'contact.address': '123 Medical Plaza Drive',
    'contact.cityState': 'North County, CA 92024',
    'contact.phoneLabel': 'Teléfono',
    'contact.emailLabel': 'Correo',
    'contact.hours': 'Horario de Oficina',
    'contact.hours.mon': 'Lunes - Jueves: 8am - 5pm',
    'contact.hours.fri': 'Viernes: 8am - 2pm',
    'contact.hours.weekend': 'Sábado - Domingo: Cerrado',

    // Experience
    'experience.tag': 'La Experiencia NCAI',
    'experience.title': 'Donde la Precisión se Encuentra con la Tranquilidad',
    'experience.description': 'El ambiente de nuestra práctica refleja nuestro compromiso con la excelencia—una mezcla perfecta de tecnología avanzada, estética refinada y atención centrada en el paciente. Cada detalle está diseñado para crear una experiencia tan cómoda como transformadora.',
    'experience.feature1.title': 'Eficiencia Sin Compromiso',
    'experience.feature1.description': 'Citas optimizadas que respetan su tiempo mientras mantienen atención meticulosa al detalle.',
    'experience.feature2.title': 'Excelencia Clínica',
    'experience.feature2.description': 'Protocolos de esterilización de última generación y los más altos estándares de atención en cada procedimiento.',
    'experience.feature3.title': 'Ambiente Sereno',
    'experience.feature3.description': 'Una atmósfera tipo spa diseñada para reducir la ansiedad y promover la curación.',
    'experience.feature4.title': 'Filosofía de Comodidad Primero',
    'experience.feature4.description': 'Desde auriculares con cancelación de ruido hasta opciones de sedación, su comodidad es nuestra prioridad.',
    'experience.excellenceTitle': 'Excelencia en Atención',
    'experience.threeDoctorstitle': 'Tres Doctores Excepcionales',
    'experience.combinedExperience': 'Años de Experiencia Combinada',
    'experience.patientCentered': 'Atención Centrada en el Paciente',
    'experience.meetDoctors': 'Conozca a Nuestros Doctores',
    'experience.teamDescription': 'Nuestro equipo combina capacitación avanzada en implantología, odontología cosmética y técnicas regenerativas con un compromiso hacia la atención personalizada.',
    'experience.dr1.name': 'Dr. Khizer Hafeez',
    'experience.dr1.title': 'DDS, Especialización en Implantología Dental, Diplomado ABOI/ID',
    'experience.dr1.bio': 'Certificado por la junta en implantología dental con capacitación avanzada en reconstrucción de arco completo y planificación quirúrgica digital. El Dr. Hafeez combina experiencia quirúrgica con un compromiso inquebrantable hacia la integración biológica y estabilidad a largo plazo.',
    'experience.dr2.name': 'Dr. Dariyan Ayazi',
    'experience.dr2.title': 'DDS, Odontología Estética y Restaurativa Avanzada',
    'experience.dr2.bio': 'Especializado en odontología restaurativa estética y diseño de sonrisa mínimamente invasivo. El Dr. Ayazi aprovecha herramientas digitales y protocolos regenerativos para crear resultados que honran tanto la función como la arquitectura natural de cada sonrisa.',
    'experience.dr3.name': 'Dr. Nelson Howard',
    'experience.dr3.title': 'DDS, Odontología Integral y Cosmética',
    'experience.dr3.bio': 'Experto en odontología restaurativa y cosmética integral con enfoque en diagnósticos de precisión y atención centrada en el paciente. El Dr. Howard aporta décadas de excelencia clínica y una pasión por integrar tecnologías emergentes en la práctica diaria.',

    // About stats
    'about.stat1': 'Años de Experiencia Combinada',
    'about.stat2': 'Años Sirviendo a North County',
    'about.stat3': 'Flujo de Trabajo Digital',

    // Gallery
    'gallery.tag': 'Antes y Después',
    'gallery.title': 'Resultados Reales, Sonrisas Reales',
    'gallery.description': 'Vea el poder transformador de la odontología de precisión. Cada caso representa un viaje único y una sonrisa que cambia la vida.',
    'gallery.filters.all': 'Todos',
    'gallery.filters.veneers': 'Carillas',
    'gallery.filters.implants': 'Implantes',
    'gallery.filters.whitening': 'Blanqueamiento',
    'gallery.filters.cosmetic': 'Cosmética',

    // Footer
    'footer.tagline': 'Precisión. Arte. Innovación.',
    'footer.description': 'Soluciones dentales avanzadas impulsadas por precisión digital y ciencia regenerativa.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.servicesAll': 'Todos los Servicios',
    'footer.implants': 'Implantes Dentales',
    'footer.cosmetic': 'Odontología Cosmética',
    'footer.regenerative': 'Terapia Regenerativa',
    'footer.rights': 'Todos los derechos reservados.',

    // Hero Cards
    'hero.card1.title': 'Precisión Quirúrgica',
    'hero.card1.description': 'Planificación digital combinada con técnica microquirúrgica',
    'hero.card2.title': 'Maestría Estética',
    'hero.card2.description': 'Diseñando sonrisas con precisión artística',
    'hero.card3.title': 'Ciencia Regenerativa',
    'hero.card3.description': 'Biología y tecnología en armonía',
    'hero.discoverMore': 'Descubra Más',

    // Locations
    'location.sanMarcos': 'San Marcos',
    'location.sanDiego': 'San Diego',
    'location.twoLocations': 'Dos Ubicaciones Convenientes en San Diego',
    'location.subtitle': 'Servimos con orgullo a pacientes en todo el Condado de San Diego con servicios excepcionales de implantes dentales y odontología estética en nuestras oficinas de San Marcos y Rancho Bernardo.',
    'location.primaryLocation': 'Ubicación Principal',
    'location.getDirections': 'Cómo Llegar',
    'location.freeParking': 'Estacionamiento gratuito y accesible para sillas de ruedas',
    'location.servingTitle': 'Sirviendo con Orgullo a Comunidades en Todo el Condado de San Diego',
    'location.servingDescription': 'Con ubicaciones en San Marcos y Rancho Bernardo, brindamos acceso conveniente a atención dental de clase mundial para pacientes en todo North County y el Área Metropolitana de San Diego.',
    'location.dontSeeCity': '¿No ve su ciudad en la lista? Damos la bienvenida a pacientes de todo el Condado de San Diego.',
    'location.whyChoose': 'Por Qué los Pacientes Eligen NCAI',
    'location.stat1': 'Años Sirviendo a San Diego',
    'location.stat2': 'Casos de Implantes Exitosos',
    'location.stat3': 'Calificación Promedio de Pacientes',
    'location.officeHours': 'Lun-Jue: 8:00 AM - 5:00 PM',
    'location.fridayHours': 'Vie: 8:00 AM - 3:00 PM',

    // PRF
    'prf.highlight.tag': 'Estética Regenerativa',
    'prf.highlight.title': 'Curación Regenerativa a Través de la Tecnología PRF',
    'prf.highlight.description': 'Aproveche el poder curativo natural de su cuerpo con Fibrina Rica en Plaquetas (PRF) para estética facial, curación quirúrgica mejorada y regeneración tisular. Sin materiales sintéticos—solo resultados naturales que trabajan con su biología.',
    'prf.highlight.benefit1': 'Rejuvenecimiento facial y restauración de volumen',
    'prf.highlight.benefit2': 'Curación quirúrgica y de implantes acelerada',
    'prf.highlight.benefit3': 'Regeneración de hueso y tejido blando',
    'prf.highlight.benefit4': 'Bioterapia 100% autóloga',
    'prf.highlight.cta': 'Explorar Tratamientos PRF',

    // Procedures
    'procedures.tag': 'Nuestros Servicios',
    'procedures.title': 'Atención Integral Basada en Ciencia y Arte',
    'procedures.description': 'Cada tratamiento combina protocolos basados en evidencia con tecnología avanzada para ofrecer resultados predecibles y duraderos.',

    // Gallery
    'gallery.witnessText': 'Sea testigo de la intersección entre precisión quirúrgica y arte estético a través de los resultados de nuestros pacientes. Cada sonrisa representa un viaje único hacia una confianza renovada.',
    'gallery.readyTransform': '¿Listo para transformar su sonrisa?',
    'gallery.scheduleCta': 'Programe Su Consulta',
  },
};
