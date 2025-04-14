import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const User = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    }

    return (
        <div>
            <h2>User Details</h2>
            <h3>{User.name}</h3>
            <p>Website: {User.website}</p>
            <button onClick={handleBack}>Go back</button>

        </div>
    );
};

export default UserDetails;