import React from 'react';
import img1 from '../../assets/summery/fun-fact-icon-1.svg'
import img2 from '../../assets/summery/fun-fact-icon-2.svg'
import img3 from '../../assets/summery/fun-fact-icon-3.svg'
import img4 from '../../assets/summery/fun-fact-icon-4.svg'

const BusinessSummery = () => {
    return (
        <div className='bg-secondary lg:py-12 md:py-10 sm:py-5 py-5 my-10'>
            <h1 className='text-4xl text-info text-center mb-20'>Business Summery</h1>
            <div className='mid-content text-center grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5'>
                <div className='flex justify-start mb-5'>
                    <img style={{ width: '30%' }} src={img1} alt="" />
                    <div className='ml-3'>
                        <h1 className='lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-bold'>2890</h1>
                        <p className='lg:text-xl md:text-l text-info'>Car  Tools/Parts</p>
                    </div>
                </div>

                <div className='flex justify-start mb-5'>
                    <img style={{ width: '30%', marginTop:"-10px" }} src={img2} alt="" />
                    <div className='ml-3'>
                        <h1 className='lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-bold'>25</h1>
                        <p className='lg:text-xl md:text-l text-info'>Awards Won</p>
                    </div>
                </div>

                <div className='flex justify-start'>
                    <img style={{ width: '30%', marginTop:"-30px"  }} src={img3} alt="" />
                    <div className='ml-3'>
                        <h1 className='lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-bold'>3585</h1>
                        <p className='lg:text-xl md:text-l text-info'>Happy Clients</p>
                    </div>
                </div>

                <div className='flex justify-start'>
                    <img style={{ width: '30%', marginTop:"-20px"  }} src={img4} alt="" />
                    <div className='ml-3'>
                        <h1 className='lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-bold'>45</h1>
                        <p className='lg:text-xl md:text-l text-info'>Active Workers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;