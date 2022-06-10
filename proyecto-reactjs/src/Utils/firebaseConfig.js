// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkiASuoBD7CIla8wonP_M5zT3_GNFdMjU",
  authDomain: "vikings-ecommerce.firebaseapp.com",
  projectId: "vikings-ecommerce",
  storageBucket: "vikings-ecommerce.appspot.com",
  messagingSenderId: "37169304777",
  appId: "1:37169304777:web:dde4075a0319ad6b702918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)

export default db;