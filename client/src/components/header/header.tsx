import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// interface HeaderProps {
//   onCartButtonClick: () => void;
// }

const Header: React.FC = () => {
  return (
    <header className="page-container mt-[1rem] text-black">
      <div className="flex items-center justify-between border-b-[1.5px] border-black-900 pb-5">
        <label className="w-[300px] cursor-pointer">
          <CiSearch className="inline-block"/>
          <input
            type="text"
            name="search"
            id="search"
            className="inline-block ml-2 rounded-lg outline-0"
          />
        </label>
        <div className="flex items-center ">
          <img className="w-[2rem] h-[1rem]" src="group-97.svg" alt="" />
          <h1 className="items-center flex-grow px-2 text-3xl">CORAL</h1>
          <img className="w-[2rem] h-[1rem]" src="group-97.svg" alt="" />
        </div>
        <div className="w-[300px] flex items-center justify-end space-x-4 h-14">
          <span className="flex items-center cursor-pointer">
            <FaUser />
            <span className="ml-2">Account</span>
          </span>
          <span className="flex items-center cursor-pointer">
            <FaShoppingCart />
            <span className="ml-2">Shopping</span>
          </span>
        </div>
      </div>
      <div className="flex w-full mt-6">
        <ul className="flex justify-between w-full cursor-pointer">
          <li className="pr-2 leading-10 text-center">Jewelry & Accessories</li>
          <li className="px-2 leading-10 text-center">Clothing & Shoes</li>
          <li className="px-2 leading-10 text-center">Home & Living</li>
          <li className="px-2 leading-10 text-center">Wedding & Party</li>
          <li className="px-2 leading-10 text-center">Toys & Entertainment</li>
          <li className="pl-2 leading-10 text-center">
            Craft Supplies & Tools
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
