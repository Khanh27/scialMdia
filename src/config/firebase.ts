// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovWyLtH6Kh0pi0MIMFSqoPyYLZzPvigQ",
  authDomain: "social-media-6ca3c.firebaseapp.com",
  projectId: "social-media-6ca3c",
  storageBucket: "social-media-6ca3c.appspot.com",
  messagingSenderId: "1084035752597",
  appId: "1:1084035752597:web:2fda6da42f471683c6719c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)