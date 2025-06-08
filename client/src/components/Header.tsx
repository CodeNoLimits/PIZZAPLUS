import React, { useState } from 'react';
import { Language, Translations } from '../types';
import { ShoppingCart, Menu, X, Pizza } from 'lucide-react';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  cartItemCount: number;
  onToggleCart: () => void;
  translations: Translations;
}

const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  cartItemCount,
  onToggleCart,
  translations,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const isRTL = currentLanguage === 'he';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Pizza className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{translations.mainTitle}</h1>
              <p className="text-xs text-gray-600">Pizza Plus</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#menu" className="text-gray-700 hover:text-primary transition-colors">
              {translations.menu}
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              {translations.about}
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">
              {translations.gallery}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              {translations.contact}
            </a>
          </nav>

          {/* Actions */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium">{currentLanguage === 'he' ? 'עב' : 'EN'}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[80px]">
                  <button
                    onClick={() => {
                      onLanguageChange('he');
                      setLangMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 text-sm hover:bg-gray-50 text-right"
                  >
                    עברית
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setLangMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 text-sm hover:bg-gray-50 text-right"
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onToggleCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <a
              href="#menu"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.menu}
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.about}
            </a>
            <a
              href="#gallery"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.gallery}
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
