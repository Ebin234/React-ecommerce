import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY_wwcgU2J1fwNDNkzenfnD1l_nzIm2lA",
  authDomain: "react-interview-7f64d.firebaseapp.com",
  projectId: "react-interview-7f64d",
  storageBucket: "react-interview-7f64d.appspot.com",
  messagingSenderId: "817559199793",
  appId: "1:817559199793:web:6a72a974e001541eca7510"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)