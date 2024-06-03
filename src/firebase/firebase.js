// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQSABEBLei9R8LmVkjx5JikwtBrORT0E8",
  authDomain: "first-firebase-f8301.firebaseapp.com",
  projectId: "first-firebase-f8301",
  storageBucket: "first-firebase-f8301.appspot.com",
  messagingSenderId: "759978628654",
  appId: "1:759978628654:web:6f6537a400ba4bfb0e31bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
