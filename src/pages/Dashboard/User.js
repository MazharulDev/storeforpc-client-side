import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, handleDelete, refetch }) => {
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            }
            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make an admin successfully')
                }
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs btn-success">Admin</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} className="btn btn-xs btn-error">Remove user</button></td>


        </tr>

    );
};

export default User;