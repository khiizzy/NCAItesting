import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NAP_DATA, BUSINESS_DATA } from '../config/businessData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-ncai-phantom text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content={NAP_DATA.name} />
              <img
                src="/src/assets/Asset 6@4x-8 copy copy copy.png"
                alt={NAP_DATA.name}
                className="h-16 w-auto"
                itemProp="logo"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href={BUSINESS_DATA.social.facebook}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-azure transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_DATA.social.instagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-azure transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_DATA.social.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-azure transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  {t('nav.technology')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  {t('footer.implants')}
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  Full-Arch Restoration
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  Smile Design
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-primary-azure transition-colors text-sm">
                  PRF Therapy
                </a>
              </li>
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <meta itemProp="name" content={NAP_DATA.name} />
            <ul className="space-y-4">
              <li className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-5 h-5 text-primary-azure flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  <span itemProp="streetAddress">{BUSINESS_DATA.address.streetAddress}</span>
                  <br />
                  <span itemProp="addressLocality">{BUSINESS_DATA.address.addressLocality}</span>, <span itemProp="addressRegion">{BUSINESS_DATA.address.addressRegion}</span> <span itemProp="postalCode">{BUSINESS_DATA.address.postalCode}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-azure flex-shrink-0" />
                <a
                  href={NAP_DATA.phoneLink}
                  className="text-gray-400 text-sm hover:text-primary-azure transition-colors"
                  itemProp="telephone"
                >
                  {NAP_DATA.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-azure flex-shrink-0" />
                <a
                  href={NAP_DATA.emailLink}
                  className="text-gray-400 text-sm hover:text-primary-azure transition-colors"
                  itemProp="email"
                >
                  {NAP_DATA.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} North County Aesthetics & Implants. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-azure transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-azure transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-azure transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
