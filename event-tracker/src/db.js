// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB77yP_hOQkyckjfEYRVbqiTiTVMuKMoiY",
  authDomain: "event-tracker-4fb34.firebaseapp.com",
  projectId: "event-tracker-4fb34",
  storageBucket: "event-tracker-4fb34.firebasestorage.app",
  messagingSenderId: "199247316432",
  appId: "1:199247316432:web:efef8cd7ee88ceed32e5d5",
  measurementId: "G-N37DEVX0BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;