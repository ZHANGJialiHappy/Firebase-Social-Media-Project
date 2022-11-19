// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYf95qhPZuYI4rpT_dZMqriqbZlw7LXy4",
  authDomain: "react-course-91532.firebaseapp.com",
  projectId: "react-course-91532",
  storageBucket: "react-course-91532.appspot.com",
  messagingSenderId: "181988450242",
  appId: "1:181988450242:web:c66659ec257832f376005b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);