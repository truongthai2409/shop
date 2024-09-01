import React from "react";
import Slider, { Settings } from "react-slick";
import { FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardComponent from "../grid_products/card_component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  label?: string;
}

const products: Product[] = [
  {
    image: "/img15@2x.png",
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: 63.85,
  },
  {
    image: "/img14@2x.png",
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: 130.0,
  },
  {
    image: "/img13@2x.png",
    title: "Geometric Print Scarf",
    category: "Scarf",
    price: 53.0,
  },
  {
    image: "/img04@2x.png",
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    originalPrice: 346.0,
    price: 155.0,
    label: "SALE",
  },
  {
    image: "/img11@2x.png",
    title: "Basic Dress Green",
    category: "Dress",
    price: 236.0,
    label: "HOT",
  },
  {
    image: "/img12@2x.png",
    title: "Nike Air Zoom Pegasus",
    category: "Shoe",
    originalPrice: 220.0,
    price: 198.0,
    label: "SALE",
  },
  {
    image: "/img17@2x.png",
    title: "Nike Repel Miler",
    category: "Dress",
    price: 120.5,
  },
  {
    image: "/img16@2x.png",
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    price: 160.0,
  },
];

// Custom Arrow Component
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-right`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-left`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const SliderProducts: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-lvh page-container">
      <h1 className="text-4xl font-semibold">Best Sellers</h1>
      <div className="flex items-center justify-between my-8">
        <ul className="flex">
          <li className="mr-8 font-bold">All Products</li>
          <li className="mr-8">T-Shirt</li>
          <li className="mr-8">Hoodies</li>
          <li className="mr-8">Jacket</li>
        </ul>
        <button className="flex items-center px-3 py-2 pr-3 text-white bg-black">
          <FaFilter className="inline-block mr-2" />
          Filter
        </button>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div className="px-2" key={index}>
            <CardComponent {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderProducts;
