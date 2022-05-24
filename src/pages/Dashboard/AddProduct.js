import { async, stringify } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = '91cd45df39ff389199a8fa899eabb179';

    const onSubmit = async data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                const product = {
                    name: data.name,
                    price: parseInt(data.price),
                    des: data.description,
                    available: parseInt(data.available),
                    minOrder: parseInt(data.order),
                    img: img
                }
                //send database
                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(output => {
                        if (output.insertedId) {
                            toast.success('Product added successfully')
                            reset();
                        } else {
                            toast.error('Failed added product')
                        }
                    })
            })
    }
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-4'>Add Product</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Product name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Type Product Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Enter Product Description"
                        className="w-full px-2 py-5 rounded-md"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Product description is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter available quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("available", {
                            required: {
                                value: true,
                                message: 'Available quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Minimum order quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("order", {
                            required: {
                                value: true,
                                message: 'Minimum order is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.order.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white mb-5' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;