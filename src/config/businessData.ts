export const BUSINESS_DATA = {
  name: "North County Aesthetics & Implants",
  legalName: "North County Aesthetics & Implants, Inc.",
  description: "Premier dental implant and aesthetic dentistry practice in North County, San Diego. Specializing in full-arch restoration, PRF therapy, digital smile design, and advanced implantology.",

  locations: [
    {
      name: "San Marcos Office",
      streetAddress: "123 Aesthetic Boulevard",
      addressLocality: "San Marcos",
      addressRegion: "CA",
      postalCode: "92078",
      addressCountry: "US",
      phone: "(760) 555-1234",
      phoneFormatted: "+17605551234",
      latitude: 33.1434,
      longitude: -117.1661,
      isPrimary: true
    },
    {
      name: "Rancho Bernardo Office",
      streetAddress: "456 Medical Plaza Drive",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92127",
      addressCountry: "US",
      phone: "(858) 555-5678",
      phoneFormatted: "+18585555678",
      latitude: 33.0117,
      longitude: -117.0742,
      isPrimary: false
    }
  ],

  address: {
    streetAddress: "123 Aesthetic Boulevard",
    addressLocality: "San Marcos",
    addressRegion: "CA",
    postalCode: "92078",
    addressCountry: "US"
  },

  contact: {
    phone: "(760) 555-1234",
    phoneFormatted: "+17605551234",
    email: "info@ncai.com",
    fax: "(760) 555-1235"
  },

  location: {
    latitude: 33.1434,
    longitude: -117.1661
  },

  hours: {
    monday: "08:00-17:00",
    tuesday: "08:00-17:00",
    wednesday: "08:00-17:00",
    thursday: "08:00-17:00",
    friday: "08:00-15:00",
    saturday: "Closed",
    sunday: "Closed"
  },

  social: {
    facebook: "https://facebook.com/ncai",
    instagram: "https://instagram.com/ncai",
    linkedin: "https://linkedin.com/company/ncai"
  },

  services: [
    "Dental Implants",
    "Full-Arch Restoration",
    "All-on-X Implants",
    "Zygomatic Implants",
    "PRF Therapy",
    "Platelet Rich Fibrin",
    "Digital Smile Design",
    "Porcelain Veneers",
    "Cosmetic Dentistry",
    "CBCT Imaging",
    "Guided Surgery",
    "Bone Grafting",
    "Sinus Lifts",
    "Teeth Whitening",
    "Root Canal Therapy",
    "Periodontal Care",
    "Preventive Dentistry"
  ],

  specialties: [
    "Implant Dentistry",
    "Oral Surgery",
    "Cosmetic Dentistry",
    "Prosthodontics",
    "Periodontics",
    "Regenerative Medicine"
  ],

  serviceArea: [
    "San Marcos, CA",
    "Rancho Bernardo, CA",
    "Escondido, CA",
    "Carlsbad, CA",
    "Vista, CA",
    "Oceanside, CA",
    "Encinitas, CA",
    "San Diego, CA",
    "Poway, CA",
    "Solana Beach, CA",
    "Del Mar, CA",
    "La Jolla, CA",
    "Mira Mesa, CA",
    "Scripps Ranch, CA",
    "Carmel Valley, CA",
    "Rancho Peñasquitos, CA",
    "4S Ranch, CA",
    "Sabre Springs, CA",
    "Fallbrook, CA",
    "Ramona, CA",
    "Valley Center, CA",
    "Bonsall, CA",
    "San Elijo Hills, CA",
    "North County San Diego",
    "Greater San Diego Area"
  ],

  keywords: [
    "dental implants san marcos",
    "all on 4 implants north county",
    "zygomatic implants san diego",
    "prf therapy dentist",
    "cosmetic dentistry san marcos",
    "full arch restoration",
    "smile makeover north county",
    "emergency dentist san marcos",
    "sedation dentistry",
    "same day dental implants"
  ],

  paymentAccepted: [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Insurance",
    "CareCredit",
    "Financing Available"
  ],

  priceRange: "$$$$",

  url: "https://ncai.com",
  logo: "/src/assets/Asset 6@4x-8 copy copy copy.png",
  image: "/src/assets/Asset 6@4x-8 copy copy copy.png",

  founder: {
    name: "Dr. [Your Name]",
    credentials: "DMD, FICOI"
  },

  yearEstablished: 2015,

  awards: [
    "Top Dentist Award 2023",
    "Excellence in Implant Dentistry",
    "Patient Choice Award"
  ]
};

export const NAP_DATA = {
  name: BUSINESS_DATA.name,
  address: `${BUSINESS_DATA.address.streetAddress}, ${BUSINESS_DATA.address.addressLocality}, ${BUSINESS_DATA.address.addressRegion} ${BUSINESS_DATA.address.postalCode}`,
  phone: BUSINESS_DATA.contact.phone,
  phoneLink: `tel:${BUSINESS_DATA.contact.phoneFormatted}`,
  email: BUSINESS_DATA.contact.email,
  emailLink: `mailto:${BUSINESS_DATA.contact.email}`
};
