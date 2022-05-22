import React from 'react';

const Banner = () => {
    return (
        <div class="hero lg:h-[600px] md:h-[400px] sm:h-[400px] h-[400px]" style={{backgroundImage: `url("https://i.ibb.co/cbcNs1L/master-collects-rebuilt-motor-car-109285-4650.webp")`}}>
            <div class="hero-overlay bg-opacity-40 bg-black"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello There</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;