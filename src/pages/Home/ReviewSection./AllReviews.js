import React, { useEffect, useState } from 'react';
import ReviewsAll from './ReviewsAll';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>All Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
                {
                    reviews.map(review => <ReviewsAll key={review._id} reviewAll={review} />)
                }
            </div>
        </div>
    );
};

export default AllReviews;