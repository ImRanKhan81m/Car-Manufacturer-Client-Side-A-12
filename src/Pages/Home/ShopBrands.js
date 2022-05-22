import React from 'react';
import img1 from '../../assets/Brand/b1.jpg'
import img2 from '../../assets/Brand/b2.jpg'
import img3 from '../../assets/Brand/b3.jpg'
import img4 from '../../assets/Brand/b4.jpg'
import img5 from '../../assets/Brand/b5.jpg'
import img6 from '../../assets/Brand/b6.jpg'

const ShopBrands = () => {
    return (
        <div className='mb-5'>
            <div className='mid-content'>
                <p className='text-center text-primary font-bold'>TOP QUALITY PARTNERS</p>
                <h1 className='text-center text-3xl font-bold'>SHOP BY BRANDS</h1>
                <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 lg:mt-10 mt-5  shadow-xl'>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img1} alt="" /></div>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img2} alt="" /></div>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img3} alt="" /></div>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img4} alt="" /></div>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img5} alt="" /></div>
                    <div className='border cursor-pointer'><img className=' mx-auto py-3' src={img6} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default ShopBrands;