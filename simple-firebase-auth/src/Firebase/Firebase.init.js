//Not to share publicly
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3WuJkzbV5jIo1-ihxvR6hzrUxrhY64Hw",
  authDomain: "simple-firebase-auth-22788.firebaseapp.com",
  projectId: "simple-firebase-auth-22788",
  storageBucket: "simple-firebase-auth-22788.firebasestorage.app",
  messagingSenderId: "488964668952",
  appId: "1:488964668952:web:fbeac3bd8521f074090d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);