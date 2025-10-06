import Breadcrumbs from './Breadcrumbs';
import RelatedLinks from './RelatedLinks';
import SmartLink from './SmartLink';
import { CheckCircle, Clock, Shield, Award } from 'lucide-react';

interface ProcedureDetailProps {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  benefits: string[];
  process: Array<{ title: string; description: string }>;
  duration?: string;
  recovery?: string;
  expertDoctor?: {
    name: string;
    title: string;
    link: string;
  };
}

const ProcedureDetail = ({
  title,
  category,
  description,
  heroImage,
  benefits,
  process,
  duration,
  recovery,
  expertDoctor,
}: ProcedureDetailProps) => {
  const relatedLinks = [
    {
      title: 'View Before & After Gallery',
      href: '/gallery',
      description: 'See real patient transformations and smile makeovers from our practice.',
      category: 'Inspiration',
    },
    {
      title: 'CBCT 3D Imaging Technology',
      href: '/technology/cbct-imaging',
      description: 'Learn how advanced imaging ensures precision in every procedure.',
      category: 'Technology',
    },
    {
      title: 'Schedule Your Consultation',
      href: '/contact',
      description: 'Discuss your goals and create a personalized treatment plan.',
      category: 'Next Steps',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Procedures', href: '/procedures' },
            { label: title, href: '#' },
          ]}
        />
      </div>

      <section className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <span className="text-copper-400 font-medium tracking-wider uppercase text-sm">
              {category}
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl text-white font-light mt-4 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-serif text-3xl text-gray-900 mb-8">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-copper-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-gray-900 mb-8">Treatment Process</h2>
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-copper-50 rounded-full flex items-center justify-center">
                      <span className="text-copper-600 font-serif font-semibold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-serif text-2xl text-gray-900 mb-6">
                Why Choose NCAI for This Procedure?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our practice combines advanced <SmartLink href="/technology" className="text-copper-600 hover:text-copper-700 font-medium">digital technology</SmartLink> with biological principles to deliver predictable, lasting results. Every treatment is precisely planned using{' '}
                <SmartLink href="/technology/cbct-imaging" className="text-copper-600 hover:text-copper-700 font-medium">CBCT imaging</SmartLink> and executed with surgical precision.
              </p>
              {expertDoctor && (
                <p className="text-gray-700 leading-relaxed">
                  Led by{' '}
                  <SmartLink href={expertDoctor.link} className="text-copper-600 hover:text-copper-700 font-medium">
                    {expertDoctor.name}
                  </SmartLink>
                  , {expertDoctor.title}, you'll receive care from a specialist with advanced training in implant and regenerative dentistry.
                </p>
              )}
            </section>
          </div>

          <aside className="space-y-8">
            {(duration || recovery) && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6">
                <h3 className="font-serif text-xl text-gray-900">Treatment Details</h3>
                {duration && (
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-copper-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="text-gray-900 font-medium">{duration}</div>
                    </div>
                  </div>
                )}
                {recovery && (
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-copper-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Recovery Time</div>
                      <div className="text-gray-900 font-medium">{recovery}</div>
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-copper-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Success Rate</div>
                    <div className="text-gray-900 font-medium">98%+</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-copper-600 to-copper-700 rounded-2xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-4">Ready to Begin?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Schedule a consultation to discuss your goals and create a personalized treatment plan.
              </p>
              <SmartLink
                href="/contact"
                className="block w-full bg-white text-copper-700 text-center px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                Book Consultation
              </SmartLink>
            </div>

            <RelatedLinks
              links={[
                {
                  title: 'View Patient Gallery',
                  href: '/gallery',
                  description: 'See real results',
                },
                {
                  title: 'Meet Our Doctors',
                  href: '/about',
                  description: 'Expert care team',
                },
                {
                  title: 'Our Technology',
                  href: '/technology',
                  description: 'Advanced tools',
                },
              ]}
              variant="sidebar"
              title="Learn More"
            />
          </aside>
        </div>
      </div>

      <RelatedLinks links={relatedLinks} title="Continue Exploring" />
    </div>
  );
};

export default ProcedureDetail;
