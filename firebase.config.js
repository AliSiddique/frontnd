// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB2OzQYVFkbqKxCkdqcUwaFP6Y-eyHKU8g",
  authDomain: "frontnd-ac6f2.firebaseapp.com",
  projectId: "frontnd-ac6f2",
  storageBucket: "frontnd-ac6f2.appspot.com",
  messagingSenderId: "674880631355",
  appId: "1:674880631355:web:c05b4f5a6659a58128221e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()