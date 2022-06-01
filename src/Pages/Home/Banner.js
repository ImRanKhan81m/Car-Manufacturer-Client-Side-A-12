import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:h-[600px] md:h-[400px] sm:h-[400px] h-[400px]" style={{ backgroundImage: `url("https://i.ibb.co/cbcNs1L/master-collects-rebuilt-motor-car-109285-4650.webp")` }}>
            <div className="hero-overlay bg-opacity-40 bg-black"></div>
            <div className="hero-content text-center text-white">
                <div data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Make Your Car Last Longer</h1>
                    <p className="mb-5">Find here Automotive Tools, Automobile Tools manufacturers, suppliers & exporters in India. Get contact details & address of companies manufacturing and ...</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;