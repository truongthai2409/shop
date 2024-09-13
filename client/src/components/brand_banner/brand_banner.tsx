import React from "react";

const BrandBanner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[400px] lg:h-[600px] 2xl:h-[776px] bg-black mb-20 bg-hero-brand bg-cover bg-no-repeat">
      <div className="relative overflow-hidden lg:col-start-2">
        <img
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[200px] h-auto lg:w-[600px] lg:h-[260px] 2xl:top-[51px] 2xl:left-[284px] 2xl:w-[732px] 2xl:h-[309px]"
          src="/1024pxzara-logo-1@2x.png"
          alt="Zara Logo"
        />
        <img
          className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-[120px] h-auto lg:top-[200px] lg:left-[80px] lg:w-[180px] lg:h-[70px] 2xl:top-[223px] 2xl:left-[123px] 2xl:w-[190px] 2xl:h-[80px]"
          src="/1024pxzara-logo-2@2x.png"
          alt="Zara Sub Logo"
        />
        <p
          className="mt-[250px] text-center text-white w-[90%] mx-auto lg:text-left lg:mt-[312px] lg:ml-20 lg:w-[330px] lg:text-xl 2xl:mt-[369px] 2xl:w-[504px] 2xl:ml-[123px] 2xl:h-[187px] 2xl:text-3xl 2xl:leading-10"
        >
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        {/* Button */}
        <button className="block mx-auto mt-4 font-semibold bg-white py-2 px-4 text-base lg:ml-20 lg:p-3 lg:text-xl 2xl:p-5 2xl:text-2xl 2xl:ml-[123px]">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default BrandBanner;
