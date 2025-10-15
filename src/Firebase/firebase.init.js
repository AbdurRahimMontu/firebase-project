
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4olu9zEFv1k9_5hPdKXbpTAoi77BE2_0",
  authDomain: "fir-project-af822.firebaseapp.com",
  projectId: "fir-project-af822",
  storageBucket: "fir-project-af822.firebasestorage.app",
  messagingSenderId: "340756049703",
  appId: "1:340756049703:web:47ee0a98ac02f794c84302"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);