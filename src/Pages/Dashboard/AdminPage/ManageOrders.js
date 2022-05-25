
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/orders', {
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

export default ManageOrders;