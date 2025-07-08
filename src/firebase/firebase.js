import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhl9jPvO1Gn_rm2P201rT4kHZuxZOUEpQ",
  authDomain: "instagram-clone-19d0b.firebaseapp.com",
  projectId: "instagram-clone-19d0b",
  storageBucket: "instagram-clone-19d0b.firebasestorage.app",
  messagingSenderId: "967855532158",
  appId: "1:967855532158:web:d7ffc761de72a76315902f",
  measurementId: "G-QT61TSKGNT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


  
export { app, auth, firestore, storage };
