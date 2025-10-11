import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBeZdi-vHkNuRJ1hA_dQxuSUnOH0MiD1p4",
  authDomain: "graduation-project-1f851.firebaseapp.com",
  projectId: "graduation-project-1f851",
  storageBucket: "graduation-project-1f851.firebasestorage.app",
  messagingSenderId: "1031629784131",
  appId: "1:1031629784131:web:062561de1c576d08c540f6",
  measurementId: "G-QKZR8QKC1W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
