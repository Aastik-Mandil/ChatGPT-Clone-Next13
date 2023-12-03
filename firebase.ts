// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDTdfJIpPQyBh1WDDMO47rZdlKh2eNeyk",
  authDomain: "chatgpt-messenger-next13.firebaseapp.com",
  projectId: "chatgpt-messenger-next13",
  storageBucket: "chatgpt-messenger-next13.appspot.com",
  messagingSenderId: "22284238081",
  appId: "1:22284238081:web:59f1e5ae7ebf1db3222f00",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
