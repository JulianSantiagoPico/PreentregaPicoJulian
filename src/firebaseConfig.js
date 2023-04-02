
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkuNUMDlY81xKlls7fsPof2-OmqrjdHLY",
  authDomain: "e-commerce-coder-8cb38.firebaseapp.com",
  projectId: "e-commerce-coder-8cb38",
  storageBucket: "e-commerce-coder-8cb38.appspot.com",
  messagingSenderId: "324147393485",
  appId: "1:324147393485:web:752a76fca54f489abd0a84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)