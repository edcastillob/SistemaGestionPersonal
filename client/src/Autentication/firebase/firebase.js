// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCdGAMgI9aToK3KyxDjGdor1KubwEUj2LM",
  authDomain: "autenticacion-edcastillo.firebaseapp.com",
  projectId: "autenticacion-edcastillo",
  storageBucket: "autenticacion-edcastillo.appspot.com",
  messagingSenderId: "300936115262",
  appId: "1:300936115262:web:ac7b356713165e6da2cd6f",
  measurementId: "G-5SBS38K79Z"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
