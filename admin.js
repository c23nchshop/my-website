import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth,
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyD57E_fXJEG-B6rkzV_v5DMkk2TD3uDK5g",
  authDomain: "my-shop-admin-fa34c.firebaseapp.com",
  projectId: "my-shop-admin-fa34c",
  storageBucket: "my-shop-admin-fa34c.firebasestorage.app",
  messagingSenderId: "104124211539",
  appId: "1:104124211539:web:cf7e09bdf907c98eb1c1a6",
  measurementId: "G-FXRHZQ56VC"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.login = function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.location.href = "admin.html";
    })
    .catch((error)=>{
        document.getElementById("message").innerHTML =
        "Email یان Password هەڵەیە";
    });

}
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


window.logout = function(){
    signOut(auth).then(()=>{
        window.location.href = "admin-login.html";
    });
}