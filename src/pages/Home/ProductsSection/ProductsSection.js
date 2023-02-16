import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import ProductSection from './ProductSection';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_SERVER_LINK}/product`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setProducts(data)
            });
    }, [])

    return (
        <div id='visit'>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>Choose Product</h2>
            </div>
            {loading ? <Loading /> : <>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                    {
                        products.slice(0, 6).map(product => <ProductSection key={product._id} product={product}></ProductSection>)
                    }
                </div>
                <div className='flex justify-center mb-5'>
                    <Link to='/showallproduct' className="btn btn-outline btn-info">Show All Product</Link>
                </div>
            </>}
        </div>
    );
};

export default ProductsSection;