import React from 'react';
import { PromoCode } from '../types';

interface PromoCodeBlockProps {
  promoCode: PromoCode;
  large?: boolean;
}

export const PromoCodeBlock: React.FC<PromoCodeBlockProps> = ({ promoCode, large = false }) => {
  return (
    <div className={`bg-[#ff6600] bg-opacity-20 rounded-lg p-${large ? '6' : '3'} mb-4`}>
      <div className="flex justify-between items-center mb-4">
        <code className={`font-mono text-[#ff6600] ${large ? 'text-2xl' : 'text-base'}`}>
          {promoCode.code}
        </code>
        {large && (
          <button
            onClick={() => navigator.clipboard.writeText(promoCode.code)}
            className="bg-[#ff6600] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Скопировать код
          </button>
        )}
      </div>
      <p className="text-[#ff6600] font-semibold mb-2">{promoCode.discount}</p>
      {large && (
        <>
          <p className="text-sm text-gray-400">Действует до: {promoCode.valid_until}</p>
          <p className="text-sm text-gray-400">{promoCode.terms}</p>
        </>
      )}
    </div>
  );
};