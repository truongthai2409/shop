import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FloatingCartIconProps {
  onCartIconClick: () => void;
}

const Header: React.FC<FloatingCartIconProps> = ({ onCartIconClick }) => {
  return (
    <div className="w-full h-full bg-secondary">
      <header className="pt-4 text-black page-container">
        <div className="flex flex-col md:flex-row items-center justify-between border-b-[1.5px] border-black-900 pb-5">
          <label className="w-full md:w-[300px] cursor-pointer mb-4 md:mb-0">
            <div className="flex items-center">
              <CiSearch className="inline-block" />
              <input
                type="text"
                name="search"
                id="search"
                className="inline-block w-full pl-2 ml-2 rounded-lg md:w-auto hover:outline-none hover:ring hover:border-blue300 focus:outline-none focus:ring focus:border-blue300 outline-0 bg-secondary"
              />
            </div>
          </label>
          
          <div className="flex items-center justify-center mb-4 md:justify-start md:mb-0">
            <img className="w-[2rem] h-[1rem]" src="group-97.svg" alt="" />
            <h1 className="px-2 text-2xl md:text-3xl">CORAL</h1>
            <img className="w-[2rem] h-[1rem]" src="group-97.svg" alt="" />
          </div>
          
          <div className="w-full md:w-[300px] grid grid-cols-1 md:flex md:items-center md:justify-end md:space-x-4 h-14">
            <Link to="login" className="flex items-center justify-center cursor-pointer">
              <FaUser />
              <span className="ml-2">Account</span>
            </Link>
            <span
              className="flex items-center justify-center cursor-pointer"
              onClick={onCartIconClick}
            >
              <FaShoppingCart />
              <span className="ml-2">Shopping</span>
            </span>
          </div>
        </div>
        
        <div className="w-full mt-6">
          <ul className="nav-head">
            <li className="w-full md:w-auto">Jewelry & Accessories<span></span></li>
            <li className="w-full md:w-auto">Clothing & Shoes<span></span></li>
            <li className="w-full md:w-auto">Home & Living<span></span></li>
            <li className="w-full md:w-auto">Wedding & Party<span></span></li>
            <li className="w-full md:w-auto">Toys & Entertainment<span></span></li>
            <li className="w-full md:w-auto">Craft Supplies & Tools<span></span></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
