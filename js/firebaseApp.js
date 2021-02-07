// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


var provider = new firebase.auth.GoogleAuthProvider();

var firebaseConfig = {
  apiKey: "AIzaSyAMlCkdxGf6MUTtbsPowojQrrx_tCLLQU4",
  authDomain: "cornerdb-2e3c9.firebaseapp.com",
  databaseURL: "https://cornerdb-2e3c9-default-rtdb.firebaseio.com",
  projectId: "cornerdb-2e3c9",
  storageBucket: "cornerdb-2e3c9.appspot.com",
  messagingSenderId: "232434670622",
  appId: "1:232434670622:web:3efee61ffd70deef48620f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });