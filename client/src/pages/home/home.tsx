import React from 'react';
import { BrandBanner, Header, HotCategory, TopMain } from '../../components';
import GridProduct from '../../components/grid_products/grid_product';

const HomePage : React.FC = () => {
    return (
        <>
            <Header/>
            <TopMain/>
            <HotCategory/>
            <GridProduct/>
            <BrandBanner/>
        </>
    );
};

export default HomePage;