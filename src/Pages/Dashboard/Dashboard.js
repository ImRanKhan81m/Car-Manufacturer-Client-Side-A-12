import { faCartArrowDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile mid-content">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <Outlet />
            </div>
            <div class="drawer-side  h-[100vh] ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content ">
                    {/* <!-- Sidebar content here --> */}

                    {admin ?
                        <>
                            <li className='mb-2'><NavLink to={'/dashboard'}>My Profile</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/admin'}>Make Admin</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/manageOrder'}>Manage Orders</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/manageProducts'}>Manage Products</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/addProducts'}>Add Product</NavLink></li>


                        </> :
                        <>
                            <li className='mb-2'><NavLink to={'/dashboard'}> <FontAwesomeIcon icon={faUser} /> My Profile</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/orders'}><FontAwesomeIcon icon={faCartArrowDown} /> My Orders</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/addReview'}><FontAwesomeIcon icon={faMagnifyingGlass} /> Add a Review</NavLink></li>
                        </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;