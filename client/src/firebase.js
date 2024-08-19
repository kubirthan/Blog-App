// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernstack-blog-fcb70.firebaseapp.com",
  projectId: "mernstack-blog-fcb70",
  storageBucket: "mernstack-blog-fcb70.appspot.com",
  messagingSenderId: "873810693215",
  appId: "1:873810693215:web:ab76d701db0faad5999fea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);