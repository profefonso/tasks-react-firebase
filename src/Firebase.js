import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkpaMrdfeQU8aT3a1qRq4Ipppw0mTYqEY",
    authDomain: "task-alfonso-firebase.firebaseapp.com",
    databaseURL: "https://task-alfonso-firebase.firebaseio.com",
    projectId: "task-alfonso-firebase",
    storageBucket: "",
    messagingSenderId: "343861534112",
    appId: "1:343861534112:web:7623ca5643410bae"
  };
  firebase.initializeApp(config);
  
  export default firebase;