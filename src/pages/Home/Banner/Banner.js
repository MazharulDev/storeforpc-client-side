import React from 'react';
import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 mb-10 md:mb-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-sm md:max-w-2xl rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Build Your own Pc</h1>
                    <p className="py-6">Find the best parts for your pc. Make the old PC the head of the new power. A new part is able to speed up the computer. If any parts of your computer are damaged, here is the solution.</p>
                    <a href='#visit' className='inline-block px-14 mt-10 transition-all py-3 rounded-md text-white hover:scale-110 border-2 duration-300 border-blue-600 hover:bg-transparent hover:text-blue-500 bg-blue-600 uppercase'>Explore</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;