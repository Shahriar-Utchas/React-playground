import React from 'react';
import { NavLink } from 'react-router';


const Header = () => {

    return (
        <div>
                <NavLink to = '/'  > Home</NavLink>
                <NavLink to = '/login' > Login</NavLink>
        </div>
    );
};

export default Header;