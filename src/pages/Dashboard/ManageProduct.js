import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeletingModal from '../../shared/DeletingModal';
import Loading from '../../shared/Loading/Loading';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://storeforpc.herokuapp.com/product', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Minimum Order</th>
                            <th>Available Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td><img width={40} src={product.img} alt="" /></td>
                                <td>{product.name.slice(0, 16)}...</td>
                                <td>{product.minOrder}</td>
                                <td>{product.available}</td>
                                <td>{product.price}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="productDelete" className="btn btn-xs btn-error">Delete</label>
                                </td>




                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeletingModal product={deleteProduct} refetch={refetch} setDeleteProduct={setDeleteProduct} />}
        </div >
    );
};

export default ManageProduct;