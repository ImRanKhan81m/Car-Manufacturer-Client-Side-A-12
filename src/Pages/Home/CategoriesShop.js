import React from 'react';
import img1 from '../../assets/Car tools/cate1-180x210.jpg'
import img2 from '../../assets/Car tools/1-270x270.jpg'
import img3 from '../../assets/Car tools/5-150x150.jpg'
import img4 from '../../assets/Car tools/5-270x270.jpg'
import img5 from '../../assets/Car tools/6-270x270.jpg'
import img6 from '../../assets/Car tools/cate5-180x210.jpg'

const CategoriesShop = () => {
    return (
        <div className='bg-secondary lg:my-20 md:my-14 sm:my-10 my-5 py-16'>
            <p className='text-primary font-bold text-center'>TOP FEATURED COLLECTIONS</p>
            <h1 className='text-center font-bold text-3xl mb-10'>SHOP BY CATEGORIES</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mid-content gap-5'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="Movie" /></figure>
                    <div className="card-body py-10 px-5">
                        <h2 className="card-title font-bold">WHEELS & TIRES</h2>
                        <li>Tires Chains</li>
                        <li>Tires Accessories</li>
                        <li>Wheels</li>
                        <li>Wheels Accessories</li>
                        <li>Tires</li>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesShop;