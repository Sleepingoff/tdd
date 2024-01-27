// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_KEY,
  authDomain: import.meta.env.VITE_FBPID_KEY + ".firebaseapp.com",
  projectId: import.meta.env.VITE_FBPID_KEY,
  storageBucket: import.meta.env.VITE_FBPID_KEY + ".appspot.com",
  messagingSenderId: import.meta.env.VITE_FBMSID_KEY,
  appId: import.meta.env.VITE_FBID_KEY,
  measurementId: import.meta.env.VITE_FBMID_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);