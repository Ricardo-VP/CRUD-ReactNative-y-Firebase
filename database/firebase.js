import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAQyuadL2ZObQGCGdVLdqywjWPwTsvwe38",
    authDomain: "react-native-crud-f49d8.firebaseapp.com",
    databaseURL: "https://react-native-crud-f49d8.firebaseio.com",
    projectId: "react-native-crud-f49d8",
    storageBucket: "react-native-crud-f49d8.appspot.com",
    messagingSenderId: "423445146592",
    appId: "1:423445146592:web:880044bbbfc03d7acb1985",
    measurementId: "G-2L19QSQ27B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default{
      firebase,
      db
  };