
import React from 'react';
import img from '../../assets/notfound/2663517.jpg'

const NotFoundPage = () => {
    return (
        <div className='mid-content'>
            <div>
                <h1 className='font-bold text-9xl text-center mt-20 text-primary'>404</h1>
                <h3 className='font-bold text-5xl text-center'>Page Not Found</h3>
            </div>
            <div className='flex justify-center mt-10'>
                <img style={{width:'70%'}} src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;