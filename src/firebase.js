import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANktoESqYohPP3OBAYbXuzoB85cD25cAI",
    authDomain: "bookstore-13e24.firebaseapp.com",
    databaseURL: "https://bookstore-13e24-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bookstore-13e24",
    storageBucket: "bookstore-13e24.appspot.com",
    messagingSenderId: "938057606696",
    appId: "1:938057606696:web:4638532acfca6dbf58771d"
});
const fbase = firebaseApp.firestore();

export { fbase, firebaseApp };