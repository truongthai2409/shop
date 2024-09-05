import React, { useState, useEffect, useRef } from "react";
import {
  BrandBanner,
  CartList,
  FloatingCartIcon,
  Footer,
  GridProduct,
  Header,
  HotCategory,
  InstagramSlider,
  NewsletterSubscription,
  SliderProducts,
  TopMain,
} from "../../components";


const HomePage: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility
  const [showCartIcon, setShowCartIcon] = useState(false); // State to control the visibility of the cart icon
  const gridProductRef = useRef<HTMLDivElement>(null);
  const sliderProductsRef = useRef<HTMLDivElement>(null);

  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen); // Toggle the shopping cart component visibility
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowCartIcon(true); // Show the cart icon when in view
        } else {
          setShowCartIcon(false); // Hide the cart icon when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the component is visible
    });

    if (gridProductRef.current) {
      observer.observe(gridProductRef.current);
    }
    if (sliderProductsRef.current) {
      observer.observe(sliderProductsRef.current);
    }

    return () => {
      if (gridProductRef.current) {
        observer.unobserve(gridProductRef.current);
      }
      if (sliderProductsRef.current) {
        observer.unobserve(sliderProductsRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header onCartIconClick={handleCartButtonClick} />
      <TopMain />
      <HotCategory />
      <div ref={gridProductRef}>
        <GridProduct />
      </div>
      <BrandBanner />
      <div ref={sliderProductsRef}>
        <SliderProducts />
      </div>
      <InstagramSlider />
      <NewsletterSubscription />
      <Footer />
      {showCartIcon && (
        <FloatingCartIcon onCartIconClick={handleCartButtonClick} />
      )}
      <CartList isCartOpen={isCartOpen} handleCartButtonClick={handleCartButtonClick} />
      {isCartOpen && (
        <div
          onClick={handleCartButtonClick}
          className="fixed inset-0 z-40 bg-black opacity-50"
        />
      )}
    </>
  );
};

export default HomePage;
