import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header />
            {isNavigating && <div className='loading'>Loading...</div>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;