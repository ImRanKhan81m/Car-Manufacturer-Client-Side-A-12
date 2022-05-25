import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ManageProductRows from './ManageProductRows';

const ManageProducts = () => {

    const { data: orders, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/tools', {
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
            <h2 className='text-2xl font-bold my-5'>Total Order: {orders?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Updated</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageProductRows
                            key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                            ></ManageProductRows>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;