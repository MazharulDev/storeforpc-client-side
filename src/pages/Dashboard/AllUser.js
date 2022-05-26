import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';
import UserDeleteModal from '../../shared/UserDeleteModal';
import User from './User';

const AllUser = () => {
    const [userDelete, setUserDelete] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://storeforpc.herokuapp.com/user', {
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
            <h2 className='text-2xl mt-5 font-bold'>User:{users.length}</h2>
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