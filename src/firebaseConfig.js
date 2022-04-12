import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRE4pgcFI8krc6oVjGRK4a1V-fM-2Ohr4",
  authDomain: "muli-kost.firebaseapp.com",
  projectId: "muli-kost",
  storageBucket: "muli-kost.appspot.com",
  messagingSenderId: "417322969205",
  appId: "1:417322969205:web:bcf77462bdc97e1588f03c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
