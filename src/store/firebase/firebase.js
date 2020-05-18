import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUegPicI_AslUgoUvOa6jahtt4TlraU8Q",
    authDomain: "booksstreams.firebaseapp.com",
    databaseURL: "https://booksstreams.firebaseio.com",
    projectId: "booksstreams",
    storageBucket: "booksstreams.appspot.com",
    messagingSenderId: "95365715940",
    appId: "1:95365715940:web:21827c4fb7feb1d36159f1",
    measurementId: "G-4JH69SK2PJ"
};


//Initializing the app
export const myFirebase = firebase.initializeApp(firebaseConfig);

//Initializing the database
export const db = myFirebase.firestore();

