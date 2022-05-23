import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile bg-slate-200">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex justify-center">
                {/* <!-- Page content here --> */}
                <Outlet/>
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                    <li><Link to='/dashboard/myReview'>My Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;