import React from 'react';
import ManufacturerProducts from '../ManufacturerProducts/ManufacturerProducts';
import Review from '../Review/Review';
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
            <ShopBrands/>
            <CategoriesShop/>
            <Review/>
            
            <Footer/>
        </div>
    );
};

export default Home;