import React from "react";

const BrandBanner: React.FC = () => {
  return (
    <div className="grid grid-cols-2 w-full 2xl:h-[776px] lg:h-[600px] bg-black mb-20 bg-hero-brand bg-cover bg-no-repeat">
      <div className="relative col-start-2 overflow-hidden">
        <img
          className="absolute lg:top-10 lg:left-[200px] lg:w-[600px] lg:h-[260px] 2xl:top-[51px] 2xl:left-[284px] 2xl:w-[732px] 2xl:h-[309px]"
          src="/1024pxzara-logo-1@2x.png"
        />
        <img
          className="absolute lg:top-[200px] lg:left-[80px] lg:w-[180px] lg:h-[70px] 2xl:top-[223px] 2xl:left-[123px] 2xl:w-[190px] 2xl:h-[80px]"
          src="/1024pxzara-logo-2@2x.png"
        />
        <p
          className=" mb-8 capitalize z-50 text-white lg:ml-20 lg:mt-[312px] lg:w-[330px] lg:text-xl 2xl:mt-[369px] 2xl:w-[504px] 2xl:bottom-10 
            2xl:ml-[123px] 2xl:h-[187px] 2xl:text-3xl 2xl:leading-10"
        >
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <button className="font-semibold bg-white lg:ml-20 lg:p-3 lg:text-xl 2xl:p-5 2xl:text-2xl 2xl:ml-[123px]">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default BrandBanner;
