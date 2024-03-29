import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ order, refetch, setDeleteOrder }) => {
    const { _id, name } = order;
    const handleDelete = id => {


        const url = `${process.env.REACT_APP_SERVER_LINK}/purchase/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
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
                    <h3 className="font-bold text-lg text-red-500">{name}</h3>
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