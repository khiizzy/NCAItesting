import { ArrowUpRight } from 'lucide-react';

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  title?: string;
  ariaLabel?: string;
  showExternalIcon?: boolean;
  prefetch?: boolean;
}

const SmartLink = ({
  href,
  children,
  className = '',
  external = false,
  title,
  ariaLabel,
  showExternalIcon = false,
  prefetch = true,
}: SmartLinkProps) => {
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  const isHash = href.startsWith('#');
  const isTel = href.startsWith('tel:');
  const isMailto = href.startsWith('mailto:');

  const linkAttributes: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    className,
    title,
    'aria-label': ariaLabel,
  };

  if (isExternal && !isTel && !isMailto) {
    linkAttributes.target = '_blank';
    linkAttributes.rel = 'noopener noreferrer';
  }

  if (prefetch && !isHash && !isExternal && !isTel && !isMailto) {
    linkAttributes.rel = (linkAttributes.rel || '') + ' prefetch';
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHash) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <a {...linkAttributes} onClick={handleClick}>
      {children}
      {isExternal && showExternalIcon && !isTel && !isMailto && (
        <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
      )}
    </a>
  );
};

export default SmartLink;
