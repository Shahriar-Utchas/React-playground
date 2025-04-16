import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handlePasswordOnChange = e => {
        const password = e.target.value;
        setPassword(password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
        } else {
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter Name' required />
                <br />
                <input type="password" onChange={handlePasswordOnChange} name="pass" placeholder='Enter Password' />
                <br />
                <input type="submit" value='submit' />
                <br />
            </form>
            <p style={{ color: "red" }}><small>{error}</small></p>

        </div>
    );
};

export default ControlledField;