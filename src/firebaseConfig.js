import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAImL9yQOeTc04FWw-UBqyqUm72zq9ayZw",
    authDomain: "phoneauth-440d0.firebaseapp.com",
    projectId: "phoneauth-440d0",
    storageBucket: "phoneauth-440d0.appspot.com",
    messagingSenderId: "530015188590",
    appId: "1:530015188590:web:0d7e2f9b6ddc9ebdd6187f"
  };

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
