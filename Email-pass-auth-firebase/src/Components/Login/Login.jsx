import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //authenticate user
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                if (result.user.emailVerified) {
                    alert('Login successful!');
                }
                else {
                    alert('verify your email first!');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Login failed! Please check your credentials.');
            });
    }
    const emailRef = useRef();
    const handleForgotPassword = () => {
        // Handle forgot password logic here
        const email = emailRef.current.value;
        if (email) {
            // Send password reset email
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset email sent! Please check your inbox.');
                })
                .catch((error) => {
                    console.error(error);
                    alert('Failed to send password reset email. Please try again.');
                });
        } else {
            alert('Please enter your email address to reset your password.');
        }
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
                        <label className="label" >Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover" onClick={handleForgotPassword}>Forgot password?</a></div>
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                    </form>
                    <span className='mb-3'>New? {<Link className='text-blue-500 underline' to="/register">Register</Link>}</span>
                </div>
            </div>
        </div>
    );
};

export default Login;