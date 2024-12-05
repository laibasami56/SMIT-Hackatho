import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from './firebase.js';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Materialize modals
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
});

// Signup function
async function signup(e) {
    e.preventDefault();
    const email = document.querySelector('#SignupEmail');
    const password = document.querySelector('#SignupPassword');

    if (!email.value || !email.value.includes('@')) {
        M.toast({ html: "Invalid email address", classes: "red" });
        return;
    }
    if (!password.value || password.value.length < 6) {
        M.toast({ html: "Password must be at least 6 characters", classes: "red" });
        return;
    }

    try {
        const result = await createUserWithEmailAndPassword(auth, email.value, password.value);
        M.toast({ html: `User created successfully: ${result.user.email}`, classes: "green" });
    } catch (err) {
        M.toast({ html: err.message, classes: "red" });
    }

    email.value = "";
    password.value = "";
    M.Modal.getInstance(document.querySelector('#modal1')).close();
}

// Login function
async function login(e) {
    e.preventDefault();
    const email = document.querySelector('#LoginEmail');
    const password = document.querySelector('#LoginPassword');

    if (!email.value || !email.value.includes('@')) {
        M.toast({ html: "Invalid email address", classes: "red" });
        return;
    }
    if (!password.value) {
        M.toast({ html: "Password cannot be empty", classes: "red" });
        return;
    }

    try {
        const result = await signInWithEmailAndPassword(auth, email.value, password.value);
        M.toast({ html: `Welcome back, ${result.user.email}!`, classes: "green" });
    } catch (err) {
        M.toast({ html: err.message, classes: "red" });
    }

    email.value = "";
    password.value = "";
    M.Modal.getInstance(document.querySelector('#modal2')).close();
}

// Logout function
function logout() {
    signOut(auth)
        .then(() => {
            M.toast({ html: "Signed out successfully", classes: "green" });
        })
        .catch((err) => {
            M.toast({ html: err.message, classes: "red" });
        });
}

// Auth state listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user.email);
    } else {
        console.log('No user is signed in.');
    }
});

// Attach functions to the global window object
window.signup = signup;
window.login = login;
window.logout = logout;