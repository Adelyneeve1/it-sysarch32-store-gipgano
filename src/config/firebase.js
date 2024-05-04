// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3QccNPYMLsPJOKGy-1PvXIq6_6o9UXCk",
  authDomain: "it-sysarch32-store-gipgano.firebaseapp.com",
  projectId: "it-sysarch32-store-gipgano",
  storageBucket: "it-sysarch32-store-gipgano.appspot.com",
  messagingSenderId: "408966332962",
  appId: "1:408966332962:web:56f3be1139bac5c328c07b",
  measurementId: "G-77Y801H6MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
