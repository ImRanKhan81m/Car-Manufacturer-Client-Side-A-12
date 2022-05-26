
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://localhost:5000/order?customer=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>Your Total Order: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></MyOrdersRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <DeleteOrderModal
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteOrderModal>

            }
        </div>
    );
};

export default MyOrders;