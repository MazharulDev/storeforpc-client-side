import React from 'react';
import { BsGraphUp } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { FiShoppingCart } from 'react-icons/fi'

const Summary = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-6xl text-center mt-10'>Millions Business Trust us</h2>
                <p className='text-2xl my-5 text-center'>Try to understand users expectation</p>
                <div className='md:h-72 flex items-center count-bg mb-5'>
                    <div className='md:grid grid-cols-4 gap-28 w-fit mx-auto'>
                        <div className='text-center'>
                            <IoIosPeople className='text-7xl mx-auto mb-3'></IoIosPeople>
                            <span className='text-5xl font-bold'>100+</span>
                            <h2 className='text-2xl uppercase mt-4'>Customers</h2>
                        </div>
                        <div className='text-center'>
                            <BsGraphUp className='text-7xl mx-auto mb-3'></BsGraphUp>
                            <span className='text-5xl font-bold'>100M+</span>
                            <h2 className='text-2xl uppercase mt-4'>Annual revenue</h2>
                        </div>
                        <div className='text-center'>
                            <BiTask className='text-7xl mx-auto mb-3'></BiTask>
                            <span className='text-5xl font-bold'>55K+</span>
                            <h2 className='text-2xl uppercase mt-4'>Reviews</h2>
                        </div>
                        <div className='text-center'>
                            <FiShoppingCart className='text-7xl mx-auto mb-3'></FiShoppingCart>


                            <span className='text-5xl font-bold'>20K+ </span>



                            <h2 className='text-2xl uppercase mt-4'>Product</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;