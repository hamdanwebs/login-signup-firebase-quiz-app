  // firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyALtqYHTHKgCShqb2Icsl_9F6ZtddVrx7I",
    authDomain: "quiz-90e47.firebaseapp.com",
    projectId: "quiz-90e47",
    storageBucket: "quiz-90e47.firebasestorage.app",
    messagingSenderId: "184525889553",
    appId: "1:184525889553:web:4becb7e9c9d00fefde51b0"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 