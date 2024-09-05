import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface FloatingCartIconProps {
  onCartIconClick: () => void;
}

const FloatingCartIcon: React.FC<FloatingCartIconProps> = ({ onCartIconClick }) => {
  return (
    <div
      className="fixed z-50 p-4 text-white bg-red-500 rounded-full shadow-lg cursor-pointer bottom-5 right-5"
      onClick={onCartIconClick} // Trigger the click handler when the icon is clicked
    >
      <FaShoppingCart size={24} />
    </div>
  );
};

export default FloatingCartIcon;
