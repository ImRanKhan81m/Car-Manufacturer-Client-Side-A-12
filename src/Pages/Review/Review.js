import React, { useEffect, useState } from 'react';
import ReviewItems from './ReviewItems';

const Review = () => {
    const [reviews, setReviews] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Customer Reviews</h1>
            <div>
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