import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const userData = {
            location: data.location,
            gender: data.gender,
            phone: data.phone,
            linkedIn: data.linkedIn
        }
        fetch(`https://storeforpc.up.railway.app/userProfile/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Profile update successfully")
                reset()
            })

    };
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>Update Your Profile</h2>
            </div>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Update Your Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input input-bordered w-full max-w-xs' {...register("location")} placeholder="Type your city/division" required />
                            <input className='input input-bordered w-full max-w-xs my-2' {...register("phone")} placeholder="Type your Phone Number" required />
                            <input className='input input-bordered w-full max-w-xs' {...register("linkedIn")} placeholder="Type your Phone LinkedIn profile link" required />
                            <select className='select select-bordered w-full max-w-xs mt-2' {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <input className='btn btn-primary mt-4' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;