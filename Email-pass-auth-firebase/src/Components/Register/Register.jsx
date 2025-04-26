import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router';


const Register = () => {
    const [errorMsg, setErrorMsg] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.Name.value;
        console.log(mail, password);
        //create user
        setErrorMsg('')
        createUserWithEmailAndPassword(auth, mail, password)
            .then((result) => {
                console.log(result);
                //send email verification link
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Verification email sent! Please check your inbox.');
                    })

                const profile = {
                    displayName: name,
                };

                //update user profile
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('Profile updated successfully!');
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error);
                    });
            })
            .catch((error) => {
                // console.error(error);
                setErrorMsg(error.message);
            });

    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="Name"
                            className="input"
                            placeholder="Enter Name"
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="mail@site.com"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Password"
                            minLength="8"
                            required
                        />

                        <button type="submit" className="btn btn-primary mt-4">Register</button>
                    </form>

                    <span className="mt-4">
                        Already registered?{' '}
                        <Link className="text-blue-500 underline" to="/login">
                            Login
                        </Link>
                    </span>

                    {errorMsg && (
                        <p className="text-red-500 text-center mt-4">{errorMsg}</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Register;