import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRows = ({order, index, refetch}) => {

    const handleDelete = id =>{
        fetch(`http://localhost:5000/delete-tools/${id}`,{
            method:'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount){
                toast.success(' Product Deleted Successfully.')
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{++index}</th>
            <th>{order?.toolName}</th>
            <td>
                <div className="avatar flex items-center ">
                    <div className="w-16 rounded-xl">
                        <img style={{ width: '100%' }} src={order?.img} alt='' />
                    </div>
                </div></td>
            <td> {order?.quantity} Pcs</td>
            <td>{order?.price} $</td>
            <td><button className='btn btn-success btn-sm'>Update</button></td>
            <td><button onClick={()=>handleDelete(order._id)} className='btn btn-error btn-sm'>Delete</button></td>
        </tr>
    );
};

export default ManageProductRows;