import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, 
      smooth: true, 
    });
  };
  return (
    <footer className="pt-12 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 mx-auto page-container md:grid-cols-4">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-xl font-bold">CORAL</h2>
          <p className="mb-4 text-sm text-gray-500">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Catalog */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-semibold">CATALOG</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Necklaces
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Hoodies
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Jewelry Box
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                T-Shirt
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Jacket
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-semibold">ABOUT US</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Our Producers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Sitemap
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-semibold">CUSTOMER SERVICES</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Track Your Order
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Product Care & Repair
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Book An Appointment
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4 mt-8 bg-gray-900">
        <div className="container flex flex-col items-center justify-between mx-auto text-sm text-gray-500 md:flex-row">
          <p>© 2022 Coral, Inc.</p>
          <img src="/icons-payment-1@2x.png" className="h-6" alt="" />
          <p
            onClick={scrollToTop}
            className="mt-4 text-gray-500 hover:text-gray-300 md:mt-0"
          >
            Scroll To Top ↑
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
