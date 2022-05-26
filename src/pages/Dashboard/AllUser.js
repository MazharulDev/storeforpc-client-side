import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';
import User from './User';

const AllUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://storeforpc.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete user??')
        if (proceed) {
            const url = `https://storeforpc.herokuapp.com/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    if (data.acknowledged === true) {

                        toast.success('User delete successfully')
                    }
                })
        }
    }


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
                                <User key={index} index={index} user={user} handleDelete={handleDelete} refetch={refetch} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;