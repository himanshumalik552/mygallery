import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = { 
   apiKey: "AIzaSyCyMi9dahREUe86mLUE5TA6l9jlk3pPjpw",
  databaseURL: "https://mygallery.firebaseio.com",
  authDomain: "mygallery-9ac20.firebaseapp.com",
  projectId: "mygallery-9ac20",
  storageBucket: "mygallery-9ac20.appspot.com",
  messagingSenderId: "596247205757",
  appId: "1:596247205757:web:f5258a847b318d94691e14",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };