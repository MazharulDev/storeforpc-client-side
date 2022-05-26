import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({ user, refetch, setUserDelete }) => {
    const { _id, email } = user;
    const handleDelete = id => {


        const url = `https://storeforpc.herokuapp.com/user/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserDelete(null)
                refetch();
                if (data.acknowledged === true) {

                    toast.success('User delete successfully')
                }
            })

    }
    return (
        <div>




            <input type="checkbox" id="UserDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {email}</h3>
                    <div className="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete(_id)}>Yes</button>
                        <label htmlFor="UserDeleteModal" className="btn btn-xs">NO</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDeleteModal;