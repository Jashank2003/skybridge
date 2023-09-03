// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection,getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA662Pf1EOQU5mmLR4A1oQejk2VLHOjeAk",
  authDomain: "skybridge-14482.firebaseapp.com",
  projectId: "skybridge-14482",
  storageBucket: "skybridge-14482.appspot.com",
  messagingSenderId: "32025691757",
  appId: "1:32025691757:web:3047ed8b6628fed502e164",
  measurementId: "G-C1CXNJ1QEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB= getFirestore(app);

export const userRef= collection(firebaseDB, "users");
