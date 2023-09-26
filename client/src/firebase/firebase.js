// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdGAMgI9aToK3KyxDjGdor1KubwEUj2LM",
  authDomain: "autenticacion-edcastillo.firebaseapp.com",
  projectId: "autenticacion-edcastillo",
  storageBucket: "autenticacion-edcastillo.appspot.com",
  messagingSenderId: "300936115262",
  appId: "1:300936115262:web:ac7b356713165e6da2cd6f",
  measurementId: "G-5SBS38K79Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);