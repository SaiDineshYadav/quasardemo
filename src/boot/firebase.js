// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDApJFZkufTO-3-aIrr9PnbdgdguXiEqN4",
    authDomain: "smackchat-6508c.firebaseapp.com",
    projectId: "smackchat-6508c",
    storageBucket: "smackchat-6508c.appspot.com",
    messagingSenderId: "281166422416",
    appId: "1:281166422416:web:5f5388c7b5f1b6960cd315"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
