import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';
import UserDeleteModal from '../../shared/UserDeleteModal';
import User from './User';

const AllUser = () => {
    const [userDelete, setUserDelete] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://storeforpc.up.railway.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));




    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>User Management</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove user</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <User key={index} setUserDelete={setUserDelete} index={index} user={user} refetch={refetch} />
                            )
                        }
                    </tbody>
                </table>
            </div>
            {userDelete && <UserDeleteModal user={userDelete} refetch={refetch} setUserDelete={setUserDelete} />}
        </div>
    );
};

export default AllUser;