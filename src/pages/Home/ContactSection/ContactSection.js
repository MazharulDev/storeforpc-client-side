import React from 'react';
import { toast } from 'react-toastify';
import './ContactSection.css'

const ContactSection = () => {
    const handleSignUpBtn = e => {
        e.preventDefault();
        const inputEmail = e.target.email.value;
        const email = {
            email: inputEmail
        }
        //send database
        fetch('https://storeforpc.herokuapp.com/userContact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Review added successfully')

                    e.target.email.value = ''
                }
            })

    }
    return (
        <div className='mt-8'>
            <div className='h-64 flex items-center justify-center bg-img-news'>
                <div>
                    <h2 className='text-6xl text-white text-center mb-12'>Contact Us</h2>
                    <div className='md:flex items-center justify-center gap-3 bg-text'>

                        <form onSubmit={handleSignUpBtn}>
                            <input className='px-5 py-3 border rounded-lg mb-4 md:mb-0' type="email" name="email" placeholder='Type your email' required />
                            <input className='px-5 py-3 text-white rounded-lg bg-transparent border-2 border-blue-500  ml-3 hover:bg-blue-500 hover:text-white duration-200 cursor-pointer' type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;