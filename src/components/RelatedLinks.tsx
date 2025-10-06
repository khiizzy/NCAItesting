import { ArrowRight } from 'lucide-react';
import SmartLink from './SmartLink';

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  category?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
  variant?: 'default' | 'compact' | 'sidebar';
}

const RelatedLinks = ({ links, title = 'Related Content', variant = 'default' }: RelatedLinksProps) => {
  if (variant === 'compact') {
    return (
      <div className="border-t border-gray-200 pt-8 mt-8">
        <h3 className="font-serif text-xl text-gray-900 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <SmartLink
              key={index}
              href={link.href}
              className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-copper-50 rounded-full text-sm text-gray-700 hover:text-copper-700 transition-all"
              title={link.description}
            >
              {link.title}
              <ArrowRight className="w-3 h-3 ml-2" />
            </SmartLink>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <aside className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <h3 className="font-serif text-lg text-gray-900 mb-4">{title}</h3>
        <nav>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <SmartLink
                  href={link.href}
                  className="group flex items-start gap-3 text-sm text-gray-700 hover:text-copper-600 transition-colors"
                  title={link.description}
                >
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span>{link.title}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-gray-900 mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <SmartLink
              key={index}
              href={link.href}
              className="group bg-white border border-gray-200 hover:border-copper-300 rounded-xl p-6 transition-all hover:shadow-lg"
            >
              {link.category && (
                <span className="text-xs text-copper-600 font-medium uppercase tracking-wider">
                  {link.category}
                </span>
              )}
              <h3 className="font-serif text-xl text-gray-900 mt-2 mb-2 group-hover:text-copper-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{link.description}</p>
              <span className="inline-flex items-center text-copper-600 text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
