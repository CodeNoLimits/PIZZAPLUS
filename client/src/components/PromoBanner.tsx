import { Translations, Language } from '../types';
import { trackPromoClick } from '../utils/tiktok';

interface PromoBannerProps {
  translations: Translations;
  currentLanguage: Language;
}

export default function PromoBanner({ translations, currentLanguage }: PromoBannerProps) {
  return (
    <div 
      className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 px-4 shadow-lg cursor-pointer hover:from-red-700 hover:to-orange-600 transition-all"
      onClick={trackPromoClick}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-3">
            <div className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🎉 {translations.promoTitle}
            </div>
            <div className="text-lg font-semibold">
              {translations.promoText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}