// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAXxCbGybcbWwsMBQeTBxcD7Cig60JdwI",
  authDomain: "week-07-23.firebaseapp.com",
  projectId: "week-07-23",
  storageBucket: "week-07-23.appspot.com",
  messagingSenderId: "1085074669132",
  appId: "1:1085074669132:web:36018e775f0a2abb933ee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
