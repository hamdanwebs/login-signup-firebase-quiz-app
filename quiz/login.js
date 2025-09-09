import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful ✅");
      console.log("User:", userCredential.user);
      window.location.href = "quiz.html";
      // You can redirect to dashboard page here
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
