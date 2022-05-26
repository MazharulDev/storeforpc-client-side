import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ product, refetch, setDeleteProduct }) => {
    const handleDelete = id => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'DELETE'
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

            <input type="checkbox" id="productDelete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete {name}</h3>

                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Yes</label>
                        <label for="productDelete" class="btn btn-xs">NO</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingModal;