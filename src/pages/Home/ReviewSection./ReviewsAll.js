import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewsAll = ({ reviewAll }) => {
    const { user, photo, rating, review } = reviewAll;
    return (
        <div>
            <div className='border rounded-lg p-5 h-72'>
                <div className='flex items-center gap-3'>
                    <div class="avatar">
                        <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {photo ? <img src={photo} alt='' /> : <div className='text-3xl h-full text-white bg-primary flex justify-center items-center'>{user.substring(0, 1)}</div>}
                        </div>
                    </div>
                    {(rating === 1) && <div className='flex text-red-500'>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>}
                    {(rating === 2) && <div className='flex text-red-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>}
                    {(rating === 3) && <div className='flex text-green-300'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />

                    </div>}
                    {(rating === 4) && <div className='flex text-green-400'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />

                    </div>}
                    {(rating === 5) && <div className='flex text-green-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />

                    </div>}
                </div>
                <h2 className='text-lg font-bold my-3'>{user}</h2>
                <p className=''>"{review}"</p>
            </div>
        </div>
    );
};

export default ReviewsAll;