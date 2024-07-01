// import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA77hHksGXyytHVBiNfhE_LFs5dFY-9_18",
  authDomain: "chat-app-75777.firebaseapp.com",
  projectId: "chat-app-75777",
  storageBucket: "chat-app-75777.appspot.com",
  messagingSenderId: "821313324722",
  appId: "1:821313324722:web:fcc7d28a73386b31a06bab",
  measurementId: "G-GQ9JQ66516"
};

if (!firebaseConfig.apiKey) {
  console.error("API key is not defined");
} else {
  console.log("API key:", firebaseConfig.apiKey);
}



// const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
