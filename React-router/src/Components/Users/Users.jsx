import { Navigate, useLoaderData } from 'react-router';
import User from '../User/User';
import { useState } from 'react';

const Users = () => {
    const data = useLoaderData();
    const [visitHome, setVisitHome] = useState(false);
    if (visitHome) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div>
            <div className='user-container'>
                {
                    data.map(user => (
                        <User key={user.id} user={user}></User>

                    ))
                }
                <button onClick={() => setVisitHome(true)}>Go Home</button>
            </div>
        </div>
    );
};

export default Users;