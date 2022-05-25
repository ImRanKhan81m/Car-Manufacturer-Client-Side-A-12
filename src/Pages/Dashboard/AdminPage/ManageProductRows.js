import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRows = ({ product, index, refetch , setDeleteTool}) => {

    
    return (
        <tr>
            <th>{++index}</th>
            <th>{product?.toolName}</th>
            <td>
                <div className="avatar flex items-center ">
                    <div className="w-16 rounded-xl">
                        <img style={{ width: '100%' }} src={product?.img} alt='' />
                    </div>
                </div></td>
            <td> {product?.quantity} Pcs</td>
            <td>{product?.price} $</td>
            <td><button className='btn btn-success btn-sm'>Update</button></td>
            <td>
                <label onClick={()=>setDeleteTool(product)} for="deleteConfirmModal" class="btn btn-error btn-sm">Delete</label>
                </td>
        </tr>
    );
};

export default ManageProductRows;