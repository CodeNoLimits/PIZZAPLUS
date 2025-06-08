import React from 'react';
import { Translations } from '../types';
import { Award, Utensils, Phone } from 'lucide-react';
import pizzaImage from '@assets/IMG-20250605-WA0015_1749403007381.jpg';
import pizzaPlusLogo from '@assets/1000181891_1749424433195.jpg';

interface HeroProps {
  translations: Translations;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pizzaImage})`
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="mb-6">
            {/* Pizza Plus Logo */}
            <div className="mb-4">
              <img 
                src={pizzaPlusLogo} 
                alt="Pizza Plus Logo" 
                className="mx-auto h-24 w-auto rounded-lg shadow-lg bg-white/10 backdrop-blur-sm p-2"
              />
            </div>
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Award className="text-yellow-400 w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{translations.kosherBadge}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {translations.mainTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {translations.subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-200">
            טעם אמיתי, איכות מעולה, שירות מקצועי
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <Utensils className="w-4 h-4 inline mr-2" />
              {translations.viewMenu}
            </button>
            <a 
              href="tel:02-9921201" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/30"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              {translations.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
