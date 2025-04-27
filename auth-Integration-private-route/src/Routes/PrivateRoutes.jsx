import React, { use } from 'react';
import { AuthContext } from '../Components/Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { User, loading } = use(AuthContext);

    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if (!User) {
        return <Navigate to="/login" />;
    }



    return children;
};

export default PrivateRoutes;