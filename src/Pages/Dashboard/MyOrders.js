import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>Your Total Order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>TRXN ID</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr>
                                <th>{++index}</th>
                                <th>{order.product}</th>
                                <td>
                                    <div className="avatar flex items-center ">
                                        <div className="w-16 rounded-xl">
                                            <img style={{ width: '100%' }} src={order.img} alt='' />
                                        </div>
                                    </div></td>
                                <td> {order.quantity} Pcs</td>
                                <td>{order.totalPrice} $</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;