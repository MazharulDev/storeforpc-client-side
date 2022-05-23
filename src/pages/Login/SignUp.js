import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../shared/Loading/Loading';

const SignUp = () => {
    const navigate=useNavigate();
    const [error,setError]=useState('')
    const [
        createUserWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
      const [updateProfile, updating] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        if (data.password !== data.confirmPassword) {
            setError('Two password did not match')
            return;
        }
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({displayName:data.name})
    };
    const [userToken]=useToken(userWithEmail)
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (userToken) {
            navigate(from, { replace: true });
        }
    }, [navigate,userToken,from])
    if(errorWithEmail){
        toast.error(errorWithEmail?.message)
    }
    if(loadingWithEmail|| updating){
        return <Loading/>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },

                                        minLength: {
                                            value: 3,
                                            message: 'Must 3 character Name'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },

                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a Valid Email'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: 'Must 6 character in  Password'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmPassword",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: 'Must 6 character in  Password'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                            <p className='text-red-500 my-4'>{error}</p>
                        <input className='btn btn-primary text-white w-full' type="submit" />
                    </form>
                    <p><small>Already have an account?  <Link className='text-primary hover:underline' to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;