import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import Hero from '../components/Hero';
import About from '../components/About';
import ImplantsHighlight from '../components/ImplantsHighlight';
import DentistryHighlight from '../components/DentistryHighlight';
import PRFHighlight from '../components/PRFHighlight';
import TechnologyHighlight from '../components/TechnologyHighlight';
import Gallery from '../components/Gallery';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import LocationContent from '../components/LocationContent';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Premier Dental Implants & Aesthetic Dentistry in San Marcos, CA"
        description="North County Aesthetics & Implants offers advanced dental implant surgery, full-arch restoration, PRF therapy, and cosmetic dentistry in San Marcos. Serving North County San Diego with digital smile design and zygomatic implants."
      />
      <StructuredData type="home" />
      <Hero />
      <About />
      <Experience />
      <ImplantsHighlight />
      <DentistryHighlight />
      <PRFHighlight />
      <TechnologyHighlight />
      <Gallery />
      <LocationContent />
      <Contact />
    </>
  );
}
