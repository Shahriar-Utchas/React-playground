// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiWBuvZJ5zswiyF9nQf9UB-GwrDQdTuZE",
  authDomain: "simple-email-pass-auth-80fb2.firebaseapp.com",
  projectId: "simple-email-pass-auth-80fb2",
  storageBucket: "simple-email-pass-auth-80fb2.firebasestorage.app",
  messagingSenderId: "1026541537002",
  appId: "1:1026541537002:web:147c1e746781b7cb5ef993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);