import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageProductRows from './ManageProductRows';

const ManageProducts = () => {
    const [deleteTool, setDeleteTool] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('users', () =>
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
            <h2 className='text-2xl font-bold my-5'>Total Order: {products?.length}</h2>
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
                            products?.map((product, index) => <ManageProductRows
                                key={product._id}
                                index={index}
                                product={product}
                                refetch={refetch}
                                setDeleteTool={setDeleteTool}
                            ></ManageProductRows>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteTool && <DeleteConfirmModal
                deleteTool={deleteTool}
                refetch={refetch}
                setDeleteTool={setDeleteTool}
                ></DeleteConfirmModal>

            }
        </div>
    );
};

export default ManageProducts;