import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';
const Login = () => {
    const [User, setUser] = useState(null);

    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });

    };

    const handleSignout = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    const handleGitHubLogin = () => {
        signInWithPopup(auth, GitHubProvider)
            .then((result) => {
                console.log(result.user);

                setUser(result.user);
            })
            .catch((error) => {
                console.error('Error signing in with GitHub:', error);
            });
    }
    return (
        <div>
            {
                !User ?
                    <>
                        <button onClick={handleGoogleLogin}>Login with google</button>
                        <button onClick={handleGitHubLogin}>Login with GitHub</button>
                    </>

                    : <button onClick={handleSignout}>Sign Out</button>
            }
            {
                User && (
                    <div>
                        <h1>Name: {User.displayName}</h1>
                        <img src={User.photoURL} alt="no photo" />
                        <p>E-mail: {User.email}</p>

                    </div>

                )

            }
        </div>
    );
};

export default Login;