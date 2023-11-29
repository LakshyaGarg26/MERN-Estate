// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-pulse-39639.firebaseapp.com",
  projectId: "property-pulse-39639",
  storageBucket: "property-pulse-39639.appspot.com",
  messagingSenderId: "894032455232",
  appId: "1:894032455232:web:c25457203b4ee6313ca1a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);