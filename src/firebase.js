import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD9wS9hXYKgb96peSuVduYRIXpydVvW4C4",
  authDomain: "blackthorn-residential-images.firebaseapp.com",
  projectId: "blackthorn-residential-images",
  storageBucket: "blackthorn-residential-images.appspot.com",
  messagingSenderId: "667067177925",
  appId: "1:667067177925:web:98ca2f5630bbc5637589ac",
  measurementId: "G-NCV870YMBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
