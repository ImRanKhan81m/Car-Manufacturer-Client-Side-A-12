import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
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
                        <> <li><Link to={'/dashboard/admin'}>Make Admin</Link></li>
                            <li><Link to={'/dashboard/manageOrder'}>Manage Orders</Link></li>
                            <li><Link to={'/dashboard/manageProducts'}>Manage Products</Link></li>
                            <li><Link to={'/dashboard/addProducts'}>Add Product</Link></li>
                            <li className='mb-2'><Link to={'/dashboard/profile'}>My Profile</Link></li>
                        </> : <><li className='mb-2'><Link to={'/dashboard/orders'}>My Orders</Link></li>
                            <li className='mb-2'><Link to={'/dashboard/review'}>Add a Review</Link></li>
                            <li className='mb-2'><Link to={'/dashboard/profile'}>My Profile</Link></li></>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;