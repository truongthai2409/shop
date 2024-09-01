import React from "react";
import {
  BrandBanner,
  Footer,
  GridProducts,
  Header,
  HotCategory,
  InstagramSlider,
  NewsletterSubscription,
  SliderProducts,
  TopMain,
} from "../../components";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <TopMain />
      <HotCategory />
      <GridProducts />
      <BrandBanner />
      <SliderProducts />
      <InstagramSlider/>
      <NewsletterSubscription/>
      <Footer/>
    </>
  );
};

export default HomePage;
