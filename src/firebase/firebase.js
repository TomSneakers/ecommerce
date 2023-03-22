// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Ynks7eurMeIa9iWWQksKLECj-pbEeI8",
  authDomain: "ecommerce-isitech.firebaseapp.com",
  projectId: "ecommerce-isitech",
  storageBucket: "ecommerce-isitech.appspot.com",
  messagingSenderId: "785461394414",
  appId: "1:785461394414:web:9368d9e85ac948b1be6cff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
