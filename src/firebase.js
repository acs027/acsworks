// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "acsworks-1e032.firebaseapp.com",
  databaseURL: "https://acsworks-1e032-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "acsworks-1e032",
  storageBucket: "acsworks-1e032.appspot.com",
  messagingSenderId: "136309330704",
  appId: "1:136309330704:web:dbe3bec3d41ebeab248b95",
  measurementId: "G-H9LQDPHKCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}