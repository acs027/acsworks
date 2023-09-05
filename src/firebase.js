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
  authDomain: "acsworks2.firebaseapp.com",
  databaseURL: "https://acsworks2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "acsworks2",
  storageBucket: "acsworks2.appspot.com",
  messagingSenderId: "55576102916",
  appId: "1:55576102916:web:86dbdb515e0c83c8d6cd51"
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