
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6hJw9Mo9gHL-zPDbOPgVqnsrsz55AkEw",
  authDomain: "ecommerce-6bffc.firebaseapp.com",
  projectId: "ecommerce-6bffc",
  storageBucket: "ecommerce-6bffc.appspot.com",
  messagingSenderId: "203613622082",
  appId: "1:203613622082:web:ea07611074f48913a2c2db",
  measurementId: "G-11QEGNYGEP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();