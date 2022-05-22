import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        <li><NavLink to="/reviews">Review</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/profile">MyProfile</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

    </>

    return (
        <header className='sticky top-0 z-10 py-1 bg-secondary shadow-sm lg:px-1 md:px-0 sm:px-0 px-0'>
            <div className="navbar mid-content ">
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
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Navbar;