import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle Language"
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-medium uppercase">{language === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );
};
