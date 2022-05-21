import React from 'react';
import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-2xl rounded-lg" />
                <div>
                    <h1 class="text-5xl font-bold">Build Your own Pc</h1>
                    <p class="py-6">Find the best parts for your pc. Make the old PC the head of the new power. A new part is able to speed up the computer. If any parts of your computer are damaged, here is the solution.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;