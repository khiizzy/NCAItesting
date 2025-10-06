import { motion } from 'framer-motion';
import { MapPin, Navigation as NavigationIcon, Clock, Car, Building2 } from 'lucide-react';
import { BUSINESS_DATA } from '../config/businessData';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-20% 0% -10% 0%" },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.12 },
});

export default function LocationContent() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-ncai-phantom mb-4">
            Two Convenient San Diego Locations
          </h2>
          <p className="text-lg text-ncai-arsenic max-w-3xl mx-auto">
            We proudly serve patients throughout San Diego County with exceptional dental implant and aesthetic dentistry services at our San Marcos and Rancho Bernardo offices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {BUSINESS_DATA.locations.map((location, idx) => (
            <motion.div
              key={location.name}
              {...fadeUp(0.2 + idx * 0.2)}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-ncai-phantom mb-1">
                    {location.name}
                  </h3>
                  {location.isPrimary && (
                    <span className="inline-block px-3 py-1 bg-primary-azure/10 text-primary-blue text-xs font-medium rounded-full">
                      Primary Location
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-azure flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ncai-graphite">
                      {location.streetAddress}<br />
                      {location.addressLocality}, {location.addressRegion} {location.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-azure flex-shrink-0" />
                  <div className="text-ncai-graphite text-sm">
                    <div>Mon-Thu: 8:00 AM - 5:00 PM</div>
                    <div>Fri: 8:00 AM - 3:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-primary-azure flex-shrink-0" />
                  <p className="text-ncai-graphite text-sm">
                    Free parking & wheelchair accessible
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:${location.phoneFormatted}`}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue text-white text-sm font-medium hover:bg-primary-azure transition-colors"
                  >
                    {location.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue text-primary-blue text-sm font-medium hover:border-primary-azure hover:text-primary-azure transition-colors"
                  >
                    <NavigationIcon className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.5!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${location.latitude}!5e0!3m2!1sen!2sus!4v1234567890`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.name}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.6)} className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-ncai-phantom mb-6 text-center">
            Proudly Serving Communities Throughout San Diego County
          </h3>
          <p className="text-center text-ncai-arsenic mb-8 max-w-3xl mx-auto">
            With locations in San Marcos and Rancho Bernardo, we provide convenient access to world-class dental care for patients across North County and Greater San Diego.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {BUSINESS_DATA.serviceArea.slice(0, -2).map((area, i) => (
              <motion.div
                key={area}
                {...fadeUp(0.7 + i * 0.02)}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-azure/5 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-azure flex-shrink-0" />
                <span className="text-sm font-medium text-ncai-phantom">{area.replace(', CA', '')}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-ncai-graphite font-medium">
              {BUSINESS_DATA.serviceArea.slice(-2).join(' • ')}
            </p>
            <p className="text-sm text-ncai-graphite mt-2">
              Don't see your city listed? We welcome patients from throughout San Diego County.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(1)} className="mt-16">
          <h3 className="text-2xl font-semibold text-ncai-phantom mb-8 text-center">
            Why Patients Choose NCAI
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">10+</div>
              <div className="text-ncai-graphite">Years Serving San Diego</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">5,000+</div>
              <div className="text-ncai-graphite">Successful Implant Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">4.9/5</div>
              <div className="text-ncai-graphite">Average Patient Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
