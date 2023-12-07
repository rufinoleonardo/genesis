// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiGbf-8xjNntMxdq8mEbPzRIcWhgEZPc",
  authDomain: "reactlinks-c70c9.firebaseapp.com",
  projectId: "reactlinks-c70c9",
  storageBucket: "reactlinks-c70c9.appspot.com",
  messagingSenderId: "455534847109",
  appId: "1:455534847109:web:41b73203e6a460708ff5ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
