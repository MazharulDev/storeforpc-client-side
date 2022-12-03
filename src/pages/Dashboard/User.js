import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch, setUserDelete }) => {
    const handleMakeAdmin = () => {
        fetch(`https://storeforpc.up.railway.app/user/admin/${user?.email}`, {
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
            <td><label onClick={() => setUserDelete(user)} htmlFor="UserDeleteModal" className="btn btn-xs btn-error">Remove user</label></td>



        </tr>

    );
};

export default User;