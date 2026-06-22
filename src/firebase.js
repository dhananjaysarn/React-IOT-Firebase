// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQdRnTeMJSS63ECG5bkSVB_y1WNL-wLyU",
  authDomain: "project1-71d5d.firebaseapp.com",
  databaseURL: "https://project1-71d5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-71d5d",
  storageBucket: "project1-71d5d.firebasestorage.app",
  messagingSenderId: "607520208850",
  appId: "1:607520208850:web:4c3a84cb46844e1dbaba0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export {database, ref, onValue}
