import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { use, useRef } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //authenticate user
        signInUser(email, password)
            .then((res) => {
                console.log(res.user);
                // alert('Login successful!');
                console.log('User signed in successfully:');
            })
            .catch((err) => {
                console.error(err.message);
                alert('Login failed. Please check your credentials.');
            });

    }

    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label" >Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover" >Forgot password?</a></div>
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                    </form>
                    <span className='mb-3'>New? {<Link className='text-blue-500 underline' to="/register">Register</Link>}</span>
                </div>
            </div>
        </div>
    );
};

export default Login;