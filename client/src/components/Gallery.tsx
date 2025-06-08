import React from 'react';
import { Translations } from '../types';
import { Card } from '@/components/ui/card';
import restaurantExterior from '@assets/1000288415_1749403007374.jpg';
import restaurantInterior1 from '@assets/1000288419_1749403007381.jpg';
import restaurantInterior2 from '@assets/1000288421_1749403007381.jpg';
import restaurantInterior3 from '@assets/1000288423_1749403007381.jpg';
import pizzaClose from '@assets/1000185475_1749403007380.jpg';
import kosherCertificate from '@assets/1000182745_1749403007380.jpg';

interface GalleryProps {
  translations: Translations;
}

const Gallery: React.FC<GalleryProps> = ({ translations }) => {
  const galleryImages = [
    {
      url: restaurantExterior,
      alt: 'Pizza Plus Restaurant Exterior'
    },
    {
      url: restaurantInterior1,
      alt: 'Modern Restaurant Interior'
    },
    {
      url: pizzaClose,
      alt: 'Fresh Pizza Close Up'
    },
    {
      url: restaurantInterior2,
      alt: 'Professional Kitchen Setup'
    },
    {
      url: kosherCertificate,
      alt: 'Kosher Certification'
    },
    {
      url: restaurantInterior3,
      alt: 'Comfortable Dining Area'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">האווירה שלנו</h2>
          <p className="text-gray-600">חוו את האווירה הנעימה והמקצועית של פיצה פלוס</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl shadow-lg aspect-square group">
              <div 
                className="h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
