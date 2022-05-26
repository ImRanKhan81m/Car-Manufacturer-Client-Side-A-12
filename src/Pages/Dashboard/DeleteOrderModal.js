import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { product, _id } = deleteOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteOrder/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(' Order Deleted Successfully.')
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="deleteOrderModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure want to delete {product}?</h3>
                    <p className="py-4">This will be permanently deleted. Continue OR Cancel?</p>
                    <div className="modal-action">
                        <label htmlFor="deleteOrderModal" className="btn btn-sm">Cancel</label>
                        <button onClick={() => handleDelete()} className='btn btn-error btn-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;