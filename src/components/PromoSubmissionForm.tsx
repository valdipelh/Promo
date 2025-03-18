import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const PromoSubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    promoCode: '',
    discount: '',
    validUntil: '',
    terms: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 🔥 Отправляем JSON
        },
        body: JSON.stringify(formData), // 🔥 JSON.stringify вместо URLSearchParams
      });

      const result = await response.json();

      if (response.ok && result.status === 'ok') {
        setMessage('✅ Спасибо! Промокод отправлен.');
        setFormData({
          serviceName: '',
          promoCode: '',
          discount: '',
          validUntil: '',
          terms: ''
        });
      } else {
        setMessage(`❌ Ошибка: ${result.message || 'Не удалось отправить данные.'}`);
      }
    } catch (error) {
      setMessage('❌ Ошибка при отправке. Проверьте подключение.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serviceName" className="block text-sm font-medium text-gray-300 mb-1">
          Сервис
        </label>
        <input
          type="text"
          id="serviceName"
          value={formData.serviceName}
          onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
          className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Название стримингового сервиса"
        />
      </div>
      <div>
        <label htmlFor="promoCode" className="block text-sm font-medium text-gray-300 mb-1">
          Промокод
        </label>
        <input
          type="text"
          id="promoCode"
          value={formData.promoCode}
          onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
          className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Введите промокод"
        />
      </div>
      <div>
        <label htmlFor="discount" className="block text-sm font-medium text-gray-300 mb-1">
          Описание скидки
        </label>
        <input
          type="text"
          id="discount"
          value={formData.discount}
          onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
          className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Например: 30% на первые 3 месяца"
        />
      </div>
      <div>
        <label htmlFor="validUntil" className="block text-sm font-medium text-gray-300 mb-1">
          Действует до
        </label>
        <input
          type="date"
          id="validUntil"
          value={formData.validUntil}
          onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
          className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="terms" className="block text-sm font-medium text-gray-300 mb-1">
          Условия использования
        </label>
        <input
          type="text"
          id="terms"
          value={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
          className="w-full bg-[#2a2a2a] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Например: Только для новых пользователей"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Отправка...' : <>
          <Send className="w-4 h-4" />
          Отправить промокод
        </>}
      </button>

      {message && (
        <p className={`text-sm mt-2 ${message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
};
