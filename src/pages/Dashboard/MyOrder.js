import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/purchase?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel Order?')
        if (proceed) {
            const url = `http://localhost:5000/purchase/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success('Order canceled successfully')
                })
        }
    }
    if (loading || isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>My Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Order Cancel</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.address}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.price}</td>
                                    <td><button onClick={() => handleDelete(order._id)} disabled={order.transactionId} className="btn btn-xs btn-error">Cancel</button></td>
                                    <td>
                                        {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                        {order.paid && <>
                                            <button disabled className="btn btn-xs btn-success">Paid</button><br />
                                            <p className="btn btn-xs btn-success">Transaction Id: {order.transactionId}</p>
                                        </>}
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;