import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

interface HeaderProps {
  onCartButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartButtonClick }) => {
  return (
    <header>
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#" className="text-base font-medium text-black">Shop</a>
              <a href="#" className="text-base font-medium text-black">Men</a>
              <a href="#" className="text-base font-medium text-black">Women</a>
              <a href="#" className="text-base font-medium text-black">Kid</a>
            </div>
            <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
              <div className="flex-shrink-0">
                <a href="#" className="flex">
                  <img
                    className="w-auto h-8 lg:h-10"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden"
              onClick={onCartButtonClick}
            >
              <FaShoppingCart className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <CiMenuBurger className="w-6 h-6" />
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link to='/login' className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Sign in</Link>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
                onClick={onCartButtonClick}
              >
                <FaShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
