

import firebase from 'firebase'

let app = null;
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD0OSOPbGOj-Z1jXwDFLIDdaZsRuLXgyBM",
  authDomain: "tests-d9340.firebaseapp.com",
  projectId: "tests-d9340",
  storageBucket: "tests-d9340.appspot.com",
  messagingSenderId: "293886293130",
  appId: "1:293886293130:web:b5dc0cc3abb1aafaef2973",
  measurementId: "G-PVBRM7QBRB"

};

app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig)

export const db = app.database()

