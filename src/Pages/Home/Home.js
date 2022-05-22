import React from 'react';
import ManufacturerProducts from '../ManufacturerProducts/ManufacturerProducts';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import CategoriesShop from './CategoriesShop';
import NewArrivals from './NewArrivals';
import ShopBrands from './ShopBrands';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ManufacturerProducts/>
            <BusinessSummery/>
            <NewArrivals/>
            <CategoriesShop/>
            <ShopBrands/>
            <Footer/>
        </div>
    );
};

export default Home;