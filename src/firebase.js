import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdFc-0jZHRdBVyfhBIyHbjeG7OJXwaVQw",
    authDomain: "instagram-clone-react-db539.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-db539.firebaseio.com",
    projectId: "instagram-clone-react-db539",
    storageBucket: "instagram-clone-react-db539.appspot.com",
    messagingSenderId: "819535694796",
    appId: "1:819535694796:web:7e04bb63223b63b0036b69",
    measurementId: "G-QWRXNDV8BF"
  });


  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};