import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDbIwBK8lBlhAEu8cJZxbb3y3nccHCgBXs",
  authDomain: "helldivers-9f18b.firebaseapp.com",
  databaseURL: "https://helldivers-9f18b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "helldivers-9f18b",
  storageBucket: "helldivers-9f18b.firebasestorage.app",
  messagingSenderId: "126812552319",
  appId: "1:126812552319:web:498464260e08fedf27d34a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database }