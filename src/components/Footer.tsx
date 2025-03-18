import React from 'react';
import { PromoSubmissionForm } from './PromoSubmissionForm';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e1e] py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Нашли новый промокод?</h2>
            <p className="text-gray-400">
              Помогите другим пользователям сэкономить! Поделитесь промокодами, которые вы нашли, 
              и они появятся на сайте после проверки. Вместе мы делаем стриминг доступнее!
            </p>
          </div>
          <div>
            <PromoSubmissionForm />
          </div>
        </div>
        <div className="text-center text-gray-400 pt-8 border-t border-gray-700">
          <p>© 2024 Каталог российских стриминговых сервисов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};