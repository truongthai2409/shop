import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaHeart, FaSearch } from "react-icons/fa";
import { addToCart } from "../../stores/slices/cart_slice";
import { toast, Toaster } from "sonner";

interface CardComponentProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  label?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  id,
  image,
  title,
  category,
  price,
  originalPrice,
  label,
}) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    toast(`Added ${title} !`);
    dispatch(addToCart({ id, title, price, image, quantity: 1 }));
  };

  return (
    <>
      <div className="relative 2xl:h-[478px] 2xl:w-[312px] overflow-hidden bg-white transition-shadow duration-300 ease-in-out group">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="object-cover object-center w-full 2xl:h-[400px] transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {label && (
            <span className="absolute left-0 px-3 py-1 text-xs font-bold text-white bg-red-500 top-5">
              {label}
            </span>
          )}
          {/* Hover Icons */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            <button
              onClick={handleLikeToggle}
              className={`p-3 rounded-full ${
                isLiked ? "text-red-500" : "text-white"
              } bg-black bg-opacity-50 transition-colors duration-300 ease-in-out`}
            >
              <FaHeart />
            </button>
            <button className="p-3 text-white bg-black bg-opacity-50 rounded-full">
              <FaSearch />
            </button>
          </div>
          <div className="absolute bottom-5 left-0 right-0 mx-auto w-[120px]">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 text-sm font-bold text-white transition-opacity duration-300 ease-in-out bg-black rounded opacity-0 group-hover:opacity-100"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:w-[210px] 2xl:w-[292px] mx-auto">
          <h3 className="mt-2 font-semibold text-gray-900 2xl:text-lg">
            {title}
          </h3>
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-gray-600">{category}</p>
            <div className="mt-2 mb-2">
              {originalPrice && (
                <span className="mr-2 text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              <span className="font-bold text-red-500">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
