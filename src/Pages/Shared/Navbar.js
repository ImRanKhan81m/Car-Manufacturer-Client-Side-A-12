import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation()



    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        <li><NavLink to="/reviews">Review</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

        {
            user && <li><NavLink to="/profile">MyProfile</NavLink></li>
        }
        {
            user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }

        <li>{user ? <NavLink onClick={logout} to="/login">SignOut</NavLink> : <NavLink to="/login">Login</NavLink>}</li>

    </>

    return (
        <header className='sticky top-0 z-10 py-1 bg-secondary shadow-sm lg:px-1 md:px-0 sm:px-0 px-0 z-50'>
            <div style={{ maxWidth: '1440px', margin: 'auto' }} className="navbar lg:mid-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case lg:text-2xl text-xl font-bold p-0">CarTools Manufacturer</Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end lg:hidden'>
                    {
                        pathname.includes("dashboard") && (<label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>)
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;