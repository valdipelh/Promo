import React from 'react';
import { useParams } from 'react-router-dom';
import { StreamingService } from '../types';
import { Monitor, Smartphone, Tv, Gamepad2, Star, Download, Users } from 'lucide-react';
import { PromoCodeBlock } from '../components/PromoCodeBlock';

interface ServicePageProps {
  services: StreamingService[];
}

export const ServicePage: React.FC<ServicePageProps> = ({ services }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Сервис не найден</h1>
          <p className="text-gray-400">Запрашиваемый стриминговый сервис не существует.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-xl">
          {/* Header Section */}
          <div className="p-8 border-b border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <img src={service.logo} alt={`${service.name} логотип`} className="h-16 object-contain" />
              <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="ml-2 text-2xl font-bold">{service.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
            <div className="flex flex-wrap gap-4">
              {service.platform_support.web_browser && (
                <div className="flex items-center text-blue-400">
                  <Monitor className="w-5 h-5 mr-2" />
                  <span>Браузер</span>
                </div>
              )}
              {service.platform_support.mobile_app && (
                <div className="flex items-center text-blue-400">
                  <Smartphone className="w-5 h-5 mr-2" />
                  <span>Мобильные</span>
                </div>
              )}
              {service.platform_support.smart_tv && (
                <div className="flex items-center text-blue-400">
                  <Tv className="w-5 h-5 mr-2" />
                  <span>Smart TV</span>
                </div>
              )}
              {service.platform_support.game_consoles && (
                <div className="flex items-center text-blue-400">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  <span>Консоли</span>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="p-8 border-b border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Тарифы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Базовый тариф</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">{service.pricing.basic_plan}₽<span className="text-sm text-gray-400">/мес</span></p>
                <p className="text-gray-400">Пробный период: {service.pricing.free_trial}</p>
              </div>
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Премиум тариф</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">{service.pricing.premium_plan}₽<span className="text-sm text-gray-400">/мес</span></p>
                <p className="text-gray-400">{service.pricing.ads_supported ? 'С рекламой' : 'Без рекламы'}</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="p-8 border-b border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Возможности</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Download className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">Офлайн-просмотр</h3>
                  <p className="text-gray-400">{service.availability.offline_download ? 'Доступно' : 'Недоступно'}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold">Несколько профилей</h3>
                  <p className="text-gray-400">{service.availability.multiple_profiles ? 'Поддерживается' : 'Не поддерживается'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 border-b border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Контент</h2>
            <p className="text-lg mb-4">Общая библиотека: <span className="font-semibold">{service.content.total_movies_series}</span></p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Доступные жанры</h3>
              <div className="flex flex-wrap gap-2">
                {service.content.genres.map(genre => (
                  <span key={genre} className="bg-blue-500 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Эксклюзивные шоу</h3>
              <ul className="list-disc list-inside text-gray-400">
                {service.content.exclusive_shows.map(show => (
                  <li key={show}>{show}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Promo Codes Section */}
          {service.promo_codes.length > 0 && (
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Активные промокоды</h2>
              {service.promo_codes.map(promo => (
                <PromoCodeBlock key={promo.code} promoCode={promo} large />
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="p-8 bg-[#2a2a2a]">
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Перейти на {service.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};