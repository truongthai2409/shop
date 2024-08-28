import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const TopMain: React.FC = () => {
  return (
    <>
    <div className="relative w-full">
        <img className="absolute translate-y-2/4 -z-20" src="/flowerpattern.svg" alt="" />
      </div>
      <section className="flex items-center justify-evenly mt-10 2xl:min-w-[1226px] lg:max-w-[980px] mx-auto 2xl:h-[600px] lg:h-[500px]">
        <div className="">
          <h2 className="block my-8 2xl:text-7xl 2xl:pb-19 lg:pb-10 lg:text-5xl">Collections</h2>
          <h2 className="my-2 capitalize 2xl:my-4 2xl:text-3xl lg:text-2xl">
            you can explore ans shop many differnt collection
          </h2>
          <h2 className="my-2 capitalize 2xl:my-4 2xl:text-3xl lg:text-2xl">from various barands here.</h2>
          <button className="flex items-center px-6 py-2 mt-6 text-white transition-all bg-gray-900 2xl:text-2xl hover:bg-gray-700">
            <FaShoppingBag className="inline-block mr-2"/>
            Shop Now
          </button>
        </div>
        <div className="">
          <div className="relative pr-0">
            <img
              className="2xl:w-[26.5rem] 2xl:h-[34rem] lg:w-[20rem] lg:h-[26rem]" // Giảm kích thước ở màn hình 14 inch
              src="/img19@2x.png"
              alt=""
            />
            <div
              className="absolute -z-10 top-5 left-5 block 2xl:w-[26.5rem] 2xl:h-[34rem] 
              lg:w-[20rem] lg:h-[26rem] lg:rounded-br-[135px] lg:rounded-tl-[115px]
              2xl:rounded-tl-[170px] 2xl:rounded-br-[170px] border-[3px] border-slate-400"
            ></div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default TopMain;
