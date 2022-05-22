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
            <div className='grid grid-cols-4 gap-5  pt-10'>
                <div class="card bg-base-100 shadow-xl border">
                    <figure class="p-0">
                        <img src={img1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">VOLUP TATEM ACCU</h2>
                        <div class="rating rating-sm">
                            <input type="radio" name="rating-9" class="rating-hidden" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$60.00</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl border">
                    <figure class="p-0">
                        <img src={img2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">STUCKRUM BRESAO</h2>
                        <div class="rating rating-sm">
                            <input type="radio" name="rating-9" class="rating-hidden" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$76.00</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl border">
                    <figure class="p-0">
                        <img src={img3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">RENPUIS CONSUAT</h2>
                        <div class="rating rating-sm">
                            <input type="radio" name="rating-9" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                        </div>
                        <p className='font-bold text-xl text-primary'>$35.00</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl border">
                    <figure class="p-0">
                        <img src={img4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">REMPORUM STICK</h2>
                        <div class="rating rating-sm">
                            <input type="radio" name="rating-9" class="rating-hidden" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                        </div>
                        <p className='font-bold text-xl'>$96.00</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-20 w-full gap-10'>
                <div>
                    <img className='w-full' src={img5} alt="" />
                </div>
                <div>
                    <img className='w-full'src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;