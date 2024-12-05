import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword ,
      onAuthStateChanged ,
      signOut, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyA345OI1LbGl-DAE5_av1EssBMcrWtNiqg",
    authDomain: "smit-hackatho.firebaseapp.com",
    projectId: "smit-hackatho",
    storageBucket: "smit-hackatho.firebasestorage.app",
    messagingSenderId: "408471819496",
    appId: "1:408471819496:web:6c46c28b4f00f33cfaa55d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  



export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
