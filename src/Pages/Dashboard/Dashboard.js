import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mid-content">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content p-5">
                <h2 className='text-5xl font-bold'>Dashboard</h2>
                <Outlet/>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden ">Open drawer</label>

            </div>
            <div class="drawer-side  h-[100vh] ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-2'><Link to={'/dashboard'}>My Orders</Link></li>
                    <li className='mb-2'><Link to={'/dashboard/review'}>Add a Review</Link></li>
                    <li><Link to={'/dashboard/profile'}>My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;