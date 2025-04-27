import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [User, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true); // Set loading to true when starting the sign-up process
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signInUser = (email, password) => {
        setLoading(true); // Set loading to true when starting the sign-in process
        return signInWithEmailAndPassword(auth, email, password)

    };

    const signOutUser = () => {
        setLoading(true); // Set loading to true when starting the sign-out process
        return signOut(auth).then(() => {
            SetUser(null); // Set User to null after sign out
            setLoading(false); // Set loading to false after sign-out is completed
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is signed in from useEffect:', user);
                SetUser(user);
            } else {
                console.log('No user is signed in.');
                SetUser(null);
            }
            setLoading(false); // Ensure loading is false after auth state is checked
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []); // This will run only once when the component mounts

    const userInfo = {
        User,
        loading,
        createUser,
        signInUser,
        signOutUser,
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
