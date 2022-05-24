import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItems = ({ review }) => {
    const { name, description, rating, img } = review;
    return (
        <div class="card bg-base-100 shadow-xl border p-5">
            <div className='flex justify-start items-center mb-5'>
                <img className='rounded-full' style={{ width: '20%' }} src={img} alt="" />
                <div className='ml-3'>
                    <h1 className='lg:text-2xl md:text-xl sm:text-3xl text-xl font-bold'>{name}</h1>
                    <h6>
                        {rating === 1 && <span><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /></span>}

                        {rating === 2 && <span><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /></span>}

                        {rating === 3 && <span><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /></span>}

                        {rating === 4 && <span><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /></span>}

                        {rating >= 5 && <span><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /><FontAwesomeIcon className='rating-star text-neutral' icon={faStar} /></span>}
                        
                        </h6>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewItems;