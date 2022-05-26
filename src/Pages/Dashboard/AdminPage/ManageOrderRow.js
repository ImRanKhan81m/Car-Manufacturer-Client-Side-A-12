import React from 'react';

const ManageOrderRow = ({order, index}) => {
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
            <td>Canada</td>
            <td>12/16/2020</td>
        </tr>
    );
};

export default ManageOrderRow;