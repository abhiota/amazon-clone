import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCu3s8ki3odQJeYhJHzmnSjxomAPZ2UgiA",
    authDomain: "clone-f24bf.firebaseapp.com",
    projectId: "clone-f24bf",
    storageBucket: "clone-f24bf.appspot.com",
    messagingSenderId: "205072402075",
    appId: "1:205072402075:web:f81243e027c1d52b60a83e",
    measurementId: "G-CNPG741JD1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };