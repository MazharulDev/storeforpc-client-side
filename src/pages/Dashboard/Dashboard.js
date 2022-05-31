import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../../shared/Footer/Footer';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { pathname } = useLocation();
    return (
        <>
            <div className="drawer drawer-mobile bg-slate-200">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-center">
                    {pathname.includes("dashboard") && <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>}

                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-blue-100 text-base-content lg:bg-transparent">

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