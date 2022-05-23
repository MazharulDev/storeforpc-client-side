import React from 'react';
import { Link } from 'react-router-dom';
import {MdPriceChange} from 'react-icons/md'

const ProductSection = ({ product }) => {
    const { _id, name, img, des, minOrder, available, price } = product;
    return (
        <div className='shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0 box-border overflow-hidden '>
            <div className='box-border h-56 overflow-hidden cursor-pointer'>
                <img className=' hover:scale-105 duration-300 h-full w-full' src={img} alt="" />
            </div>
            <div className=' px-8 py-5'>
                <h2 className='text-xl my-5 text-blue-500 font-semibold'>{name}</h2>
                <div className='flex items-center justify-between my-3'>
                    <h5 className='text-lg font-medium'>Available: {available}</h5>
                    <div className='flex items-center gap-2'>

                        <h3 className='text-lg font-bold'>Minimum Order: {minOrder}</h3>
                    </div>
                </div>
                <p className='text-gray-600'>{des.slice(0, 100)}... </p>

                <div className='flex items-center gap-4'>
                    <MdPriceChange className='text-3xl'></MdPriceChange>
                    <p className='text-2xl font-bold my-2'>${price}</p>
                </div>
                <Link to={`/purchase/${_id}`} className='w-16'>
                    <button class="btn btn-block btn-primary">Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductSection;