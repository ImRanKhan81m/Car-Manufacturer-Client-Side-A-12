import React from 'react';
import Banner from './Banner';
import CategoriesShop from './CategoriesShop';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
        <div>
            <Banner/>
            <NewArrivals/>
            <CategoriesShop/>
        </div>
    );
};

export default Home;