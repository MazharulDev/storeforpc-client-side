import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order, refetch, setDeleteOrder }) => {
    const { _id, name } = order;
    const handleDelete = id => {


        const url = `http://localhost:5000/purchase/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order canceled successfully')
                setDeleteOrder(null)
                refetch()
            })

    }
    return (
        <div>




            <input type="checkbox" id="OrderDeleteModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete(_id)}>YES</button>
                        <label for="OrderDeleteModal" class="btn btn-xs">NO</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;