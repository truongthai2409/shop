import React from 'react';
interface CardComponentProps {
    image: string;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    label?: string;
  }
const CardComponent: React.FC<CardComponentProps> = ({ image, title, category, price, originalPrice, label }) => {
  return (
    <div className="2xl:h-[478px] 2xl:w-[312px] overflow-hidden bg-white">
      <div className="relative">
        <img src={image} alt={title} className="object-cover object-center w-full 2xl:h-[400px]" />
        {label && (
          <span className="absolute left-0 px-3 py-1 text-xs font-bold text-white bg-red-500 top-5">
            {label}
          </span>
        )}
      </div>
      <div className="lg:w-[210px] 2xl:w-[292px] mx-auto">
        <h3 className="mt-3 font-semibold text-gray-900 2xl:text-lg">{title}</h3>
        <div className='flex items-baseline justify-between'>
            <p className="text-sm text-gray-600">{category}</p>
            <div className="mt-2">
            {originalPrice && (
                <span className="mr-2 text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
            )}
            <span className="font-bold text-red-500">${price.toFixed(2)}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
