import React from 'react';
import { Translations } from '../types';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import pizzaPlusLogo from '@assets/1000181891_1749424433195.jpg';

interface AboutProps {
  translations: Translations;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{translations.aboutTitle}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {translations.aboutText}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              המומחיות שלנו נמצאת בשילוב של מתכונים מסורתיים עם טכנולוגיות מודרניות, כדי להעניק לכם את הטעם המושלם בכל ביס.
            </p>

            {/* Kosher Certification */}
            <Card className="bg-yellow-50 border border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-yellow-600 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">{translations.kosherTitle}</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  {translations.kosherText}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-600 w-4 h-4 mr-2" />
                  <span>תעודת כשרות בתוקף</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            {/* Pizza Plus Logo */}
            <Card className="overflow-hidden shadow-2xl bg-white">
              <div className="h-96 flex items-center justify-center p-8">
                <img 
                  src={pizzaPlusLogo} 
                  alt="Pizza Plus Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </Card>
            
            {/* Stats */}
            <Card className="absolute -bottom-6 -left-6 shadow-xl border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-gray-600">שנות ניסיון</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-xs text-gray-600">לקוחות מרוצים</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
