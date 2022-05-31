import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
        toast('Sign Out')
    }

    const items = <>
        <li><Link to='/'>Home</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myportfolio'>My Portfolio</Link></li>
        {user ? <li><button onClick={handleSignOut}>Sign out</button></li> : <li><Link to='/login'>Login</Link></li>}


    </>
    if (loading) {
        return <Loading />
    }
    return (
        <div className="navbar bg-slate-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-3xl font-extrabold border-t-4 border-b-4 border-orange-400">StoreForPc</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {items}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;