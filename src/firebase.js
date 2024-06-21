import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDv2XmFeO60xXfpH7a45M5yMmO-wjRd0uI",
  authDomain: "react-auth-60031.firebaseapp.com",
  projectId: "react-auth-60031",
  storageBucket: "react-auth-60031.appspot.com",
  messagingSenderId: "665484854204",
  appId: "1:665484854204:web:d4aa4b9c811d4509d261b9",
  measurementId: "G-VK1W4KKETX"
};


const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export default app; 