import React from 'react';
import { Translations } from '../types';
import { Card } from '@/components/ui/card';

interface GalleryProps {
  translations: Translations;
}

const Gallery: React.FC<GalleryProps> = ({ translations }) => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Restaurant exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Pizza making process'
    },
    {
      url: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Fresh ingredients'
    },
    {
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Modern kitchen'
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Happy customers'
    },
    {
      url: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800',
      alt: 'Restaurant interior'
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
