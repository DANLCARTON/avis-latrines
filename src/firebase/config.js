// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBynAhHcHOiu33wNWogV7aFb4Ht9k6wMhg",
    authDomain: "avis-latrines.firebaseapp.com",
    projectId: "avis-latrines",
    storageBucket: "avis-latrines.appspot.com",
    messagingSenderId: "395028526710",
    appId: "1:395028526710:web:4801dea5a8156467c45157",
    measurementId: "G-BWM6063LY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)