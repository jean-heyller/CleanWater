// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvFE_hB_LhJklbYqqwWZCqYD5Z7RoOlA",
  authDomain: "sesion2-99140.firebaseapp.com",
  projectId: "sesion2-99140",
  storageBucket: "sesion2-99140.appspot.com",
  messagingSenderId: "674807831901",
  appId: "1:674807831901:web:73d03b83a0b250acdadcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export default db;

