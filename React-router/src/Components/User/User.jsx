import React from 'react';
import { Link} from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone, website } = user;
    
    return (
        <div>
            <div style={{ border: '1px solid yellow', margin: '10px', padding: '10px' }}>
                <h4>{name}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <Link to={`/users/${id}`}>Show Details</Link>
            </div>

        </div>
    );
};

export default User;