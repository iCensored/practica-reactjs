import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDpuN2GQZZVVO-ByTxawv5XDJ2p-Fhkmw",
    authDomain: "reactjs-4e39a.firebaseapp.com",
    projectId: "reactjs-4e39a",
    storageBucket: "reactjs-4e39a.appspot.com",
    messagingSenderId: "911746266605",
    appId: "1:911746266605:web:d5e127ca867d14e3abe3e4"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;