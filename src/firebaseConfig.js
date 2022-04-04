import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6bQhn51U6BscMNZbcp8_U9tZvMlCsXpc",
  authDomain: "dipa-kost.firebaseapp.com",
  projectId: "dipa-kost",
  storageBucket: "dipa-kost.appspot.com",
  messagingSenderId: "702902862966",
  appId: "1:702902862966:web:5086c1e61df20f9de44b57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
