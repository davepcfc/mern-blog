// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-82e4f.firebaseapp.com",
  projectId: "mern-blog-82e4f",
  storageBucket: "mern-blog-82e4f.appspot.com",
  messagingSenderId: "963044247393",
  appId: "1:963044247393:web:0a924b8b82ef4af5636720"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);