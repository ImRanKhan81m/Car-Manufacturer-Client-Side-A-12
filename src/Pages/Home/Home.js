import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import CategoriesShop from './CategoriesShop';
import NewArrivals from './NewArrivals';
import ShopBrands from './ShopBrands';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummery/>
            <NewArrivals/>
            <CategoriesShop/>
            <ShopBrands/>
        </div>
    );
};

export default Home;