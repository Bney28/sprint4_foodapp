// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC6Gh3UqwPwg3lTIGf-DTT4Ppr2ctZzgI",
  authDomain: "food-app-s4-20245.firebaseapp.com",
  projectId: "food-app-s4-20245",
  storageBucket: "food-app-s4-20245.appspot.com",
  messagingSenderId: "8509579154",
  appId: "1:8509579154:web:3284dffaec25c3f2a22b4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)