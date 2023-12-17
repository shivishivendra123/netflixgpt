// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuvRBsaf4MI9Uykl_5OZIZnixeEp4lTmg",
  authDomain: "netflix-gpt-8831e.firebaseapp.com",
  projectId: "netflix-gpt-8831e",
  storageBucket: "netflix-gpt-8831e.appspot.com",
  messagingSenderId: "127710101524",
  appId: "1:127710101524:web:d472b489041768e57ce701",
  measurementId: "G-77EH35PZ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
console.log(auth)

