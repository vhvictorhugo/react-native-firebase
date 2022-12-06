// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjlhtxehpfXF9Dc3P3px1Tici3qGmcifc",
  authDomain: "ccf-351---internet-das-coisas.firebaseapp.com",
  databaseURL: "https://ccf-351---internet-das-coisas-default-rtdb.firebaseio.com",
  projectId: "ccf-351---internet-das-coisas",
  storageBucket: "ccf-351---internet-das-coisas.appspot.com",
  messagingSenderId: "172503778610",
  appId: "1:172503778610:web:33e298eadc526c98f5c32b",
  measurementId: "G-N22P2VSEBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);