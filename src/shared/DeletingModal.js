import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ product, refetch, setDeleteProduct }) => {
    const handleDelete = id => {
        const url = `https://storeforpc.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order canceled successfully')
                setDeleteProduct(null)
                refetch()
            })
    }
    const { _id, name } = product;
    return (
        <div>

            <input type="checkbox" id="productDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure you want to delete {name}</h3>

                    <div className="modal-action">
                        <label onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Yes</label>
                        <label htmlFor="productDelete" className="btn btn-xs">NO</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingModal;