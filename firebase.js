// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//ini ada di project setting di firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmUFQYyg_-HHzYzfdE8OhKZZn-4Wwwf2w",
    authDomain: "twitter-clone-bdeac.firebaseapp.com",
    projectId: "twitter-clone-bdeac",
    storageBucket: "twitter-clone-bdeac.appspot.com",
    messagingSenderId: "755466893540",
    appId: "1:755466893540:web:25566d3e5e2d8db00154f1"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };