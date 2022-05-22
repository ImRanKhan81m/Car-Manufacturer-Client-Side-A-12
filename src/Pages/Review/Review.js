import React, { useEffect, useState } from 'react';
import ReviewItems from './ReviewItems';

const Review = () => {
    const [reviews, setReviews] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReviews(data.slice(0,3)))
    },[])
    return (
        <div className='pb-32'>
            <h1 className='text-center text-4xl font-bold mb-10'>Customer Reviews</h1>
            <div className='mid-content grid grid-cols-3 gap-5'>
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