// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Add these imports

const firebaseConfig = {
  apiKey: "AIzaSyBt2n-KPcHHkp4VJIt8_b9X96kr4ihBYwA",
  authDomain: "linkedin-clone-b4063.firebaseapp.com",
  projectId: "linkedin-clone-b4063",
  storageBucket: "linkedin-clone-b4063.firebasestorage.app",
  messagingSenderId: "505135921171",
  appId: "1:505135921171:web:01a8eda3a46ab4c2de67e6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile }; // Export the functions here
