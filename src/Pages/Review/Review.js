import React, { useEffect, useState } from 'react';
import ReviewItems from './ReviewItems';

const Review = () => {
    const [reviews, setReviews] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReviews(data.reverse().slice(0,6)))
    },[])
    return (
        <div className='lg:pb-32 md:pb-16 sm:pb-10 pb-8'>
            <h1 className='text-center text-4xl font-bold mb-10'>CUSTOMER REVIEWS </h1>
            <div className='mid-content grid lg:grid-cols-3 md:grid-cols-3 gap-5'>
                {
                    reviews?.map(review=> <ReviewItems
                    key={review._id}
                    review={review}

                    ></ReviewItems>)
                }
            </div>
        </div>
    );
};

export default Review;