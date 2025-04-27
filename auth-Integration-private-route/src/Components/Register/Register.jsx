import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.Name.value;
        console.log(mail, password);
        //create user
        createUser(mail, password)
            .then((res => {
                console.log(res.user);
                alert('Registration successful!');
            }))
            .catch((err) => {
                console.log(err.message);
                alert('Registration failed. Please check your credentials.');
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

                </div>
            </div>
        </div>

    );
};

export default Register;