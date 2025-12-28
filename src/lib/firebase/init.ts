// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1lVLJblZeQF_9npEXJ5HoDvpS6ZU-5Q",
  authDomain: "my-next-app-e0b2c.firebaseapp.com",
  projectId: "my-next-app-e0b2c",
  storageBucket: "my-next-app-e0b2c.firebasestorage.app",
  messagingSenderId: "1097241076190",
  appId: "1:1097241076190:web:f7f7fb791d7fb41af4bd4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;