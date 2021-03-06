import React from 'react';
import img1 from '../../assets/Car tools/9-270x270.jpg'
import img2 from '../../assets/Car tools/12-270x270.jpg'
import img3 from '../../assets/Car tools/10-270x270.jpg'
import img4 from '../../assets/Car tools/11-270x270.jpg'
import img5 from '../../assets/Car tools/bn2.jpg'
import img6 from '../../assets/Car tools/bn3.jpg'

const NewArrivals = () => {
    return (
        <div className='mid-content'>
            <h2 className='text-center text-primary  font-bold'>TOP NEW IN THE WEEK</h2>
            <h1 className='text-center text-3xl font-bold'>NEW ARRIVALS</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5  pt-10'>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-base-100 shadow-xl border">
                    <figure className="p-0">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center py-0 px-2 lg:mb-10 mb-5">
                        <h2 className="card-title">VOLUP TATEM ACCU</h2>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$60.00</p>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-base-100 shadow-xl border">
                    <figure className="p-0">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center py-0 px-2 lg:mb-10 mb-5">
                        <h2 className="card-title">STUCKRUM BRESAO</h2>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$76.00</p>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-base-100 shadow-xl border">
                    <figure className="p-0">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center py-0 px-2 lg:mb-10 mb-5">
                        <h2 className="card-title">RENPUIS CONSUAT</h2>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-9" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <p className='font-bold text-xl text-primary'>$35.00</p>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-base-100 shadow-xl border">
                    <figure className="p-0">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center py-0 px-2 lg:mb-10 mb-5">
                        <h2 className="card-title">REMPORUM STICK</h2>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$96.00</p>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-20 w-full lg:gap-10 gap-5'>
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000">
                    <img className='w-full' src={img5} alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000">
                    <img className='w-full' src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;