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
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            {
                products.slice(0, 6).map(product => <ProductSection key={product._id} product={product}></ProductSection>)
            }
        </div>
    );
};

export default ProductsSection;