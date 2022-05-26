import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order, refetch, setDeleteOrder }) => {
    const { _id, name } = order;
    const handleDelete = id => {


        const url = `https://storeforpc.herokuapp.com/purchase/${id}`
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




            <input type="checkbox" id="OrderDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete(_id)}>YES</button>
                        <label htmlFor="OrderDeleteModal" className="btn btn-xs">NO</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;