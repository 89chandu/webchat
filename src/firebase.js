import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGARrk_Y-oWpvy2HOP94WCCp9Rrt8kSs0",
  authDomain: "chatapp-6be86.firebaseapp.com",
  projectId: "chatapp-6be86",
  storageBucket: "chatapp-6be86.appspot.com",
  messagingSenderId: "363740643434",
  appId: "1:363740643434:web:8edb880baef11651cfca13",
  measurementId: "G-Q6PBDB7PJL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
