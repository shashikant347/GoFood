// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "gofood-5c446.firebaseapp.com",
  projectId: "gofood-5c446",
  storageBucket: "gofood-5c446.firebasestorage.app",
  messagingSenderId: "833157520518",
  appId: "1:833157520518:web:cc753045436ae835380507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}