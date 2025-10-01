import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCZ_6FzE9FtnUo432UycdOLALXId_0yJyU",
  authDomain: "playlearn-b96ec.firebaseapp.com",
  projectId: "playlearn-b96ec",
  storageBucket: "playlearn-b96ec.firebasestorage.app",
  messagingSenderId: "859742926301",
  appId: "1:859742926301:web:4ffe88885e48d9af157234",
  measurementId: "G-MLV3W579GH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
