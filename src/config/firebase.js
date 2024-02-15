// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM2vPp5bWlwU87IhwdsMJf9o9LrsbXwLQ",
  authDomain: "project1-f604d.firebaseapp.com",
  projectId: "project1-f604d",
  storageBucket: "project1-f604d.appspot.com",
  messagingSenderId: "5311065528",
  appId: "1:5311065528:web:64c3421415b1e7f711f34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);