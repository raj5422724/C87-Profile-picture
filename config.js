import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAVknjUoHqw_dhZpSQXYUhkkY6DW1Csl3Y",
  authDomain: "book-santa-90fad.firebaseapp.com",
  projectId: "book-santa-90fad",
  storageBucket: "book-santa-90fad.appspot.com",
  messagingSenderId: "1005179583801",
  appId: "1:1005179583801:web:2248fa27bbe690551afce8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
