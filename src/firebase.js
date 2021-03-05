import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/database';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCLEjxBRexh9s-ySOfxuBGaBjngDEheNAw",
    authDomain: "fakebook-jan.firebaseapp.com",
    databaseURL: "https://fakebook-jan-default-rtdb.firebaseio.com",
    projectId: "fakebook-jan",
    storageBucket: "fakebook-jan.appspot.com",
    messagingSenderId: "731801678178",
    appId: "1:731801678178:web:ff25dcd2736aa3e45b3c3b",
    measurementId: "G-CBCN78YRKD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
