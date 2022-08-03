import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVPfkqD8hnOawNwrquUoL3LKO1WxcvC_U",
  authDomain: "clone-66c30.firebaseapp.com",
  projectId: "clone-66c30",
  storageBucket: "clone-66c30.appspot.com",
  messagingSenderId: "174888218084",
  appId: "1:174888218084:web:1710cf75bc3710de50abf1",
  measurementId: "G-S3EG9QXZFC",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
