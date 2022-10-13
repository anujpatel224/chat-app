// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAO9hz9iITF-gPNUl-GR5-KJSOSH94m40",
  authDomain: "chat-ap224.firebaseapp.com",
  projectId: "chat-ap224",
  storageBucket: "chat-ap224.appspot.com",
  messagingSenderId: "212508169501",
  appId: "1:212508169501:web:ac60d555c0705811613df4",
  measurementId: "G-Z9ZMCH9Q5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
