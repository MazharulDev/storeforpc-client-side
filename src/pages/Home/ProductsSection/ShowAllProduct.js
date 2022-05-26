import React, { useEffect, useState } from 'react';
import Footer from '../../../shared/Footer/Footer';
import PerProduct from './PerProduct';

const ShowAllProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://storeforpc.herokuapp.com/product', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>Choose Product</h2>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                {
                    products.map(product => <PerProduct key={product._id} product={product}></PerProduct>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default ShowAllProduct;