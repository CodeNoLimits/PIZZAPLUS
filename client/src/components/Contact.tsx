import React from 'react';
import { Translations } from '../types';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactProps {
  translations: Translations;
}

const Contact: React.FC<ContactProps> = ({ translations }) => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{translations.contactTitle}</h2>
          <p className="text-gray-300">נשמח לראותכם במסעדה או לקחת את ההזמנה שלכם</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">פרטי קשר</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-primary w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">כתובת</div>
                    <div className="text-gray-300">{translations.address}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-primary w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">טלפון</div>
                    <a 
                      href={`tel:${translations.phone}`} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {translations.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MessageCircle className="text-green-400 w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">הזמנות WhatsApp</div>
                    <a 
                      href={`https://wa.me/972${translations.whatsappOrders.replace(/[^0-9]/g, '').substring(1)}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {translations.whatsappOrders}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="text-primary w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">שעות פתיחה</div>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div>א׳-ה׳: 11:00-23:00</div>
                      <div>ו׳: 11:00-15:00</div>
                      <div>מוצ״ש: 20:00-23:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">הזמינו עכשיו</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <a href={`https://wa.me/972${translations.whatsappOrders.replace(/[^0-9]/g, '').substring(1)}`}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    הזמנה בWhatsApp
                  </a>
                </Button>
                <Button 
                  asChild
                  className="bg-primary hover:bg-red-600 text-white"
                >
                  <a href={`tel:${translations.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    הזמנה טלפונית
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="relative">
            <Card className="bg-gray-700 h-96 overflow-hidden">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.0796476775449!2d35.2276262!3d31.7153458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d743c1234567%3A0x89abcdef12345678!2sIsh%20Matzliach%20St%202%2C%20Har%20Homa%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1674567890123!5m2!1sen!2sil&q=Ish+Matzliach+2+Har+Homa+Jerusalem"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pizza Plus Restaurant Location"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
              <p className="text-sm font-semibold text-gray-800">פיצה פלוס</p>
              <p className="text-xs text-gray-600">איש מצלח 2, הר חומה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
