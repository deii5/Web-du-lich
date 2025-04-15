// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATPiKbKI8pUGk96Q6eHpU1cttmHK8PqeI",
  authDomain: "thiet-ke-web-da473.firebaseapp.com",
  projectId: "thiet-ke-web-da473",
  storageBucket: "thiet-ke-web-da473.appspot.com",
  messagingSenderId: "952537880311",
  appId: "1:952537880311:web:7c79ce6a9a47122ecc65f2",
  measurementId: "G-BNQWYPBVY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);