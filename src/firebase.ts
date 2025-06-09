import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUHzf1cWbMBSZ-GpjVNK89_TNeuKETb0Q",
  authDomain: "auth-firebase-43fdd.firebaseapp.com",
  projectId: "auth-firebase-43fdd",
  storageBucket: "auth-firebase-43fdd.firebasestorage.app",
  messagingSenderId: "300660918261",
  appId: "1:300660918261:web:3ca0f264b3cf56562182bc",
  measurementId: "G-T2RQDQRKR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);