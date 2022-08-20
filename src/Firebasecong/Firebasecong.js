// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0gl0kM8ugQ-ec_c6J0z1rafMLwgYmJ0s",
  authDomain: "crackdsa.firebaseapp.com",
  projectId: "crackdsa",
  storageBucket: "crackdsa.appspot.com",
  messagingSenderId: "323240022659",
  appId: "1:323240022659:web:afb9ba0640fcc1366c81b6",
  measurementId: "G-9V7260T9N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);