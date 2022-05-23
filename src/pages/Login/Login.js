import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
       signInWithEmailAndPassword(data.email,data.password)
    };
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if (userWithEmail||userWithGoogle) {
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1000);
    }
    if(errorWithGoogle){
        toast.error(errorWithGoogle?.message)
    }
    if(errorWithEmail){
        toast.error(errorWithEmail?.message)
    }
    if(loadingWithEmail||loadingWithGoogle){
        return <Loading/>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div className='flex justify-between items-center'>
                            <div>
                                <input className='my-5' type="checkbox" name="remember" />
                                <label className='ml-2' for="remember">Remember me</label>
                            </div>
                            <h2 className='my-3'><Link className='text-blue-600 hover:underline' to='/forgotPassword'>Forgot password?</Link></h2>
                        </div>

                        <input className='btn btn-primary text-white w-full' type="submit" value="Login" />
                    </form>
                    <p><small>New to StoreForPc ?  <Link className='text-blue-500 hover:underline' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary hover:text-white w-full'>Sign In with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;