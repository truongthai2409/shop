import React from "react";

const HotCategory: React.FC = () => {
  return (
    <div className="page-container">
      <div className="grid items-center grid-cols-5 gap-8 my-20 justify-items-center">
        <img src="/brand05@2x.png" alt="" />
        <img src="/brand01@2x.png" alt="" />
        <img src="/brand02@2x.png" alt="" />
        <img src="/brand03@2x.png" alt="" />
        <img src="/brand04@2x.png" alt="" />
      </div>
      <div className="grid grid-cols-2 gap-4 my-20">
        <div className="relative col-span-1">
          <img
            src="/img18@2x.png"
            alt="Large Fashion Image"
            className="object-cover w-full h-full aspect-square"
          />
          <div className="absolute bottom-0 font-semibold origin-top-left transform -rotate-90 2xl:-left-12 lg:-left-[2rem] 2xl:-bottom-6 lg:bottom-1 lg:text-2xl 2xl:text-4xl">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img01@2x.png"
            alt="Fashion Image 1"
            className="object-cover w-full h-full aspect-square"
          />
          <img
            src="/img02@2x.png"
            alt="Fashion Image 2"
            className="object-cover w-full h-full aspect-square"
          />
          <img
            src="/img03@2x.png"
            alt="Fashion Image 3"
            className="object-cover w-full h-full aspect-square"
          />
          <img
            src="/img04@2x.png"
            alt="Fashion Image 4"
            className="object-cover w-full h-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default HotCategory;
