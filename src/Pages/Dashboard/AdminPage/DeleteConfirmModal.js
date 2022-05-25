import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteTool, refetch, setDeleteTool }) => {
    const { toolName, _id } = deleteTool;

    const handleDelete = () => {
        fetch(`http://localhost:5000/delete-tools/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(' Product Deleted Successfully.')
                    setDeleteTool(null)
                    refetch()
                }
            })
    }

    return (
        <div>


            <input type="checkbox" id="deleteConfirmModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to delete {toolName}?</h3>
                    <p class="py-4">This will be permanently deleted. Continue?</p>
                    <div class="modal-action">
                        <label for="deleteConfirmModal" class="btn btn-sm">Cancel</label>
                        <button onClick={() => handleDelete()} className='btn btn-error btn-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;