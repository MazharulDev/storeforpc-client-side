import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import OrderDeleteModal from '../../shared/OrderDeleteModal';

const MyOrder = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const [user, loading] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://storeforpc.herokuapp.com/purchase?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (loading || isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>My Order</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
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
                                    <td><label onClick={() => setDeleteOrder(order)} htmlFor="OrderDeleteModal" disabled={order.transactionId} className="btn btn-xs btn-error">Cancel</label>
                                    </td>
                                    <td>
                                        {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                        {order.paid && <>
                                            <button disabled className="btn btn-xs btn-success">Paid</button><br />
                                            <label htmlFor="transId" className="btn btn-xs btn-success">TransactionId</label>




                                            <input type="checkbox" id="transId" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <label htmlFor="transId" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    {order.transactionId}

                                                </div>
                                            </div>


                                        </>}
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
            {deleteOrder && <OrderDeleteModal order={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder} />}
        </div >
    );
};

export default MyOrder;