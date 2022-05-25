import { faCalendarPlus, faCartArrowDown, faListCheck, faMagnifyingGlass, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
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
            <div class="drawer-content pl-3">
                <Outlet />
            </div>
            <div class="drawer-side  h-[100vh] ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-54  bg-secondary text-base-content py-10">
                    {/* <!-- Sidebar content here --> */}

                    {admin ?
                        <>
                            <li className='mb-2'><NavLink to={'/dashboard'}><FontAwesomeIcon icon={faUser} /> My Profile</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/admin'}><FontAwesomeIcon icon={faUserCheck} /> Make Admin</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/manageOrder'}><FontAwesomeIcon icon={faListCheck} /> Manage Orders</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/manageProducts'}><FontAwesomeIcon icon={faListCheck} /> Manage Products</NavLink></li>
                            <li className='mb-2'><NavLink to={'/dashboard/addProducts'}><FontAwesomeIcon icon={faCalendarPlus} /> Add Product</NavLink></li>


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