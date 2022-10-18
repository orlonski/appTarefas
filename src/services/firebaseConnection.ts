import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAKlPU8kA8cy2DYqMub_uOZlEk1Oi3l428",
    authDomain: "meuapp-9e88c.firebaseapp.com",
    databaseURL: "https://meuapp-9e88c-default-rtdb.firebaseio.com",
    projectId: "meuapp-9e88c",
    storageBucket: "meuapp-9e88c.appspot.com",
    messagingSenderId: "982741517804",
    appId: "1:982741517804:web:9c6bb84e2e4e607c356cc9",
    measurementId: "G-NQK9NW3X7T"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;