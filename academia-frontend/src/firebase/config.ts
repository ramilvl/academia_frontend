import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvQ75Fovmb7ifAbzbpzCWYLOeRucV4vh8",
  authDomain: "academia-f7014.firebaseapp.com",
  projectId: "academia-f7014",
  storageBucket: "academia-f7014.firebasestorage.app",
  messagingSenderId: "142623566770",
  appId: "1:142623566770:web:0e5d38007021d13c1752ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);