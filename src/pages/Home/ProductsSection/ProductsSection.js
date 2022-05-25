import React, { useEffect, useState } from 'react';
import ProductSection from './ProductSection';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product', {
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
                    products.slice(0, 6).map(product => <ProductSection key={product._id} product={product}></ProductSection>)
                }
            </div>
        </div>
    );
};

export default ProductsSection;