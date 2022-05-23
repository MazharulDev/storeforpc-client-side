import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Order</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Order Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.address}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.price}</td>
                                    <td><button class="btn btn-xs btn-error">Cancel</button></td>
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