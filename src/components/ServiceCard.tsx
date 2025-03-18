import React from 'react';
import { StreamingService } from '../types';
import { Star, Monitor, Smartphone, Tv, Gamepad2 } from 'lucide-react';
import { PromoCodeBlock } from './PromoCodeBlock';

interface ServiceCardProps {
  service: StreamingService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <img 
            src={service.logo} 
            alt={`${service.name} логотип`} 
            className="h-12 object-contain"
          />
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-white">{service.rating}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">{service.name}</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between text-gray-300">
            <span>Базовый тариф</span>
            <span className="font-semibold">{service.pricing.basic_plan}₽/мес</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {service.platform_support.web_browser && <Monitor className="w-5 h-5 text-blue-400" />}
            {service.platform_support.mobile_app && <Smartphone className="w-5 h-5 text-blue-400" />}
            {service.platform_support.smart_tv && <Tv className="w-5 h-5 text-blue-400" />}
            {service.platform_support.game_consoles && <Gamepad2 className="w-5 h-5 text-blue-400" />}
          </div>

          {service.promo_codes.length > 0 && (
            <PromoCodeBlock promoCode={service.promo_codes[0]} />
          )}
        </div>

        <div className="mt-6">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.url, '_blank', 'noopener,noreferrer');
            }}
            className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Перейти на сайт
          </button>
        </div>
      </div>
    </div>
  );
};