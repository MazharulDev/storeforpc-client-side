import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/istockphoto-972609398-640x640.jpg'

const NotFound = () => {
    return (
        <div className='bg-black h-screen'>
            <div className='md:flex mb-5 md:mb-0 justify-center items-center md:h-screen gap-5 p-10'>
                <div>
                    <h2 className='text-red-600 text-6xl'>Page not found</h2>
                    <Link to='/'><button className='px-4 py-2 bg-red-600 text-white mt-5 rounded-lg hover:bg-red-700'>Go to home safely</button></Link>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;