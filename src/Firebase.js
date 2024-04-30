import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA5aja8dQb0lNhSVwqPv5PKQMUp7rHVem4",
  authDomain: "project-9a129.firebaseapp.com",
  projectId: "project-9a129",
  storageBucket: "project-9a129.appspot.com",
  messagingSenderId: "844133731296",
  appId: "1:844133731296:web:e15861887bb46c443f3985",
  databaseURL:"https://project-9a129-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()

