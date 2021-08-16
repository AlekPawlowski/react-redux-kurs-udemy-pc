import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJRoGkGdz-gxCchFrqz2nOz2R7J2uCQ_E",
    authDomain: "simple-bookstore.firebaseapp.com",
    projectId: "simple-bookstore",
    storageBucket: "simple-bookstore.appspot.com",
    messagingSenderId: "757929775714",
    appId: "1:757929775714:web:8dec281c0d3ab086feb73b"
});
const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };