import React from "react";
import { FaFilter } from "react-icons/fa6";
import CardComponent from "./card_component";
import { Element } from "react-scroll";

const products = [
  {
    id: '01',
    image: "/img15@2x.png",
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: 63.85,
  },
  {
    id: '02',
    image: "/img14@2x.png",
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: 130.0,
  },
  {
    id: '03',
    image: "/img13@2x.png",
    title: "Geometric Print Scarf",
    category: "Scarf",
    price: 53.0,
  },
  {
    id: '04',
    image: "/img04@2x.png",
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    originalPrice: 346.0,
    price: 155.0,
    label: "SALE",
  },
  {
    id: '05',
    image: "/img11@2x.png",
    title: "Basic Dress Green",
    category: "Dress",
    price: 236.0,
    label: "HOT",
  },
  {
    id: '06',
    image: "/img12@2x.png",
    title: "Nike Air Zoom Pegasus",
    category: "Shoe",
    originalPrice: 220.0,
    price: 198.0,
    label: "SALE",
  },
  {
    id: '07',
    image: "/img17@2x.png",
    title: "Nike Repel Miler",
    category: "Dress",
    price: 120.5,
  },
  {
    id: '08',
    image: "/img16@2x.png",
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    price: 160.0,
  },
];

const GridProduct: React.FC = () => {
  return (
    <Element name="grid_product" className="2xl:mb-[100px] mb-20 page-container">
      <h1 className="text-4xl font-semibold">Or subscribe to the newsletter</h1>
      <div className="flex items-center justify-between my-8">
        <ul className="flex">
          <li className="mr-8 font-bold">All Products</li>
          <li className="mr-8">T-Shirt</li>
          <li className="mr-8">Hoodies</li>
          <li className="mr-8">Jecket</li>
        </ul>
        <button className="flex items-center px-3 py-2 pr-3 text-white bg-black">
          <FaFilter className="inline-block mr-2" />
          Filter
        </button>
      </div>
      <div className="2xl:h-[980px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <CardComponent key={index} {...product} />
        ))}
      </div>
    </Element>
  );
};

export default GridProduct;
