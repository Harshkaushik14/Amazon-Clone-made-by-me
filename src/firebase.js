import firebase from  'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuy61ypPmmcvZxT8nAInlghjUCc6rkow0",
    authDomain: "e-clone-30dd5.firebaseapp.com",
    projectId: "e-clone-30dd5",
    storageBucket: "e-clone-30dd5.appspot.com",
    messagingSenderId: "976259974718",
    appId: "1:976259974718:web:d46e3e9e6aab64c679736f",
    measurementId: "G-66XLQ5HVV2"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};