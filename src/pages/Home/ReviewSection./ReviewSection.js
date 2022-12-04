import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import ReviewSectionOne from './ReviewSectionOne';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://storeforpc.up.railway.app/review')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setReviews(data)
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl text-center my-16'>Why Our Customers <span className='text-blue-400'>Love</span> Us? </h2>
            {
                loading ? <Loading /> : <>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
                        {
                            reviews.slice(0, 4).map(review => <ReviewSectionOne key={review._id} reviewAll={review} />)
                        }
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Link to='/allreviews' className="btn btn-outline btn-info">Show All Reviews</Link>
                    </div>
                </>
            }
        </div>
    );
};

export default ReviewSection;