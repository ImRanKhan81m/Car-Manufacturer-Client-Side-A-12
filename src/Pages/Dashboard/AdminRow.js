import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://sheltered-taiga-12711.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully is an admin`)
                }
            })
    }

    return (
        <tr>
            <th>{++index}</th>
            <td>{user.email}</td>

            <td>{role === 'admin' ? <button onClick={makeAdmin} className='btn btn-sm btn-success'>Admin</button> : <button onClick={makeAdmin} className='btn btn-sm btn-secondary'>Make Admin</button>}</td>

            <td><button className='btn btn-error btn-sm'><FontAwesomeIcon className='mr-2' icon={faTrash}></FontAwesomeIcon> Delete</button></td>
        </tr>
    );
};

export default AdminRow;