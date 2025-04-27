import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const { User, signOutUser } = use(AuthContext);
    console.log("from navbar ", User);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully');
                // alert('User signed out successfully');
                
            })
            .catch((error) => {
                // console.error('Error signing out:', error);
                alert('Error signing out:', error.message);
            });
    };

    const links = <>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Home</NavLink>
        <NavLink to="/Login" className="btn btn-ghost normal-case text-xl">Login</NavLink>
        <NavLink to="/register" className="btn btn-ghost normal-case text-xl">Register</NavLink>
        {
            User &&
            <>
                <NavLink to="/profile" className="btn btn-ghost normal-case text-xl">Profile</NavLink>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {
                    User ?
                        <div className="navbar-end">
                            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                        </div> :
                        <div className="navbar-end">
                            <button className="btn btn-primary">Login</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;