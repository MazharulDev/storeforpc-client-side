import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../../shared/Footer/Footer';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <>
            <div className="drawer drawer-mobile bg-slate-200">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-center">

                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {!admin && <li><Link to='/dashboard/myOrder'>My Orders</Link></li>}
                        {!admin && <li><Link to='/dashboard/myReview'>Add a Review</Link></li>}
                        {admin && <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>}
                        {admin && <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>}
                        {admin && <li><Link to='/dashboard/user'>Make Admin</Link></li>}
                        {admin && <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>}
                    </ul>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;