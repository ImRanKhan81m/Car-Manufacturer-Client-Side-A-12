
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersRow = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
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

            {(order.totalPrice && !order.paid) &&
                <td>
                    <>
                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-success mb-1'>Pay Now</button></Link> <br />
                        <label onClick={()=>setDeleteOrder(order)} for="deleteOrderModal" class="btn btn-error btn-xs">Cancel Order</label>
                    </>
                </td>}


            <td>
                {(order.totalPrice && order.paid) &&
                    <button className='btn btn-sm btn-success'> Paid </button>}
            </td>
        </tr>
    );
};

export default MyOrdersRow;