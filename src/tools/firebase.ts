// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASbgd2K9xNuT4oCABX0IwMnzEpGXKXXTs",
  authDomain: "evolutimed-5f192.firebaseapp.com",
  projectId: "evolutimed-5f192",
  storageBucket: "evolutimed-5f192.appspot.com",
  messagingSenderId: "492992387733",
  appId: "1:492992387733:web:f20c2a5f52fd546573999c",
  measurementId: "G-1HS7BW60GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);


export {
    app,
    analytics,
    db
}