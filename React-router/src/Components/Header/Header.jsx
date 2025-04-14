import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Blogs">Blogs</NavLink>
                <NavLink to="/Users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;