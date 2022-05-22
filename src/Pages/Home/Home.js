import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import CategoriesShop from './CategoriesShop';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummery/>
            <NewArrivals/>
            <CategoriesShop/>
        </div>
    );
};

export default Home;