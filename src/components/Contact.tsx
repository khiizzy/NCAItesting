import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isEmergency: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      isEmergency: e.target.checked,
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-primary-blue font-medium tracking-wider uppercase text-sm">
            {t('nav.contact')}
          </span>
          <h2 className="text-5xl lg:text-6xl text-ncai-phantom font-light leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-ncai-arsenic leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-ncai-phantom mb-6">Our Locations</h3>

              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-azure rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncai-phantom mb-1">San Marcos Office</h4>
                    <p className="text-ncai-graphite leading-relaxed">
                      1903 W San Marcos Blvd #110
                      <br />
                      San Marcos, CA 92078
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-azure to-primary-blue rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncai-phantom mb-1">San Diego Office</h4>
                    <p className="text-ncai-graphite leading-relaxed">
                      12540 Oaks N Dr #A3
                      <br />
                      San Diego, CA 92128
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ncai-phantom mb-1">Call Us</h3>
                  <a
                    href="tel:+17605551234"
                    className="text-lg text-primary-blue hover:text-primary-azure transition-colors font-medium"
                  >
                    (760) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ncai-phantom mb-1">Email Us</h3>
                  <a
                    href="mailto:info@ncai.com"
                    className="text-lg text-primary-blue hover:text-primary-azure transition-colors font-medium"
                  >
                    info@ncai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ncai-phantom mb-3">Office Hours</h3>
                  <div className="text-ncai-graphite space-y-2">
                    <p className="flex justify-between gap-8">
                      <span className="font-medium">Monday - Thursday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span className="font-medium">Friday & Saturday</span>
                      <span>By Appointment</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-ncai-phantom mb-6">Schedule Your Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ncai-phantom mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ncai-phantom mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ncai-phantom mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                  placeholder="(760) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ncai-phantom mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your smile goals..."
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <input
                  type="checkbox"
                  id="isEmergency"
                  name="isEmergency"
                  checked={formData.isEmergency}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="isEmergency" className="flex items-start gap-2 text-sm cursor-pointer">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-ncai-phantom">
                    <strong className="font-semibold">Emergency Consultation Request</strong>
                    <br />
                    <span className="text-ncai-graphite">Check this if you need immediate dental attention</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl ${
                  formData.isEmergency
                    ? 'bg-gradient-to-r from-red-600 to-red-500 hover:shadow-red-500/30'
                    : 'bg-gradient-to-r from-primary-blue to-primary-azure hover:shadow-primary-azure/30'
                }`}
              >
                {formData.isEmergency ? 'Submit Emergency Request' : t('contact.submit')}
              </button>

              <p className="text-sm text-ncai-graphite text-center">
                {formData.isEmergency
                  ? 'Emergency requests receive priority response within 2 hours during office hours.'
                  : "We'll respond within 24 hours to schedule your personalized consultation."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
