// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-4c611.firebaseapp.com",
  projectId: "realestate-4c611",
  storageBucket: "realestate-4c611.appspot.com",
  messagingSenderId: "605727741632",
  appId: "1:605727741632:web:24d0dce637a2cd16c63f25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);