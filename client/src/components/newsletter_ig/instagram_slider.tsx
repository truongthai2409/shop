import React from "react";

const images = [
  "/img06@2x.png",
  "/img07@2x.png",
  "/img09@2x.png",
  "/img05@2x.png",
  "/img08@2x.png",
  "/img10@2x.png",
];

const InstagramSlider: React.FC = () => {
  return (
    <div className="py-8 page-container">
      <h2 className="mb-4 text-4xl font-bold text-center">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-3 gap-4 px-4 py-8 md:grid-cols-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Instagram ${index}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
      <div className="my-8">
        <h2 className="mb-4 text-4xl font-bold text-center">
          Or Subscribe To The Newsletter
        </h2>
        <form className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-64 px-4 py-2 border-b-2 border-gray-400 focus:outline-none md:w-96"
          />
          <button
            type="submit"
            className="px-6 py-2 ml-4 font-semibold text-gray-500 bg-white"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstagramSlider;
