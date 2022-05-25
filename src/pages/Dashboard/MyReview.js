import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const review = {
            user: user.displayName,
            photo: user.reloadUserInfo.photoUrl,
            rating: parseInt(data.rating),
            review: data.review
        }
        console.log(review);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review added successfully')
                    reset();
                }
            })
    }

    return (
        <div className='mt-5'>

            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-4'>Add Review</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Select Rating</span>
                    </label>
                    <select {...register('rating')} className="select input-bordered select-xs w-full max-w-xs">

                        <option>1</option>)
                        <option>2</option>)
                        <option>3</option>)
                        <option>4</option>)
                        <option>5</option>)

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Type Review</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Enter Product Name"
                        className="textarea textarea-bordered h-24"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white mb-5' type="submit" value="Add Review" />
            </form>


        </div>
    );
};

export default MyReview;