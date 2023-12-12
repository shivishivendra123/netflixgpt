// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJhkPEvBqhMxhTkiZbCPyDEcQ3MStjQo",
  authDomain: "netflixgpt-cae01.firebaseapp.com",
  projectId: "netflixgpt-cae01",
  storageBucket: "netflixgpt-cae01.appspot.com",
  messagingSenderId: "858078131898",
  appId: "1:858078131898:web:a5a4707b017b769c1f7483",
  measurementId: "G-6SWCP2R7WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
console.log(auth)

