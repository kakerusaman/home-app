
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBCCFeLJHHbeDWERKFESq4M6te-Sac9Dk",
  authDomain: "todo-2eba4.firebaseapp.com",
  projectId: "todo-2eba4",
  storageBucket: "todo-2eba4.appspot.com",
  messagingSenderId: "734922610532",
  appId: "1:734922610532:web:5ad21fdfbc0b6968f70c71",
  measurementId: "G-32YB9V1SZL"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

