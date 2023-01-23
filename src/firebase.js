import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHbEKV29ars-TysAVkRzJJnXOS0CPT838",
    authDomain: "cla-highlanders.firebaseapp.com",
    projectId: "cla-highlanders",
    storageBucket: "cla-highlanders.appspot.com",
    messagingSenderId: "925543539759",
    appId: "1:925543539759:web:c435e1cfb252c29fde52da",
    measurementId: "G-KCFMZMY5BN"
  });
  

  
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};