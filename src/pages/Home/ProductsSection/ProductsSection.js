import React, { useEffect, useState } from 'react';
import ProductSection from './ProductSection';

const ProductsSection = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            {
                products.map(product=><ProductSection key={product._id} product={product}></ProductSection>)
            }
        </div>
    );
};

export default ProductsSection;