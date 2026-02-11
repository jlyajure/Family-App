// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBq4gLgv4DSfUidzUuC7Irmvj_4pCTtI",
  authDomain: "familia-yajure-app.firebaseapp.com",
  projectId: "familia-yajure-app",
  storageBucket: "familia-yajure-app.firebasestorage.app",
  messagingSenderId: "692035727386",
  appId: "1:692035727386:web:dfa3e39a481d56368a61a3",
  measurementId: "G-PLRGRQT36L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
